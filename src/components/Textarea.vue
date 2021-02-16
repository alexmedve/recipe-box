<template>
    <div class="textarea">
        <textarea class="textarea__field" cols="30" rows="10" :placeholder="placeholder" :value="value"></textarea>
    </div>
</template>

<script>
export default {
    props: {
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

<style lang="scss">
.textarea {
    &__field {
        resize: vertical;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        border-radius: 5px;
        background-color: $color-white;

        &:focus {
            outline: none;
        }
    }
}
</style>