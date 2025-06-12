<template>
    <div
        class="p-10 rounded-lg bg-default-950/40 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
    >
        <div class="text-center">
            <component :is="item.icon" class="h-10 w-10 text-primary mx-auto" />
            <h3 class="text-2xl font-medium text-default-200 mt-4 ">
                {{ item.title }}
            </h3>
            <p class="text-base font-normal text-default-300 mt-4">
                {{ item.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { FeatureType } from "@/views/pages/services/individual-service/components/types";
import { MoveRight } from "lucide-vue-next";

defineProps({
    item: {
        type: Object as PropType<FeatureType>,
        required: true,
    },
});
</script>
