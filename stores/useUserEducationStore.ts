import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserEducation type
interface UserEducation {
  id?: number;
  qualification?: number;
  degree?: number;
  degree_type?: string;
  specialization?: string;
  start_year?: number;
  end_year?: number;
  percentage?: number;
  cgpa?: number;
  institute?: string;
  roll_number?: string;
  lateral_entry?: boolean;
  skills?: string[];
  location?: string;
  description?: string;
  attachments?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserEducationUpdateStore = defineStore('userEducationUpdate', () => {
  // State
  const userEducation = ref<UserEducation | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserEducationById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-educations/${id}`);
      userEducation.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user education with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserEducation = async (id: number, data: UserEducation) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-educations/${id}`, data);
      userEducation.value = response.data;
    } catch (err) {
      error.value = `Failed to update user education with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userEducation,
    isLoading,
    hasError,
    fetchUserEducationById,
    updateUserEducation,
  };
});
