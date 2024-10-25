import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserWorkExperience type
interface UserWorkExperience {
  id?: number;
  user_id: number;
  employment_type: number;
  designation: string;
  sector: number;
  organization: number;
  location?: string;
  start_date?: string;
  end_date?: string;
  skills?: string[];
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserWorkExperienceStore = defineStore('userWorkExperience', () => {
  // State
  const userWorkExperiences = ref<UserWorkExperience[]>([]);
  const currentUserWorkExperience = ref<UserWorkExperience | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserWorkExperiences = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-work-experiences');
      userWorkExperiences.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user work experiences';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserWorkExperienceById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-work-experiences/${id}`);
      currentUserWorkExperience.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user work experience with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserWorkExperience = async (data: UserWorkExperience) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-work-experiences', data);
      userWorkExperiences.value.push(response.data);
      currentUserWorkExperience.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user work experience';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserWorkExperience = async (id: number, data: UserWorkExperience) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-work-experiences/${id}`, data);
      const index = userWorkExperiences.value.findIndex((experience) => experience.id === id);
      if (index !== -1) {
        userWorkExperiences.value[index] = response.data;
        currentUserWorkExperience.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user work experience with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserWorkExperience = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-work-experiences/${id}`);
      userWorkExperiences.value = userWorkExperiences.value.filter((experience) => experience.id !== id);
      currentUserWorkExperience.value = null;
    } catch (err) {
      error.value = `Failed to delete user work experience with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userWorkExperiences,
    currentUserWorkExperience,
    isLoading,
    hasError,
    fetchUserWorkExperiences,
    fetchUserWorkExperienceById,
    createUserWorkExperience,
    updateUserWorkExperience,
    deleteUserWorkExperience,
  };
});
