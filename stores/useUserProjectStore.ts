import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserProject type
interface UserProject {
  id?: number;
  user_id: number | null;
  project_name: string;
  project_type?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
  skills?: string[];
  project_link?: string;
  project_file?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserProjectStore = defineStore('userProject', () => {
  // State
  const userProjects = ref<UserProject[]>([]);
  const currentUserProject = ref<UserProject | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserProjects = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('/api/user-projects');
      userProjects.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user projects';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserProjectById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`/api/user-projects/${id}`);
      currentUserProject.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user project with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserProject = async (data: UserProject) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/user-projects', data);
      userProjects.value.push(response.data);
      currentUserProject.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user project';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserProject = async (id: number, data: UserProject) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`/api/user-projects/${id}`, data);
      const index = userProjects.value.findIndex((project) => project.id === id);
      if (index !== -1) {
        userProjects.value[index] = response.data;
        currentUserProject.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user project with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserProject = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`/api/user-projects/${id}`);
      userProjects.value = userProjects.value.filter((project) => project.id !== id);
      currentUserProject.value = null;
    } catch (err) {
      error.value = `Failed to delete user project with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userProjects,
    currentUserProject,
    isLoading,
    hasError,
    fetchUserProjects,
    fetchUserProjectById,
    createUserProject,
    updateUserProject,
    deleteUserProject,
  };
});
