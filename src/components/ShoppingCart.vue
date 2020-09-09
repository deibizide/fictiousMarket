<template>
    <div class="shopping-cart" @mouseleave="isVisible = false">
        <div class="shopping-cart__counter">
            <span>{{ itemsInBasket }}</span>
        </div>
        <font-awesome-icon
            @mouseover="isVisible = true"
            class="shopping-cart__font-awesome"
            icon="shopping-cart"
            size="2x"
        />
        <div class="shopping-cart__list" v-if="isVisible">
            <p v-if="!itemsInBasket">Your basket is empty</p>
            <ul v-for="(product, i) in products" :key="i">
                <li class="shopping-cart__product-list">
                    <div>
                        {{ product.name }} - <span> {{ product.amount }} * {{ product.price }} EUR</span>
                    </div>
                    <span><Button text="X" :clickHandler="() => deleteProductFromBasket(i)" /></span>
                </li>
            </ul>
            <p>
                Total: <span>{{ totalPrice | toPrice }}</span> EUR
            </p>
        </div>
    </div>
</template>

<script>
import Button from './../components/Button';

export default {
    props: ['products'],

    components: {
        Button,
    },

    filters: {
        toPrice(value) {
            return value.toFixed(2);
        },
    },

    methods: {
        deleteProductFromBasket(i) {
            this.products.splice(i, 1);
        },
    },
    computed: {
        totalPrice() {
            let total = 0;

            this.products.map(product => {
                total += product.price * product.amount;
            });

            return total;
        },
        itemsInBasket() {
            let items = 0;

            this.products.map(product => {
                items += product.amount;
            });

            return items;
        },
    },

    data() {
        return {
            isVisible: false,
            times: 0,
        };
    },
};
</script>

<style lang="scss">
.shopping-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        font-weight: 900;
    }
    &__counter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--blue);
        text-align: center;
        color: var(--white);
        margin: -1px 10px;
        span {
            font-size: 12px;
        }
    }
    &__product-list {
        display: flex;
        justify-content: space-between;
    }
    &__font-awesome {
        cursor: pointer;
        z-index: -10;
    }
    &__list {
        position: absolute;
        right: 50px;
        background-color: var(--white);
        box-shadow: var(--boxShadowContainer);
        padding: 20px;
        width: 250px;
        ul {
            list-style-type: none;
            padding: 0px;
        }
    }
}

@media (max-width: 876px) {
    .shopping-cart {
        justify-content: flex-start;
        &__list {
            left: 20px;
        }
    }
}
</style>