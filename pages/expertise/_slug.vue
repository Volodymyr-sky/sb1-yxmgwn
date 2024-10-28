<template>
  <div class="expertise-detail">
    <PageHero
      type="expertise"
      :title="area.title"
      :description="area.shortDescription"
      :image="area.image"
      :breadcrumb-items="[
        { text: 'Home', to: '/' },
        { text: 'Expertise', to: '/expertise' },
        { text: area.title, active: true }
      ]"
    >
      <template #extra>
        <div class="hero-buttons">
          <b-button variant="light" size="lg" class="mr-3" @click="scrollToPortfolio">
            <b-icon icon="collection"></b-icon> Projekte ansehen
          </b-button>
          <b-button variant="outline-light" size="lg" to="/kontakt">
            <b-icon icon="envelope"></b-icon> Experten kontaktieren
          </b-button>
        </div>
      </template>
    </PageHero>

    <main class="expertise-detail__content">
      <!-- In-Depth Description -->
      <section class="expertise-detail__section">
        <b-container>
          <div class="expertise-detail__description">
            <h2 class="section__title">Unser Know-how</h2>
            <div class="expertise-detail__text" v-html="area.description"></div>
          </div>
        </b-container>
      </section>

      <!-- Applications -->
      <section class="expertise-detail__section expertise-detail__section--gray">
        <b-container>
          <h2 class="section__title">Anwendungsbereiche</h2>
          <b-row>
            <b-col md="6" v-for="(application, index) in area.applications" :key="index">
              <div class="application-card">
                <div class="application-card__icon">
                  <b-icon icon="gear-fill"></b-icon>
                </div>
                <h3 class="application-card__title">{{ application }}</h3>
                <p class="application-card__description">
                  Innovative Lösungen für {{ application }} mit modernsten Technologien.
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Project Portfolio -->
      <section class="expertise-detail__section">
        <b-container>
          <h2 class="section__title">Projektportfolio</h2>
          <b-row>
            <b-col md="6" lg="4" v-for="project in projects" :key="project.id">
              <div class="project-card">
                <div class="project-card__image">
                  <b-img :src="project.image" fluid :alt="project.title"></b-img>
                  <div class="project-card__overlay">
                    <b-button variant="light" @click="showProjectDetails(project)">
                      Details ansehen
                    </b-button>
                  </div>
                </div>
                <div class="project-card__content">
                  <h3 class="project-card__title">{{ project.title }}</h3>
                  <p class="project-card__description">{{ project.description }}</p>
                  <div class="project-card__tags">
                    <span v-for="tag in project.tags" :key="tag" class="project-card__tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Team Profiles -->
      <section class="expertise-detail__section expertise-detail__section--gray">
        <b-container>
          <h2 class="section__title">Unser Expertenteam</h2>
          <b-row>
            <b-col md="6" lg="3" v-for="expert in experts" :key="expert.id">
              <div class="expert-card">
                <div class="expert-card__image">
                  <b-img :src="expert.image" fluid :alt="expert.name"></b-img>
                </div>
                <div class="expert-card__content">
                  <h3 class="expert-card__name">{{ expert.name }}</h3>
                  <p class="expert-card__position">{{ expert.position }}</p>
                  <p class="expert-card__description">{{ expert.description }}</p>
                  <div class="expert-card__social">
                    <a :href="expert.linkedin" target="_blank" rel="noopener noreferrer">
                      <b-icon icon="linkedin"></b-icon>
                    </a>
                    <a :href="expert.xing" target="_blank" rel="noopener noreferrer">
                      <b-icon icon="diagram-3"></b-icon>
                    </a>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Client Success Stories -->
      <section class="expertise-detail__section expertise-detail__section--success">
        <b-container>
          <h2 class="section__title text-white">Erfolgsgeschichten</h2>
          <b-row>
            <b-col lg="8" class="mx-auto">
              <b-carousel
                id="success-stories"
                :interval="5000"
                controls
                indicators
                background="#2d3436"
                img-width="1024"
                img-height="480"
              >
                <b-carousel-slide
                  v-for="story in successStories"
                  :key="story.id"
                >
                  <div class="success-story">
                    <div class="success-story__content">
                      <h3 class="success-story__title">{{ story.title }}</h3>
                      <p class="success-story__text">{{ story.description }}</p>
                      <div class="success-story__results">
                        <div v-for="result in story.results" :key="result.label" class="success-story__result">
                          <div class="success-story__number">{{ result.value }}</div>
                          <div class="success-story__label">{{ result.label }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Call to Action -->
      <section class="expertise-detail__section expertise-detail__section--cta">
        <b-container>
          <div class="cta-box">
            <h2 class="cta-box__title">Lassen Sie uns über Ihr Projekt sprechen</h2>
            <p class="cta-box__text">
              Unsere Experten stehen Ihnen für eine kostenlose Erstberatung zur Verfügung.
            </p>
            <div class="cta-box__buttons">
              <b-button variant="primary" size="lg" to="/kontakt" class="mr-3">
                <b-icon icon="envelope"></b-icon> Beratungstermin vereinbaren
              </b-button>
              <b-button variant="outline-primary" size="lg" href="tel:+491234567890">
                <b-icon icon="telephone"></b-icon> +49 123 456 7890
              </b-button>
            </div>
          </div>
        </b-container>
      </section>
    </main>

    <!-- Project Details Modal -->
    <b-modal
      v-model="showModal"
      :title="selectedProject ? selectedProject.title : ''"
      size="lg"
      centered
      hide-footer
    >
      <div v-if="selectedProject" class="project-details">
        <b-img :src="selectedProject.image" fluid class="project-details__image"></b-img>
        <div class="project-details__content">
          <p class="project-details__description">{{ selectedProject.fullDescription }}</p>
          <h4>Herausforderungen:</h4>
          <ul class="project-details__list">
            <li v-for="challenge in selectedProject.challenges" :key="challenge">{{ challenge }}</li>
          </ul>
          <h4>Lösungen:</h4>
          <ul class="project-details__list">
            <li v-for="solution in selectedProject.solutions" :key="solution">{{ solution }}</li>
          </ul>
          <h4>Ergebnisse:</h4>
          <ul class="project-details__list">
            <li v-for="result in selectedProject.results" :key="result">{{ result }}</li>
          </ul>
        </div>
      </div>
    </b-modal>
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
      showModal: false,
      selectedProject: null,
      // Mock data for demonstration
      projects: [
        {
          id: 1,
          title: 'Intelligente Prozessautomatisierung',
          description: 'Implementierung einer KI-gestützten Prozessautomatisierung für einen Industriekunden.',
          image: 'https://source.unsplash.com/random/800x600/?automation',
          tags: ['KI', 'Automatisierung', 'Industrie 4.0'],
          fullDescription: 'Detaillierte Beschreibung des Projekts...',
          challenges: [
            'Komplexe Legacy-Systeme',
            'Hohe Sicherheitsanforderungen',
            'Echtzeitverarbeitung'
          ],
          solutions: [
            'Entwicklung einer maßgeschneiderten KI-Lösung',
            'Integration mit bestehenden Systemen',
            'Implementierung von Sicherheitsprotokollen'
          ],
          results: [
            '30% Effizienzsteigerung',
            'ROI innerhalb von 12 Monaten',
            'Reduzierung der Fehlerrate um 75%'
          ]
        },
        // Add more projects...
      ],
      experts: [
        {
          id: 1,
          name: 'Dr. Michael Schmidt',
          position: 'Senior KI-Experte',
          description: '15 Jahre Erfahrung in der Entwicklung von KI-Lösungen',
          image: 'https://source.unsplash.com/random/400x400/?portrait',
          linkedin: '#',
          xing: '#'
        },
        // Add more experts...
      ],
      successStories: [
        {
          id: 1,
          title: 'Digitale Transformation eines Industrieunternehmens',
          description: 'Vollständige Digitalisierung der Produktionsprozesse mit messbaren Erfolgen.',
          results: [
            { value: '40%', label: 'Effizienzsteigerung' },
            { value: '65%', label: 'Kosteneinsparung' },
            { value: '12 Monate', label: 'Amortisationszeit' }
          ]
        },
        // Add more success stories...
      ]
    }
  },

  async asyncData({ params, error }) {
    const area = expertiseData.areas.find(a => a.slug === params.slug)
    
    if (!area) {
      error({ statusCode: 404, message: 'Expertise-Bereich nicht gefunden' })
      return
    }
    
    return { area }
  },

  methods: {
    scrollToPortfolio() {
      const portfolioSection = document.querySelector('.expertise-detail__content')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    showProjectDetails(project) {
      this.selectedProject = project
      this.showModal = true
    }
  },

  head() {
    return {
      title: this.area.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.area.meta.description },
        // Open Graph
        { property: 'og:title', content: this.area.meta.title },
        { property: 'og:description', content: this.area.meta.description },
        { property: 'og:image', content: this.area.image },
        { property: 'og:type', content: 'website' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.expertise-detail {
  &__section {
    padding: 5rem 0;

    &--gray {
      background-color: #f8f9fa;
    }

    &--success {
      background-color: #2d3436;
      color: white;

      .section__title {
        color: white;

        &::after {
          background-color: white;
        }
      }
    }

    &--cta {
      background-color: #f8f9fa;
    }
  }

  &__description {
    max-width: 800px;
    margin: 0 auto;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #6c757d;
  }
}

.section {
  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: #007bff;
    }
  }
}

.application-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    font-size: 2.5rem;
    color: #007bff;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
  }
}

