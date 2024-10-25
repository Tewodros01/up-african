import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const formData = ref({
    email: "",
    password: "",
  });

  const passwordVisible = ref(false);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    formData.value = { ...formData.value, [target.id]: target.value };
  };

  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };

  const submitLogin = async () => {
    try {
      // Implement your login logic here (e.g., sending data to your API)
      console.log("Login submitted with:", formData.value);
      // Handle success (e.g., redirect user to the dashboard)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error appropriately (e.g., show error message to the user)
    }
  };

  const handleGoogleSignIn = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=94272305797-evh8k5f7sjo0e35m5obsf1935dgcike0.apps.googleusercontent.com&redirect_uri=${encodeURIComponent(
      "http://127.0.0.1:8000/api/auth/callback"
    )}&response_type=code&scope=openid%20profile%20email`;

    window.location.href = googleAuthUrl;
  };

  return {
    formData,
    passwordVisible,
    handleChange,
    togglePasswordVisibility,
    submitLogin,
    handleGoogleSignIn,
  };
});
