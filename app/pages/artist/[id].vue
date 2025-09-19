<template>
  <div class="max-w-3xl mx-auto py-12">
    <NuxtLink to="/" class="text-indigo-600 hover:underline mb-6 inline-block"
      >&larr; Zurück zur Übersicht</NuxtLink
    >
    <div v-if="artist">
      <div class="flex items-center gap-6 mb-8">
        <img
          :src="artist.image"
          :alt="artist.name"
          class="rounded-full w-32 h-32 object-cover border-2 border-indigo-600"
        />
        <div>
          <h1 class="text-3xl font-bold text-indigo-700 mb-2">
            {{ artist.name }}
          </h1>
          <p class="text-gray-600">{{ artist.style }}</p>
        </div>
      </div>
      <h2 class="text-xl font-semibold mb-4">
        Kunstwerke von {{ artist.name }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="art in artist.artworks"
          :key="art.id"
          class="bg-white rounded shadow p-4 flex flex-col items-center"
        >
          <img
            :src="art.image"
            :alt="art.title"
            class="mb-2 w-full h-40 object-cover rounded"
          />
          <h3 class="font-semibold">{{ art.title }}</h3>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-20 text-gray-500">
      Künstler nicht gefunden.
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const id = route.params.id;
const artist = ref(null);

onMounted(async () => {
  try {
    const res = await fetch(`/api/artists`);
    const data = await res.json();
    artist.value = data.find((a) => String(a.id) === String(id));
  } catch (e) {
    artist.value = null;
  }
});
</script>

<style scoped>
/* Fügen Sie hier Ihre benutzerdefinierten Stile hinzu */
</style>
