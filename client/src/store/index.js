import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../config/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
    name: '',
    products: [],
    categories: [],
    carts: [],
    filter: []
  },
  getters: {
    checkOut (state) {
      let totalPrice = 0
      state.carts.forEach(cart => {
        totalPrice += (Number(cart.productQty) * Number(cart.Product.price))
      })
      console.log(totalPrice)
      return totalPrice
    }
  },
  mutations: {
    login (state, payload) {
      state.message = ''
      state.token = true
      state.name = payload
    },
    register (state) {
      state.message = ''
    },
    alreadyLogin (state, payload) {
      state.token = true
      state.name = payload.name
    },
    noLogin (state) {
      state.token = false
    },
    logout (state) {
      state.token = false
    },
    fetchProduct (state, payload) {
      state.products = payload
    },
    fetchCategory (state, payload) {
      state.categories = payload
    },
    fetchCart (state, payload) {
      state.carts = payload
    },
    updateCart (state, payload) {
      const index = state.carts.findIndex(cart => cart.id === Number(payload.id))
      state.carts.splice(index, 1, payload)
    },
    removeCartCard (state, payload) {
      const index = state.carts.findIndex(cart => cart.id === Number(payload.cartId))
      state.carts.splice(index, 1)
    },
    filterProduct (state, payload) {
      state.filter = payload
    }
  },
  actions: {
    start (context, payload) {
      if (payload.token) {
        context.commit('alreadyLogin', payload)
      } else {
        context.commit('noLogin', payload)
      }
    },
    loginUser (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('name', data.name)
          context.commit('login', data.name)
          router.push('/')
          Swal.fire({
            title: 'LOGIN SUCCESSFUL!',
            text: data.msg,
            icon: 'success',
            confirmButtonText: 'OK'
          })
        })
        .catch(err => {
          Swal.fire({
            title: 'Login Failed!',
            text: err.response.data,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        })
    },
    registerUser (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          context.commit('register')
          router.push('/login')
          Swal.fire({
            title: 'REGISTER SUCCESSFUL!',
            text: data.msg,
            icon: 'success',
            confirmButtonText: 'OK'
          })
        })
        .catch(err => {
          Swal.fire({
            title: 'REGISTER Failed!',
            text: err.response.data,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/customers/product'
      })
        .then(({ data }) => {
          context.commit('fetchProduct', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchCategories (context) {
      axios({
        method: 'GET',
        url: '/customers/category'
      })
        .then(({ data }) => {
          context.commit('fetchCategory', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    filterCategory (context, payload) {
      axios({
        method: 'GET',
        url: `/customers/category/${payload.name}`
      })
        .then(({ data }) => {
          context.commit('filterProduct', data.Products)
          router.push(`/category/${payload.name}`)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/customers',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchCart', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    addCart (context, payload) {
      console.log(payload.productQty)
      axios({
        method: 'POST',
        url: `/customers/${payload.productId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          productQty: payload.productQty
        }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'PRODUCT SUCCESSFULLY ADDED!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        })
        .catch(err => {
          Swal.fire({
            title: 'FAILED TO ADDED!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        })
    },
    updateQty (context, payload) {
      axios({
        method: 'PUT',
        url: `/customers/${payload.cartId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          productId: payload.productId,
          productQty: payload.productQty
        }
      })
        .then(({ data }) => {
          context.commit('updateCart', data.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    removeCart (context, payload) {
      console.log(payload)
      axios({
        method: 'DELETE',
        url: `/customers/${payload.cartId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.commit('removeCartCard', payload)
          Swal.fire({
            title: 'PRODUCT SUCCESSFULLY REMOVED!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    logout (context) {
      context.commit('logout')
      localStorage.clear()
      router.push('/')
      Swal.fire({
        title: 'SUCCESSFULLY LOGOUT!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }
  }
})
