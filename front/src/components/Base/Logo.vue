<script setup>

</script>

<template>
    <div class="logo">
        <div class="logo__img">
            <div class="logo__circle logo__circle--secondary">&nbsp;</div>
            <div class="logo__circle logo__circle--primary">&nbsp;</div>
        </div>
        <span class="logo__text">Payte</span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.logo {
    padding: 1rem;
    padding-top: 2rem;
    display: flex;
    align-items: center;

    @media screen and (min-width: $bp-desktop) {
        padding: 4rem 2rem;
    }

    &__img {
        display: flex;
        margin-right: 1.5rem;
    }

    &__circle {

        border-radius: 99px;

        &--secondary {
            background-color: $color-logo-secondary;
            height: 30px;
            width: 30px;
        }

        &--primary {
            background-color: $color-accent;
            margin-left: -16px;
            height: 33px;
            width: 33px;
            border: 3px solid white;
        }
    }

    &__text {
        font-size: 2.6rem;
        font-weight: 600;
    }

}
</style>