<template>
  <section class="service-detail__section">
    <b-container>
      <h2 class="section__title">Erfolgsgeschichten</h2>
      <b-row>
        <b-col md="6" lg="4" v-for="study in caseStudies" :key="study.id">
          <div class="case-study-card">
            <div class="case-study-card__image">
              <b-img :src="study.image" fluid :alt="study.title"></b-img>
            </div>
            <div class="case-study-card__content">
              <h3 class="case-study-card__title">{{ study.title }}</h3>
              <p class="case-study-card__description">{{ study.description }}</p>
              <div class="case-study-card__results">
                <div v-for="(result, index) in study.results" :key="`result-${study.id}-${index}`" class="case-study-card__result">
                  <div class="case-study-card__number">{{ result.value }}</div>
                  <div class="case-study-card__label">{{ result.label }}</div>
                </div>
              </div>
              <b-button variant="outline-primary" @click="$emit('show-details', study)">
                Mehr erfahren
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    caseStudies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.case-study-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 1.5rem;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1.5rem;
  }

  &__results {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;
  }

  &__result {
    text-align: center;
  }

  &__number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }

  &__label {
    font-size: 0.875rem;
    color: #6c757d;
  }
}
</style>