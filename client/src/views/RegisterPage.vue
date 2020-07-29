<template>
    <div id="register-form">
        <div class="text-center" id="register-container">
            <h1 class="title-header text-center">Join Toko Sebelah Family</h1>
            <div class="alert alert-warning" role="alert" v-if="message">{{ message }}</div>
            <form class="my-4" @submit.prevent="register">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" class="form-control w-75 mx-auto" v-model="name"
                        placeholder="John Doe" />
                </div>
                <div class="form-group">
                    <label for="email-register">Email</label>
                    <input type="email" class="form-control w-75 mx-auto" v-model="email"
                        placeholder="example@email.com" />
                </div>
                <div class="form-group">
                    <label for="password-register">Password</label>
                    <input type="password" class="form-control w-75 mx-auto" v-model="password"
                        placeholder="password" />
                </div>
                <div class="d-flex justify-content-center">
                    <button id="btn-register" type="submit" class="btn btn-primary w-75 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'register-page',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        password: this.password
      })
    }
  },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style>
#register-form {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#register-container {
    background-color: rgba(5, 6, 100, 0.76);
    padding: 40px;
    border-radius: 10px;
    color: white;
    width: 600px;
    border: black solid 1px;
}
</style>
