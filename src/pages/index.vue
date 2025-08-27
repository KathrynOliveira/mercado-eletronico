<script lang="ts">
import OrderCardSkeleton from "@/components/OrderCardSkeleton.vue";
import OrderCard from "../components/OrderCard.vue";
import OrderDetail from "@/components/OrderDetail.vue";
import { Order } from "@/types/order";

import axios from 'axios';

export default {
  components: { OrderCard, OrderDetail, OrderCardSkeleton },
  data() {
    return {
      orders: {} as Order,
      details: false,
      isLoading: true,
      error: null,
    };
  },
  async created() {
    await this.fetchOrder()
  },

  methods: {
    goToDetail() {
      this.details = !this.details;
    },

    async fetchOrder() {
      try {
        this.isLoading = true;

        const response = await axios({
          method: 'get',
          url: `/api/orders/1`,
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 5000,
          validateStatus: (status) => {
            return status >= 200 && status < 500;
          }
        });

        if (response.status === 200) {
          this.orders = response.data;
        } else {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
      } catch (err) {
        console.error("Erro:", err);
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="p-4">
    <OrderCardSkeleton :loading="isLoading" />
    <OrderCard v-if="!isLoading" :order="orders" @click="goToDetail()" @reload-orders="fetchOrder" />
    <OrderDetail v-if="details" :order="orders" />
  </div>
</template>
