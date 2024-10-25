import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

// Define the interface for the UserSkill type
interface UserSkill {
  id?: number;
  user_id: number;
  name: string;
  proficiency_level?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export const useUserSkillStore = defineStore('userSkill', () => {
  // State
  const userSkills = ref<UserSkill[]>([]);
  const currentUserSkill = ref<UserSkill | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchUserSkills = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user-skills');
      userSkills.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch user skills';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUserSkillById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user-skills/${id}`);
      currentUserSkill.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch user skill with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserSkill = async (data: UserSkill) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user-skills', data);
      userSkills.value.push(response.data);
      currentUserSkill.value = response.data;
    } catch (err) {
      error.value = 'Failed to create user skill';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserSkill = async (id: number, data: UserSkill) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/user-skills/${id}`, data);
      const index = userSkills.value.findIndex((skill) => skill.id === id);
      if (index !== -1) {
        userSkills.value[index] = response.data;
        currentUserSkill.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update user skill with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserSkill = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user-skills/${id}`);
      userSkills.value = userSkills.value.filter((skill) => skill.id !== id);
      currentUserSkill.value = null;
    } catch (err) {
      error.value = `Failed to delete user skill with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userSkills,
    currentUserSkill,
    isLoading,
    hasError,
    fetchUserSkills,
    fetchUserSkillById,
    createUserSkill,
    updateUserSkill,
    deleteUserSkill,
  };
});
