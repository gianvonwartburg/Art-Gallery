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

const route = useRoute();
const id = Number(route.params.id);

// Beispiel-Daten (später aus API oder Store laden)
const artists = [
  {
    id: 1,
    name: "Anna Müller",
    style: "Moderne Malerei & abstrakte Kunst",
    image: "https://source.unsplash.com/200x200/?artist,painting",
    artworks: [
      {
        id: 1,
        title: "Farbenmeer",
        image: "https://source.unsplash.com/400x300/?abstract,painting",
      },
      {
        id: 2,
        title: "Lichtspiel",
        image: "https://source.unsplash.com/400x300/?modern,art",
      },
    ],
  },
  {
    id: 2,
    name: "Max Schmidt",
    style: "Skulpturen & Installationen",
    image: "https://source.unsplash.com/200x200/?art,sculpture",
    artworks: [
      {
        id: 1,
        title: "Steinzeit",
        image: "https://source.unsplash.com/400x300/?sculpture,stone",
      },
      {
        id: 2,
        title: "Metallträume",
        image: "https://source.unsplash.com/400x300/?metal,sculpture",
      },
    ],
  },
  {
    id: 3,
    name: "Sofia Becker",
    style: "Fotografie & digitale Kunst",
    image: "https://source.unsplash.com/200x200/?gallery,artwork",
    artworks: [
      {
        id: 1,
        title: "Stadtlichter",
        image: "https://source.unsplash.com/400x300/?city,photography",
      },
      {
        id: 2,
        title: "Naturblick",
        image: "https://source.unsplash.com/400x300/?nature,photo",
      },
    ],
  },
];

const artist = artists.find((a) => a.id === id);
</script>
