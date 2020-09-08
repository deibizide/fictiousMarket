<template>
    <div class="search">
        <input type="text" v-model="search" class="search__input" placeholder="Search" @keyup="searchProduct" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
        };
    },
    methods: {
        searchProduct() {
            this.$emit('user-search', this.search);
        },
    },
};
</script>

<style lang="scss">
.search {
    &__input {
        width: 350px;
        font: inherit;
        box-shadow: var(--boxShadowContainer);
        border: 0;
        outline: 0;
        padding: 22px 0px;
        margin-bottom: 10px;
    }
    ::-webkit-input-placeholder {
        text-align: center;
    }

    :-moz-placeholder {
        text-align: center;
    }

    ::-moz-placeholder {
        text-align: center;
    }

    :-ms-input-placeholder {
        text-align: center;
    }
}

@media (max-width: 876px) {
    .search {
        &__input {
            width: 100%;
        }
    }
}
</style>