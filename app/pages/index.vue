<template>
  <div class="max-w-4xl mx-auto py-12">
    <h1 class="text-4xl font-bold text-indigo-700 mb-8 text-center">
      Künstler Übersicht
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="artist in artists"
        :key="artist.id"
        class="bg-white p-6 rounded shadow flex flex-col items-center"
      >
        <img
          :src="artist.image"
          :alt="artist.name"
          class="rounded-full mb-4 w-32 h-32 object-cover border-2 border-indigo-600"
        />
        <h2 class="font-semibold text-xl mb-2">{{ artist.name }}</h2>
        <p class="text-gray-600 mb-4">{{ artist.style }}</p>
        <NuxtLink
          :to="`/artist/${artist.id}`"
          class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Details anzeigen
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const artists = ref([]);

onMounted(async () => {
  try {
    const res = await fetch("/api/artists");
    artists.value = await res.json();
  } catch (e) {
    artists.value = [];
  }
});
</script>
