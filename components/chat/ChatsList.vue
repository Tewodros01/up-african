<script setup>
import { reactive, computed } from "vue";

const chatData = [
  {
    summary:
      "I've heard great things about you. Could you be the next big thing at Microsoft?",
    sender: {
      name: "Satya Nadella",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0/1579726624860?e=1692835200&v=beta&t=m5EDtXZALcLc9SM6BNRsfbid9cEUxfN8B_LYhdwFwGo",
    },
  },
  {
    summary:
      "Ozgur, can you write an algorithm to predict our stock prices? PS: You can't use quantum computing!",
    sender: {
      name: "Sundar Pichai",
      imageUrl:
        "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    },
  },
  {
    summary:
      "We're thinking of making a LinkedIn competitor. Would you like to join that sinking ship?",
    sender: {
      name: "Mark Zuckerberg",
      imageUrl:
        "https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1632975955",
    },
  },
  {
    summary:
      "Have you ever tried throwing an apple in space? Let's do it together at SpaceX.",
    sender: {
      name: "Elon Musk",
      imageUrl: "https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg",
    },
  },
  {
    summary: "Can you design a website for us? We're still using HTML 1.0.",
    sender: {
      name: "Bill Gates",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_100_100/0/1686850028795?e=1692835200&v=beta&t=rcGox-VIihouJsvoqyR_9wMH_cu9QNZpICsWyVUVajA",
    },
  },
  {
    summary:
      "Your performance metrics are remarkable. Can you make Google's search even faster? No pressure.",
    sender: {
      name: "Sundar Pichai",
      imageUrl:
        "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    },
  },
];

const checkedIndexes = reactive({});

const handleCheck = (index, checked) => {
  if (checked) {
    checkedIndexes[index] = checked;
  } else {
    delete checkedIndexes[index];
  }
};

const isAnyChatChecked = computed(() => Object.keys(checkedIndexes).length > 0);
</script>

<template>
  <div class="overflow-y-auto">
    <ChatChatsListItem
      v-for="(chatItem, index) in chatData"
      :key="index"
      :data="chatItem"
      @check="handleCheck(index, $event)"
      :isChecked="checkedIndexes[index] || false"
      :showCheckbox="isAnyChatChecked"
    />
  </div>
</template>
