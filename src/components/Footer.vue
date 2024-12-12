<template>
  <footer class="bg-purple-700 text-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <p>&copy; {{ new Date().getFullYear() }} Products Catalog. All rights reserved.</p>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/features" class="hover:text-gray-300">Feature</router-link></li>
          <li><router-link to="/company" class="hover:text-gray-300">Company</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
