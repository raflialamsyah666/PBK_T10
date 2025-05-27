<template>
  <div class="sidebar">
    <div class="brand">
      <img src="C:\Users\Rafli\Documents\tugs2\foodorder-app\img\WhatsApp Image 2025-03-07 at 03.08.53.jpeg" alt="Food Logo" class="logo" />
      <h2>FOOD ORDER</h2>
    </div>
    <ul class="nav-menu">
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/orders">Pesanan</router-link></li>
      <li><router-link to="/menu">Menu Makanan</router-link></li>
      <li><router-link to="/cart">Keranjang</router-link></li>
      <li><router-link to="/history">Riwayat</router-link></li>
      <li><router-link to="/profile">Profil</router-link></li>
      <li><router-link to="/logout">Logout</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 240px;
  min-height: 100vh;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 1.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
}

.brand {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 50px;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.2rem;
  color: #ff6347;
  font-weight: bold;
}

.nav-menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nav-menu li {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: block;
}

.nav-menu a.router-link-exact-active {
  background-color: #ff6347;
  color: white;
  font-weight: bold;
  border-radius: 6px;
}
</style>
