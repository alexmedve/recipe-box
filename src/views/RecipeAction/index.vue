<template>
    <div class="recipe-action container">
        <div class="recipe-action__title">
            {{actionTitle}}
        </div>
        <div class="recipe-action__subtitle">
            Recipe name
        </div>
        <Input class="recipe-action__input" value=""/>
        <div class="recipe-action__subtitle">
            Recipe description
        </div>
        <Textarea class="recipe-action__input" />
        <div class="recipe-action__subtitle">
            Ingredients
        </div>
    </div>
</template>

<script>
    import Input from '@/components/Input'
    import Textarea from '@/components/Textarea'

    export default {
        components: {
            Input,
            Textarea
        },
        data() {
            return {}
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
            margin-bottom: 15px;
        }

        &__input {
            margin-bottom: 15px;
        }
    }
</style>