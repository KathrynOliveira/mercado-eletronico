<script>
import address from "@icons/address-card.svg";
import envelope from "@icons/envelope.svg";
import eye from "@icons/eye.svg";
import fax from "@icons/fax.svg";
import info from "@icons/info-tip.svg";
import location from "@icons/location-check.svg";
import phone from "@icons/phone.svg";
import user from "@icons/user.svg";

export default {
  props: { order: Object },

  data() {
    return {
      address,
      eye,
      envelope,
      fax,
      info,
      location,
      phone,
      user,
    };
  },
};
</script>

<template>
  <div class="w-full h-auto md:h-[110px] flex flex-col md:flex-row gap-6 card cursor-pointer"
    title="Clique para expandir ou recolher">
    <!-- Pre Order -->
    <div
      class="w-full md:w-[200px] h-[110px] bg-blue-600 rounded-tr-lg rounded-br-lg flex flex-col justify-center text-white px-4">
      <p class="text-lg">Pre-Order</p>
      <p class="text-2xl">{{ order.header?.number }}</p>
      <p class="text-xs">#ME{{ order.header?.serial }}</p>
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col md:flex-row justify-between py-2 px-4 min-w-0">
      <div class="flex flex-col flex-1 min-w-0 max-w-full">
        <p class="text-xl font-semibold leading-7">
          {{ order.header?.buyer }}
        </p>
        <p class="icon-text-neutral mt-2">
          <img :src="user">{{ order.header?.contact.name }}</img>
        </p>

        <!-- Contact -->
        <div class="flex flex-col md:flex-row lg:flex-wrap gap-2">
          <div class="contact-item">
            <img :src="envelope" /> {{ order.header?.contact.email }}
          </div>
          <div class="contact-item">
            <img :src="phone" /> {{ order.header?.contact.phone }}
          </div>
          <div class="contact-item">
            <img :src="fax" /> {{ order.header?.contact.fax }}
          </div>
        </div>
      </div>

      <!-- Price / Status -->
      <div class="flex flex-col items-start md:items-end gap-1 mt-4 min-w-[150px]">
        <p class="text-xl font-semibold text-neutral-500 leading-7 whitespace-nowrap">
          {{ order.header?.currency }} {{ order.header?.price }}
        </p>
        <p class="text-xl font-semibold text-green-500 leading-7 whitespace-nowrap">
          {{ order.header?.status }}
        </p>
        <p class="flex fle-row gap-1 text-xs text-neutral-700 leading-[16px] whitespace-nowrap">
          Created at {{ order.header?.createdAt }}
          <img :src="info" />
        </p>
      </div>
    </div>
  </div>
</template>
