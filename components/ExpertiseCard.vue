<template>
  <div class="expertise-card">
    <h3 class="expertise-card__title">{{ title }}</h3>
    <p class="expertise-card__description">{{ description }}</p>
    <b-button :to="link" variant="outline-secondary">Entdecken</b-button>
  </div>
</template>

<script>
export default {
  name: 'ExpertiseCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.expertise-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #007bff;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1.5rem;
  }
}
</style>