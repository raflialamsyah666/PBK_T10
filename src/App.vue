<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Sidebar }
}
</script>

<style>
#app {
  display: flex;
  font-family: 'Segoe UI', sans-serif;
}

.main-content {
  margin-left: 240px;
  padding: 2rem;
  width: 100%;
  background-color: #f9fafb;
  min-height: 100vh;
}
</style>
