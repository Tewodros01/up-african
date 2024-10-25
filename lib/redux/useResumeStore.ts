import { defineStore } from "pinia";
import { ref } from "vue";
import type { ShowForm } from "./useSettingsStore.js";
import type {
  FeaturedSkill,
  Resume,
  ResumeEducation,
  ResumeProfile,
  ResumeProject,
  ResumeSkills,
  ResumeWorkExperience,
} from "./types.js"; // Adjust import paths as necessary

export const initialProfile: ResumeProfile = {
  name: "",
  summary: "",
  email: "",
  phone: "",
  location: "",
  url: "",
};

export const initialWorkExperience: ResumeWorkExperience = {
  company: "",
  jobTitle: "",
  date: "",
  descriptions: [],
};

export const initialEducation: ResumeEducation = {
  school: "",
  degree: "",
  gpa: "",
  date: "",
  descriptions: [],
};

export const initialProject: ResumeProject = {
  project: "",
  date: "",
  descriptions: [],
};

export const initialFeaturedSkill: FeaturedSkill = { skill: "", rating: 4 };
export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
  ...initialFeaturedSkill,
});
export const initialSkills: ResumeSkills = {
  featuredSkills: initialFeaturedSkills,
  descriptions: [],
};

// Explicitly define the type for custom
export const initialCustom: { descriptions: string[] } = {
  descriptions: [],
};

export const initialResumeState: Resume = {
  profile: initialProfile,
  workExperiences: [initialWorkExperience],
  educations: [initialEducation],
  projects: [initialProject],
  skills: initialSkills,
  custom: initialCustom,
};

export const useResumeStore = defineStore("resume", () => {
  const profile = ref(initialProfile);
  const workExperiences = ref([initialWorkExperience]);
  const educations = ref([initialEducation]);
  const projects = ref([initialProject]);
  const skills = ref(initialSkills);
  const custom = ref(initialCustom);

  const changeProfile = (field: keyof ResumeProfile, value: string) => {
    profile.value[field] = value;
  };

  const changeWorkExperiences = (
    idx: number,
    field: keyof ResumeWorkExperience,
    value: string | string[]
  ) => {
    const workExperience = workExperiences.value[idx];
    workExperience[field] = value as any;
  };

  const changeEducations = (
    idx: number,
    field: keyof ResumeEducation,
    value: string | string[]
  ) => {
    const education = educations.value[idx];
    education[field] = value as any;
  };

  const changeProjects = (
    idx: number,
    field: keyof ResumeProject,
    value: string | string[]
  ) => {
    const project = projects.value[idx];
    project[field] = value as any;
  };

  const changeSkills = (
    payload:
      | { field: "descriptions"; value: string[] }
      | { field: "featuredSkills"; idx: number; skill: string; rating: number }
  ) => {
    const { field } = payload;
    if (field === "descriptions") {
      skills.value.descriptions = payload.value as string[];
    } else {
      const { idx, skill, rating } = payload as any;
      const featuredSkill = skills.value.featuredSkills[idx];
      featuredSkill.skill = skill;
      featuredSkill.rating = rating;
    }
  };

  const changeCustom = (value: string[]) => {
    custom.value.descriptions = value;
  };

  const addSectionInForm = (form: ShowForm) => {
    switch (form) {
      case "workExperiences":
        workExperiences.value.push({ ...initialWorkExperience });
        break;
      case "educations":
        educations.value.push({ ...initialEducation });
        break;
      case "projects":
        projects.value.push({ ...initialProject });
        break;
    }
  };

  const moveSectionInForm = (
    form: ShowForm,
    idx: number,
    direction: "up" | "down"
  ) => {
    if (form !== "skills" && form !== "custom") {
      const sections =
        form === "workExperiences"
          ? workExperiences.value
          : form === "educations"
          ? educations.value
          : projects.value;
      if (
        (idx === 0 && direction === "up") ||
        (idx === sections.length - 1 && direction === "down")
      ) {
        return;
      }

      const section = sections[idx];
      if (direction === "up") {
        sections[idx] = sections[idx - 1];
        sections[idx - 1] = section;
      } else {
        sections[idx] = sections[idx + 1];
        sections[idx + 1] = section;
      }
    }
  };

  const deleteSectionInFormByIdx = (form: ShowForm, idx: number) => {
    if (form !== "skills" && form !== "custom") {
      const sections =
        form === "workExperiences"
          ? workExperiences.value
          : form === "educations"
          ? educations.value
          : projects.value;
      sections.splice(idx, 1);
    }
  };

  const setResume = (newResume: Resume) => {
    profile.value = newResume.profile;
    workExperiences.value = newResume.workExperiences;
    educations.value = newResume.educations;
    projects.value = newResume.projects;
    skills.value = newResume.skills;
    custom.value = newResume.custom;
  };

  return {
    profile,
    workExperiences,
    educations,
    projects,
    skills,
    custom,
    changeProfile,
    changeWorkExperiences,
    changeEducations,
    changeProjects,
    changeSkills,
    changeCustom,
    addSectionInForm,
    moveSectionInForm,
    deleteSectionInFormByIdx,
    setResume,
  };
});
