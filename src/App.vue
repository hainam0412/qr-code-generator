<template>
  <div class="min-h-screen flex justify-center py-[10rem]">
    <div class="max-w-full w-1/2 container">
      <div class="grid grid-cols-2 gap-4 mb-16">
        <div>
          <label for="value" :class="labelClass">Value</label>
          <div class="mt-2">
            <input type="text" name="value" id="size" :class="inputClass" v-model="qrCodeProps.value">
          </div>
        </div>

        <div>
          <label for="size" :class="labelClass">Size</label>
          <div class="mt-2">
            <input type="number" name="size" id="size" min="0" max="500" v-model="qrCodeProps.size" :class="inputClass">
          </div>
          <div class="text-sm leading-6 mt-2">
            <p class="text-gray-500">Min: 0 - Max: 500</p>
          </div>
        </div>

        <div>
          <label for="background" :class="labelClass">Background</label>
          <div class="mt-2">
            <input type="color" name="background" id="background" v-model="qrCodeProps.background">
          </div>
        </div>

        <div>
          <label for="foreground" :class="labelClass">Foreground</label>
          <div class="mt-2">
            <input type="color" name="foreground" id="foreground" v-model="qrCodeProps.foreground">
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="border border-black p-4">
          <qrcode-vue v-bind="qrCodeProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import {reactive, watch} from "vue";
import {QrCodeProps} from "./module/qr-code/interface/resource/qr-code-props.interface.ts";

const qrCodeProps = reactive<QrCodeProps>({
  value: 'https://en.wikipedia.org/wiki/QR_code#Error_correction',
  size: 100,
  'render-as': 'canvas',
  margin: 0,
  level: 'H',
  background: '#ffffff',
  foreground: '#000000',
})

const inputClass = 'block w-full rounded-md border-0 py-1.5 px-[0.5rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
const labelClass = 'block text-sm font-medium leading-6 text-gray-900';

watch(qrCodeProps, () => {
  if (qrCodeProps.size > 500) {
    qrCodeProps.size = 500;
  }

  if (qrCodeProps.size < 0) {
    qrCodeProps.size = 0;
  }
})
</script>



<style scoped></style>
