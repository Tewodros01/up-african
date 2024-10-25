<script setup>
import { Bolt, Filter } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const categories = ref([
  {
    name: 'Courses',
    subCategories: [
      { name: 'All Courses', path: '/courses' },
      { name: 'Find a Courses', path: '/mentors/find' },
    ],
  },
  {
    name: 'Mentorship',
    subCategories: [
      { name: 'All Mentors', path: '/mentors' },
      { name: 'Find a Mentor', path: '/mentors/find' },
      { name: 'Become a Mentor', path: '/mentors/become' },
      { name: 'Mentorship Programs', path: '/mentors/programs' },
    ],
  },
  {
    name: 'Jobs & Internships',
    subCategories: [
      { name: 'All Opportunities', path: '/jobs' },
      { name: 'Full-Time Jobs', path: '/jobs/fulltime' },
      { name: 'Part-Time Jobs', path: '/jobs/parttime' },
      { name: 'Internships', path: '/jobs/internships' },
    ],
  },
  {
    name: 'Scholarships',
    subCategories: [
      { name: 'All Scholarships', path: '/scholarships' },
      {
        name: 'Undergraduate Scholarships',
        path: '/scholarships/undergraduate',
      },
      { name: 'Graduate Scholarships', path: '/scholarships/graduate' },
      {
        name: 'International Scholarships',
        path: '/scholarships/international',
      },
    ],
  },
  {
    name: 'Practices',
    subCategories: [
      { name: 'All Practices', path: '/practices' },
      { name: 'Technical Practice', path: '/practices/technical' },
      { name: 'Soft Skills Practice', path: '/practices/softskills' },
      { name: 'Mock Interviews', path: '/practices/mockinterviews' },
    ],
  },
  {
    name: 'Competitions',
    subCategories: [
      { name: 'All Competitions', path: '/competitions' },
      { name: 'Coding Competitions', path: '/competitions/coding' },
      { name: 'Case Competitions', path: '/competitions/case' },
      { name: 'Design Competitions', path: '/competitions/design' },
    ],
  },
  {
    name: 'Candidate Pool',
    subCategories: [
      { name: 'All Candidates', path: '/candidatepool' },
      { name: 'Top Candidates', path: '/candidatepool/top' },
      { name: 'Rising Stars', path: '/candidatepool/risingstars' },
      { name: 'Featured Candidates', path: '/candidatepool/featured' },
    ],
  },
  {
    name: 'companies',
    subCategories: [
      { name: 'All Candidates', path: '/candidatepool' },
      { name: 'Top Candidates', path: '/candidatepool/top' },
      { name: 'Rising Stars', path: '/candidatepool/risingstars' },
      { name: 'Featured Candidates', path: '/candidatepool/featured' },
    ],
  },
]);

const dropdown = ref('');
const subDropdown = ref('');
const selectedCategory = ref('');
const selectedSubCategoryItem = ref('');
const isLoading = ref(true); // Add a loading state

// State for each dropdown
const selectedSortBy = ref('');
const selectedSkills = ref('');
const selectedPrice = ref('');
const selectedAvailability = ref('');

// Use Vue Router's useRoute to get the current route
const route = useRoute();

onMounted(() => {
  setTimeout(() => {
    // Simulate loading delay for demonstration
    const path = route.path;
    if (path.includes('jobs')) {
      selectedCategory.value = 'Jobs & Internships';
      selectedSubCategoryItem.value = 'All Opportunities';
    } else if (path.includes('courses')) {
      selectedCategory.value = 'Courses';
      selectedSubCategoryItem.value = 'All Courses';
    } else if (path.includes('mentors')) {
      selectedCategory.value = 'Mentorship';
      selectedSubCategoryItem.value = 'All Mentors';
    } else if (path.includes('scholarships')) {
      selectedCategory.value = 'scholarships';
      selectedSubCategoryItem.value = 'All Scholarships';
    } else if (path.includes('practices')) {
      selectedCategory.value = 'Practices';
      selectedSubCategoryItem.value = 'All Practices';
    } else if (path.includes('companies')) {
      selectedCategory.value = 'companies';
      selectedSubCategoryItem.value = 'All Practices';
    } else if (path.includes('competitions')) {
      selectedCategory.value = 'Competitions';
      selectedSubCategoryItem.value = 'All Competitions';
    } else if (path.includes('candidatepool')) {
      selectedCategory.value = 'Candidate Pool';
      selectedSubCategoryItem.value = 'All Candidates';
    }
    isLoading.value = false; // Set loading to false after data is set
  }, 500); // Adjust this timing as needed
});

// Toggle main dropdown
const toggleDropdown = name => {
  if (dropdown.value !== name) {
    dropdown.value = name;
  } else {
    dropdown.value = '';
  }
  subDropdown.value = ''; // Close sub-dropdown when main dropdown is toggled
};

// Toggle sub-dropdown
const toggleSubDropdown = category => {
  if (subDropdown.value !== category) {
    subDropdown.value = category;
  } else {
    subDropdown.value = '';
  }
};

// Handle item selection for categories
const selectItem = (category, item, path) => {
  selectedCategory.value = category;
  selectedSubCategoryItem.value = item;
  dropdown.value = '';
  subDropdown.value = '';
  window.location.href = path; // Navigate to the selected path
};

