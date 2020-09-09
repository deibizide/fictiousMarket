<template>
    <div class="productList">
        <h1>Fictious Market</h1>
        <div v-if="errMsg">There is an error: {{ errMsg }}</div>
        <div v-if="products">
            <SearchBar @user-search="setSearch" @products-sort="setSort" :products="productsSelected" />
            <div v-for="(product, index) in filterByProduct" :key="product.id">
                <Product :product="product" :index="index" @add-to-basket="addToBasket" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// components
import Product from './../components/Product';
import SearchBar from './../components/SearchBar';

export default {
    components: {
        Product,
        SearchBar,
    },

    data() {
        return {
            apiUrl: 'https://s3.eu-central-1.amazonaws.com/code-challenge-shopping-cart/cart.json',
            corsHeader: 'https://cors-anywhere.herokuapp.com',
            errMsg: null,

            products: [],
            productsSelected: [],

            searchQuery: '',
            sortBy: '',
        };
    },

    computed: {
        filterByProduct: function () {
            let products = [...this.products];
            if (this.sortBy === 'low') return this.sortByLow(products);
            if (this.sortBy === 'high') return this.sortByHigh(products);
            return this.filterByQuery(products);
        },
    },

    methods: {
        async getProduct() {
            await axios
                .get(`${this.corsHeader}/${this.apiUrl}`)
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    this.errorMsg = error;
                });
        },

        addToBasket(name, price) {
            const product = {
                name,
                price,
                amount: 1,
            };

            const inBasketIndex = this.findInBasketIndex(name);

            if (inBasketIndex > -1) {
                this.productsSelected[inBasketIndex].amount += 1;
                return;
            }

            this.productsSelected.push(product);
        },

        findInBasketIndex(name) {
            return this.productsSelected.map(product => product.name).indexOf(name);
        },

        setSearch(query) {
            this.searchQuery = query;
        },

        setSort(sortBy) {
            this.sortBy = sortBy;
        },

        filterByQuery(value) {
            return value.filter(item => item.name.match(this.searchQuery));
        },

        sortByLow(products) {
            const sortedProducts = products.sort((a, b) => a.price - b.price);
            return this.filterByQuery(sortedProducts);
        },

        sortByHigh(products) {
            const sortedProducts = products.sort((a, b) => b.price - a.price);
            return this.filterByQuery(sortedProducts);
        },
    },
    mounted() {
        this.getProduct();
    },
};
</script>

<style lang="scss">
</style>
