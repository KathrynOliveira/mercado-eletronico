<template>
  <div class="p-4">
      <OrderCard :order="this.orders" @click="goToDetail()" />
      <OrderDetail v-if="this.details":order="this.orders" />
  </div>
</template>

<script>
import OrderCard from "../components/OrderCard.vue";
import OrderDetail from "@/components/OrderDetail.vue";

export default {
  components: { OrderCard, OrderDetail },
  data() {
    return {
      orders: [],
      details: false
    };
  },
  async mounted() {
    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${baseUrl}/orders/1`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      this.orders = data;
    } catch (err) {
      console.error("Erro:", err);
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  },

  methods: {
    goToDetail() {
      this.details = !this.details;
    },
  },
};
</script>
