<template>
  <span class="icon" :class="sizeType"></span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      size: {
        type: Number
      },
      classType: {
        type: Number
      }
    },
    created () {
      // 定义标题栏的打折类型定义不同的class样式
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    computed: {
      sizeType () {
        return 'size-' + this.size + ' ' + this.classMap[this.classType];
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .icon
    display: inline-block
    vertical-align: top
    background-repeat: no-repeat
    &.size-1
      width: 12px
      height: 12px
      margin-right: 4px
      background-size: 12px 12px
      &.decrease
        bg-image('decrease_1')
      &.discount
        bg-image('discount_1')
      &.guarantee
        bg-image('guarantee_1')
      &.invoice
        bg-image('invoice_1')
      &.special
        bg-image('special_1')
    &.size-2
      width: 16px
      height: 16px
      margin-right: 6px
      background-size: 16px 16px
      &.decrease
        bg-image('decrease_2')
      &.discount
        bg-image('discount_2')
      &.guarantee
        bg-image('guarantee_2')
      &.invoice
        bg-image('invoice_2')
      &.special
        bg-image('special_2')
    &.size-3
      width: 12px
      height: 12px
      margin-right: 2px
      background-size: 12px 12px
      &.decrease
        bg-image('decrease_3')
      &.discount
        bg-image('discount_3')
      &.guarantee
        bg-image('guarantee_3')
      &.invoice
        bg-image('invoice_3')
      &.special
        bg-image('special_3')
    &.size-4
      width: 16px
      height: 16px
      margin-right: 6px
      background-size: 16px 16px
      &.decrease
        bg-image('decrease_4')
      &.discount
        bg-image('discount_4')
      &.guarantee
        bg-image('guarantee_4')
      &.invoice
        bg-image('invoice_4')
      &.special
        bg-image('special_4')

</style>

