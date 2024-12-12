<template>
  <div>
    <div class="relative h-[600px]">
      <div class="absolute inset-0 bg-black/50 flex justify-center items-center">
        <div class="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 class="text-2xl md:text-3xl text-white font-bold max-w-2xl mb-8">
            Runway Ready: Elevate Your Style with Must-Have Accessories! Discover statement pieces that transform your look and tech game.
          </h1>
          <div class="flex flex-col md:flex-row gap-4 max-w-3xl bg-white p-2 rounded-lg">
            <div class="flex-grow">
              <input 
                type="text" 
                placeholder="Search for products" 
                class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div class="w-full md:w-48">
              <select 
                class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option>Categories</option>
                <option>Fashion</option>
                <option>Accessories</option>
                <option>Gadgets</option>
              </select>
            </div>
            <button 
              class="w-full md:w-32 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-bold">Trending Products</h2>
      
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-600"></div>
      </div>
      
      <div v-else-if="error" class="text-red-500 text-center py-12">
        {{ error }}
      </div>
      
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product" 
          />
        </div>
        
        <div class="flex justify-center items-center space-x-4 mt-8">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          
          <span class="text-gray-700">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          
          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold mb-7">Discover a World of Products Tailored Just for You.</h2>
        <button 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:bg-gray-400 mb-4"
        >
          View all products
        </button>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Online Shopping</h3>
            <p>Explore a wide range of products and place an order from the comfort of your home.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Product Sales</h3>
            <p>Get the best discounts we offer on quality products.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Hybrid Shopping</h3>
            <p>Experience the best of both worlds with a combination of online and in-person experience.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  components: { ProductCard },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      currentPage: 1,
      totalPages: 1,
      productsPerPage: 10
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        this.loading = true;
        // Fake Store API doesn't support built-in pagination, so we'll simulate it
        const response = await axios.get('https://fakestoreapi.com/products');
        
        // Calculate total pages based on products count
        this.totalPages = Math.ceil(response.data.length / this.productsPerPage);
        
        // Slice products for current page
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        
        this.products = response.data
          .slice(startIndex, endIndex)
          .map(product => ({
            id: product.id,
            name: product.title,
            description: product.description,
            image: product.image,
            price: product.price
          }));
        
        this.loading = false;
      } catch (error) {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error fetching products:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchProducts();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchProducts();
      }
    }
  }
};
</script>