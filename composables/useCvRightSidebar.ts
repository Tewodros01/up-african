import { computed, ref } from "vue";

// Reactive state for sidebar visibility
const isSidebarOpen = ref<boolean>(false); // Sidebar is open by default

// Reactive state for selected navigation section
const selectedSection = ref<string>("personalDetails"); // Default selected section

// Function to toggle sidebar visibility
function toggleSidebar(): void {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// Function to handle navigation item click
function handleNavClick(section: string): void {
  selectedSection.value = section;
  toggleSidebar();
}

// Computed property to check if a section should be visible
function isSectionVisible(section: string) {
  return computed(() => selectedSection.value === section);
}

// Export the composable function
export function useRightSidebar() {
  return {
    isSidebarOpen,
    selectedSection,
    toggleSidebar,
    handleNavClick,
    isSectionVisible,
  };
}
