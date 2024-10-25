<script setup>
import { ref } from "vue";

const companies = ref([
  {
    id: 1,
    name: "Tech Solutions Inc.",
    industry: "Technology",
    description:
      "Leading provider of tech solutions. Leading provider of tech solutions.",
    location: "New York, NY",
    logo: "https://logo.clearbit.com/techsolutions.com",
    rating: 4.5,
    mission: "Innovating the future of technology.",
  },
  {
    id: 2,
    name: "Green Energy Co.",
    industry: "Energy",
    description:
      "Pioneers in sustainable energy. Leading provider of tech solutions.",
    location: "San Francisco, CA",
    logo: "https://logo.clearbit.com/greenenergy.com",
    rating: 4.7,
    mission: "Driving the world towards sustainable energy.",
  },
  {
    id: 3,
    name: "Fintech Innovations",
    industry: "Finance",
    description:
      "Revolutionizing the financial sector with innovative solutions.",
    location: "Chicago, IL",
    logo: "https://logo.clearbit.com/fintechinnovations.com",
    rating: 4.3,
    mission: "Empowering financial independence.",
  },
  {
    id: 4,
    name: "HealthCare Plus",
    industry: "Healthcare",
    description: "Committed to providing the best healthcare solutions.",
    location: "Los Angeles, CA",
    logo: "https://logo.clearbit.com/healthcareplus.com",
    rating: 4.8,
    mission: "Ensuring health and wellness for all.",
  },
  {
    id: 5,
    name: "EduTech Solutions",
    industry: "Education",
    description: "Transforming education with cutting-edge technology.",
    location: "Boston, MA",
    logo: "https://logo.clearbit.com/edutechsolutions.com",
    rating: 4.6,
    mission: "Innovating the future of education.",
  },
]);

const selectedCompany = ref(companies.value[0]);

const selectCompany = (company) => {
  selectedCompany.value = company;
};
</script>

<template>
  <div
    class="max-w-7xl mb-14 mx-auto flex w-full items-start gap-x-2 px-2 py-2 md:px-2 lg:px-2 h-full"
  >
    <div
      class="md:fixed md:pr-2 max-w-full md:max-w-[27rem] shrink-0 mt-14 h-full md:overflow-y-auto sid-custom-scrollbar"
    >
      <div
        v-for="company in companies"
        :key="company.id"
        @click="selectCompany(company)"
      >
        <CampanyprofileCampanyProfileCard v-bind="company" />
      </div>
    </div>

    <main class="md:block hidden md:ml-[27rem] flex-1 px-2 mt-4 md:mt-14">
      <CampanyprofileCampanyDetail
        :company="selectedCompany"
        v-if="selectedCompany"
      />
    </main>
  </div>
</template>
