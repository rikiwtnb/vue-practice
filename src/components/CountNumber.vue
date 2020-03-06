<template>
<div>
  <h2>{{ title | lowerCase | upperCase }}</h2>
  <p>{{ subTitle | upperCase }} </p>
  <p>{{ number }}</p>
  <button @click="number++">increment</button>
</div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],  
};
</script>