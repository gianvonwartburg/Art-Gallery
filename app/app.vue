<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-6 flex items-center justify-between">
      <h1 class="text-4xl font-bold text-indigo-700">Künstler Galerie</h1>
      <nav>
        <a href="#" class="text-indigo-600 hover:underline mx-2">Home</a>
        <a href="#" class="text-indigo-600 hover:underline mx-2">Künstler</a>
        <a href="#" class="text-indigo-600 hover:underline mx-2">Sammlungen</a>
        <a href="#" class="text-indigo-600 hover:underline mx-2">Kontakt</a>
      </nav>
    </header>
    <main class="p-8">
      <section class="mb-12 text-center">
        <h2 class="text-2xl font-semibold mb-4">Willkommen in der Künstler Galerie</h2>
        <p class="text-gray-700 mb-6">
          Entdecke einzigartige Kunstwerke von talentierten Künstlern aus aller Welt. Stöbere durch unsere Sammlungen und finde Inspiration!
        </p>
        <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
          Galerie entdecken
        </button>
      </section>
      <section>
        <h3 class="text-xl font-bold mb-4">Empfohlene Künstler</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-4 rounded shadow">
            <img src="https://source.unsplash.com/200x200/?artist,painting" alt="Künstler 1" class="rounded mb-2 w-full h-40 object-cover">
            <h4 class="font-semibold">Anna Müller</h4>
            <p class="text-gray-600 text-sm">Moderne Malerei & abstrakte Kunst</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <img src="https://source.unsplash.com/200x200/?art,sculpture" alt="Künstler 2" class="rounded mb-2 w-full h-40 object-cover">
            <h4 class="font-semibold">Max Schmidt</h4>
            <p class="text-gray-600 text-sm">Skulpturen & Installationen</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <img src="https://source.unsplash.com/200x200/?gallery,artwork" alt="Künstler 3" class="rounded mb-2 w-full h-40 object-cover">
            <h4 class="font-semibold">Sofia Becker</h4>
            <p class="text-gray-600 text-sm">Fotografie & digitale Kunst</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-white mt-12 p-4 text-center text-gray-500">
      &copy; 2025 Künstler Galerie. Alle Rechte vorbehalten.
    </footer>
  </div>
</template>
a