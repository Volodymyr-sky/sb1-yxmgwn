<template>
  <section :class="['page-hero', `page-hero--${type}`]">
    <div class="page-hero__background">
      <div class="page-hero__overlay"></div>
      <b-img :src="image" fluid alt="" class="page-hero__image"></b-img>
    </div>
    <b-container>
      <div class="page-hero__content">
        <div class="page-hero__breadcrumb" v-if="breadcrumbItems && breadcrumbItems.length">
          <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
        </div>
        <div class="page-hero__main">
          <div class="page-hero__badge" v-if="type === 'service'">
            <b-icon icon="gear-fill"></b-icon>
            <span>Service</span>
          </div>
          <div class="page-hero__badge" v-if="type === 'expertise'">
            <b-icon icon="lightning-fill"></b-icon>
            <span>Expertise</span>
          </div>
          <h1 class="page-hero__title">{{ title }}</h1>
          <div class="page-hero__separator"></div>
          <p class="page-hero__description">{{ description }}</p>
          <div class="page-hero__extra">
            <slot name="extra"></slot>
          </div>
        </div>
      </div>
    </b-container>
    <div class="page-hero__shapes">
      <div class="page-hero__shape page-hero__shape--1"></div>
      <div class="page-hero__shape page-hero__shape--2"></div>
      <div class="page-hero__shape page-hero__shape--3"></div>
    </div>
    <div class="page-hero__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'service', 'expertise'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    breadcrumbItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  position: relative;
  height: 80vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: white;
  margin-bottom: 4rem;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0.9;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: transform 20s ease;

    .page-hero:hover & {
      transform: scale(1);
    }
  }

  &__content {
    position: relative;
    z-index: 3;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
  }

  &__main {
    text-align: center;
    position: relative;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;

    .b-icon {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  &__breadcrumb {
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;

    :deep(.breadcrumb) {
      background: transparent;
      padding: 0;
      margin: 0;
      justify-content: center;

      .breadcrumb-item {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;

        + .breadcrumb-item::before {
          color: rgba(255, 255, 255, 0.7);
        }

        &.active {
          color: white;
        }

        a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: white;
          }
        }
      }
    }
  }

  &__title {
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards 0.2s;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }

  &__separator {
    width: 80px;
    height: 4px;
    background: white;
    margin: 2rem auto;
    position: relative;
    opacity: 0;
    transform: scaleX(0);
    animation: scaleIn 0.6s ease forwards 0.4s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: -10px;
    }

    &::after {
      right: -10px;
    }
  }

  &__description {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards 0.4s;
    color: rgba(255, 255, 255, 0.9);
  }

  &__extra {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards 0.6s;
  }

  &__shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &__shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphing 15s ease-in-out infinite;

    &--1 {
      width: 300px;
      height: 300px;
      top: -100px;
      left: -100px;
      animation-delay: 0s;
    }

    &--2 {
      width: 200px;
      height: 200px;
      top: 50%;
      right: -50px;
      animation-delay: -5s;
    }

    &--3 {
      width: 150px;
      height: 150px;
      bottom: 10%;
      left: 10%;
      animation-delay: -10s;
    }
  }

  &__wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    z-index: 3;
    line-height: 0;

    svg {
      width: 100%;
      height: 70px;
    }
  }

  // Service hero variant
  &--service {
    .page-hero__overlay {
      background: linear-gradient(135deg, 
        rgba(0, 123, 255, 0.95) 0%,
        rgba(0, 123, 255, 0.8) 50%,
        rgba(0, 123, 255, 0.7) 100%
      );
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    }
  }

  // Expertise hero variant
  &--expertise {
    .page-hero__overlay {
      background: linear-gradient(135deg,
        rgba(45, 52, 54, 0.95) 0%,
        rgba(45, 52, 54, 0.8) 50%,
        rgba(45, 52, 54, 0.7) 100%
      );
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    }
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes morphing {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

// Responsive styles
@media (max-width: 768px) {
  .page-hero {
    height: 70vh;
    min-height: 600px;

    &__title {
      font-size: 3rem;
    }

    &__description {
      font-size: 1.25rem;
    }

    &__wave svg {
      height: 50px;
    }

    &__shape {
      &--1 {
        width: 200px;
        height: 200px;
      }

      &--2 {
        width: 150px;
        height: 150px;
      }

      &--3 {
        width: 100px;
        height: 100px;
      }
    }
  }
}

@media (max-width: 576px) {
  .page-hero {
    height: 60vh;
    min-height: 500px;

    &__title {
      font-size: 2.5rem;
    }

    &__description {
      font-size: 1.1rem;
    }

    &__content {
      padding: 1rem;
    }

    &__wave svg {
      height: 30px;
    }

    &__badge {
      padding: 0.4rem 0.8rem;
      
      .b-icon {
        font-size: 1rem;
      }

      span {
        font-size: 0.8rem;
      }
    }
  }
}
</style>