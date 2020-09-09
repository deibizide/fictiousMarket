<template>
    <div class="product">
        <img class="product__img" :src="product.image" :alt="product.name" />
        <div class="product__info">
            <h2 class="product__info__name">{{ product.name }}</h2>
            <p class="product__info__price">{{ product.price | toPrice }} EUR</p>
        </div>
        <div class="product__cta">
            <Button
                text="Add To Cart"
                :clickHandler="() => addToBasket(product.name, product.price)"
                classnames="product__cta__add"
                :id="index"
            />
        </div>
    </div>
</template>

<script>
// components
import Button from './../components/Button';

export default {
    props: ['product', 'index'],

    components: {
        Button,
    },

    filters: {
        toPrice(value) {
            return value.toFixed(2);
        },
    },

    methods: {
        addToBasket(name, price) {
            this.$emit('add-to-basket', name, price);
        },
    },
};
</script>

<style lang="scss">
@import '../variables.scss';

.product {
    display: flex;
    align-items: center;
    box-shadow: var(--boxShadowContainer);
    margin: 30px 0px;

    &__img {
        width: 150px;
        height: 150px;
    }

    &__info {
        margin-left: 50px;

        &__name {
            margin-top: 0px;
            font-weight: 300;
            margin-bottom: 0;
        }

        &__price {
            font-weight: 700;
            font-size: 30px;
            margin: 0px;
        }
    }

    &__cta {
        margin-left: auto;
        padding: 5px;

        &__add {
            width: 130px;
            height: 40px;
            background-color: var(--yellow);
            border-color: var(--yellow);
            color: var(--black);
            &:hover {
                background-color: var(--hoverYellow);
                border-color: var(--hoverYellow);
            }
        }
    }
}

@media (max-width: 876px) {
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__img {
            width: 100%;
            height: 100%;
        }

        &__info {
            text-align: center;
            margin-left: 0px;
        }

        &__cta {
            margin: 0 auto;
        }
    }
}
</style>