<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-6 flex items-center justify-between">
      <h1 class="text-4xl font-bold text-indigo-700">Künstler Galerie</h1>
      <nav>
        <NuxtLink to="/" class="text-indigo-600 hover:underline mx-2"
          >Home</NuxtLink
        >
        <NuxtLink to="/artists" class="text-indigo-600 hover:underline mx-2"
          >Künstler</NuxtLink
        >
      </nav>
    </header>
    <main class="p-8">
      <NuxtPage />
    </main>
    <footer class="bg-white mt-12 p-4 text-center text-gray-500">
      &copy; 2025 Künstler Galerie. Alle Rechte vorbehalten.
    </footer>
  </div>
</template>
