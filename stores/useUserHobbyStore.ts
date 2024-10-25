import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface UserHobby {
  id?: number;
  user_id: number;
  name: string;
}

export const useUserHobbyStore = defineStore('userHobbyStore', () => {
  // State
  const hobbies = ref<UserHobby[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Fetch all hobbies for a user
  const fetchHobbies = async (userId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`/api/user/${userId}/hobbies`);
      hobbies.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch hobbies';
    } finally {
      loading.value = false;
    }
  };

  // Add a new hobby
  const createHobby = async (hobby: UserHobby) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/user-hobbies', hobby);
      hobbies.value.push(response.data);
    } catch (err) {
      error.value = 'Failed to create hobby';
    } finally {
      loading.value = false;
    }
  };

  // Update an existing hobby
  const updateHobby = async (hobbyId: number, updatedHobby: UserHobby) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`/api/user-hobbies/${hobbyId}`, updatedHobby);
      const index = hobbies.value.findIndex((hobby) => hobby.id === hobbyId);
      if (index !== -1) {
        hobbies.value[index] = response.data;
      }
    } catch (err) {
      error.value = 'Failed to update hobby';
    } finally {
      loading.value = false;
    }
  };

  // Delete a hobby
  const deleteHobby = async (hobbyId: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`/api/user-hobbies/${hobbyId}`);
      hobbies.value = hobbies.value.filter((hobby) => hobby.id !== hobbyId);
    } catch (err) {
      error.value = 'Failed to delete hobby';
    } finally {
      loading.value = false;
    }
  };

  return {
    hobbies,
    loading,
    error,
    fetchHobbies,
    createHobby,
    updateHobby,
    deleteHobby,
  };
});
