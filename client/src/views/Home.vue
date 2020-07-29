<template>
  <div class="home">
    <div class="row row-cols-1 row-cols-md-3 ml-2 pt-3 justify-content-around">
      <Card v-for="product in products" :key="product.id" :product="product"></Card>
    </div>
  </div>
</template>

<script>
import Card from '../components/ProductCard'
export default {
  name: 'Home',
  data () {
    return {
      token: '',
      name: ''
    }
  },
  components: {
    Card
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
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
  created () {
    this.fetchProducts()
    this.fetchCategories()
    this.start()
  }
}
</script>
