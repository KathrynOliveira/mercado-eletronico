<script lang="ts">
import OrderCardSkeleton from "@/components/OrderCardSkeleton.vue";
import OrderCard from "../components/OrderCard.vue";
import OrderDetail from "@/components/OrderDetail.vue";
import { Order } from "@/types/order";

export default {
  components: { OrderCard, OrderDetail, OrderCardSkeleton },
  data() {
    return {
      orders: {} as Order,
      details: false,
      isLoading: true,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const baseUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${baseUrl}/orders/1`);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data: Order = await response.json();
      this.orders = data;
    } catch (err) {
      console.error("Erro:", err);
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    goToDetail() {
      this.details = !this.details;
    },
  },
};
</script>

<template>
  <div class="p-4">
      <OrderCardSkeleton :loading="isLoading" />
      <OrderCard v-if="!isLoading" :order="this.orders" @click="goToDetail()" />
      <OrderDetail v-if="this.details":order="this.orders" />
  </div>
</template>
