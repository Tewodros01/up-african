import { defineStore } from "pinia";
import { ref } from "vue";

export interface Practice {
  id: number;
  title: string;
  description: string;
  type: string;
  duration: string;
  skills: string[];
  practiceImage: string;
  rating: number;
}

export const usePracticeStore = defineStore("practice", () => {
  const practices = ref<Practice[]>([]);
  const selectedPractice = ref<Practice | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const fetchPractices = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched practices (simulated here)
      practices.value = [
        {
          id: 1,
          title: "Data Structures Practice in Amharic",
          description:
            "A comprehensive practice session on various data structures with examples relevant to Ethiopia.",
          type: "Technical",
          duration: "4 hours",
          skills: ["Algorithms", "Problem Solving"],
          practiceImage: "https://via.placeholder.com/300x200", // Placeholder image
          rating: 4.8,
        },
        {
          id: 2,
          title: "Machine Learning Applications in Ethiopian Agriculture",
          description:
            "Practice session focusing on machine learning models and techniques applied to Ethiopian agricultural data.",
          type: "Technical",
          duration: "6 hours",
          skills: ["Machine Learning", "Data Science"],
          practiceImage: "https://via.placeholder.com/300x200", // Placeholder image
          rating: 4.7,
        },
        // You can add more practices here
      ];

      selectedPractice.value = practices.value[0]; // Select the first practice by default
    } catch (err) {
      error.value = "Failed to load practices. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  const selectPractice = (practice: Practice) => {
    selectedPractice.value = practice;
  };

  return {
    practices,
    selectedPractice,
    selectPractice,
    fetchPractices,
    loading,
    error,
  };
});
