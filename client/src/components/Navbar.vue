<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light">
          <h3 class="my-1 mx-auto" style="cursor: pointer;" @click="homeBtn()">Toko Sebelah</h3>
              <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item mr-5">
                    <form @submit.prevent="filter" class="form-inline">
                      <select class="custom-select mr-2" v-model="categoryName">
                          <option class="w-50" v-for="category in categories" :key="category.id" :value='category.name'>{{category.name}}</option>
                      </select>
                      <button type="submit" class="btn btn-primary my-4"> Category </button>
                    </form>
                </li>
                <li class="nav-item my-auto mx-5">
                  <router-link :to="{ name: 'Cart'}"><img style="cursor:pointer" class="my-2 px-5 mx-5" src="https://img.icons8.com/pastel-glyph/28/000000/shopping-cart--v1.png"/></router-link>
                </li>
              </ul>
              <div class="mx-auto pl-3" v-if="token === false">
                <router-link :to="{ name: 'Login'}"><button class="btn btn-light my-1 my-sm-0 my-md-1">Login</button></router-link>
                <router-link :to="{ name: 'Register'}"><button class="btn btn-light my-1 my-sm-0 my-md-1">Register</button></router-link>
              </div>
              <div class="mx-auto px-4" v-else-if="token === true">
                <div class="dropdown my-1">
                    <button class="btn btn-light dropdown-toggle" id="profileMenu" data-toggle="dropdown" aria-expanded="false">
                        {{ name }}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="profileMenu">
                        <a class="dropdown-item" style="cursor: pointer;" @click="logout()">Logout</a>
                    </div>
                </div>
              </div>
      </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      categoryName: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    homeBtn () {
      this.$router.push('/')
    },
    filter () {
      console.log(this.categoryName)
      this.$store.dispatch('filterCategory', {
        name: this.categoryName
      })
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    },
    name () {
      return this.$store.state.name
    },
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