.project-card {
  height: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    .project-card__overlay {
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
      transition: transform 0.3s ease;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 123, 255, 0.9);
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
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    background: #e9ecef;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    color: #6c757d;
  }
}

.expert-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__image {
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 1.5rem;
    text-align: center;
  }

  &__name {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  &__position {
    color: #007bff;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &__description {
    color: #6c757d;
    margin-bottom: 1rem;
  }

  &__social {
    a {
      color: #6c757d;
      font-size: 1.25rem;
      margin: 0 0.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }
}

.success-story {
  padding: 2rem;
  text-align: center;
  color: white;

  &__title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  &__results {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  &__result {
    text-align: center;
  }

  &__number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 0.5rem;
  }

  &__label {
    font-size: 0.9rem;
    opacity: 0.8;
  }
}

.project-details {
  &__image {
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }

  &__content {
    padding: 1rem 0;
  }

  &__description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #6c757d;
    margin-bottom: 2rem;
  }

  &__list {
    padding-left: 1.5rem;
    margin-bottom: 2rem;

    li {
      margin-bottom: 0.5rem;
      color: #6c757d;
    }
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

  &__text {
    font-size: 1.25rem;
    color: #6c757d;
    margin-bottom: 2rem;
  }

  &__buttons {
    .btn {
      margin: 0.5rem;
    }
  }
}

// Responsive styles
@media (max-width: 768px) {
  .expertise-detail {
    &__section {
      padding: 3rem 0;
    }
  }

  .section__title {
    font-size: 2rem;
  }

  .success-story {
    &__results {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .cta-box {
    &__title {
      font-size: 2rem;
    }

    &__text {
      font-size: 1.1rem;
    }
  }
}
</style>