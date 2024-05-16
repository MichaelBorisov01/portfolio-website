<template>
  <v-app-bar class="mt-5" elevation="0">
    <v-toolbar-title class="text-h6">Personal portfolio</v-toolbar-title>

    <v-spacer />

    <v-btn
      v-for="(icon, index) in icons"
      :key="index"
      :href="icon.href"
      target="_blank"
      icon
      variant="text"
      @mouseover="icon.hover = true"
      @mouseout="icon.hover = false"
    >
      <v-icon :size="30" :color="icon.hover ? 'primary' : 'grey'">{{ icon.icon }}</v-icon>
    </v-btn>

    <v-btn
      target="_blank"
      color="primary"
      class="ml-5 mr-5 pulse-btn"
      variant="outlined"
      href="https://hh.ru/applicant/resumes/view?resume=e90a79b5ff0b2c8e580039ed1f41396c395a70"
    >
      My Resume
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-telegram',
        href: 'https://t.me/borisov_michael',
        hover: false
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/MichaelBorisov01',
        hover: false
      }
    ]
  })
}
</script>

<style>
.pulse-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
