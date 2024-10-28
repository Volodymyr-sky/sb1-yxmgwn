<template>
  <div class="homepage">

    <main class="main">
      <section class="hero">
        <b-container>
          <b-row align-v="center" class="hero__content">
            <b-col md="6">
              <h1 class="hero__title">Your IT Solutions Partner</h1>
              <p class="hero__tagline">Empowering businesses with cutting-edge technology solutions</p>
              <b-button variant="primary" href="#contact" class="hero__cta">Get Started</b-button>
            </b-col>
            <b-col md="6">
              <b-img src="https://source.unsplash.com/random/800x600/?technology" fluid alt="IT Solutions" class="hero__image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section id="services" class="services">
        <b-container>
          <h2 class="section__title">Our Services</h2>
          <b-row>
            <b-col md="4" v-for="service in services" :key="service.id">
              <div class="service-card">
                <b-icon :icon="service.icon" class="service-card__icon"></b-icon>
                <h3 class="service-card__title">{{ service.title }}</h3>
                <p class="service-card__description">{{ service.description }}</p>
                <b-button :to="service.link" variant="outline-primary">Learn More</b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section id="expertise" class="expertise">
        <b-container>
          <h2 class="section__title">Our Expertise</h2>
          <b-row>
            <b-col md="4" v-for="area in expertiseAreas" :key="area.id">
              <div class="expertise-card">
                <h3 class="expertise-card__title">{{ area.title }}</h3>
                <p class="expertise-card__description">{{ area.description }}</p>
                <b-button :to="area.link" variant="outline-secondary">Explore</b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section id="news" class="news">
        <b-container>
          <h2 class="section__title">Latest News</h2>
          <b-row>
            <b-col md="4" v-for="article in newsArticles" :key="article.id">
              <b-card
                :title="article.title"
                :img-src="article.image"
                :img-alt="article.title"
                img-top
                class="news-card"
              >
                <b-card-text>{{ article.excerpt }}</b-card-text>
                <b-button :to="article.link" variant="link">Read More</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="testimonials">
        <b-container>
          <h2 class="section__title">Client Testimonials</h2>
          <b-carousel
            id="testimonial-carousel"
            :interval="4000"
            controls
            indicators
            background="#f8f9fa"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide v-for="testimonial in testimonials" :key="testimonial.id">
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  :src="testimonial.image"
                  :alt="testimonial.name"
                >
              </template>
              <h3>"{{ testimonial.quote }}"</h3>
              <p>{{ testimonial.name }}, {{ testimonial.company }}</p>
            </b-carousel-slide>
          </b-carousel>
        </b-container>
      </section>

      <section id="contact" class="contact">
        <b-container>
          <h2 class="section__title">Ready to Get Started?</h2>
          <p class="contact__description">Let's discuss how we can help your business grow with our IT solutions.</p>
          <b-button to="/kontakt" variant="primary" size="lg" class="contact__cta">Contact Us</b-button>
        </b-container>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, icon: 'laptop', title: 'IT Consulting', description: 'Expert advice on IT strategy and implementation', link: '/leistungen/it-consulting' },
        { id: 2, icon: 'cloud', title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure', link: '/leistungen/cloud-solutions' },
        { id: 3, icon: 'shield', title: 'Cybersecurity', description: 'Protect your business from digital threats', link: '/leistungen/cybersecurity' },
      ],
      expertiseAreas: [
        { id: 1, title: 'Artificial Intelligence', description: 'Cutting-edge AI solutions for business', link: '/expertise/ai' },
        { id: 2, title: 'IoT', description: 'Connecting devices for smarter operations', link: '/expertise/iot' },
        { id: 3, title: 'Big Data Analytics', description: 'Turn your data into actionable insights', link: '/expertise/big-data' },
      ],
      newsArticles: [
        { 
          id: 1, 
          title: 'New AI Partnership Announced', 
          image: 'https://source.unsplash.com/random/800x600/?artificial-intelligence', 
          excerpt: 'We\'ve partnered with leading AI researchers to bring...', 
          link: '/news/ai-partnership' 
        },
        { 
          id: 2, 
          title: 'Cybersecurity Trends 2023', 
          image: 'https://source.unsplash.com/random/800x600/?cybersecurity', 
          excerpt: 'Stay ahead of the curve with our latest cybersecurity insights...', 
          link: '/news/cybersecurity-trends' 
        },
        { 
          id: 3, 
          title: 'Cloud Migration Success Story', 
          image: 'https://source.unsplash.com/random/800x600/?cloud-computing', 
          excerpt: 'Learn how we helped a major retailer move to the cloud...', 
          link: '/news/cloud-migration' 
        },
      ],
      testimonials: [
        { 
          id: 1, 
          quote: 'Their IT solutions transformed our business operations.', 
          name: 'John Doe', 
          company: 'Tech Corp', 
          image: 'https://source.unsplash.com/random/1024x480/?office' 
        },
        { 
          id: 2, 
          quote: 'Exceptional service and cutting-edge technology.', 
          name: 'Jane Smith', 
          company: 'Innovate Inc', 
          image: 'https://source.unsplash.com/random/1024x480/?technology' 
        },
      ],
    };
  },
  head() {
    return {
      title: 'IT Solutions Partner - Professional IT Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional IT solutions and services for businesses in Germany'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
// Base styles
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

// Header
.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  &__logo {
    max-height: 50px;
  }

  &__menu {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
}

// Hero Section
.hero {
  background-color: #f8f9fa;
  padding: 4rem 0;

  &__content {
    min-height: 60vh;
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  &__tagline {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #6c757d;
  }

  &__cta {
    font-size: 1.25rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__image {
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

// Section styles
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

// Services Section
.services {
  padding: 5rem 0;
}

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

// Expertise Section
.expertise {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

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

// News Section
.news {
  padding: 5rem 0;
}

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
}

// Testimonials Section
.testimonials {
  background-color: #007bff;
  color: white;
  padding: 5rem 0;

  .section__title::after {
    background-color: white;
  }

  .carousel-caption {
    position: static;
    padding: 2rem 0;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}

// Contact Section
.contact {
  background-color: #f8f9fa;
  padding: 5rem 0;
  text-align: center;

  &__description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    color: #6c757d;
  }

  &__cta {
    font-size: 1.25rem;
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

// Footer
.footer {
  background-color: #2d3436;
  color: white;
  padding: 5rem 0 2rem;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #007bff;
  }

  &__links {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: #f8f9fa;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }
  }

  &__social {
    a {
      color: white;
      font-size: 1.5rem;
      margin-right: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }

  &__bottom {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 0.9rem;
    color: #6c757d;
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .header {
    &__menu {
      display: none;
    }
  }

  .hero {
    &__title {
      font-size: 2.5rem;
    }

    &__tagline {
      font-size: 1.25rem;
    }
  }

  .section__title {
    font-size: 2rem;
  }
}
</style>