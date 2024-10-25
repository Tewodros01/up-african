<script setup>
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Info,
  Star,
  UploadCloud,
  User,
} from 'lucide-vue-next';
import { defineProps, ref } from 'vue';

// Define props
const props = defineProps({
  isEditing: Boolean,
  setIsEditing: Function,
});

const showDetails = ref(true);
const selectedSection = ref('Basic Details');

const sections = [
  { name: 'Basic Details', label: 'Basic Details', required: true, icon: User },
  { name: 'About', label: 'About', required: true, icon: Info },
  { name: 'Skills', label: 'Skills', required: true, icon: Star },
  {
    name: 'Education',
    label: 'Education',
    required: false,
    icon: GraduationCap,
  },
  {
    name: 'Work Experience',
    label: 'Work Experience',
    required: true,
    icon: Briefcase,
  },
  {
    name: 'Responsibilities',
    label: 'Responsibilities',
    required: false,
    icon: Star,
  },
  { name: 'Certificates', label: 'Certificates', required: false, icon: Star },
  { name: 'Project', label: 'Project', required: false, icon: Star },
  { name: 'Achievements', label: 'Achievements', required: false, icon: Star },
  { name: 'Hobbies', label: 'Hobbies', required: false, icon: Star },
  { name: 'SocialLinks', label: 'Social Links', required: false, icon: Star },
];

const setShowDetails = value => {
  showDetails.value = value;
};

const setSelectedSection = sectionName => {
  showDetails.value = true;
  selectedSection.value = sectionName;
};
</script>

<template>
  <div>
    <div
      v-if="props.isEditing"
      class="fixed inset-0 bg-black bg-opacity-50 z-[20]"
      @click="props.setIsEditing(false)"
    ></div>

    <div
      :class="`fixed top-0 right-0 h-full w-full md:w-5/6 shadow-lg bg-gray-100  border-l border-slate-200 transform transition-transform duration-300 ease-in-out z-[20] ${
        props.isEditing ? 'translate-x-0' : 'translate-x-full'
      }`"
    >
      <div
        :class="[
          ' gap-2 items-center p-4 border-b-2 bg-white',
          showDetails ? 'hidden md:flex' : 'flex',
        ]"
      >
        <div
          class="flex rounded-full bg-gray-100 w-10 h-10 items-center justify-center"
        >
          <button
            @click="props.setIsEditing(false)"
            class="text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft class="text-lg p-1" />
          </button>
        </div>

        <div class="flex h-10 items-center justify-center">
          <h2 class="text-lg text-gray-600 font-bold">Edit Profile</h2>
        </div>
      </div>

      <div class="flex-1 h-full">
        <div
          class="flex flex-col h-full md:flex-row gap-3 md:pb-24 md:py-4 md:px-4 md:mb-5"
        >
          <div
            :class="[
              'w-full md:w-6/12 sticky top-0 self-start',
              showDetails ? 'hidden md:block' : 'block',
            ]"
            class=""
          >
            <!-- Upload your Resume -->
            <div class="mb-4 bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-base font-semibold text-gray-700 mb-2">
                Upload your Resume
              </h3>
              <div
                class="border-dashed border-2 border-yellow-400 rounded-lg p-2 flex items-center justify-center"
              >
                <div class="flex justify-between gap-2">
                  <div>
                    <UploadCloud class="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">
                      Supported file formats DOC, DOCX, PDF. File size limit 10
                      MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Complete your profile -->
            <div class="bg-white p-2 rounded-lg shadow-md mb-4">
              <h3 class="text-base font-semibold text-gray-700 mb-1">
                Complete your profile
              </h3>
              <p class="text-gray-500 text-sm mb-4">
                And standout to recruiters!
              </p>

              <!-- Progress Bar -->
              <div class="flex items-center mb-4">
                <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                  <div
                    class="bg-green-500 h-2 rounded-full"
                    style="width: 23%"
                  ></div>
                </div>
                <span class="text-green-500 text-sm font-semibold">23%</span>
              </div>
            </div>

            <!-- Navigation Links -->
            <nav
              class="space-y-4 md:block mb-20 overflow-auto h-[calc(100vh-22rem)]"
            >
              <div
                v-for="section in sections"
                :key="section.name"
                :class="[
                  'bg-white p-4 rounded-lg shadow-md py-4 px-6 hover:text-blue-500 hover:bg-blue-100 transition-colors duration-200',
                  selectedSection === section.name
                    ? 'text-blue-500 bg-blue-100'
                    : '',
                ]"
              >
                <button
                  @click="setSelectedSection(section.name)"
                  class="flex justify-between items-center rounded text-sm px-3 py-[0.3rem] mx-[0.1rem] gap-2 text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-200"
                >
                  <div class="flex gap-2">
                    <component
                      :is="section.icon"
                      class="inline-block w-4 h-4 mb-1"
                    />
                    {{ section.label }}
                  </div>
                  <span v-if="section.required" class="text-red-500"
                    >Required</span
                  >
                </button>
              </div>
            </nav>
          </div>

          <div
            :class="[
              'w-full h-full  md:pb-24',
              showDetails ? 'block' : 'hidden md:block',
            ]"
          >
            <!-- Dynamically Load Components Based on Selected Section -->
            <ProfileDashboardEditprofileBasicDetail
              v-if="selectedSection === 'Basic Details'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileAbout
              v-if="selectedSection === 'About'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileEducation
              v-if="selectedSection === 'Education'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileSkills
              v-if="selectedSection === 'Skills'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileWorkExperience
              v-if="selectedSection === 'Work Experience'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileResponsibilities
              v-if="selectedSection === 'Responsibilities'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileCertificates
              v-if="selectedSection === 'Certificates'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileProject
              v-if="selectedSection === 'Project'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileAchievements
              v-if="selectedSection === 'Achievements'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileHobbies
              v-if="selectedSection === 'Hobbies'"
              :setShowDetails="setShowDetails"
            />
            <ProfileDashboardEditprofileSocialLinks
              v-if="selectedSection === 'SocialLinks'"
              :setShowDetails="setShowDetails"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
