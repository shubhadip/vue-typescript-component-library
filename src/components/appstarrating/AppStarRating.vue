<template>
<div class="app-star-rating">
  <ul :class="classNames">
    <li @click="rate(star, $event)" v-for="(star, i) in parseInt(this.$props.maxRating)" :class="[starSize, starType(star, i)]" :key="star" @mouseover="hovered = star" @mouseout="hovered = 0" class="app-star-rating__star"></li>
  </ul>
  <div v-if="this.$props.showCounter" class="app-star-rating__info">{{ stars }} / {{ this.$props.maxRating }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

enum AppButtonSizes {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export default defineComponent({
  name: 'AppStarRating',
  props: {
    /**
     * Max Limit of the rating
     * @values Number
     * @default 5
     */
    maxRating: {
      type: Number,
      default: 5
    },
    /**
     * Will show the number i.e 3/5 or 2/5
     * @values Boolean
     * @default false
     */
    showCounter: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    /**
     * The size of the star
     * @values small, medium, large
     * @default medium
     */
    size: {
      type: String,
      default: AppButtonSizes.MEDIUM
    },
    /**
     * This will make the component readOnly
     * which prevents user from changing rating on click
     * @values Boolean
     * @default false
     */
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      stars: 0,
      hovered: 0
    }
  },
  methods: {
    /**
     * Gets called when the user clicks on any rating
     * returns a number to parent component
     * @params star : number
     */
    rate (star: number, event: Event): void {
      if (star <= this.$props.maxRating && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
        this.$emit('input', star, event)
      }
    },
    /**
     * Compute class according to the stars
     * @params star : number, index : number
     * @returns string
     */
    starType (star: number, index: number): string | undefined {
      let classes
      if (star <= this.stars) {
        classes = 'active'
      } else if (this.stars - index > 0 && this.stars - index < 1) {
        classes = 'half'
      } else if (star <= this.hovered) {
        classes = 'hovered'
      }

      return classes
    }
  },
  created () {
    this.stars = this.$props.value
    /**
     * Changing / Limiting stars to maxRating
     */
    if (this.stars > this.maxRating) {
      this.$emit('input', this.maxRating)
    }
  },
  watch: {
    value (newVal: number): void {
      this.stars = newVal
      if (newVal > this.maxRating) {
        this.$emit('input', this.maxRating)
      }
    }
  },
  computed: {
    starSize (): string {
      const sizeClass = `app-star-rating__star--${this.$props.size}`
      return sizeClass
    },
    classNames (): string[] {
      const readOnly = this.readOnly ? 'read-only' : ''
      return ['app-star-rating__stars', readOnly]
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '../assets/styles/css/app-partials.css';

.app-star-rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-star-rating__stars {
  padding: 0;
  margin: 0;
}

.read-only>.app-star-rating__star {
  pointer-events: none;
}

$starMedium: 30px;
$starSmall: 20px;
$starLarge: 50px;

.app-star-rating__star {
  display: inline-block;
  cursor: pointer;
  margin-left: 5px;
  box-sizing: border-box;
  background-image: url('../../assets/img/icons/star-default.svg');
  transition: all 0.2s ease;
  background-size: cover;

  &.hovered,
  &.active {
    background-image: url('../../assets/img/icons/star-active.svg');
  }

  &.half {
    background-image: url('../../assets/img/icons/star-half.svg');
  }

  &:first-child {
    margin-left: 0;
  }

  &--sm {
    width: $starSmall;
    height: $starSmall;
  }

  &--md {
    width: $starMedium;
    height: $starMedium;
  }

  &--lg {
    width: $starLarge;
    height: $starLarge;
  }
}

.app-star-rating__info {
  margin-left: 20px;
}
</style>
