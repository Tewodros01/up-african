const isChatBox = ref<boolean>(false);

function toggleChatBox() {
  isChatBox.value = !isChatBox.value;
}

// Export the composable function
export function useChatBox() {
  return {
    toggleChatBox,
  };
}
