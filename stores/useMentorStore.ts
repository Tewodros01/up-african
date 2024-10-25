import { defineStore } from "pinia";
import { ref } from "vue";

export interface Mentor {
  name: string;
  profileImage: string;
  available: boolean;
  rating: number;
  topMentor: boolean;
  title: string;
  experience: string;
  bookings: number;
  mentoringMinutes: number;
  reviews: number;
  description: string;
}

export const useMentorStore = defineStore("mentor", () => {
  const mentors = ref<Mentor[]>([]);
  const selectedMentor = ref<Mentor | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const fetchMentors = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched mentors (simulated here)
      mentors.value = [
        {
          name: "Alemu Tadesse",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
          available: true,
          rating: 5.0,
          topMentor: true,
          title:
            "Software Engineer at Ethio Telecom | B.Sc. in Computer Science from Addis Ababa University",
          experience: "5 years",
          bookings: 300,
          mentoringMinutes: 10000,
          reviews: 150,
          description: "Detailed description of Alemu Tadesse.",
        },
        {
          name: "Tigist Mekonnen",
          profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
          available: false,
          rating: 4.9,
          topMentor: true,
          title:
            "HR Manager at Ethiopian Airlines | MBA from Addis Ababa University",
          experience: "7 years",
          bookings: 250,
          mentoringMinutes: 9500,
          reviews: 140,
          description: "Detailed description of Tigist Mekonnen.",
        },
        // ...other mentors
      ];
      selectedMentor.value = mentors.value[0]; // Select the first mentor by default
    } catch (err) {
      error.value = "Failed to load mentors. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  const setSelectedMentor = (mentor: Mentor) => {
    selectedMentor.value = mentor;
  };

  return {
    mentors,
    selectedMentor,
    setSelectedMentor,
    fetchMentors,
    loading,
    error,
  };
});
