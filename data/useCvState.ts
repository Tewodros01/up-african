// useCvState.ts
import { computed, reactive, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";
import {
  SectionNameList,
  type Cv,
  type CvEvent,
  type DefaultSkill,
  type LanguagesSkill,
  type SectionName,
} from "~/types/cvfy";
import {
  cvSettingTemplate,
  cvSettingsEmptyTemplate,
} from "./example-cv-settings";

const state = reactive({
  formSettings: { ...cvSettingsEmptyTemplate } as Cv,
  isLoading: true,
  isProfilePhotoLoading: false,
  config: {
    layouts: ["one-column", "two-column"],
    colors: [
      { name: "pink", color: "#9D174D", darker: "#831843" },
      { name: "purple", color: "#5B21B6", darker: "#4C1D95" },
      { name: "blue", color: "#1E40AF", darker: "#1E3A8A" },
      { name: "green", color: "#065F46", darker: "#064E3B" },
      { name: "black", color: "#1F2937", darker: "#111827" },
    ],
    languages: [
      { name: "es-name", code: "es" },
      { name: "en-name", code: "en" },
      { name: "id-name", code: "id" },
      { name: "fr-name", code: "fr" },
      { name: "zh-name", code: "zh" },
      { name: "de-name", code: "de" },
      { name: "ar-name", code: "ar" },
      { name: "pt-name", code: "pt" },
    ],
  },
});

export function useCvState() {
  const i18n = useI18n();

  function setUpCvSettings(): void {
    const locale = `cvSettings-${i18n.locale.value}`;
    const cvSettings = localStorage.getItem(locale);

    if (cvSettings == null) {
      state.formSettings = {
        ...cvSettingTemplate,
      };
    } else {
      const cvSettingsObj = JSON.parse(cvSettings);
      state.formSettings = { ...cvSettingsEmptyTemplate, ...cvSettingsObj };
      patchId(state.formSettings);
    }
    localStorage.setItem(locale, JSON.stringify(state.formSettings));
    state.isLoading = false;
  }

  function addSkill<T extends LanguagesSkill | DefaultSkill>(e: T): void {
    if (e.skillType === "languages") {
      if (e.skill.lang.trim() === "") return;
      const newLang = e.skill;
      const newLangIdx = state.formSettings.languages.findIndex(
        (lang) => lang.lang === newLang.lang
      );
      if (newLangIdx < 0) {
        state.formSettings.languages = [
          ...new Set([
            ...state.formSettings.languages,
            { lang: e.skill.lang, level: e.skill.level },
          ]),
        ];
      }
    } else {
      if (e.skill.trim() === "") return;
      state.formSettings[e.skillType] = [
        ...new Set([...state.formSettings[e.skillType], e.skill]),
      ];
    }
  }

  function removeSkill<T extends LanguagesSkill | DefaultSkill>(e: T): void {
    if (e.skillType === "languages") {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter(
          (skill) => skill.lang !== e.skill.lang
        ),
      ];
    } else {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter((skill) => skill !== e.skill),
      ];
    }
  }

  function addEntry(e: { sectionName: SectionName }) {
    state.formSettings[e.sectionName].unshift({
      id: crypto.randomUUID(),
      title: "",
      location: "",
      from: new Date(),
      to: new Date(),
      current: false,
      summary: "",
    });
  }

  function removeEntry(e: { sectionName: SectionName; entry: CvEvent }) {
    state.formSettings[e.sectionName] = state.formSettings[
      e.sectionName
    ].filter((entry) => entry.id !== e.entry.id);
  }

  function uploadCV(e: any): void {
    const fr = new FileReader();
    fr.onload = (e: any) => {
      const data = JSON.parse(e.target.result);
      state.formSettings = {
        ...cvSettingsEmptyTemplate,
        ...data.formSettings,
      };
      patchId(state.formSettings);
    };
    fr.readAsText(e.target.files[0]);
  }

  function resetForm(): void {
    state.formSettings = {
      ...cvSettingTemplate,
    };
    localStorage.setItem(
      `cvSettings-${i18n.locale.value}`,
      JSON.stringify(state.formSettings)
    );
  }

  function clearForm(): void {
    state.formSettings = cvSettingsEmptyTemplate;
    localStorage.removeItem(`cvSettings-${i18n.locale.value}`);
  }

  function changeDisplaySection(e: {
    sectionName: string;
    status: boolean;
  }): void {
    const propName = `display${e.sectionName
      .slice(0, 1)
      .toUpperCase()}${e.sectionName.slice(1)}` as
      | "displayEducation"
      | "displayProjects"
      | "displayJobSkills"
      | "displaySoftSkills"
      | "displayLanguages";
    state.formSettings[propName] = e.status;
  }

  function changeColor(color: string, darker: string): void {
    state.formSettings.activeColor = color;
    document.documentElement.style.setProperty("--primary", color);
    document.documentElement.style.setProperty("--primary-darker", darker);
  }

  function getCurrentColor(colorValue: string): {
    color: string;
    darker: string;
  } {
    return (
      state.config.colors.find((color) => color.color === colorValue) ||
      state.config.colors[1]
    );
  }

  function patchId(formSettings: Cv) {
    for (const key in SectionNameList) {
      const section = key as SectionName;
      for (const e of formSettings[section]) {
        if (!e.id) e.id = crypto.randomUUID();
      }
    }
  }

  const formSettingsHref = computed(() => {
    return `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({ formSettings: state.formSettings })
    )}`;
  });

  const availableLocales = computed(() => {
    return i18n.localeCodes.value.filter(
      (locale: any) => !locale.includes("-")
    );
  });

  watch(
    () => state.formSettings,
    (newValue, oldValue) => {
      localStorage.setItem(
        `cvSettings-${i18n.locale.value}`,
        JSON.stringify(newValue)
      );
      if (newValue.activeColor !== oldValue.activeColor) {
        const newColor = getCurrentColor(newValue.activeColor);
        changeColor(newColor.color, newColor.darker);
      }
    },
    { deep: true }
  );

  return {
    ...toRefs(state),
    setUpCvSettings,
    addSkill,
    removeSkill,
    addEntry,
    removeEntry,
    uploadCV,
    resetForm,
    clearForm,
    changeDisplaySection,
    changeColor,
    getCurrentColor,
    formSettingsHref,
    availableLocales,
  };
}
