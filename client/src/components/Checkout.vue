<template>
  <div class="row no-gutters justify-content-around" style="height:100px;">
        <div class="col-md-4 my-3 pt-1">
          <h4 class="text-right">Total</h4>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bolder;">Rp. {{ checkOut }}</h5>
            <button class="btn btn-success" disabled>Checkout</button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'checkout',
  computed: {
    checkOut () {
      return this.$store.getters.checkOut
    }
  }
}
</script>

<style>

</style>
