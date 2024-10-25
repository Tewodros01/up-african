import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserResponsibility type
interface UserResponsibility {
  id?: number;
  user_id: number;
  sector: number;
  position?: string;
  designation?: string;
  organization: number;
  location?: string;
  start_date?: string;
  end_date?: string;
  skills?: string[];
  description?: string;
  attachments?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserResponsibilityStore = defineStore('userResponsibility', () => {
  // State
  const userResponsibilities = ref<UserResponsibility[]>([]);
  const currentUserResponsibility = ref<UserResponsibility | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserResponsibilities = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-responsibilities');
      userResponsibilities.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user responsibilities';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserResponsibilityById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-responsibilities/${id}`);
      currentUserResponsibility.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user responsibility with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserResponsibility = async (data: UserResponsibility) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-responsibilities', data);
      userResponsibilities.value.push(response.data);
      currentUserResponsibility.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user responsibility';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserResponsibility = async (id: number, data: UserResponsibility) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-responsibilities/${id}`, data);
      const index = userResponsibilities.value.findIndex((resp) => resp.id === id);
      if (index !== -1) {
        userResponsibilities.value[index] = response.data;
        currentUserResponsibility.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user responsibility with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserResponsibility = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-responsibilities/${id}`);
      userResponsibilities.value = userResponsibilities.value.filter((resp) => resp.id !== id);
      currentUserResponsibility.value = null;
    } catch (err) {
      error.value = `Failed to delete user responsibility with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userResponsibilities,
    currentUserResponsibility,
    isLoading,
    hasError,
    fetchUserResponsibilities,
    fetchUserResponsibilityById,
    createUserResponsibility,
    updateUserResponsibility,
    deleteUserResponsibility,
  };
});
