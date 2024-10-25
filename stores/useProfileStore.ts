import axios from "axios"; // Make sure to install axios if not already installed
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  // State
  const formData = ref({
    basicDetails: {
      name: "",
      email: "",
      phone: "",
    },
    about: "",
    education: [],
    skills: [],
    workExperience: [],
  });

  const selectedSection = ref("Basic Details");

  // Computed properties for validation
  const isFormValid = computed(() => {
    // Basic validation example
    return (
      formData.value.basicDetails.name !== "" &&
      formData.value.basicDetails.email !== ""
    );
  });

  // Actions
  const handleChange = (section: string, data: any) => {
    formData.value = { ...formData.value, [section]: data };
  };

  const submitProfile = async () => {
    if (!isFormValid.value) {
      alert("Please complete all required fields.");
      return;
    }

    try {
      // Example POST request to the backend
      const response = await axios.post(
        "http://127.0.0.1:8000/api/profile",
        formData.value
      );
      console.log("Profile submitted:", response.data);
      // Handle success (e.g., redirect user to another page)
    } catch (error) {
      console.error("Failed to submit profile:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return {
    formData,
    selectedSection,
    handleChange,
    submitProfile,
    isFormValid,
  };
});
