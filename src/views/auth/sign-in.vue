<template>
  <AuthLayout>
    <div class="backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="hidden lg:block ps-4 py-4">
          <div class="relative rounded-xl overflow-hidden h-full w-full">
            <img :src="authImg" alt="" class="w-full h-full transform -scale-x-100">
            <div class="absolute inset-0 bg-default-950/40">
              <div class="flex items-end justify-center h-full">
                <div class="p-6 text-start">
                  <h5 class="text-xl font-bold text-white mb-3">Is the best way, <br> to build your marketing strategy!
                  </h5>
                  <p class="text-base font-medium text-default-400">Try all paid functions for free. just register and
                    create your first widget, it simple and fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full p-10 lg:ps-0">
          <div class="pb-10">
            <LogoBox/>
          </div>
          <div class="pb6 my-auto">
            <h4 class="text-2xl font-bold text-white mb-4">Get Started Now</h4>
            <p class="text-default-300 mb-8 max-w-sm ">Enter your email address and password to access account.</p>


            <form @submit.prevent="handleSignIn" class="text-start">

              <p v-if="error.length > 0" class="mb-2 text-red-500">{{ error }}</p>

              <div class="mb-4">
                <label for="emailaddress" class="block text-base/normal font-semibold text-default-200 mb-2">Email
                  address</label>
                <input
                    class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                    type="email" id="emailaddress" placeholder="Enter your email" v-model="v.email.$model">
                <div v-if="v.email.$error" class="text-red-500">
                  <span v-for="(err, idx) in v.email.$errors" :key="idx">
                    {{ err.$message }}
                  </span>
                </div>
              </div>

              <div class="mb-4">
                <label for="password"
                       class="block text-base/normal font-semibold text-default-200 mb-2">Password</label>
                <input
                    class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                    type="password" id="password" placeholder="Enter your password" v-model="v.password.$model">
                <div v-if="v.password.$errors" class="text-danger">
                  <span v-for="(err, idx) in v.password.$errors" :key="idx">
                    {{ err.$message }}
                  </span>
                </div>
              </div>

              <div class="mb-6">
                <div class="flex flex-wrap items-center justify-between gap-y-1">
                  <div>
                    <input type="checkbox"
                           class="h-4 w-4 rounded text-primary border-white/20 bg-white/20 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                           id="checkbox-signin">
                    <label class="ms-2 text-default-200 align-middle" for="checkbox-signin">Remember me</label>
                  </div>
                  <router-link :to="{name:'auth.forgot-password'}" class="text-default-200 border-b border-dashed">
                    <small>Forgot your password?</small></router-link>
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                    class="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-primary-600/90 text-white rounded-lg transition-all duration-500 group hover:bg-primary-600 mt-5"
                    type="submit"><span class="fw-bold">Sign In</span></button>
              </div>
            </form>
          </div>
          <div>
            <div class="text-center">
              <p class="text-lg text-default-200 font-semibold mb-4">Sign in with</p>
              <ul class="flex flex-wrap items-center justify-center gap-2">
                <li>
                  <a href="javascript:void(0);"
                     class="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-blue-600/60"><i
                      class="mdi mdi-facebook text-2xl text-white group-hover:text-white"></i></a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                     class="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-pink-600/60"><i
                      class="mdi mdi-instagram text-2xl text-white group-hover:text-white"></i></a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                     class="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-blue-800/60"><i
                      class="mdi mdi-linkedin text-2xl text-white group-hover:text-white"></i></a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                     class="h-10 w-10 inline-flex items-center justify-center backdrop-blur-2xl bg-white/20 rounded-lg transition-all duration-500 group hover:bg-default-600/60"><i
                      class="mdi mdi-github text-2xl text-white group-hover:text-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center mt-5">
      <p class="text-default-300 leading-6 text-base font-medium">Don't have an account?
        <router-link :to="{name:'auth.sign-up'}" class="text-primary font-semibold ms-1">Sign Up</router-link>
      </p>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import LogoBox from "@/components/LogoBox.vue";
import authImg from "@/assets/images/ai/auth-img.jpg"

import {required, email} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'

import {ref, reactive, computed} from 'vue'
import {useRoute} from 'vue-router'

import HttpClient from '@/helpers/http-client'
import {useAuthStore} from '@/stores/auth'

import type {AxiosResponse} from 'axios'
import type {User} from '@/types/auth'
import router from '@/router'

const credentials = reactive({
  email: 'user@email.com',
  password: 'password'
})

const vuelidateRules = computed(() => ({
  email: {required, email},
  password: {required}
}))

const v = useVuelidate(vuelidateRules, credentials)

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')
const checked = ref(false)

const handleSignIn = async () => {
  const result = await v.value.$validate()

  if (result) {
    try {
      const res: AxiosResponse<User> = await HttpClient.post('/sign-in', credentials)

      if (res.data.token) {
        useAuth.saveSession({
          ...res.data,
          token: res.data.token
        })
        redirectUser()
      }
    } catch (e: any) {
      if (e.response?.data?.error) {
        if (error.value.length == 0) error.value = e.response?.data?.error
      }
    }
  }
}

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}
</script>