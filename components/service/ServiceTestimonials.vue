<template>
  <section class="service-detail__section service-detail__section--testimonials">
    <b-container>
      <h2 class="section__title text-white">Kundenstimmen</h2>
      <b-row>
        <b-col lg="8" class="mx-auto">
          <b-carousel
            id="testimonials-carousel"
            :interval="5000"
            controls
            indicators
            background="#2d3436"
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="testimonial">
                <div class="testimonial__quote">"{{ testimonial.quote }}"</div>
                <div class="testimonial__author">
                  <div class="testimonial__name">{{ testimonial.name }}</div>
                  <div class="testimonial__position">{{ testimonial.position }}, {{ testimonial.company }}</div>
                </div>
              </div>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial {
  text-align: center;
  padding: 2rem;
  color: white;

  &__quote {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 2rem;
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
    opacity: 0.8;
  }
}
</style>