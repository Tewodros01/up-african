<script setup>
import { ref } from 'vue';

const data = [
  {
    id: 1,
    imageTitle: 'Beautiful Landscape',
    creatorName: 'John Doe',
    likes: 1200,
    views: 5400,
    images: [
      'https://source.unsplash.com/random/400x300?landscape',
      'https://source.unsplash.com/random/400x300?nature',
      'https://source.unsplash.com/random/400x300?water',
    ],
  },
  {
    id: 2,
    imageTitle: 'City Skyline',
    creatorName: 'Jane Smith',
    likes: 2500,
    views: 8200,
    images: [
      'https://source.unsplash.com/random/400x300?city',
      'https://source.unsplash.com/random/400x300?night',
      'https://source.unsplash.com/random/400x300?urban',
    ],
  },
  {
    id: 3,
    imageTitle: 'Mountain Adventure',
    creatorName: 'Alice Johnson',
    likes: 800,
    views: 3200,
    images: [
      'https://source.unsplash.com/random/400x300?mountain',
      'https://source.unsplash.com/random/400x300?hiking',
      'https://source.unsplash.com/random/400x300?adventure',
    ],
  },
  {
    id: 4,
    imageTitle: 'Ocean Waves',
    creatorName: 'Mike Brown',
    likes: 600,
    views: 2100,
    images: [
      'https://source.unsplash.com/random/400x300?ocean',
      'https://source.unsplash.com/random/400x300?beach',
      'https://source.unsplash.com/random/400x300?sea',
    ],
  },
  {
    id: 5,
    imageTitle: 'Starry Night',
    creatorName: 'Emma Wilson',
    likes: 1500,
    views: 4900,
    images: [
      'https://source.unsplash.com/random/400x300?stars',
      'https://source.unsplash.com/random/400x300?night-sky',
      'https://source.unsplash.com/random/400x300?universe',
    ],
  },
];

const Cardsdata = ref(data); // Static data instead of fetched data
const openModal = ref(false);
const selectedItem = ref(null); // New reactive variable to store selected item

// Method to open the modal with the selected item
const openModalWithItem = item => {
  selectedItem.value = item; // Store the selected item
  openModal.value = true; // Set openModal to true
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="grid grid-cols-2 md:grid-cols-4 p-4 gap-4">
      <AssetsContentCard
        v-for="(item, index) in Cardsdata"
        :key="index"
        :item="item"
        @click="openModalWithItem(item)"
      />
    </div>
    <div v-if="openModal" class="flex relative top-0 right-0">
      <AssetsAssetModal :item="selectedItem" @close="openModal = false" />
      <!-- Listen for close event -->
      <!-- Pass the selected item -->
    </div>
  </div>
</template>
