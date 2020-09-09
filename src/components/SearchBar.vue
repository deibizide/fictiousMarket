<template>
    <div class="search-bar">
        <SearchInput />
        <ProductSort />
        <ShoppingCart :products="products" />
    </div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';
import SearchInput from './SearchInput.vue';
import ProductSort from './ProductSort.vue';

export default {
    props: ['setSearch', 'products'],

    components: {
        SearchInput,
        ShoppingCart,
        ProductSort,
    },
};
</script>

<style lang="scss" scoped>
.search-bar {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 876px) {
    .search-bar {
        flex-direction: column;
    }
}
</style>