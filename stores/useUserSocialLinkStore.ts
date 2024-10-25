import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface UserSocialLink {
  user_id: number;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  git?: string;
  medium?: string;
  reddit?: string;
  slack?: string;
  dribbble?: string;
  behance?: string;
  codepen?: string;
  figma?: string;
}

export const useUserSocialLinkStore = defineStore('userSocialLink', () => {
  // State
  const userSocialLinks = ref<UserSocialLink[]>([]);
  const currentUserSocialLink = ref<UserSocialLink | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Actions
  const fetchUserSocialLinks = async (userId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(`/api/user-social-links/${userId}`);
      userSocialLinks.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch social links.';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const createUserSocialLink = async (data: UserSocialLink) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/user-social-links', data);
      userSocialLinks.value.push(response.data);
      currentUserSocialLink.value = response.data;
    } catch (err) {
      error.value = 'Failed to create social link.';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateUserSocialLink = async (userId: number, data: UserSocialLink) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`/api/user-social-links/${userId}`, data);
      const index = userSocialLinks.value.findIndex((link) => link.user_id === userId);
      if (index !== -1) {
        userSocialLinks.value[index] = response.data;
        currentUserSocialLink.value = response.data;
      }
    } catch (err) {
      error.value = 'Failed to update social link.';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const deleteUserSocialLink = async (userId: number) => {
    loading.value = true;
    error.value = null;
    try {
      await axios.delete(`/api/user-social-links/${userId}`);
      userSocialLinks.value = userSocialLinks.value.filter((link) => link.user_id !== userId);
      currentUserSocialLink.value = null;
    } catch (err) {
      error.value = 'Failed to delete social link.';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    userSocialLinks,
    currentUserSocialLink,
    loading,
    error,
    fetchUserSocialLinks,
    createUserSocialLink,
    updateUserSocialLink,
    deleteUserSocialLink,
  };
});
