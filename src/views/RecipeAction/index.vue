<template>
    <div class="recipe-action container">
        <div class="recipe-action__title">
            {{actionTitle}}
        </div>
        <div class="recipe-action__subtitle">
            Recipe name
        </div>
        <Input class="recipe-action__input" placeholder="Ex. Cheesecake" @input="newRecipe.name = $event" />
        <div class="recipe-action__subtitle">
            Recipe description
        </div>
        <Textarea class="recipe-action__input" placeholder="This is a easy recipe you can make In under 5 mins..."
            @textarea="newRecipe.text = $event" />
        <div class="recipe-action__subtitle">
            Ingredients
        </div>
        <div class="recipe-action__ingredient" v-for="(ingredient, i) in newRecipe.ingredients" :key="i + 'A'">
            <Input :value="ingredient" :disabled="true" />
            <div class="recipe-action__delete-field" @click="removeIngredient(i)">
                <img src="@/assets/images/times-solid.svg">
            </div>
        </div>
        <div class="recipe-action__ingredient">
            <Input placeholder="3 eggs" :value="newIngredient" @input="newIngredient = $event" />
            <div class="recipe-action__add-field" @click="addIngredient">
                <img src="@/assets/images/plus-solid.svg">
            </div>
        </div>
        <div class="recipe-action__subtitle">
            Steps
        </div>
        <div class="recipe-action__step" v-for="(step, i) in newRecipe.steps" :key="i + 'B'">
            <Textarea :value="step" :disabled="true"/>
            <div class="recipe-action__delete-field" @click="removeStep(i)">
                <img src="@/assets/images/times-solid.svg">
            </div>
        </div>
        <div class="recipe-action__step">
            <Textarea placeholder="Preaheat the oven at..." :value="newStep" @textarea="newStep = $event"/>
            <div class="recipe-action__add-field" @click="addStep">
                <img src="@/assets/images/plus-solid.svg">
            </div>
        </div>
        <Button name="Add Recipe" @click.native="createRecipe"/>
    </div>
</template>

<script>
    import Input from '@/components/Input'
    import Textarea from '@/components/Textarea'
    import Button from '@/components/Button'

    import {mapActions} from 'vuex'

    export default {
        components: {
            Input,
            Textarea,
            Button
        },
        data() {
            return {
                newRecipe: {
                    name: '',
                    text: '',
                    slug: '',
                    ingredients: [],
                    steps: []
                },
                newIngredient: '',
                newStep: ''
            }
        },
        methods: {
            ...mapActions({
                addRecipe: "recipes/addRecipe"
            }),
            addIngredient() {
                if(this.newIngredient != '') {
                    this.newRecipe.ingredients.push(this.newIngredient);
                    this.newIngredient = '';
                }
            },
            removeIngredient(index) {
                this.newRecipe.ingredients.splice(index, 1);
            },
            addStep() {
                if(this.newStep != '') {
                    this.newRecipe.steps.push(this.newStep);
                    this.newStep = '';
                }
            },
            removeStep(index) {
                this.newRecipe.steps.splice(index, 1);
            },
            generateSlug(name) {
                return name.toLowerCase().replace(/ /g, '-');
            },
            createRecipe() {
                if(this.newRecipe.name && this.newRecipe.text && this.newRecipe.ingredients && this.newRecipe.steps)
                {
                    this.newRecipe.slug = this.generateSlug(this.newRecipe.name);
                    this.addRecipe(this.newRecipe);
                    this.$router.push('/');
                }
            }
        },
        computed: {
            actionTitle() {
                if (this.$router.currentRoute.fullPath == '/new-recipe')
                    return 'Create a new recipe';
                else
                    return 'Edit recipe';
            }
        }
    }
</script>

<style lang="scss">
    .recipe-action {
        &__title {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 25px;
        }

        &__subtitle {
            font-size: 24px;
            font-weight: 700;
            margin: 15px 0;
        }

        &__ingredient,
        &__step {
            display: flex;
            align-items: flex-end;
            justify-content: stretch;

            .input {
                flex: 1;
            }

            .textarea {
                flex: 1;
            }
        }

        &__step {
            margin-bottom: 15px;
        }

        &__add-field,
        &__delete-field {
            margin-left: 20px;
            display: inline-block;
            height: 40px;
            width: 40px;
            border-radius: 5px;
            cursor: pointer;

            img {
                max-height: 100%;
                max-width: 100%;
                height: 100%;
                width: 100%;
            }
        }

        &__add-field {
            background-color: #7CFC00;
        }

        &__delete-field {
            background-color: #DC143C;
        }
    }
</style>