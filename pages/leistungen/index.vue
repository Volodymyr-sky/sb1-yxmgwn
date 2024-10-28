<template>
  <div class="services-page">
    <PageHero
      type="service"
      title="Unsere Leistungen"
      description="Professionelle IT-Dienstleistungen für Ihren Geschäftserfolg"
      image="https://source.unsplash.com/random/1920x1080/?technology-service"
      :breadcrumb-items="[
        { text: 'Home', to: '/' },
        { text: 'Leistungen', active: true }
      ]"
    />

    <main class="services-page__content">
      <!-- Featured Services -->
      <section class="services-page__section">
        <b-container>
          <h2 class="section__title">Kernkompetenzen</h2>
          <b-row>
            <b-col lg="4" md="6" v-for="service in featuredServices" :key="service.id">
              <div class="service-card">
                <div class="service-card__icon">
                  <b-icon :icon="service.icon"></b-icon>
                </div>
                <h3 class="service-card__title">{{ service.title }}</h3>
                <p class="service-card__description">{{ service.shortDescription }}</p>
                <b-button :to="`/leistungen/${service.slug}`" variant="primary">
                  Mehr erfahren
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- All Services -->
      <section class="services-page__section services-page__section--gray">
        <b-container>
          <h2 class="section__title">Alle Leistungen</h2>
          <div class="services-grid">
            <b-row>
              <b-col lg="6" v-for="service in services" :key="service.id">
                <nuxt-link :to="`/leistungen/${service.slug}`" class="service-item">
                  <div class="service-item__content">
                    <div class="service-item__icon">
                      <b-icon :icon="service.icon"></b-icon>
                    </div>
                    <div class="service-item__text">
                      <h3 class="service-item__title">{{ service.title }}</h3>
                      <p class="service-item__description">{{ service.shortDescription }}</p>
                    </div>
                  </div>
                  <div class="service-item__arrow">
                    <b-icon icon="arrow-right"></b-icon>
                  </div>
                </nuxt-link>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>

      <!-- Why Choose Us -->
      <section class="services-page__section">
        <b-container>
          <h2 class="section__title">Warum uns wählen?</h2>
          <b-row>
            <b-col md="6" lg="3" v-for="(reason, index) in reasons" :key="index">
              <div class="reason-card">
                <div class="reason-card__icon">
                  <b-icon :icon="reason.icon"></b-icon>
                </div>
                <h3 class="reason-card__title">{{ reason.title }}</h3>
                <p class="reason-card__description">{{ reason.description }}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- CTA Section -->
      <section class="services-page__section services-page__section--cta">
        <b-container>
          <div class="cta-box">
            <h2 class="cta-box__title">Bereit für den nächsten Schritt?</h2>
            <p class="cta-box__description">
              Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen unterstützen können.
            </p>
            <div class="cta-box__buttons">
              <b-button variant="primary" size="lg" to="/kontakt" class="mr-3">
                <b-icon icon="envelope"></b-icon> Kontakt aufnehmen
              </b-button>
              <b-button variant="outline-primary" size="lg" href="tel:+491234567890">
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
import servicesData from '@/assets/data/leistungen.json'
import PageHero from '@/components/PageHero.vue'

export default {
  components: {
    PageHero
  },

  data() {
    return {
      services: servicesData.services,
      featuredServices: servicesData.services.slice(0, 3),
      reasons: [
        {
          icon: 'shield-check',
          title: 'Erfahrung',
          description: 'Über 15 Jahre Expertise in der IT-Branche'
        },
        {
          icon: 'people',
          title: 'Experten-Team',
          description: 'Hochqualifizierte IT-Spezialisten'
        },
        {
          icon: 'gear-wide-connected',
          title: 'Modernste Technologie',
          description: 'Einsatz innovativer Lösungen'
        },
        {
          icon: 'graph-up',
          title: 'Messbare Erfolge',
          description: 'Nachweisbare Ergebnisse für Kunden'
        }
      ]
    }
  },

  head() {
    return {
      title: 'IT-Dienstleistungen & Services | Professionelle IT-Lösungen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Entdecken Sie unsere professionellen IT-Dienstleistungen. Von IT-Consulting bis Cloud Solutions - maßgeschneiderte Lösungen für Ihren Erfolg.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.services-page {
  &__section {
    padding: 5rem 0;

    &--gray {
      background-color: #f8f9fa;
    }

    &--cta {
      background-color: #007bff;
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

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1.5rem;
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

.service-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;

    .service-item__arrow {
      transform: translateX(5px);
      color: #007bff;
    }
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__icon {
    font-size: 2rem;
    color: #007bff;
    margin-right: 1.5rem;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  &__description {
    color: #6c757d;
    margin: 0;
  }

  &__arrow {
    font-size: 1.5rem;
    color: #6c757d;
    transition: all 0.3s ease;
  }
}

.reason-card {
  text-align: center;
  padding: 2rem;
  height: 100%;

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

.cta-box {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: white;
  }

  &__description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  &__buttons {
    .btn-outline-primary {
      border-color: white;
      color: white;

      &:hover {
        background-color: white;
        color: #007bff;
      }
    }
  }
}

@media (max-width: 768px) {
  .services-page__section {
    padding: 3rem 0;
  }

  .service-item {
    flex-direction: column;
    text-align: center;

    &__content {
      flex-direction: column;
      margin-bottom: 1rem;
    }

    &__icon {
      margin: 0 0 1rem 0;
    }

    &__arrow {
      display: none;
    }
  }
}
</style>