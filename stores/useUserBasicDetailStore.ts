import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserBasicDetail type
interface UserBasicDetail {
  id?: number;
  user_id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  pronouns?: string;
  user_type: string;
  work_experience?: number | null;
  current_sector?: number | null;
  designation?: string;
  organization_id?: number;
  created_at?: string;
  updated_at?: string;
}

export const useUserBasicDetailStore = defineStore('userBasicDetail', () => {
  // State
  const userBasicDetails = ref<UserBasicDetail[]>([]);
  const currentUserBasicDetail = ref<UserBasicDetail | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserBasicDetails = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-basic-details');
      userBasicDetails.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user basic details';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserBasicDetailById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-basic-details/${id}`);
      currentUserBasicDetail.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user basic detail with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserBasicDetail = async (data: UserBasicDetail) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-basic-details', data);
      userBasicDetails.value.push(response.data);
      currentUserBasicDetail.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user basic detail';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserBasicDetail = async (id: number, data: UserBasicDetail) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-basic-details/${id}`, data);
      const index = userBasicDetails.value.findIndex((detail) => detail.id === id);
      if (index !== -1) {
        userBasicDetails.value[index] = response.data;
        currentUserBasicDetail.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user basic detail with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserBasicDetail = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-basic-details/${id}`);
      userBasicDetails.value = userBasicDetails.value.filter((detail) => detail.id !== id);
      currentUserBasicDetail.value = null;
    } catch (err) {
      error.value = `Failed to delete user basic detail with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userBasicDetails,
    currentUserBasicDetail,
    isLoading,
    hasError,
    fetchUserBasicDetails,
    fetchUserBasicDetailById,
    createUserBasicDetail,
    updateUserBasicDetail,
    deleteUserBasicDetail,
  };
});
