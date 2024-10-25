import { useResumeStore } from "./useResumeStore";
import { useSettingsStore } from "./useSettingsStore";

export const LOCAL_STORAGE_KEY = "open-resume-state";

export const loadStateFromLocalStorage = () => {
  try {
    const stringifiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stringifiedState) return undefined;
    return JSON.parse(stringifiedState);
  } catch (e) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: any) => {
  try {
    const resumeStore = useResumeStore();
    const settingsStore = useSettingsStore();

    const state = {
      resume: resumeStore.$state,
      settings: settingsStore.$state,
    };

    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringifiedState);
  } catch (e) {
    // Ignore
  }
};

export const getHasUsedAppBefore = () => Boolean(loadStateFromLocalStorage());
