<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const skills = ref([
  "UI/UX and Design",
  "No of Question",
  "Web Development",
  "UI/UX and Design",
  "Web Development",
]);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const removeSkill = (skill) => {
  skills.value = skills.value.filter((s) => skill !== s);
};
</script>

<template>
  <!-- the card carry the modal -->
  <div
    class="w-full border-dashed group rounded-box bg-[#F6F8FA] p-[1rem] sm:p-3 md:p-[1.875rem] hover:bg-[#ebedf0] cursor-pointer border border-gray-200 rounded-lg"
  >
    <div
      class="flex gap-2 items-center justify-center flex-col"
      @click="openModal"
    >
      <div class="bg-white p-2 lg:p-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 41"
          fill="none"
          class="lg:w-[40px] lg:h-[41px] w-[29px] h-[30px] transition-all"
        >
          <g clip-path="url(#clip0_0_553)">
            <path
              d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z"
              fill="#0073E6"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_553">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h2
        class="lg:text-lg text-sm font-semibold lg:font-medium text-[#1C4980]"
      >
        New Assessment
      </h2>
      <p class="text-xs font-medium text-[#1C4980] text-center">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
    <div>
      <!-- Below div is the modal backdrop -->
      <div
        :class="{
          'fixed transition-all z-40 duration-500 w-screen h-screen inset-0 bg-gray-900': true,
          'visible bg-opacity-60': isOpen,
          'invisible bg-opacity-0': !isOpen,
        }"
        @click="closeModal"
      ></div>
      <!-- Below code is the modal of form -->
      <form
        method="dialog"
        :class="{
          'p-0 rounded-t-lg transition-all duration-500 md:rounded-lg bg-white w-full fixed z-50 -bottom-[100vh] md:!bottom-auto md:top-[190vh] left-1/2 -translate-x-1/2 max-w-[37rem] md:-translate-y-1/2': true,
          '!bottom-0 md:!top-1/2': isOpen,
        }"
      >
        <button
          @click="closeModal"
          class="btn btn-sm min-h-0 h-10 w-10 btn-circle btn-ghost hover:bg-[#FBEBEA] hover:text-[#D63500] bg-[#FBEBEA] text-[#D63500] scale-105 md:bg-transparent md:text-[#1C4980] md:scale-100 absolute md:right-5 md:top-4 right-3 top-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="currentColor"
          >
            <path
              d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <h3
          class="px-4 md:px-[1.88rem] py-5 font-semibold text-[#1C4980] text-sm md:text-xl border-b"
        >
          Create new assessment
        </h3>
        <div class="px-4 md:px-[1.88rem] overflow-auto max-h-[80vh] py-4">
          <div class="flex gap-5 flex-col form-control w-full">
            <div>
              <label class="label pt-0">
                <span
                  class="label-text text-[#1C4980] text-xs md:text-base font-medium"
                >
                  Name of assessment
                </span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                class="!outline-none input text-[#1C4980] font-medium text-xs md:text-sm input-bordered w-full"
              />
            </div>
            <div>
              <label class="label pt-0">
                <span
                  class="label-text text-[#1C4980] text-xs md:text-base font-medium"
                >
                  Purpose of the test is
                </span>
              </label>
              <select
                defaultValue=""
                class="!outline-none input text-[#1C4980] font-medium text-xs md:text-sm w-full select select-bordered"
              >
                <option disabled value="">Select</option>
                <option value="purpose 1">purpose 1</option>
                <option value="purpose 2">purpose 2</option>
                <option value="purpose 3">purpose 3</option>
                <option value="purpose 4">purpose 4</option>
                <option value="purpose 5">purpose 5</option>
                <option value="none">none</option>
              </select>
            </div>
            <div>
              <label class="label pt-0">
                <span
                  class="label-text text-[#1C4980] text-xs md:text-base font-medium"
                >
                  Description
                </span>
              </label>
              <select
                defaultValue=""
                class="!outline-none input text-[#1C4980] font-medium text-xs md:text-sm w-full select select-bordered"
              >
                <option disabled value="">Select</option>
                <option value="description 1">description 1</option>
                <option value="description 2">description 2</option>
                <option value="description 3">description 3</option>
                <option value="description 4">description 4</option>
                <option value="description 5">description 5</option>
                <option value="none">none</option>
              </select>
            </div>
            <div>
              <label class="label pt-0">
                <span
                  class="label-text text-[#1C4980] text-xs md:text-base font-medium"
                >
                  Skills
                </span>
              </label>
              <div class="border rounded-lg border-[#DADCE0]">
                <div class="flex flex-wrap gap-1 md:gap-2 p-4">
                  <div
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="rounded-full flex items-center bg-[#DDEDFF]"
                  >
                    <span
                      class="text-[#1C4980] text-xs font-medium pl-2 pr-1 md:pl-3 md:pr-2"
                    >
                      {{ skill }}
                    </span>
                    <button
                      @click.prevent="removeSkill(skill)"
                      class="btn btn-xs md:btn-sm md:h-7 md:w-7 md:!min-h-0 btn-circle btn-link hover:bg-[#c2d6ee]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_0_1698)">
                          <path
                            d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                            fill="#1C4980"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_1698">
                            <rect width="18" height="18" rx="9" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="border-t">
                  <input
                    type="text"
                    placeholder="Type Here"
                    class="!outline-none input text-[#1C4980] font-medium text-xs md:text-sm w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <label class="label pt-0">
                <span
                  class="label-text text-[#1C4980] text-xs md:text-base font-medium"
                >
                  Duration of assessment
                </span>
              </label>
              <input
                type="text"
                placeholder="HH:MM:SS"
                class="!outline-none input text-[#1C4980] font-medium text-xs md:text-sm input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <!-- form submit button -->
        <div
          class="px-4 md:px-[1.88rem] py-4 border-t md:border-0 md:shadow-[0_-4px_50px_0_rgba(0,0,0,0.09)]"
        >
          <button
            class="px-4 py-2 rounded-md items-center bg-[#0073E6] text-white hover:bg-[#0066cc] transition-all btn-block min-h-[2.6rem] capitalize"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>

  <button
    class="fixed right-3 bottom-3 border-none bg-[#0073E6] inline-flex lg:hidden"
    @click="openModal"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M23.3333 16.1905H16.1905V23.3333H13.8095V16.1905H6.66666V13.8095H13.8095V6.66666H16.1905V13.8095H23.3333V16.1905Z"
        fill="white"
      />
    </svg>
  </button>
</template>
