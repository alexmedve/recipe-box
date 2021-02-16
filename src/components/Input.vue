<template>
    <div class="input__container">
        <div class="input__label">{{label}}</div>
        <input type="text" class="input__field" :placeholder="placeholder"
            @input="$emit('input', $event.target.value)" :value="value">
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
        &__label {
            color: $color-white;
            font-size: 18px;
            margin-bottom: 10px;
        }

        &__field {
            width: 100%;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 5px;
            background-color: $color-white;

            &:focus {
                outline: none;
            }
        }
    }
</style>