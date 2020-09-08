<template>
    <div class="productFilter">
        <select>
            <option value="">Choose an option</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
        </select>
    </div>
</template>

<style lang="scss">
.productFilter {
    margin: var(--container);
}

@media (max-width: 876px) {
    .productFilter {
        margin: 10px 50px;
    }
}
</style>