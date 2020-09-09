<template>
    <div class="search-input">
        <input type="text" v-model="query" class="search-input__field" placeholder="Search" @keyup="searchProduct" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
        };
    },
    methods: {
        searchProduct() {
            this.$parent.$emit('user-search', this.query);
        },
    },
};
</script>

<style lang="scss">
.search-input {
    display: flex;
    align-items: center;
    &__field {
        width: 350px;
        height: 50px;
        font: inherit;
        box-shadow: var(--boxShadowContainer);
        border: 0;
        outline-color: var(--yellow);
        padding: 0px;
    }
    ::placeholder {
        padding-left: 10px;
    }
}

@media (max-width: 876px) {
    .search-input {
        &__field {
            width: 100%;
        }
    }
}
</style>