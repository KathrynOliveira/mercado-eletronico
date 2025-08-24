<script>
  export default {
    name: "Badge",
    props: {
      backgroundColor: {
        type: String,
        default: "#EDF3FF",
      },
      color: {
        type: String,
        default: "#1052E0",
      }
    },
  };
  </script>

<template>
    <span
      class="inline-flex items-center rounded-full text-white"
      :style="{ backgroundColor: backgroundColor, color: color }"
    >
      <slot />
    </span>
  </template>
  
  <style scoped>
  span {
    font-family: Roboto-Medium, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    padding: 2px 8px;
  }
  </style>
  