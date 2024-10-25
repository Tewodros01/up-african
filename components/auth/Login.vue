<script setup>
import { useLoginStore } from '~/stores/useLoginStore';
import { Eye, EyeOff } from 'lucide-vue-next';

// Initialize the store
const loginStore = useLoginStore();

// Destructure state and methods from the store
const {
  formData,
  passwordVisible,
  togglePasswordVisibility,
  submitLogin,
  handleGoogleSignIn,
} = loginStore;
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="bg-white m-4 shadow-lg rounded-lg overflow-hidden flex md:rounded-bl-[70px] max-w-4xl w-full"
    >
      <div
        class="bg-yellow-300 w-1/2 m-2 p-8 md:rounded-tl-2xl md:rounded-tr-[70px] md:rounded-bl-[70px] hidden lg:flex flex-col items-center justify-center relative"
      >
        <img
          src="/assets/logo/up_africa_logo.svg"
          alt="Go Ahead Logo"
          class="absolute top-8 left-8"
          width="120"
          height="80"
        />
        <div class="grid grid-cols-1 items-center gap-4 mb-4 px-4">
          <AuthCommonAuthSlider />
        </div>
      </div>
      <div class="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col">
        <h4 class="text-lg font-medium text-zinc-600 mb-1">
          Hi, Dreamer! Welcome Back to UpAfrican!
        </h4>
        <h3 class="text-xs font-semibold text-zinc-400 mb-4">
          We’re excited to see you advancing towards your goals. Let’s keep
          moving forward!
        </h3>

        <button
          class="flex items-center w-full py-1 px-4 mb-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="handleGoogleSignIn"
        >
          <div
            class="flex-shrink-0 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center mr-3"
          >
            <span class="text-sm font-semibold text-gray-700">T</span>
          </div>
          <div class="flex flex-col flex-1 text-left">
            <span class="font-medium text-gray-900 text-xs">
              Continue as Tewodros
            </span>
            <span class="text-gray-500 text-xs">tewodrosm01@gmail.com</span>
          </div>
          <img src="/assets/img/google.png" class="h-4 w-4" />
        </button>
        <div class="flex items-center mb-4">
          <CommonDivider />
          <div class="mx-2 text-gray-500 whitespace-nowrap">
            Or login with email
          </div>
          <CommonDivider />
        </div>
        <form @submit.prevent="submitLogin">
          <div class="overflow-y-auto">
            <div class="mb-4">
              <label
                class="block text-sm font-medium text-gray-700"
                for="email"
              >
                Email Id
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Email Id"
              />
              <NuxtLink to="#" class="text-blue-500 text-sm mt-2 block">
                Login via OTP
              </NuxtLink>
            </div>
            <div class="mb-4 relative">
              <label
                class="block text-sm font-medium text-gray-700"
                for="password"
              >
                Enter Your Password
              </label>
              <input
                :type="loginStore.passwordVisible ? 'text' : 'password'"
                id="password"
                v-model="formData.password"
                class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                @click="
                  loginStore.passwordVisible = !loginStore.passwordVisible
                "
                class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                <component :is="loginStore.passwordVisible ? EyeOff : Eye" />
              </button>
              <NuxtLink to="#" class="text-blue-500 text-sm mt-2 block">
                Forgot password?
              </NuxtLink>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <p class="mt-6 text-center text-gray-500 text-sm">
          Don’t have an account?
          <NuxtLink to="/auth/signup" class="text-blue-500">Sign up</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
