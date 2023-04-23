<template>
  <div class="user h-32 mb-4">
    <div class="w-full flex flex-col items-center">
      <div
        :class="`${
          state.navbar ? 'w-14 h-14' : 'w-8 h-8'
        } bg-white rounded-full mb-2`"
      ></div>
      <div v-if="state.navbar">
        <div class="font-montserrat text-sm">Nangazaki44</div>
      </div>
    </div>
  </div>
</template>
