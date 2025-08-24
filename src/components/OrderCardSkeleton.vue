<script>
  export default {
    name: "OrderCardSkeleton",
    props: {
      loading: {
        type: Boolean,
        default: true
      }
    }
  };
</script>

<template>
    <div v-if="loading" class="w-full h-auto md:h-[110px] flex flex-col md:flex-row gap-6 card cursor-pointer animate-pulse" title="Carregando...">
      <!-- Pre Order -->
      <div class="w-full md:w-[200px] h-[110px] bg-gray-300 rounded-tr-lg rounded-br-lg flex flex-col justify-center px-4">
        <div class="h-5 bg-gray-200 rounded mb-2 w-1/3"></div>
        <div class="h-7 bg-gray-200 rounded mb-2 w-1/2"></div>
        <div class="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
  
      <!-- Content -->
      <div class="flex-1 flex flex-col md:flex-row justify-between py-2 px-4 min-w-0">
        <div class="flex flex-col flex-1 min-w-0 max-w-full gap-2">
          <div class="h-6 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
  
          <!-- Contact -->
          <div class="flex flex-col md:flex-row lg:flex-wrap gap-2">
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
  
        <!-- Price / Status -->
        <div class="flex flex-col items-start md:items-end gap-1 mt-4 min-w-[150px]">
          <div class="h-5 bg-gray-200 rounded w-1/3"></div>
          <div class="h-5 bg-gray-200 rounded w-1/4"></div>
          <div class="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
</template>

  