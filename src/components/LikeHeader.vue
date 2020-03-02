<template>
    <div>
        <slot name="title">デフォルトのコンテンツ</slot>
        <slot naem="number"></slot>
        <slot></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>