<template>
    <div class="product-sort">
        <select v-model="sortBy">
            <option value="" disabled>Choose an option</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortBy: '',
        };
    },

    methods: {
        sortProducts() {
            this.$parent.$emit('products-sort', this.sortBy);
        },
    },

    watch: {
        sortBy: {
            handler: 'sortProducts',
        },
    },
};
</script>

<style lang="scss">
.product-sort {
    margin: var(--container);
}

@media (max-width: 876px) {
    .product-sort {
        margin: 20px 0px;
    }
}
</style>