<template>
  <div class="row no-gutters justify-content-around border border-dark" style="height:200px;">
        <div class="col-md-4 my-auto">
          <img :src="cart.Product.image_url" class="card-img" style="width: 200px; height: 150px;" alt="Image Product added to cart">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{ cart.Product.name }}</h5>
            <p class="card-text">Rp. {{ cart.Product.price }}</p>
            <div class="d-flex flex-row justify-content-center">
                <p v-show="cart.productQty !== 1" @click="minus()" style="cursor: pointer;"><img src="https://img.icons8.com/pastel-glyph/24/000000/minus.png"/></p>
                <p class="card-text w-25 mx-1 my-1">{{ cart.productQty }}</p>
                <p v-show="cart.productQty !== cart.Product.stock" @click="plus()" style="cursor: pointer;"><img src="https://img.icons8.com/pastel-glyph/24/000000/plus.png"/></p>
            </div>
            <p @click="remove()" style="cursor: pointer;"><img src="https://img.icons8.com/metro/24/000000/trash.png"/></p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card-cart',
  props: ['cart'],
  methods: {
    minus () {
      const payload = Number(this.cart.productQty) - 1
      this.$store.dispatch('updateQty', {
        productQty: payload,
        productId: this.cart.Product.id,
        cartId: this.cart.id
      })
    },
    plus () {
      const payload = Number(this.cart.productQty) + 1
      this.$store.dispatch('updateQty', {
        productQty: payload,
        productId: this.cart.Product.id,
        cartId: this.cart.id
      })
    },
    remove () {
      this.$store.dispatch('removeCart', {
        cartId: this.cart.id
      })
    }
  }
}
</script>

<style>
</style>
