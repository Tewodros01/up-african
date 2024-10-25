import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';

// Define the interface for the UserCertificate type
interface UserCertificate {
  id?: number;
  user_id: number;
  title: string;
  issuing_organization_id: number;
  issued_date?: string;
  expiry_date?: string | null;
  skills?: string[];
  description?: string;
  certificate_link?: string;
  certificate_file?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserCertificateStore = defineStore('userCertificate', () => {
  // State
  const userCertificates = ref<UserCertificate[]>([]);
  const currentUserCertificate = ref<UserCertificate | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserCertificates = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-certificates');
      userCertificates.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user certificates';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserCertificateById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-certificates/${id}`);
      currentUserCertificate.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user certificate with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserCertificate = async (data: UserCertificate) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-certificates', data);
      userCertificates.value.push(response.data);
      currentUserCertificate.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user certificate';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserCertificate = async (id: number, data: UserCertificate) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-certificates/${id}`, data);
      const index = userCertificates.value.findIndex((certificate) => certificate.id === id);
      if (index !== -1) {
        userCertificates.value[index] = response.data;
        currentUserCertificate.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user certificate with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserCertificate = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-certificates/${id}`);
      userCertificates.value = userCertificates.value.filter((certificate) => certificate.id !== id);
      currentUserCertificate.value = null;
    } catch (err) {
      error.value = `Failed to delete user certificate with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userCertificates,
    currentUserCertificate,
    isLoading,
    hasError,
    fetchUserCertificates,
    fetchUserCertificateById,
    createUserCertificate,
    updateUserCertificate,
    deleteUserCertificate,
  };
});
