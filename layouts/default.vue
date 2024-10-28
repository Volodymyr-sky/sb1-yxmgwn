<template>
  <div class="app-layout">
    <header class="header">
      <nav class="header__nav container">
        <nuxt-link to="/" class="header__logo-link">
          <img src="https://via.placeholder.com/150x50" alt="Company Logo" class="header__logo">
        </nuxt-link>
        <div class="header__menu-wrapper" :class="{ 'is-active': isMenuOpen }">
          <ul class="header__menu">
            <li class="header__menu-item">
              <nuxt-link to="/leistungen" class="header__menu-link">Leistungen</nuxt-link>
            </li>
            <li class="header__menu-item">
              <nuxt-link to="/expertise" class="header__menu-link">Expertise</nuxt-link>
            </li>
            <li class="header__menu-item">
              <nuxt-link to="/news" class="header__menu-link">News</nuxt-link>
            </li>
            <li class="header__menu-item">
              <nuxt-link to="/kontakt" class="header__menu-link header__menu-link--cta">Kontakt</nuxt-link>
            </li>
          </ul>
        </div>
        <button class="header__menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>

    <main class="main">
      <Nuxt />
    </main>

    <footer class="footer">
      <div class="footer__main">
        <b-container>
          <b-row>
            <b-col lg="4" md="6" class="footer__section">
              <div class="footer__brand">
                <img src="https://via.placeholder.com/150x50" alt="Company Logo" class="footer__logo">
                <p class="footer__description">
                  Ihr vertrauenswürdiger Partner für innovative IT-Lösungen und digitale Transformation.
                </p>
              </div>
            </b-col>
            <b-col lg="2" md="6" class="footer__section">
              <h3 class="footer__title">Services</h3>
              <ul class="footer__links">
                <li><nuxt-link to="/leistungen/it-consulting">IT Consulting</nuxt-link></li>
                <li><nuxt-link to="/leistungen/cloud-solutions">Cloud Solutions</nuxt-link></li>
                <li><nuxt-link to="/leistungen/cybersecurity">Cybersecurity</nuxt-link></li>
              </ul>
            </b-col>
            <b-col lg="2" md="6" class="footer__section">
              <h3 class="footer__title">Expertise</h3>
              <ul class="footer__links">
                <li><nuxt-link to="/expertise/ki">KI & ML</nuxt-link></li>
                <li><nuxt-link to="/expertise/iot">IoT</nuxt-link></li>
                <li><nuxt-link to="/expertise/big-data">Big Data</nuxt-link></li>
              </ul>
            </b-col>
            <b-col lg="4" md="6" class="footer__section">
              <h3 class="footer__title">Kontakt</h3>
              <ul class="footer__contact">
                <li>
                  <b-icon icon="geo-alt"></b-icon>
                  <span>Techstrasse 1, 12345 Berlin</span>
                </li>
                <li>
                  <b-icon icon="envelope"></b-icon>
                  <a href="mailto:info@itcompany.de">info@itcompany.de</a>
                </li>
                <li>
                  <b-icon icon="telephone"></b-icon>
                  <a href="tel:+491234567890">+49 123 456 7890</a>
                </li>
              </ul>
              <div class="footer__social">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <b-icon icon="facebook"></b-icon>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <b-icon icon="twitter"></b-icon>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <b-icon icon="linkedin"></b-icon>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Xing">
                  <b-icon icon="diagram-3"></b-icon>
                </a>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="footer__bottom">
        <b-container>
          <b-row align-v="center">
            <b-col md="6" class="footer__copyright">
              <p>&copy; {{ new Date().getFullYear() }} IT Company. Alle Rechte vorbehalten.</p>
            </b-col>
            <b-col md="6">
              <ul class="footer__legal">
                <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
                <li><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
                <li><nuxt-link to="/agb">AGB</nuxt-link></li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  watch: {
    '$route'() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style lang="scss">
// Variables
$primary-color: #007bff;
$secondary-color: #6c757d;
$dark-color: #2d3436;
$light-color: #f8f9fa;
$transition: all 0.3s ease;

// Header
.header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    height: 40px;
    width: auto;
  }

  &__menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__menu-item {
    margin-left: 2rem;
  }

  &__menu-link {
    color: $dark-color;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: $transition;

    &:hover {
      color: $primary-color;
    }

    &--cta {
      background-color: $primary-color;
      color: white;

      &:hover {
        background-color: darken($primary-color, 10%);
        color: white;
      }
    }
  }

  &__menu-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 2px;
      background-color: $dark-color;
      margin: 5px 0;
      transition: $transition;
    }
  }
}

// Footer
.footer {
  background-color: $dark-color;
  color: white;
  margin-top: 4rem;

  &__main {
    padding: 4rem 0;
  }

  &__brand {
    margin-bottom: 2rem;
  }

  &__logo {
    margin-bottom: 1rem;
    height: 40px;
  }

  &__description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }

  &__section {
    margin-bottom: 2rem;
  }

  &__title {
    color: $primary-color;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  &__links {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: $transition;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }

  &__contact {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.7);

      .b-icon {
        margin-right: 1rem;
        color: $primary-color;
      }

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: $transition;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }

  &__social {
    margin-top: 2rem;

    a {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.5rem;
      margin-right: 1.5rem;
      transition: $transition;

      &:hover {
        color: $primary-color;
      }
    }
  }

  &__bottom {
    background-color: darken($dark-color, 5%);
    padding: 1.5rem 0;
  }

  &__copyright {
    p {
      margin: 0;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__legal {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;

    li {
      margin-left: 2rem;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 0.9rem;
        transition: $transition;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}

// Responsive styles
@media (max-width: 768px) {
  .header {
    &__menu-wrapper {
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      background-color: white;
      padding: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      transition: $transition;
      visibility: hidden;

      &.is-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }

    &__menu {
      flex-direction: column;
      align-items: center;
    }

    &__menu-item {
      margin: 1rem 0;
    }

    &__menu-toggle {
      display: block;
    }
  }

  .footer {
    &__legal {
      justify-content: center;
      margin-top: 1rem;

      li {
        margin: 0 1rem;
      }
    }

    &__copyright {
      text-align: center;
    }
  }
}
</style>