// Handle selection for Sort By, Skills, Price, Availability
const selectSortBy = option => {
  selectedSortBy.value = option;
  dropdown.value = '';
};

const selectSkills = skill => {
  selectedSkills.value = skill;
  dropdown.value = '';
};

const selectPrice = price => {
  selectedPrice.value = price;
  dropdown.value = '';
};

const selectAvailability = availability => {
  selectedAvailability.value = availability;
  dropdown.value = '';
};
</script>

<template>
  <div class="bg-white shadow-sm fixed w-full max-h-32 text-nowrap z-[3]">
    <div class="py-3 mx-4 md:mx-16 flex items-center gap-4">
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex w-full">
        <CommonOpportunitySkeletonLoading />
      </div>

      <div v-else class="flex gap-3 flex-grow">
        <!-- All Category Dropdown -->
        <div class="relative">
          <button
            class="flex items-center text-xs gap-2 bg-blue-500 text-white py-2 px-4 rounded-full"
            @click="toggleDropdown(selectedCategory)"
          >
            {{ selectedCategory }} <span class="text-xs">&#x25BC;</span>
          </button>
          <div
            v-if="dropdown === selectedCategory"
            class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
          >
            <ul class="py-1">
              <li
                v-for="category in categories"
                :key="category.name"
                class="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <button
                  class="flex justify-between w-full"
                  @click="toggleSubDropdown(category.name)"
                >
                  {{ category.name }}
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" fill="black" />
                  </svg>
                </button>
                <div
                  v-if="
                    subDropdown === category.name &&
                    category.subCategories.length
                  "
                  class="absolute left-full top-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
                >
                  <ul class="py-1">
                    <li
                      v-for="subCategory in category.subCategories"
                      :key="subCategory.name"
                      class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      @click="
                        selectItem(
                          category.name,
                          subCategory.name,
                          subCategory.path,
                        )
                      "
                    >
                      {{ subCategory.name }}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="hidden md:flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full text-xs"
        >
          {{ selectedSubCategoryItem }}
        </div>

        <!-- Sort By Dropdown -->
        <div class="relative">
          <button
            class="hidden md:flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full text-xs"
            @click="toggleDropdown('sortBy')"
          >
            Sort By: {{ selectedSortBy || 'Select' }}
            <span class="text-xs">&#x25BC;</span>
          </button>
          <div
            v-if="dropdown === 'sortBy'"
            class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
          >
            <ul class="py-1">
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSortBy('Option 1')"
              >
                Option 1
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSortBy('Option 2')"
              >
                Option 2
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSortBy('Option 3')"
              >
                Option 3
              </li>
            </ul>
          </div>
        </div>

        <!-- Filters Button -->
        <button
          class="hidden md:flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full relative text-xs"
        >
          <Filter class="h-3 w-3" />
          Filters
          <span
            class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          >
            1
          </span>
        </button>

        <!-- Skills Dropdown -->
        <div class="relative">
          <button
            class="flex items-center gap-2 border text-xs border-gray-300 py-2 px-4 rounded-full"
            @click="toggleDropdown('skills')"
          >
            Skills: {{ selectedSkills || 'Select' }}
            <span class="text-xs">&#x25BC;</span>
          </button>
          <div
            v-if="dropdown === 'skills'"
            class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
          >
            <ul class="py-1">
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSkills('Skill 1')"
              >
                Skill 1
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSkills('Skill 2')"
              >
                Skill 2
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectSkills('Skill 3')"
              >
                Skill 3
              </li>
            </ul>
          </div>
        </div>

        <!-- Price Dropdown -->
        <div class="relative">
          <button
            class="flex items-center gap-2 text-xs border border-gray-300 py-2 px-4 rounded-full"
            @click="toggleDropdown('price')"
          >
            Price: {{ selectedPrice || 'Select' }}
            <span class="text-xs">&#x25BC;</span>
          </button>
          <div
            v-if="dropdown === 'price'"
            class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
          >
            <ul class="py-1">
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectPrice('Price 1')"
              >
                Price 1
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectPrice('Price 2')"
              >
                Price 2
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectPrice('Price 3')"
              >
                Price 3
              </li>
            </ul>
          </div>
        </div>

        <!-- Availability Dropdown -->
        <div class="relative">
          <button
            class="hidden md:flex items-center gap-2 text-xs border border-gray-300 py-2 px-4 rounded-full"
            @click="toggleDropdown('availability')"
          >
            <Bolt class="h-3 w-3" />
            Availability: {{ selectedAvailability || 'Select' }}
            <span class="text-xs">&#x25BC;</span>
          </button>
          <div
            v-if="dropdown === 'availability'"
            class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
          >
            <ul class="py-1">
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectAvailability('Availability 1')"
              >
                Availability 1
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectAvailability('Availability 2')"
              >
                Availability 2
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="selectAvailability('Availability 3')"
              >
                Availability 3
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Conditionally render CommonMentorMatch component -->
      <div v-if="selectedCategory === 'Mentorship'" class="flex-shrink-0">
        <CommonMentorMatch />
      </div>
    </div>
  </div>
</template>
