<script>
import address from "@icons/address-card.svg";
import envelope from "@icons/envelope.svg";
import eye from "@icons/eye.svg";
import fax from "@icons/fax.svg";
import location from "@icons/location-check.svg";
import phone from "@icons/phone.svg";
import user from "@icons/user.svg";

import Badge from "./Badge/index.vue";
import Collapse from "./Collapse/index.vue";

export default {
  props: { order: Object },

  components: { Badge, Collapse },
  data() {
    return {
      address,
      eye,
      envelope,
      fax,
      location,
      phone,
      user,
    };
  },
};
</script>

<template>
  <div class="card shadow">
    <!-- Supplier -->
    <div class="my-6 p-4">
      <h3 class="text-xs text-neutral-500 mb-2">Supplier</h3>
      <p class="flex flex-row gap-1 text-sm font-semibold mb-4">
        {{ order.supplier.name }}
        <Badge>#{{ order.supplier.code }}</Badge>
      </p>
      <div class="grid grid-cols-2 gap-4 rounded-2xl bg-white">
        <!-- Dados -->
        <div class="info-col">
          <p class="icon-text-neutral">
            <img :src="address">CNPJ: {{ order.supplier.document.value }}</img>
          </p>
          <p class="icon-text">
            <img :src="location">{{ order.supplier.address }}</img>
          </p>
          <p class="icon-text">
            <img :src="user">{{ order.supplier.contact.name }}</img>
          </p>
        </div>
        <!-- Contact -->
        <div class="info-col">
          <p class="icon-text-neutral">
            <img :src="envelope">{{ order.header.contact.email }}</img>
          </p>
          <p class="icon-text-neutral">
            <img :src="phone">{{ order.header.contact.phone }}</img>
          </p>
          <p class="icon-text-neutral">
            <img :src="fax">{{ order.header.contact.fax }}</img>
          </p>
          <p class="icon-text-neutral">
            <img :src="eye">{{ order.supplier.readAt }}</img>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Addresses -->
  <Collapse>
    <template #title>
      Addresses
    </template>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      <div v-for="addr in order.addresses" :key="addr.label" class="address-card">
        <p class="text-xs text-neutral-500 mb-2">{{ addr.label }}</p>
        <p v-if="addr.name && addr.code" class="font-semibold">
          {{ addr.name }} <Badge>#{{ addr.code ?? "-" }}</Badge>
        </p>
        <p v-else class="font-semibold">{{ addr.name }}</p>

        <!-- Com code -->
        <div v-if="addr.code" class="grid grid-cols-2 gap-4 mt-4">
          <div class="info-col">
            <p class="icon-text"><img :src="location">{{ addr.address }}</img></p>
            <p class="icon-text"><img :src="user">{{ addr.contact?.name }}</img></p>
          </div>
          <div class="info-col">
            <p class="icon-text"><img :src="envelope">{{ addr.contact?.email }}</img></p>
            <p class="icon-text"><img :src="phone">{{ addr.contact?.phone }}</img></p>
            <p class="icon-text"><img :src="fax">{{ addr.contact?.fax }}</img></p>
          </div>
        </div>

        <!-- Sem code -->
        <div v-else class="mt-4 info-col">
          <p class="icon-text"><img :src="location">{{ addr.address }}</img></p>
          <p class="icon-text"><img :src="user">{{ addr.contact?.name }}</img></p>
          <p class="icon-text"><img :src="envelope">{{ addr.contact?.email }}</img></p>
          <p class="icon-text"><img :src="phone">{{ addr.contact?.phone }}</img></p>
          <p class="icon-text"><img :src="fax">{{ addr.contact?.fax }}</img></p>
        </div>
      </div>
    </div>
  </Collapse>
</template>
