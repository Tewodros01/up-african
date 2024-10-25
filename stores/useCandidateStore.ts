import { defineStore } from "pinia";
import { ref } from "vue";

export interface Candidate {
  id: number;
  name: string;
  experience: string;
  skills: string[];
  location: string;
  profileImage: string;
  rating: number;
  goal: string;
  bio: string;
}

export const useCandidateStore = defineStore("candidate", () => {
  const candidates = ref<Candidate[]>([]);
  const selectedCandidate = ref<Candidate | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const fetchCandidates = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched candidates (simulated here)
      candidates.value = [
        {
          id: 1,
          name: "Tewodros Misawoy",
          experience: "5 years",
          skills: ["JavaScript", "React", "Node.js"],
          location: "New York, NY",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4.5,
          goal: "Find a job in tech",
          bio: "Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!",
        },
        {
          id: 2,
          name: "Jane Smith",
          experience: "3 years",
          skills: ["Python", "Django", "Machine Learning"],
          location: "San Francisco, CA",
          profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4.7,
          goal: "Advance in AI research",
          bio: "Spotlight your unique skills and catch the eye of recruiters looking for your exact talents!",
        },
        // ...other candidates
      ];

      selectedCandidate.value = candidates.value[0]; // Select the first candidate by default
    } catch (err) {
      error.value = "Failed to load candidates. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  const selectCandidate = (candidate: Candidate) => {
    selectedCandidate.value = candidate;
  };

  return {
    candidates,
    selectedCandidate,
    selectCandidate,
    fetchCandidates,
    loading,
    error,
  };
});
