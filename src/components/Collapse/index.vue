<script>
export default {
  name: "Collapse",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex gap-2">
      <!-- Cabeçalho do collapse -->
      <button
        class="flex items-center justify-center w-5 h-5 rounded-full bg-[#EDF3FF] hover:bg-[#dce7ff] transition-colors"
        @click="toggle" title="Clique para expandir ou recolher"
      >
        <!-- ícone de seta -->
        <svg
          :class="{ 'rotate-180': isOpen }"
          class="w-5 h-5 transition-transform duration-300 text-[#1052E0] cursor-pointer"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <!-- slot do título -->
      <span class="text-base font-semibold items-center cursor-pointer" @click="toggle" title="Clique para expandir ou recolher">
        <slot name="title"></slot>
      </span>
    </div>

    <!-- Conteúdo do collapse -->
    <div v-show="isOpen" class="mt-2 transition-all duration-300">
      <slot />
    </div>
  </div>
</template>
