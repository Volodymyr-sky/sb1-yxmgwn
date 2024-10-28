<template>
  <b-card
    :title="title"
    :img-src="image"
    :img-alt="title"
    img-top
    class="news-card"
  >
    <b-card-text>{{ excerpt }}</b-card-text>
    <div class="news-card__meta">
      <span class="news-card__date">{{ formattedDate }}</span>
      <span class="news-card__category">{{ category }}</span>
    </div>
    <b-button :to="link" variant="link">Weiterlesen</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  height: 100%;
  transition: all 0.3s ease;
  border: none;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: #6c757d;
  }

  &__date {
    font-style: italic;
  }

  &__category {
    background-color: #e9ecef;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
}
</style>