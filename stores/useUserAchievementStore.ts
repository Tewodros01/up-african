import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

interface Achievement {
  id?: number;
  user_id: number;
  title: string;
  description?: string;
}

export const useUserAchievementStore = defineStore('userAchievement', () => {
  // State
  const achievements = ref<Achievement[]>([]);
  const currentAchievement = ref<Achievement | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value !== null);

  // Actions
  const fetchAchievements = async (userId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`/api/achievements?user_id=${userId}`);
      achievements.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch achievements';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchAchievementById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`/api/achievements/${id}`);
      currentAchievement.value = response.data;
    } catch (err) {
      error.value = `Failed to fetch achievement with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createAchievement = async (data: Achievement) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/achievements', data);
      achievements.value.push(response.data);
      currentAchievement.value = response.data;
    } catch (err) {
      error.value = 'Failed to create achievement';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateAchievement = async (id: number, data: Achievement) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`/api/achievements/${id}`, data);
      const index = achievements.value.findIndex((ach) => ach.id === id);
      if (index !== -1) {
        achievements.value[index] = response.data;
        currentAchievement.value = response.data;
      }
    } catch (err) {
      error.value = `Failed to update achievement with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteAchievement = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`/api/achievements/${id}`);
      achievements.value = achievements.value.filter((ach) => ach.id !== id);
      currentAchievement.value = null;
    } catch (err) {
      error.value = `Failed to delete achievement with ID: ${id}`;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    achievements,
    currentAchievement,
    isLoading,
    hasError,
    fetchAchievements,
    fetchAchievementById,
    createAchievement,
    updateAchievement,
    deleteAchievement,
  };
});
