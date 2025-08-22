<template>
    <div class="max-w-[1312px] w-full h-auto md:h-[110px] flex flex-col md:flex-row gap-6 bg-white shadow cursor-pointer rounded-lg">
      <!-- Parte azul (lado esquerdo) -->
      <div class="w-full md:w-[200px] h-[110px] bg-blue-600 rounded-tr-lg rounded-br-lg flex flex-col justify-center text-white px-4">
        <p class="text-lg">Pre-Order</p>
        <p class="text-2xl">{{ order.header?.number }}</p>
        <p class="text-xs">#ME{{ order.header?.serial }}</p>
      </div>
  
      <!-- Conteúdo do card (lado direito) -->
      <div class="flex-1 flex flex-col md:flex-row justify-between py-2 px-4">
        <!-- Primeiras 3 linhas -->
        <div class="flex flex-col items-start gap-1">
          <p class="text-xl font-semibold leading-7">{{ order.header?.buyer }}</p>
          <p class="text-xs text-neutral-500">{{ order.header?.contact.name }}</p>
          <div class="w-[536px] h-[16px] flex items-center gap-4">
    <!-- Email -->
    <div class="flex items-center gap-1">
      <span class="material-icons text-[16px] text-neutral-500">email</span>
      <span class="text-xs text-neutral-500">{{ order.header?.contact.email }}</span>
    </div>

    <!-- Phone -->
    <div class="flex items-center gap-1">
      <span class="material-icons text-[16px] text-neutral-500">phone</span>
      <span class="text-xs text-neutral-500">{{ order.header?.contact.phone }}</span>
    </div>

    <!-- Fax -->
    <div class="flex items-center gap-1">
      <span class="material-icons text-[16px] text-neutral-500">print</span>
      <span class="text-xs text-neutral-500">{{ order.header?.contact.fax }}</span>
    </div>
  </div>
        </div>
  
        <!-- Últimas 3 linhas -->
        <div class="flex flex-col items-end gap-1 mt-4 md:mt-0">
          <p class="text-xl font-semibold text-neutral-500 leading-7">{{ order.header?.currency }} {{ order.header?.price }}</p>
          <p class="text-xl font-semibold text-green-500 leading-7">{{ order.header?.status }}</p>
          <p class="text-xs text-neutral-700 leading-[16px]">Created at {{ order.header?.createdAt }}</p>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: { order: Object }
  }
  </script>
  