import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserAbout type
interface UserAbout {
  id?: number;
  user_id: number;
  gender?: string;
  purpose?: string;
  interests?: string[];
  about_me?: string;
  location?: string;
  dob?: string;
  current_address_line1?: string;
  current_address_line2?: string;
  current_landmark?: string;
  current_pincode?: string;
  current_location?: string;
  permanent_address_line1?: string;
  permanent_address_line2?: string;
  permanent_landmark?: string;
  permanent_pincode?: string;
  permanent_location?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserAboutStore = defineStore('userAbout', () => {
  // State
  const userAboutData = ref<UserAbout[]>([]);
  const currentUserAbout = ref<UserAbout | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserAboutData = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-about');
      userAboutData.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user about data';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserAboutById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-about/${id}`);
      currentUserAbout.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user about data with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserAbout = async (data: UserAbout) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-about', data);
      userAboutData.value.push(response.data);
      currentUserAbout.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user about data';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserAbout = async (id: number, data: UserAbout) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-about/${id}`, data);
      const index = userAboutData.value.findIndex((about) => about.id === id);
      if (index !== -1) {
        userAboutData.value[index] = response.data;
        currentUserAbout.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user about data with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserAbout = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-about/${id}`);
      userAboutData.value = userAboutData.value.filter((about) => about.id !== id);
      currentUserAbout.value = null;
    } catch (err) {
      error.value = `Failed to delete user about data with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userAboutData,
    currentUserAbout,
    isLoading,
    hasError,
    fetchUserAboutData,
    fetchUserAboutById,
    createUserAbout,
    updateUserAbout,
    deleteUserAbout,
  };
});
