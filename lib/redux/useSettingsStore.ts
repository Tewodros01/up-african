import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Settings {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    workExperiences: boolean;
    educations: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
  formToHeading: {
    workExperiences: string;
    educations: string;
    projects: string;
    skills: string;
    custom: string;
  };
  formsOrder: ShowForm[];
  showBulletPoints: {
    educations: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
}

export type ShowForm = keyof Settings["formToShow"];
export type FormWithBulletPoints = keyof Settings["showBulletPoints"];
export type GeneralSetting = Exclude<
  keyof Settings,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints"
>;

export const DEFAULT_THEME_COLOR = "#38bdf8"; // sky-400
export const DEFAULT_FONT_FAMILY = "Roboto";
export const DEFAULT_FONT_SIZE = "11"; // text-base https://tailwindcss.com/docs/font-size
export const DEFAULT_FONT_COLOR = "#171717"; // text-neutral-800

export const useSettingsStore = defineStore("settings", () => {
  const themeColor = ref(DEFAULT_THEME_COLOR);
  const fontFamily = ref(DEFAULT_FONT_FAMILY);
  const fontSize = ref(DEFAULT_FONT_SIZE);
  const documentSize = ref("Letter");

  const formToShow = ref({
    workExperiences: true,
    educations: true,
    projects: true,
    skills: true,
    custom: false,
  });

  const formToHeading = ref({
    workExperiences: "WORK EXPERIENCE",
    educations: "EDUCATION",
    projects: "PROJECT",
    skills: "SKILLS",
    custom: "CUSTOM SECTION",
  });

  const formsOrder = ref<ShowForm[]>([
    "workExperiences",
    "educations",
    "projects",
    "skills",
    "custom",
  ]);

  const showBulletPoints = ref({
    educations: true,
    projects: true,
    skills: true,
    custom: true,
  });

  const changeSettings = (field: GeneralSetting, value: string) => {
    switch (field) {
      case "themeColor":
        themeColor.value = value;
        break;
      case "fontFamily":
        fontFamily.value = value;
        break;
      case "fontSize":
        fontSize.value = value;
        break;
      case "documentSize":
        documentSize.value = value;
        break;
      default:
        break;
    }
  };

  const changeShowForm = (field: ShowForm, value: boolean) => {
    formToShow.value[field] = value;
  };

  const changeFormHeading = (field: ShowForm, value: string) => {
    formToHeading.value[field] = value;
  };

  const changeFormOrder = (form: ShowForm, type: "up" | "down") => {
    const lastIdx = formsOrder.value.length - 1;
    const pos = formsOrder.value.indexOf(form);
    const newPos = type === "up" ? pos - 1 : pos + 1;

    if (newPos >= 0 && newPos <= lastIdx) {
      const temp = formsOrder.value[pos];
      formsOrder.value[pos] = formsOrder.value[newPos];
      formsOrder.value[newPos] = temp;
    }
  };

  const changeShowBulletPoints = (
    field: FormWithBulletPoints,
    value: boolean
  ) => {
    showBulletPoints.value[field] = value;
  };

  const setSettings = (newSettings: Settings) => {
    themeColor.value = newSettings.themeColor;
    fontFamily.value = newSettings.fontFamily;
    fontSize.value = newSettings.fontSize;
    documentSize.value = newSettings.documentSize;
    formToShow.value = newSettings.formToShow;
    formToHeading.value = newSettings.formToHeading;
    formsOrder.value = newSettings.formsOrder;
    showBulletPoints.value = newSettings.showBulletPoints;
  };

  const selectThemeColor = computed(() => themeColor.value);
  const selectFormToShow = computed(() => formToShow.value);
  const selectShowByForm = (form: ShowForm) =>
    computed(() => formToShow.value[form]);
  const selectFormToHeading = computed(() => formToHeading.value);
  const selectHeadingByForm = (form: ShowForm) =>
    computed(() => formToHeading.value[form]);
  const selectFormsOrder = computed(() => formsOrder.value);
  const selectIsFirstForm = (form: ShowForm) =>
    computed(() => formsOrder.value[0] === form);
  const selectIsLastForm = (form: ShowForm) =>
    computed(() => formsOrder.value[formsOrder.value.length - 1] === form);
  const selectShowBulletPoints = (form: FormWithBulletPoints) =>
    computed(() => showBulletPoints.value[form]);

  return {
    themeColor,
    fontFamily,
    fontSize,
    documentSize,
    formToShow,
    formToHeading,
    formsOrder,
    showBulletPoints,
    changeSettings,
    changeShowForm,
    changeFormHeading,
    changeFormOrder,
    changeShowBulletPoints,
    setSettings,
    selectThemeColor,
    selectFormToShow,
    selectShowByForm,
    selectFormToHeading,
    selectHeadingByForm,
    selectFormsOrder,
    selectIsFirstForm,
    selectIsLastForm,
    selectShowBulletPoints,
  };
});
