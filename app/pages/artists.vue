<template>
  <div class="max-w-2xl mx-auto py-8">
    <h2 class="text-2xl font-bold mb-6">Künstler verwalten</h2>
    <!-- Künstler erstellen -->
    <form @submit.prevent="addArtist" class="mb-8 flex gap-2">
      <input
        v-model="newArtist.name"
        placeholder="Name"
        class="border px-2 py-1 rounded"
        required
      />
      <input
        v-model="newArtist.style"
        placeholder="Stil"
        class="border px-2 py-1 rounded"
        required
      />
      <button class="bg-indigo-600 text-white px-4 py-1 rounded">
        Hinzufügen
      </button>
    </form>
    <!-- Künstler Liste -->
    <ul>
      <li
        v-for="artist in artists"
        :key="artist.id"
        class="flex items-center justify-between mb-2 bg-white p-2 rounded shadow"
      >
        <div>
          <span class="font-semibold">{{ artist.name }}</span>
          <span class="text-gray-500 text-sm">({{ artist.style }})</span>
        </div>
        <div>
          <button @click="editArtist(artist)" class="text-indigo-600 mx-1">
            Bearbeiten
          </button>
          <button @click="deleteArtist(artist.id)" class="text-red-500 mx-1">
            Löschen
          </button>
        </div>
      </li>
    </ul>
    <!-- Künstler bearbeiten -->
    <div v-if="editingArtist" class="mt-6">
      <h3 class="font-bold mb-2">Künstler bearbeiten</h3>
      <form @submit.prevent="updateArtist" class="flex gap-2">
        <input
          v-model="editingArtist.name"
          class="border px-2 py-1 rounded"
          required
        />
        <input
          v-model="editingArtist.style"
          class="border px-2 py-1 rounded"
          required
        />
        <button class="bg-indigo-600 text-white px-4 py-1 rounded">
          Speichern
        </button>
        <button
          @click="cancelEdit"
          type="button"
          class="px-4 py-1 rounded border"
        >
          Abbrechen
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const artists = ref([]);
const newArtist = ref({ name: "", style: "" });
const editingArtist = ref(null);

async function fetchArtists() {
  const res = await fetch("/api/artists");
  artists.value = await res.json();
}

async function addArtist() {
  const res = await fetch("/api/artists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newArtist.value),
  });
  const created = await res.json();
  artists.value.push(created);
  newArtist.value = { name: "", style: "" };
}

async function deleteArtist(id) {
  await fetch(`/api/artists/${id}`, { method: "DELETE" });
  artists.value = artists.value.filter((a) => a.id !== id);
}

function editArtist(artist) {
  editingArtist.value = { ...artist };
}

async function updateArtist() {
  const res = await fetch(`/api/artists/${editingArtist.value.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editingArtist.value),
  });
  const updated = await res.json();
  const idx = artists.value.findIndex((a) => a.id === updated.id);
  if (idx !== -1) artists.value[idx] = updated;
  editingArtist.value = null;
}

function cancelEdit() {
  editingArtist.value = null;
}

onMounted(fetchArtists);
</script>
