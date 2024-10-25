// composables/useDialog.ts
import { ref } from 'vue';

// Create individual refs for each dialog
const isBannerDialogOpen = ref(false);
const isBasicDetailsDialogOpen = ref(false);
const isOpportunityDescriptionDialogOpen = ref(false);
const isRecruitmentProcessDialogOpen = ref(false);

export function useMicrositeDialog() {
  // Functions to open specific dialogs
  const openBannerDialog = () => (isBannerDialogOpen.value = true);
  const openBasicDetailsDialog = () => (isBasicDetailsDialogOpen.value = true);
  const openOpportunityDescriptionDialog = () =>
    (isOpportunityDescriptionDialogOpen.value = true);
  const openRecruitmentProcessDialog = () =>
    (isRecruitmentProcessDialogOpen.value = true);

  // Functions to close specific dialogs
  const closeBannerDialog = () => (isBannerDialogOpen.value = false);
  const closeBasicDetailsDialog = () => (isBasicDetailsDialogOpen.value = false);
  const closeOpportunityDescriptionDialog = () =>
    (isOpportunityDescriptionDialogOpen.value = false);
  const closeRecruitmentProcessDialog = () =>
    (isRecruitmentProcessDialogOpen.value = false);

  return {
    isBannerDialogOpen,
    isBasicDetailsDialogOpen,
    isOpportunityDescriptionDialogOpen,
    isRecruitmentProcessDialogOpen,

    openBannerDialog,
    openBasicDetailsDialog,
    openOpportunityDescriptionDialog,
    openRecruitmentProcessDialog,

    closeBannerDialog,
    closeBasicDetailsDialog,
    closeOpportunityDescriptionDialog,
    closeRecruitmentProcessDialog,
  };
}
