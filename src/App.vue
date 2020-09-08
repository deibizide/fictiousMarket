<template>
    <div id="app">
        <ProductList />
    </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
    name: 'App',
    components: {
        ProductList,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
}
</style>
