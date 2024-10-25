import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { toast } from "~/components/ui/toast/use-toast";


// Define the types for form data
export interface FormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  pronouns: string;
  userType: string;
  workExperience: string;
  currentSector: string;
  designation: string;
  organizationId: number | null;
}

// Axios instance for API calls
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Utility functions for local storage
const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Pinia Store
export const useSignUpStore = defineStore("signUp", () => {
  const passwordVisible = ref(false);
  const confirmPasswordVisible = ref(false);
  const errorMessage = ref<string | null>(null);
  const successMessage = ref<string | null>(null);
  const isLoading = ref(false);

  const isSubmitDisabled = computed(() => isLoading.value);

  // Reset error and success messages
  const resetMessages = () => {
    errorMessage.value = null;
    successMessage.value = null;
  };

  // Create user details with a token
  const createUserDetails = async (
    userId: number,
    formData: FormData,
    token: string
  ) => {
    const detailPayload = {
      user_id: userId,
      first_name: formData.firstName,
      last_name: formData.lastName,
      mobile: formData.phone,
      pronouns: formData.pronouns,
      user_type: formData.userType,
      work_experience: formData.workExperience,
      current_sector: formData.currentSector,
      designation: formData.designation,
      organization_id: formData.organizationId,
    };

    try {
      await apiClient.post("/user-basic-details", detailPayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast({ title: "Details Added", description: "User details saved successfully." });
    } catch (error: any) {
      const message = error.response?.data?.error || "Failed to create user details.";
      toast({ title: "Error", description: message, variant: "destructive" });
      throw new Error(message);
    }
  };

  // Register user function
  const registerUser = async (formData: FormData) => {
    isLoading.value = true;
    try {
      const response = await apiClient.post("/register", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      });

      const { user, token } = response.data;
      setLocalStorage("user", user);
      setLocalStorage("token", token);

      toast({ title: "Success", description: "User registered successfully." });
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.error || "Sign-up failed. Please try again.";
      toast({ title: "Error", description: message, variant: "destructive" });
      errorMessage.value = message;
      throw new Error(message);
    } finally {
      isLoading.value = false;
    }
  };

  // Main function to handle sign-up
  const submitSignUp = async (formData: FormData) => {
    resetMessages();
    isLoading.value = true;

    try {
      const data = await registerUser(formData);
      await createUserDetails(data.user.id, formData, data.token);
      successMessage.value = "Registration successful!";
      return true; // Indicate success
    } catch (error: any) {
      console.error("Sign-up failed:", error.message);
      errorMessage.value = error.message;
      throw error; // Propagate the error to handle it in the component
    } finally {
      isLoading.value = false;
    }
  };


  return {
    passwordVisible,
    confirmPasswordVisible,
    errorMessage,
    successMessage,
    isLoading,
    isSubmitDisabled,
    submitSignUp,
  };
});
