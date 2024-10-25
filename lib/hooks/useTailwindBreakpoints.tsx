import { ref, onMounted, onUnmounted } from "vue";

const enum TailwindBreakpoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  "2xl" = 1536,
}

export const useTailwindBreakpoints = () => {
  const isSm = ref(false);
  const isMd = ref(false);
  const isLg = ref(false);
  const isXl = ref(false);
  const is2xl = ref(false);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    isSm.value = screenWidth >= TailwindBreakpoint.sm;
    isMd.value = screenWidth >= TailwindBreakpoint.md;
    isLg.value = screenWidth >= TailwindBreakpoint.lg;
    isXl.value = screenWidth >= TailwindBreakpoint.xl;
    is2xl.value = screenWidth >= TailwindBreakpoint["2xl"];
  };

  onMounted(() => {
    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { isSm, isMd, isLg, isXl, is2xl };
};
