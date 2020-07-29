<template>
    <div class="col mb-4">
        <div class="card">
            <img :src="product.image_url" class="card-img-top pt-3 mx-auto" alt="Product Image">
            <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Rp. {{ product.price }}</p>
            <p class="card-text text-muted">Stock: {{ product.stock }}</p>
            </div>
            <div class="card-footer">
                <form @submit.prevent="addCart" class="form-inline">
                    <input type="number" class="w-50 mx-3 text-center" placeholder="Qty" v-model="productQty">
                    <button type="submit" class="btn-md btn-primary">Add to Cart</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product'],
  data () {
    return {
      productId: '',
      productQty: ''
    }
  },
  methods: {
    addCart () {
      if (localStorage.access_token) {
        this.$store.dispatch('addCart', {
          productId: this.product.id,
          productQty: Number(this.productQty)
        })
        this.productQty = ''
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
.card {
    width: 300px;
    height: 450px;
}
.card img {
    width: 200px;
    height: 200px;
}
</style>
