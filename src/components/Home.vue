<template>
<div>
  <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
  <h2>{{ title | lowerCase | upperCase }}</h2>
  <p>{{ subTitle | upperCase }} </p>
  <p>{{ number }}</p>
  <button @click="number++">increment</button>
  <CountNumber></CountNumber>
</div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";


export default {
  mixins: [tokyoNumber],
  components: {
      CountNumber
  },
  directives: {
    border(el, binding) {
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      //引数の処理
      el.style.borderStyle = binding.arg;
      //修飾子の処理
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
};
</script>