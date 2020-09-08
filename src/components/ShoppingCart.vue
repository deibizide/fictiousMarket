<template>
    <div class="shoppingCart" @mouseover="isVisible = true" @mouseleave="isVisible = false">
        <div class="shoppingCart__items-counter">
            <span>10</span>
        </div>
        <font-awesome-icon class="shoppingCart__font-awesome" icon="shopping-cart" size="2x" />
        <div class="shoppingCart__list" v-if="isVisible">
            <ul v-for="(product, i) in productsSelected" :key="i">
                <li>
                    {{ product.name }} <span>{{ product.price }} EUR</span>
                </li>
            </ul>
            <p>Total: <span>400</span> EUR</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['productsSelected', 'priceSelected'],
    data() {
        return {
            isVisible: false,
            times: 0,
        };
    },
};
</script>

<style lang="scss">
.shoppingCart {
    span {
        font-weight: 900;
    }
    cursor: pointer;
    &__items-counter {
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

    &__font-awesome {
        z-index: -10;
    }
    &__list {
        position: absolute;
        right: 50px;
        background-color: var(--white);
        box-shadow: var(--boxShadowContainer);
        padding: 20px;
        width: 140px;
        ul {
            list-style-type: none;
            padding: 0px;
        }
    }
}

@media (max-width: 876px) {
    .shoppingCart {
        &__list {
            left: 20px;
        }
    }
}
</style>