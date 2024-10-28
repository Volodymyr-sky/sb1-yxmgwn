<template>
  <div class="service-detail">
    <PageHero
      type="service"
      :title="service.title"
      :description="service.description"
      :image="service.image"
      :breadcrumb-items="[
        { text: 'Home', to: '/' },
        { text: 'Leistungen', to: '/leistungen' },
        { text: service.title, active: true }
      ]"
    >
      <template #extra>
        <div class="hero-buttons">
          <b-button variant="light" size="lg" class="mr-3" @click="scrollToFeatures">
            <b-icon icon="list-check"></b-icon> Leistungen entdecken
          </b-button>
          <b-button variant="outline-light" size="lg" to="/kontakt">
            <b-icon icon="envelope"></b-icon> Kontakt aufnehmen
          </b-button>
        </div>
      </template>
    </Pa