<template>
  <div class="service-card">
    <b-icon :icon="icon" class="service-card__icon"></b-icon>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <b-button :to="link" variant="outline-primary">Mehr erfahren</b-button>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
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
.service-card {
  text-align: center;
  padding: 2.5rem;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #007bff;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1.5rem;
  }
}
</style>