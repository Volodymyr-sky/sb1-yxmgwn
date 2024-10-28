<template>
  <section id="features" class="service-detail__section service-detail__section--gray">
    <b-container>
      <h2 class="section__title">Features & Vorteile</h2>
      <b-row>
        <b-col lg="6">
          <div class="features-list">
            <h3 class="features-list__title">
              <b-icon icon="check-circle-fill"></b-icon> Features
            </h3>
            <ul class="features-list__items">
              <li v-for="(feature, index) in features" :key="`feature-${index}`">
                {{ feature }}
              </li>
            </ul>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="features-list">
            <h3 class="features-list__title">
              <b-icon icon="star-fill"></b-icon> Vorteile
            </h3>
            <ul class="features-list__items">
              <li v-for="(benefit, index) in benefits" :key="`benefit-${index}`">
                {{ benefit }}
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true
    },
    benefits: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.features-list {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    .b-icon {
      margin-right: 0.75rem;
      color: #007bff;
    }
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #e9ecef;
      color: #6c757d;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #007bff;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>