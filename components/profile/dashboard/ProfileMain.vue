<script setup>
import { ref } from "vue";
import { Edit, UserPlus } from "lucide-vue-next";
import LinkedInAvatar from "@/assets/linkedin-avatar.svg";
import LinkedInBanner from "@/assets/linkedin-banner.jpg";

const user = ref({
  uid: "1",
  displayName: "John Doe",
  photoURL: null,
});

const currentUser = ref({
  uid: "1",
});

const isLoggedIn = computed(() => currentUser.value.uid === user.value.uid);

const editProfile = () => {
  alert("Edit Profile Clicked");
};
</script>

<template>
  <div>
    <div class="bg-white md:rounded-lg md:border">
      <div
        class="flex justify-center items-center pt-[25%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${LinkedInBanner})` }"
      ></div>
      <div>
        <div class="flex justify-between items-end px-4 md:px-6 -mt-16 md:-mt-28">
          <div class="h-28 w-28 md:h-40 md:w-40 overflow-hidden flex items-center rounded-full border-white border-4">
            <img
              :src="user.photoURL ? user.photoURL : LinkedInAvatar"
              class="w-full h-full object-cover"
              alt="User Avatar"
            />
          </div>
          <div
            v-if="isLoggedIn"
            class="text-gray-500 hover:bg-gray-100 rounded-full p-2 cursor-pointer -m-2"
            @click="editProfile"
          >
            <Edit />
          </div>
        </div>
        <div class="mt-4 px-4 md:px-6">
          <h2 class="font-semibold text-xl text-gray-900">{{ user.displayName }}</h2>
          <p class="text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            natus, sed asperiores totam atque tenetur architecto facilis
            aliquid.
          </p>
          <p class="text-sm text-gray-500 mt-3">
            Connecting and Messaging feature is not available
          </p>
          <div class="flex gap-2 mt-6 mb-8 flex-wrap">
            <button class="text-white text-sm bg-sky-600 py-1 px-4 rounded-full font-semibold cursor-default">
              <template v-if="isLoggedIn">
                Open to
              </template>
              <template v-else>
                <UserPlus size="20" /> Connect
              </template>
            </button>
            <button class="text-sky-600 text-sm py-1 px-4 border border-sky-600 rounded-full font-semibold cursor-default">
              {{ isLoggedIn ? "Add profile section" : "Message" }}
            </button>
            <button class="text-gray-500 text-sm py-1 px-4 border border-gray-500 rounded-full font-semibold cursor-default">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white md:rounded-lg md:border p-6 mt-2">
      <h4 class="text-xl font-semibold text-gray-900">About</h4>
      <p class="text-sm text-gray-700 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        perferendis quas natus possimus, earum fuga recusandae saepe
        voluptatem tempora libero!
      </p>
      <p class="text-sm text-gray-700 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam
        voluptatem placeat eos illo dolore sequi eius, laudantium harum porro
        dignissimos veritatis repellendus. Deleniti neque sunt dolor harum
        consequatur! Numquam provident nostrum dolore molestias illum
        consequuntur eum fugit id laboriosam!
      </p>
      <p class="text-sm text-gray-700 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sit
        placeat aliquam voluptatibus assumenda ad harum laboriosam ducimus
        nihil doloremque eligendi magnam possimus, fugiat vel.
      </p>
    </div>
  </div>
</template>
