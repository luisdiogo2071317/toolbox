<template>
  <div>
    <theHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show ="displaySidenav" @close="displaySidenav=false"/>    
    <nuxt/>    
  </div>
</template>
<script>

import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return{
      displaySidenav: false
    }
  }  
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
 
}

.main-content {
  margin-top: 4.5rem;
}
</style>