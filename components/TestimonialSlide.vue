<template>
  <b-carousel-slide>
    <template #img>
      <img
        class="d-block img-fluid w-100"
        :src="image"
        :alt="name"
      >
    </template>
    <div class="testimonial-content">
      <h3 class="testimonial-content__quote">"{{ quote }}"</h3>
      <div class="testimonial-content__author">
        <p class="testimonial-content__name">{{ name }}</p>
        <p class="testimonial-content__position">{{ position }}, {{ company }}</p>
        <div class="testimonial-content__rating">
          <b-icon
            v-for="n in rating"
            :key="n"
            icon="star-fill"
            class="testimonial-content__star"
          ></b-icon>
        </div>
      </div>
    </div>
  </b-carousel-slide>
</template>

<script>
export default {
  name: 'TestimonialSlide',
  props: {
    quote: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 5,
      validator: value => value >= 1 && value <= 5
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial-content {
  text-align: center;
  padding: 2rem;
  color: white;

  &__quote {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  &__author {
    margin-top: 1rem;
  }

  &__name {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  &__position {
    font-size: 1rem;
    opacity: 0.9;
  }

  &__rating {
    margin-top: 1rem;
  }

  &__star {
    color: #ffd700;
    margin: 0 0.25rem;
  }
}
</style>