<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div>
        <router-link to="/" class="text-xl font-semibold">Products Catalog</router-link>
      </div>
      
      <!-- Mobile Menu Toggle Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="text-gray-600 hover:text-gray-900">Discover</router-link>
        <router-link to="/about" class="text-gray-600 hover:text-gray-900">About Us</router-link>
        <router-link to="/faqs" class="text-gray-600 hover:text-gray-900">FAQs</router-link>
        <router-link to="/contact" class="text-gray-600 hover:text-gray-900">Contact Us</router-link>
      </div>

      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-900">Log in</a>
        <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Sign up</a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-white z-40 md:hidden"
    >
      <div class="flex flex-col h-full">
        <!-- Mobile Menu Header -->
        <div class="flex justify-between items-center p-4 border-b">
          <router-link to="/" class="text-xl font-semibold">Products Catalog</router-link>
          <button 
            @click="toggleMobileMenu" 
            class="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="bg-white flex-grow">
          <!-- Mobile Menu Items -->
          <div class="flex flex-col py-4">
            <router-link 
              to="/" 
              @click="toggleMobileMenu" 
              class="px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              Discover
            </router-link>
            <router-link 
              to="/about" 
              @click="toggleMobileMenu" 
              class="px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              About Us
            </router-link>
            <router-link 
              to="/faqs" 
              @click="toggleMobileMenu" 
              class="px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              FAQs
            </router-link>
            <router-link 
              to="/contact" 
              @click="toggleMobileMenu" 
              class="px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              Contact Us
            </router-link>
          </div>
          
          <!-- Mobile Menu Footer -->
          <div class="mt-auto border-t p-4">
            <div class="flex flex-col space-y-4">
              <a href="#" class="text-center text-gray-600 hover:text-gray-900">Log in</a>
              <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-center">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      
      // Prevent body scroll when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },
  // Add a watcher to reset body overflow when component is destroyed
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  }
}
</script>