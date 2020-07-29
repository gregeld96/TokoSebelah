<template>
  <div class="text-centers">
    <h3 class="mt-2">{{ name }} Cart</h3>
    <div class="mb-3 mx-auto" style="max-width: 580px;" v-for="cart in carts" :key="cart.id">
      <CardCart :cart="cart"></CardCart>
    </div>
    <div class="mb-3 mx-auto" style="max-width: 580px;">
      <Checkout></Checkout>
    </div>
  </div>
</template>

<script>
import CardCart from '../components/CartCard'
import Checkout from '../components/Checkout'
export default {
  name: 'cart-page',
  components: {
    CardCart,
    Checkout
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    start () {
      this.$store.dispatch('start', {
        token: localStorage.access_token,
        name: localStorage.name
      })
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    name () {
      return this.$store.state.name
    }
  },
  created () {
    this.fetchCart()
    this.fetchCategories()
    this.start()
  }
}
</script>

<style>

</style>
