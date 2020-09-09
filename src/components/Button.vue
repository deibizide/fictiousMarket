<template>
    <button :class="['button', classnames]" @click="clickHandler">{{ text }}</button>
</template>

<script>
export default {
    props: ['text', 'clickHandler', 'classnames'],
};
</script>

<style lang="scss">
@import '../variables.scss';

.button {
    border-radius: 5px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}
</style>