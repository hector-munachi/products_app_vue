<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
    <img 
      :src="product.image" 
      :alt="product.name" 
      class="w-full h-48 object-cover" 
    />
    <div class="p-4">
      <h3 class="text-xl font-bold text-primary mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 font-bold mb-4">
        {{ truncateDescription(product.description) }}
      </p>
      <div class="flex justify-between items-center">
        <div class="text-lg font-bold text-purple-600">
          ${{ product.price.toFixed(2) }}
        </div>
        <div class="flex items-center space-x-2">
          <router-link 
            :to="`/product/${product.id}`" 
            class="px-3 py-2 font-semibold text-purple-600 hover:text-purple-700"
          >
            View Details
          </router-link>
          <button 
            class="text-red-500 hover:text-red-700"
            @click="removeProduct"
          >
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncateDescription(description, length = 100) {
      return description.length > length 
        ? description.substring(0, length) + '...' 
        : description;
    },
    removeProduct() {
      // Implement product removal logic if needed
      this.$emit('remove-product', this.product.id);
    }
  }
};
</script>