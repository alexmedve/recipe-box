<template>
    <div class="input">
        <div class="input__label">{{label}}</div>
        <input type="text" class="input__field" :placeholder="placeholder"
            @input="$emit('input', $event.target.value)" :value="value" :disabled="disabled">
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
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
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