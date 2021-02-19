<template>
    <div class="navigation">
        <!-- Navbar -->
        <div class="navigation__button" @click="sidebarActive = !sidebarActive">
            <img src="@/assets/images/book-open-solid.svg" v-if="!sidebarActive">
            <img src="@/assets/images/times-solid.svg" v-else>
        </div>
        <div class="navigation__title" @click="goToHome">
            SelfCook
        </div>
        <!-- Sidemenu  -->
        <transition name="slide-sidebar">
            <div class="navigation__sidebar" v-if="sidebarActive">
                <div class="navigation__sidebar-container">
                    <Input placeholder="Ex. Roasted beans" label="Search for a recipe" @input="search = $event" />
                    <div class="navigation__recipes-list" v-if="filteredRecipes != 0">
                        <div class="navigation__recipe" v-for="(recipe, i) in filteredRecipes" :key="i"
                            @click="goToRecipe(recipe.slug)">{{recipe.name}}</div>
                    </div>
                    <div class="navigation__no-recipes" v-else>
                        You don't have any saved recipes!
                    </div>
                    <Button class="navigation__add-button" name="New Recipe" @click.native="goToNewRecipe"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Input from './Input';
    import Button from './Button';

    import {mapGetters} from 'vuex';

    export default {
        components: {
            Input,
            Button
        },
        data() {
            return {
                sidebarActive: false,
                search: ''
            }
        },
        computed: {
            ...mapGetters({
                recipes: "recipes/recipes"
            }),
            filteredRecipes() {
                return this.recipes.filter(recipe => {
                    return recipe.name.toLowerCase().includes(this.search.toLowerCase());
                })
            }
        },
        methods: {
            goToRecipe(slug) {
                let nextRoute = '/recipe/' + slug;
                if (nextRoute != this.$router.currentRoute.fullPath)
                    this.$router.push(nextRoute);
            },
            goToHome() {
                if(this.$router.currentRoute.fullPath != '/')
                    this.$router.push('/');
            },
            goToNewRecipe() {
                if(this.$router.currentRoute.fullPath != '/new-recipe')
                    this.$router.push('/new-recipe');
            },
            testEvent($event) {
                console.log($event);
            }
        },
        watch: {
            $route() {
                this.sidebarActive = false; 
            }
        }
    }
</script>

<style lang="scss">
    .navigation {
        position: fixed;
        top: 0;
        left: 0;
        background: $color-secondary;
        padding: 0 40px;
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;

        &__button {
            font-weight: 700;
            cursor: pointer;
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
            max-width: 420px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;

            @media only screen and (max-width: 700px) {
                max-width: 100%;
            };
        }

        &__sidebar-container {
            padding: 25px 0;
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        &__recipes-list {
            height: 70%;
            width: 100%;
            overflow-y: auto;
            margin-top: 20px;
            padding-bottom: 10px;
        }

        &__recipe {
            padding: 10px 20px;
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

        &__no-recipes {
            margin: 15px 0;
            font-size: 18px;

        }

        &__add-button {
            margin: 10px auto;
            margin-bottom: 0;
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