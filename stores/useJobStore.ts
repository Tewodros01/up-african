import { defineStore } from "pinia";
import { ref } from "vue";
import { type Job, jobs as jobData } from "./jobData"; // Adjust the import path as necessary

export const useJobStore = defineStore("job", () => {
  const jobs = ref<Job[]>([]);
  const selectedJob = ref<Job | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const savedJobs = ref<Job[]>([]);
  const searchQuery = ref<string>("");

  // Simulate fetching jobs from an API
  const fetchJobs = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Simulate a delay for API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Populate jobs with mock data
      jobs.value = jobData;
    } catch (err) {
      error.value = "Failed to fetch jobs. Please try again later.";
    } finally {
      loading.value = false;
    }
  };

  const filteredJobs = computed(() => {
    if (!searchQuery.value) {
      return jobs.value;
    }
    return jobs.value.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  // Handle selecting a job, which opens the sidebar
  const handleJobClick = (job: Job) => {
    selectedJob.value = job;
  };

  // Handle closing the sidebar
  const handleCloseSidebar = () => {
    selectedJob.value = null;
  };

  const saveJob = (job: Job) => {
    if (!savedJobs.value.some((savedJob) => savedJob.id === job.id)) {
      savedJobs.value.push(job);
    }
  };

  const shareJob = (job: Job) => {
    const shareUrl = `${window.location.origin}/jobs/${job.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert(`Job link copied to clipboard: ${shareUrl}`);
    });
  };
  return {
    jobs,
    selectedJob,
    loading,
    error,
    searchQuery,
    fetchJobs,
    handleJobClick,
    handleCloseSidebar,
    saveJob,
    shareJob,
    filteredJobs,
  };
});
