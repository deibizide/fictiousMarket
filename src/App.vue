<template>
    <div id="app">
        <ProductList />
    </div>
</template>

<script>
import ProductList from './layouts/ProductList.vue';

export default {
    name: 'App',
    components: {
        ProductList,
    },
};
</script>

<style lang="scss">
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    margin: var(--container);
}

@media (max-width: 876px) {
    body {
        margin: var(--responsive-container);
    }
}
</style>
