<script setup lang="ts">
import { Eye, EyeOff, User, Building, School } from 'lucide-vue-next';
import type { FormData } from '@/stores/useSignUpStore'; // Adjust the path if needed
// Adjust the path if needed

const router = useRouter(); // Initialize the router

// Define form data and store instance
const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  pronouns: '',
  userType: '',
  workExperience: '',
  currentSector: '',
  designation: '',
  organizationId: null,
});

const signUpStore = useSignUpStore();

// Handle form submission
const handleSubmit = async () => {
  try {
    await signUpStore.submitSignUp(formData.value);
    router.push('/profile'); // Redirect to profile after successful registration
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="bg-white m-4 shadow-lg rounded-lg flex overflow-hidden md:rounded-bl-[70px] max-w-4xl w-full"
    >
      <div
        class="bg-yellow-300 m-2 w-1/2 p-8 md:rounded-tl-2xl md:rounded-tr-[70px] md:rounded-bl-[70px] hidden lg:flex flex-col items-center justify-center relative"
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
      <div class="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div class="overflow-y-auto max-h-[26rem] pr-4">
            <div>
              <h2 class="text-xs text-zinc-400 mb-1">
                Welcome, Dreamer! Ready to Start Your Journey with UpAfrican?
              </h2>
              <h3 class="text-xs font-semibold text-zinc-400 mb-1">
                We’re excited to help you achieve your goals. Let’s get started!
              </h3>
              <h4 class="text-base text-zinc-600 font-semibold mb-4">
                Go ahead with your dreams at UpAfrican!
              </h4>
            </div>
            <h2 class="text-sm text-zinc-400 mb-2">Create an account as</h2>
            <div class="flex justify-between items-center gap-2 mb-6">
              <button
                type="button"
                class="flex items-center border-dashed justify-center w-1/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                :class="{
                  'border-blue-500 text-blue-500':
                    formData.userType === 'Candidate',
                  'text-gray-500': formData.userType !== 'Candidate',
                }"
                @click="formData.userType = 'Candidate'"
              >
                <User class="mr-2 h-4 w-4" />
                Candidate
              </button>
              <button
                type="button"
                class="flex items-center border-dashed justify-center w-1/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                :class="{
                  'border-blue-500 text-blue-500':
                    formData.userType === 'Company',
                  'text-gray-500': formData.userType !== 'Company',
                }"
                @click="formData.userType = 'Company'"
              >
                <Building class="mr-2 h-3 w-3" />
                Company
              </button>
              <button
                type="button"
                class="flex items-center border-dashed justify-center w-1/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                :class="{
                  'border-blue-500 text-blue-500':
                    formData.userType === 'College',
                  'text-gray-500': formData.userType !== 'College',
                }"
                @click="formData.userType = 'College'"
              >
                <School class="mr-2 h-3 w-3" />
                College
              </button>
            </div>
            <div>
              <div class="mb-4 flex space-x-4">
                <div class="w-1/2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="formData.firstName"
                    class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div class="w-1/2">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="formData.lastName"
                    class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="userName"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  v-model="formData.userName"
                  class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <!-- Mobile Number Field with Country Dropdown -->
              <div class="mb-4">
                <!-- Inside your SignUp form template -->
                <div class="mb-4">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="phone"
                  >
                    Phone Number
                  </label>
                  <CommonCustomePhoneInput v-model="formData.phone" />
                  <!-- Bind phone to formData -->
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <div class="relative">
                  <input
                    :type="signUpStore.passwordVisible ? 'text' : 'password'"
                    id="password"
                    v-model="formData.password"
                    class="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    @click="
                      signUpStore.passwordVisible = !signUpStore.passwordVisible
                    "
                    class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                  >
                    <component
                      :is="signUpStore.passwordVisible ? EyeOff : Eye"
                    />
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div class="relative">
                  <input
                    :type="
                      signUpStore.confirmPasswordVisible ? 'text' : 'password'
                    "
                    id="confirmPassword"
                    v-model="formData.confirmPassword"
                    class="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    @click="
                      signUpStore.confirmPasswordVisible =
                        !signUpStore.confirmPasswordVisible
                    "
                    class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                  >
                    <component
                      :is="signUpStore.confirmPasswordVisible ? EyeOff : Eye"
                    />
                  </button>
                </div>
              </div>
              <div class="mb-4 mt-4">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span class="ml-2 text-gray-700 text-xs">
                    All your information is collected, stored, and processed as
                    per our data processing guidelines. By signing up on Unstop,
                    you agree to our
                    <NuxtLink href="#" class="text-blue-500"
                      >Privacy Policy</NuxtLink
                    >
                    and
                    <NuxtLink href="#" class="text-blue-500"
                      >Terms of Use</NuxtLink
                    >
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              :disabled="signUpStore.isLoading"
            >
              <span v-if="signUpStore.isLoading"> Submitting... </span>
              <span v-else>SignUp</span>
            </button>
          </div>
        </form>
        <p class="mt-6 text-center text-gray-500 text-sm">
          Already have an account?
          <NuxtLink href="/auth/login" class="text-blue-500"> Login </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
