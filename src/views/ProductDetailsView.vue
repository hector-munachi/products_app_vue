<template>
  <div class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-600"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      {{ error }}
    </div>
    
    <div v-else class="bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-8">
      <div class="flex justify-center items-center">
        <img
          :src="product.image"
          :alt="product.title"
          class="max-h-96 object-contain"
        />
      </div>
      
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
        
        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-purple-600 mr-4">${{ product.price.toFixed(2) }}</span>
          <div class="flex items-center">
            <span class="text-yellow-500 mr-1">★</span>
            <span>{{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
          </div>
        </div>
        
        <p class="text-gray-600 mb-6">{{ product.description }}</p>
        
        <div class="mb-6">
          <span class="font-bold">Category:</span> 
          <span class="capitalize">{{ product.category }}</span>
        </div>
        
        <div class="flex space-x-4">
          <button
            class="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>
          <button
          @click="goBack"
            class="px-6 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition"
          >
          Go back to Products
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProductDetailsView",
  data() {
    return {
      product: null,
      loading: true,
      error: null
    };
  },
  mounted() {
    this.fetchProductDetails();
  },
  methods: {
    async fetchProductDetails() {
      try {
        this.loading = true;
        const productId = this.$route.params.id;
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        this.product = response.data;
        this.loading = false;
      } catch (error) {
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
        console.error('Error fetching product details:', error);
      }
    },
    goBack() {
      // Navigate back to the products page (homepage)
      this.$router.push('/');
    }
  }
}
</script>