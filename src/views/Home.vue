<template>
    <div class="home container">
        <div class="home__arrow">
            <img src="@/assets/images/long-arrow-alt-up-solid.svg">
        </div>

        <div class="home__title">
            Searching through your favorite recipes has never been easier!
        </div>
        <img class="home__image" src="@/assets/images/home-image.png" alt="Suriaki">
        <div class="home__text">
            With <strong>SelfCook</strong> you can make your own recipe book. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim quam itaque consectetur quae et! Distinctio expedita quae architecto sunt fugiat!
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .home {
        &__arrow {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 75px;
            left: 38px;
            animation-name: home-arrow-animation;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            z-index: -1;

            img {
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
            }
        }

        &__title {
            font-size: 30px;
            font-weight: 700;

        }

        &__image {
            display: block;
            margin: 0 auto;
            max-width: 500px;
            width: 100%;
        }

        &__text {
            margin-top: 15px;
            font-size: 20px;
        }
    }

    @keyframes home-arrow-animation {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(10px);
        }

        100% {
            transform: translateY(0);
        }
    }
</style>