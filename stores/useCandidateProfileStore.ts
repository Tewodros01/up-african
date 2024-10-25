import { defineStore } from "pinia";
import { ref } from "vue";

export interface candidateProfile {
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

export interface Card {
  title: string;
  description: string;
  imageSrc: string;
}

export const useCandidateProfileStore = defineStore("candidateProfile", () => {
  const candidate = ref<candidateProfile | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const cardsData = ref<Card[]>([]);

  const fetchCandidateAndCards = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched candidate data (simulated here)
      candidate.value = {
        id: 1,
        name: "Tewodros Misawoy",
        experience: "5 years",
        skills: ["JavaScript", "React", "Node.js"],
        location: "New York, NY",
        profileImage: "https://via.placeholder.com/100",
        rating: 4.5,
        goal: "Find a job in tech",
        bio: "Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!",
      };

      // Assign card data (simulated here)
      cardsData.value = [
        {
          title: "About",
          description:
            "Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!",
          imageSrc: "https://via.placeholder.com/100",
        },
        {
          title: "Skills",
          description:
            "Spotlight your unique skills and catch the eye of recruiters looking for your exact talents!",
          imageSrc: "https://via.placeholder.com/100",
        },
        {
          title: "Work Experience",
          description:
            "Narrate your professional journey and fast-track your way to new career heights!",
          imageSrc: "https://via.placeholder.com/100",
        },
      ];
    } catch (err) {
      error.value = "Failed to load candidate data. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  return {
    candidate,
    cardsData,
    fetchCandidateAndCards,
    loading,
    error,
  };
});
