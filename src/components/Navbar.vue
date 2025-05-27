<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/restaurants">Restoran</router-link></li>
      <li><router-link to="/cart">Keranjang</router-link></li>
      <li><router-link to="/orders">Pesanan</router-link></li>
      <li><router-link to="/account">Akun</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>