<template>
<div>
  <LikeHeader header-text="hello">
    <template v-slot:title><h1>いいね</h1></template>
    <template v-slot:number><h2>{{ number }}</h2></template>
    

  </LikeHeader>
  <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
</div>

</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

//componentのローカル登録
export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  }
}
</script>

