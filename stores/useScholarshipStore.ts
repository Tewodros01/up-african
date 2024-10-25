import { defineStore } from "pinia";
import { ref } from "vue";

export interface Scholarship {
  id: number;
  title: string;
  institution: string;
  description: string;
  location: string;
  logo: string;
  rating: number;
  eligibility: string;
  amount: string;
  deadline: string;
  applicationProcess: string;
}

export const useScholarshipStore = defineStore("scholarship", () => {
  const scholarships = ref<Scholarship[]>([]);
  const selectedScholarship = ref<Scholarship | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const fetchScholarships = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched scholarships (simulated here)
      scholarships.value = [
        {
          id: 1,
          title: "Tech Innovation Scholarship",
          institution: "Tech Solutions Inc.",
          description:
            "A scholarship for students pursuing careers in technology.",
          location: "New York, NY",
          logo: "https://logo.clearbit.com/techsolutions.com",
          rating: 4.5,
          eligibility: "Students majoring in Computer Science.",
          amount: "$5,000",
          deadline: "December 31, 2024",
          applicationProcess: "Submit an essay and academic transcripts.",
        },
        {
          id: 2,
          title: "Green Future Scholarship",
          institution: "Green Energy Co.",
          description:
            "A scholarship for students focused on sustainable energy.",
          location: "San Francisco, CA",
          logo: "https://logo.clearbit.com/greenenergy.com",
          rating: 4.7,
          eligibility: "Students majoring in Environmental Science.",
          amount: "$10,000",
          deadline: "March 1, 2024",
          applicationProcess:
            "Submit a project proposal and recommendation letters.",
        },
        {
          id: 3,
          title: "Financial Independence Scholarship",
          institution: "Fintech Innovations",
          description:
            "A scholarship for students innovating in the financial sector.",
          location: "Chicago, IL",
          logo: "https://logo.clearbit.com/fintechinnovations.com",
          rating: 4.3,
          eligibility: "Students majoring in Finance or Economics.",
          amount: "$7,500",
          deadline: "June 15, 2024",
          applicationProcess:
            "Submit a business plan and financial statements.",
        },
        {
          id: 4,
          title: "Healthcare Excellence Scholarship",
          institution: "HealthCare Plus",
          description: "A scholarship for students committed to healthcare.",
          location: "Los Angeles, CA",
          logo: "https://logo.clearbit.com/healthcareplus.com",
          rating: 4.8,
          eligibility: "Students majoring in Healthcare or Medicine.",
          amount: "$8,000",
          deadline: "May 30, 2024",
          applicationProcess:
            "Submit a research paper and academic transcripts.",
        },
        {
          id: 5,
          title: "EdTech Innovation Scholarship",
          institution: "EduTech Solutions",
          description:
            "A scholarship for students transforming education with technology.",
          location: "Boston, MA",
          logo: "https://logo.clearbit.com/edutechsolutions.com",
          rating: 4.6,
          eligibility: "Students majoring in Education Technology.",
          amount: "$6,000",
          deadline: "November 20, 2024",
          applicationProcess:
            "Submit a video presentation and project portfolio.",
        },
      ];

      selectedScholarship.value = scholarships.value[0]; // Select the first scholarship by default
    } catch (err) {
      error.value = "Failed to load scholarships. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  const selectScholarship = (scholarship: Scholarship) => {
    selectedScholarship.value = scholarship;
  };

  return {
    scholarships,
    selectedScholarship,
    selectScholarship,
    fetchScholarships,
    loading,
    error,
  };
});
