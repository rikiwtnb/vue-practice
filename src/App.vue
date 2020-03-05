<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">title</label>
      <input id="title" type="text" v-model="eventData.title"/>
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
//componentのローカル登録
export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  }
};
</script>

