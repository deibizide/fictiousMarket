<template>
    <button class="btn" :class="btnStyle" @click="btnClickHandler">{{ btnText }}</button>
</template>

<script>
export default {
    props: ['btnText', 'btnClickHandler', 'btnStyle'],
};
</script>



<style lang="scss">
@import '../variables.scss';
.btn {
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.btn__add-to-cart {
    width: 130px;
    height: 40px;
    background-color: var(--yellow);
    border-color: var(--yellow);
    color: var(--black);
}

.btn__add-to-cart:hover {
    background-color: var(--hoverYellow);
    border-color: var(--hoverYellow);
}
</style>