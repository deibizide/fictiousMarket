<template>
    <div class="productList">
        <div class="productList__header">
            <div class="productList__header--wrapper">
                <Search @user-search="setSearch" />
                <ShoppingCart :productsSelected="productsSelected" :priceSelected="priceSelected" />
            </div>
        </div>
        <ProductFilter />
        <div class="productList__product-info" v-for="(product, index) in sortedArray" :key="product.id">
            <img :src="product.image" :alt="product.name" />
            <div class="productList__product-info--text">
                <span>{{ product.name }}</span>
                <p>{{ product.price }} EUR</p>
            </div>
            <div class="productList__product-info--button">
                <Button
                    btnText="Add To Cart"
                    :btnClickHandler="() => addToBasket(product.name, product.price)"
                    btnStyle="btn__add-to-cart"
                    :id="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// components
import Button from './Button';
import ShoppingCart from './ShoppingCart.vue';
import Search from './Search.vue';
import ProductFilter from './ProductFilter.vue';

export default {
    components: {
        Button,
        ShoppingCart,
        Search,
        ProductFilter,
    },
    data() {
        return {
            url:
                'https://cors-anywhere.herokuapp.com/https://s3.eu-central-1.amazonaws.com/code-challenge-shopping-cart/cart.json',
            name: '',
            products: [],
            productsSelected: [],
            priceSelected: 0,
            errMsg: '',
            searchRequest: '',
        };
    },
    methods: {
        async getProduct() {
            await axios
                .get(this.url)
                .then(product => {
                    this.products = product.data;
                })
                .catch(error => {
                    this.errorMsg = error;
                });
        },
        addToBasket(name, price) {
            const product = {
                name,
                price,
            };
            // const findSelectedProduct = this.productsSelected.find(item => item.name);

            // if (findSelectedProduct) {
            //     this.productsSelected[index].amount++;
            //     console.log('found existing item');
            // }

            this.productsSelected.push(product);
            // console.log(this.productsSelected);
        },
        setSearch(res) {
            this.searchRequest = res;
        },
    },
    computed: {
        filterByProduct: function () {
            return this.products.filter(item => {
                return item.name.match(this.searchRequest);
            });
        },
        sortedArray: function () {
            function compare(a, b) {
                console.log(a);
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            }
            return compare;
        },
    },
    mounted() {
        this.getProduct();
    },
};
</script>

<style lang="scss">
@import '../variables.scss';

.productList {
    &__header {
        margin: var(--container);

        &--wrapper {
            display: flex;
            justify-content: space-between;
        }
    }
    &__product-info {
        display: flex;
        align-items: center;
        box-shadow: var(--boxShadowContainer);
        margin: var(--container);
        padding: 20px;

        &--text {
            margin-left: 50px;

            span {
                font-weight: 300;
                font-size: 23px;
            }

            p {
                font-weight: 700;
                font-size: 30px;
                margin: 0px;
            }
        }

        img {
            width: 150px;
            height: 150px;
        }
        &--button {
            margin-left: auto;
            padding: 5px;
            cursor: pointer;
        }
    }
}

@media (max-width: 876px) {
    .productList {
        &__header {
            margin: 0px;
            &--wrapper {
                display: flex;
                flex-direction: column;
                margin: 0px 50px;
            }
        }
        &__product-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px;

            &--text {
                text-align: center;
                margin-left: 0px;
            }
            img {
                width: 100%;
                height: 100%;
            }
            &--button {
                margin: 0 auto;
            }
        }
    }
}
</style>
