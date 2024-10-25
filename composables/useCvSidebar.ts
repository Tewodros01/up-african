// ~/composables/useCvSidebar.js
import { ref } from "vue";

// Reactive state for sidebar visibility
const isSidebarOpen = ref(false);

// Function to toggle sidebar visibility
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

export function useCvSidebar() {
  return {
    isSidebarOpen,
    toggleSidebar,
  };
}
