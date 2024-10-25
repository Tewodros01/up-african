import { onMounted, watch } from "vue";
import { useResumeStore } from "./useResumeStore";
import { useSettingsStore } from "./useSettingsStore";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./local-storage";
import { deepMerge } from "../deep-merge";
import type { Resume } from "./types";

export const useSaveStateToLocalStorageOnChange = () => {
  const resumeStore = useResumeStore();
  const settingsStore = useSettingsStore();

  watch(
    () => ({
      resume: resumeStore.$state,
      settings: settingsStore.$state,
    }),
    (state) => {
      saveStateToLocalStorage(state);
    },
    { deep: true }
  );
};

export const useSetInitialStore = () => {
  const resumeStore = useResumeStore();
  const settingsStore = useSettingsStore();

  onMounted(() => {
    const state = loadStateFromLocalStorage();
    if (!state) return;

    if (state.resume) {
      const mergedResumeState = deepMerge(
        resumeStore.$state,
        state.resume
      ) as Resume;
      resumeStore.$patch(mergedResumeState);
    }

    if (state.settings) {
      const mergedSettingsState = deepMerge(
        settingsStore.$state,
        state.settings
      );
      settingsStore.$patch(mergedSettingsState);
    }
  });
};
