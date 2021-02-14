<template>
  <Button
    :class="classes"
  >
    <img
      class="icon bg-white"
      src="@/assets/images/right-arrow.svg"
      alt="Next object"
    >
  </Button>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  name: 'NextButton',
  components: {
    Button
  },
  props: {
    classes: {
      type: String,
      required: false,
      default: `
        button
        fixed
        relative
        nextButton
        bg-white
        cursor-pointer
        bottom-1
        center-v
        w-5
        border-none
        outline-none
      `
    }
  }
};
</script>

<style lang="scss" scoped>
  .nextButton {
    border-radius: 50%;
    padding: 1.5rem;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.3);

    &:after {
      content: 'Next';
      z-index: -1;
      position: absolute;
      width: 3rem;
      transform: translateX(-3rem);
      padding: 0.5rem;
      background-color: $white;
      color: $primaryOrange;
      transition: 0.3s ease;
      border-radius: 1rem;
    }

    .icon {
      width: 100%;
      transition: 0.3s ease;
    }

    &:hover,
    &:active {
      .icon {
        transform: translateX(0.2rem);
      }

      &:after {
        transform: translateX(0);
      }
    }
  }
</style>
