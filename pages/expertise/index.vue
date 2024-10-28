<template>
  <div class="expertise-page">
    <PageHero
      type="expertise"
      title="Unsere Expertise"
      description="Spezialisierte Fachkompetenz in zukunftsweisenden Technologien"
      image="https://source.unsplash.com/random/1920x1080/?artificial-intelligence"
      :breadcrumb-items="[
        { text: 'Home', to: '/' },
        { text: 'Expertise', active: true }
      ]"
    />

    <main class="expertise-page__content">
      <!-- Featured Areas -->
      <section class="expertise-page__section">
        <b-container>
          <h2 class="section__title">Kernkompetenzen</h2>
          <b-row>
            <b-col lg="4" v-for="area in featuredAreas" :key="area.id">
              <div class="expertise-card">
                <div class="expertise-card__image">
                  <b-img :src="area.image" fluid :alt="area.title"></b-img>
                  <div class="expertise-card__overlay">
                    <b-button :to="`/expertise/${area.slug}`" variant="light">
                      Mehr erfahren
                    </b-button>
                  </div>
                </div>
                <div class="expertise-card__content">
                  <h3 class="expertise-card__title">{{ area.title }}</h3>
                  <p class="expertise-card__description">{{ area.shortDescription }}</p>
                  <div class="expertise-card__applications">
                    <span v-for="(app, index) in area.applications.slice(0, 3)" 
                          :key="index" 
                          class="expertise-card__tag">
                      {{ app }}
                    </span>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Technology Stack -->
      <section class="expertise-page__section expertise-page__section--gray">
        <b-container>
          <h2 class="section__title">Technologie-Stack</h2>
          <div class="tech-stack">
            <b-row>
              <b-col md="4" v-for="(stack, index) in techStack" :key="index">
                <div class="tech-category">
                  <h3 class="tech-category__title">
                    <b-icon :icon="stack.icon"></b-icon>
                    {{ stack.category }}
                  </h3>
                  <ul class="tech-category__list">
                    <li v-for="(tech, techIndex) in stack.technologies" 
                        :key="techIndex">
                      {{ tech }}
                    </li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>

      <!-- Industry Experience -->
      <section class="expertise-page__section">
        <b-container>
          <h2 class="section__title">Branchen-Expertise</h2>
          <b-row>
            <b-col md="6" lg="4" v-for="(industry, index) in industries" :key="index">
              <div class="industry-card">
                <div class="industry-card__icon">
                  <b-icon :icon="industry.icon"></b-icon>
                </div>
                <h3 class="industry-card__title">{{ industry.name }}</h3>
                <p class="industry-card__description">{{ industry.description }}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- CTA Section -->
      <section class="expertise-page__section expertise-page__section--cta">
        <b-container>
          <div class="cta-box">
            <h2 class="cta-box__title">Lassen Sie uns über Ihr Projekt sprechen</h2>
            <p class="cta-box__description">
              Unsere Experten stehen Ihnen für eine kostenlose Erstberatung zur Verfügung.
            </p>
            <div class="cta-box__buttons">
              <b-button variant="light" size="lg" to="/kontakt" class="mr-3">
                <b-icon icon="envelope"></b-icon> Beratungstermin vereinbaren
              </b-button>
              <b-button variant="outline-light" size="lg" href="tel:+491234567890">
                <b-icon icon="telephone"></b-icon> +49 123 456 7890
              </b-button>
            </div>
          </div>
        </b-container>
      </section>
    </main>
  </div>
</template>

<script>
import expertiseData from '@/assets/data/expertise.json'
import PageHero from '@/components/PageHero.vue'

export default {
  components: {
    PageHero
  },

  data() {
    return {
      featuredAreas: expertiseData.areas,
      techStack: [
        {
          category: 'Frontend',
          icon: 'window',
          technologies: [
            'React.js',
            'Vue.js',
            'Angular',
            'Next.js',
            'Nuxt.js'
          ]
        },
        {
          category: 'Backend',
          icon: 'server',
          technologies: [
            'Node.js',
            'Python',
            'Java',
            'Go',
            'PHP'
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: 'cloud',
          technologies: [
            'AWS',
            'Azure',
            'Google Cloud',
            'Docker',
            'Kubernetes'
          ]
        }
      ],
      industries: [
        {
          icon: 'building',
          name: 'Finanzsektor',
          description: 'Sichere und skalierbare Lösungen für Banken und Finanzdienstleister'
        },
        {
          icon: 'cart',
          name: 'E-Commerce',
          description: 'Moderne Online-Shop-Systeme und digitale Verkaufsplattformen'
        },
        {
          icon: 'gear',
          name: 'Industrie',
          description: 'Industrie 4.0 Lösungen und IoT-Integration für Produktionsunternehmen'
        },
        {
          icon: 'heart-pulse',
          name: 'Gesundheitswesen',
          description: 'Digitale Transformation im Gesundheitssektor'
        },
        {
          icon: 'truck',
          name: 'Logistik',
          description: 'Intelligente Systeme für Transport und Lagermanagement'
        },
        {
          icon: 'shop',
          name: 'Einzelhandel',
          description: 'Omnichannel-Lösungen und digitale Verkaufsstrategien'
        }
      ]
    }
  },

  head() {
    return {
      title: 'Unsere Expertise | Technologie-Kompetenzen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Entdecken Sie unsere technologische Expertise. Von KI bis Cloud Computing - innovative Lösungen für Ihr Unternehmen.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.expertise-page {
  &__section {
    padding: 5rem 0;

    &--gray {
      background-color: #f8f9fa;
    }

    &--cta {
      background-color: #2d3436;
      color: white;

      .section__title {
        color: white;

        &::after {
          background-color: white;
        }
      }
    }
  }
}

.expertise-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    .expertise-card__overlay {
      opacity: 1;
    }
  }

  &__image {
    height: 200px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &__content {
    padding: 1.5rem;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1rem;
  }

  &__applications {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    background: #f8f9fa;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    color: #6c757d;
  }
}

.tech-category {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &__title {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    .b-icon {
      margin-right: 0.75rem;
      color: #007bff;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #e9ecef;
      color: #6c757d;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.industry-card {
  text-align: center;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    .industry-card__icon {
      background-color: #007bff;
      color: white;
    }
  }

  &__icon {
    width: 80px;
    height: 80px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: #007bff;
    transition: all 0.3s ease;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
  }
}

.cta-box {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  &__description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .expertise-page__section {
    padding: 3rem 0;
  }

  .expertise-card {
    margin-bottom: 2rem;
  }

  .tech-category {
    margin-bottom: 2rem;
  }

  .industry-card {
    margin-bottom: 2rem;
  }
}
</style>