import { defineStore } from "pinia";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  type Cv,
  type CvEvent,
  type DefaultSkill,
  type LanguagesSkill,
  type SectionName,
  SectionNameList,
} from "~/types/cvfy";
import {
  cvSettingTemplate,
  cvSettingsEmptyTemplate,
} from "./example-cv-settings";

export const useCvStore = defineStore("cv", () => {
  const i18n = useI18n();

  // State
  const formSettings = ref<Cv>({ ...cvSettingsEmptyTemplate });
  const isLoading = ref<boolean>(true);
  const isProfilePhotoLoading = ref<boolean>(false);

  // Actions
  const setUpCvSettings = (): void => {
    const locale = `cvSettings-${i18n.locale.value}`;
    const cvSettings = localStorage.getItem(locale);

    if (cvSettings == null) {
      formSettings.value = { ...cvSettingTemplate };
    } else {
      const cvSettingsObj = JSON.parse(cvSettings);
      formSettings.value = { ...cvSettingsEmptyTemplate, ...cvSettingsObj };
      patchId(formSettings.value);
    }
    localStorage.setItem(locale, JSON.stringify(formSettings.value));
    isLoading.value = false;
  };

  const addSkill = <T extends LanguagesSkill | DefaultSkill>(e: T): void => {
    if (e.skillType === "languages") {
      if (e.skill.lang.trim() === "") return;
      const newLang = e.skill;
      const newLangIdx = formSettings.value.languages.findIndex(
        (lang) => lang.lang === newLang.lang
      );
      if (newLangIdx < 0) {
        formSettings.value.languages = [
          ...new Set([
            ...formSettings.value.languages,
            { lang: e.skill.lang, level: e.skill.level },
          ]),
        ];
      }
    } else {
      if (e.skill.trim() === "") return;
      formSettings.value[e.skillType] = [
        ...new Set([...formSettings.value[e.skillType], e.skill]),
      ];
    }
  };

  const removeSkill = <T extends LanguagesSkill | DefaultSkill>(e: T): void => {
    if (e.skillType === "languages") {
      formSettings.value[e.skillType] = formSettings.value[e.skillType].filter(
        (skill) => skill.lang !== e.skill.lang
      );
    } else {
      formSettings.value[e.skillType] = formSettings.value[e.skillType].filter(
        (skill) => skill !== e.skill
      );
    }
  };

  const addEntry = (e: { sectionName: SectionName }) => {
    formSettings.value[e.sectionName].unshift({
      id: crypto.randomUUID(),
      title: "",
      location: "",
      from: new Date(),
      to: new Date(),
      current: false,
      summary: "",
    });
  };

  const removeEntry = (e: { sectionName: SectionName; entry: CvEvent }) => {
    formSettings.value[e.sectionName] = formSettings.value[
      e.sectionName
    ].filter((entry) => entry.id !== e.entry.id);
  };

  const uploadCV = (e: any): void => {
    const fr = new FileReader();
    fr.onload = (e: any) => {
      const data = JSON.parse(e.target.result);
      formSettings.value = { ...cvSettingsEmptyTemplate, ...data.formSettings };
      patchId(formSettings.value);
    };
    fr.readAsText(e.target.files[0]);
  };

  const resetForm = (): void => {
    formSettings.value = { ...cvSettingTemplate };
    localStorage.setItem(
      `cvSettings-${i18n.locale.value}`,
      JSON.stringify(formSettings.value)
    );
  };

  const clearForm = (): void => {
    formSettings.value = cvSettingsEmptyTemplate;
    localStorage.removeItem(`cvSettings-${i18n.locale.value}`);
  };

  const changeDisplaySection = (e: {
    sectionName: string;
    status: boolean;
  }): void => {
    const propName = `display${e.sectionName
      .slice(0, 1)
      .toUpperCase()}${e.sectionName.slice(1)}` as
      | "displayEducation"
      | "displayProjects"
      | "displayJobSkills"
      | "displaySoftSkills"
      | "displayLanguages";
    formSettings.value[propName] = e.status;
  };

  const patchId = (formSettings: Cv): void => {
    // Ensure older CVs have id in each entry of a section
    for (const key in SectionNameList) {
      const section = key as SectionName;
      for (const e of formSettings[section]) {
        if (!e.id) e.id = crypto.randomUUID();
      }
    }
  };

  return {
    formSettings,
    isLoading,
    isProfilePhotoLoading,
    setUpCvSettings,
    addSkill,
    removeSkill,
    addEntry,
    removeEntry,
    uploadCV,
    resetForm,
    clearForm,
    changeDisplaySection,
  };
});
