<template>
    <div class="navigation">
        <!-- Navbar -->
        <div class="navigation__button" @click="sidebarActive = !sidebarActive">
            <img src="@/assets/images/book-open-solid.svg" v-if="!sidebarActive">
            <img src="@/assets/images/times-solid.svg" v-else>
        </div>
        <div class="navigation__title" @click="$router.push('/')">
            Recipe Book
        </div>
        <!-- Sidemenu  -->
        <transition name="slide-sidebar">
            <div class="navigation__sidebar" v-if="sidebarActive">
                <div class="navigation__sidebar-container">
                    <Input placeholder="Ex. Roasted beans" label="Search for a recipe" />
                    <div class="navigation__recipes-list">
                        <div class="navigation__recipe" v-for="(recipe, i) in recipes" :key="i"
                            @click="$router.push(`/recipe/${recipe.slug}`)">{{recipe.name}}</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Input from './Input'

    export default {
        components: {
            Input
        },
        data() {
            return {
                sidebarActive: true,
                recipes: [{
                        name: 'Friptura de urs',
                        slug: 'friptura-de-urs'
                    },
                    {
                        name: 'Turkey recipe',
                        slug: 'turkey-recipe'
                    },
                    {
                        name: 'Ciorba de burta',
                        slug: 'ciorba-de-burta'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .navigation {
        position: sticky;
        background: $color-secondary;
        padding: 0 40px;
        height: 60px;
        display: flex;
        align-items: center;

        &__button {
            font-weight: 700;
            height: 25px;
            width: 25px;

            img {
                width: 100%;
                height: 100%;
                max-width: 25px;
                max-height: 25px;
            }
        }

        &__title {
            font-weight: 700;
            color: $color-white;
            font-size: 24px;
            margin-left: 20px;
            cursor: pointer;
        }

        &__sidebar {
            position: absolute;
            background: $color-secondary;
            top: 60px;
            left: 0;
            height: calc(100vh - 60px);
            width: 400px;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        &__sidebar-container {
            padding: 25px 0;
            width: 90%;
        }

        &__recipes-list {
            height: 70%;
            width: 100%;
            overflow-y: auto;
            margin-top: 20px;
        }

        &__recipe {
            padding: 10px 20px;
            color: $color-white;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
            transition: all .2s;

            &:hover {
                background-color: $color-primary;
                padding-left: 25px;
            }

            &:not(:last-child) {
                border-bottom: 1px solid $color-white;
            }
        }
    }

    .slide-sidebar-enter-active,
    .slide-sidebar-leave-active {
        transition: all .3s ease;
    }

    .slide-sidebar-enter,
    .slide-sidebar-leave-to {
        transform: translateX(-100%);
    }
</style>