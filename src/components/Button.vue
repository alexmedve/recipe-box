<template>
  <div class="button">
      {{name}}
  </div>
</template>

<script>
export default {
    props: {
        name: {
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
.button {
    display: inline-block;
    width: auto;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid $color-white;
    padding: 10px 20px;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: $color-primary;
    }
}
</style>