<template>
  <div
      class="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out"
      data-aos="zoom-in" data-aos-duration="800">
    <div class="p-3">
      <div class="relative">
        <img :src="item.image" alt="" class="rounded-md">

        <div
            class="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
          <!-- <a href="#"
             class="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover">Place
            Bid
            <Navigation class="h-4 w-4 fill-white"/>
          </a> -->
        </div>

        <div v-if="item.sale" class="absolute top-0 start-0 p-2 transition-all duration-700">
          <div class="inline-flex justify-center w-full">
            <!-- <div class="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
              <p class="flex flex-col text-white font-bold text-sm">
                {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
              </p>
            </div> -->
          </div>
        </div>
      </div>

      <div class="pt-3 relative">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <img :src="item.creator.image" class="rounded-full h-10 w-10" alt="">
            <span>
              <a href="#" class="text-md font-semibold text-default-100 hover:text-primary">
                {{ item.name }}
              </a>
              <!-- <span class="text-xs text-default-100 block">{{ item.creator.username }}</span> -->
            </span>
          </div>
          <a href="#"
             class="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg"
             :class="item.isLiked ? 'text-red-600' : 'text-default-100 hover:text-red-600 focus:text-red-600'">
            <i class="mdi mdi-heart"></i>
          </a>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <span class="block font-small text-default-100">{{ item.description }}</span>
            <!-- <span class="block font-medium text-primary"><i
                class="mdi mdi-ethereum text-xl leading-none text-primary me-1"></i>{{ item.bid.current }} ETH</span> -->
          </div>
          <!-- <div class="text-end">
            <span class="block font-semibold text-default-100">Last Bid</span>
            <span class="block font-semibold text-primary"><i
                class="mdi mdi-ethereum text-xl leading-none text-primary me-1"></i>{{ item.bid.last }} ETH</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Navigation} from "lucide-vue-next";
import {ref, onMounted} from "vue"
import type {PropType} from "vue";
import type {CategoryType} from "@/views/pages/index-1/components/types";

const props = defineProps({
  item: {
    type: Object as PropType<CategoryType>,
    required: true
  }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

if (props.item.sale?.endDate) {
  const currentDate = new Date()
  const countDownTo = props.item.sale?.endDate?.getTime() ?? 0
  const timeRemaining = ref(countDownTo - currentDate.getTime())

  const updateCountdown = () => {
    timeRemaining.value = countDownTo - new Date().getTime()
  }

  const calculateTime = () => {
    days.value = Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((timeRemaining.value % (1000 * 60)) / 1000)
  }

  onMounted(() => {
    const intervalId = setInterval(() => {
      updateCountdown()
      calculateTime()
    }, 1000)

    return () => clearInterval(intervalId)
  })
}
</script>