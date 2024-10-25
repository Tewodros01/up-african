import { ref, onMounted, onUnmounted, watchEffect } from "vue";

/**
 * Composition function to autosize textarea height.
 *
 * The trick to resize is to first set its height to 0 and then set it back to scroll height.
 * Reference: https://stackoverflow.com/a/25621277/7699841
 *
 * @example // Tailwind CSS
 * const textareaRef = useAutosizeTextareaHeight(value);
 * <textarea ref="textareaRef" class="resize-none overflow-hidden"/>
 */
export function useAutosizeTextareaHeight(value: string) {
  const textareaRef = ref<HTMLTextAreaElement | null>(null);

  const resizeHeight = () => {
    const textarea = textareaRef.value;
    if (textarea) {
      textarea.style.height = "0px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Resize height when value changes
  watchEffect(() => {
    resizeHeight();
  });

  // Resize height when viewport resizes
  onMounted(() => {
    window.addEventListener("resize", resizeHeight);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHeight);
  });

  return textareaRef;
}
