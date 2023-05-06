<template>
  <div class="fixed top-0 left-0 bg-black w-full h-screen z-50">
    <div class="flex items-center justify-center">
      <div
        class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-white"
          >Loading...</span
        >
      </div>
    </div>
  </div>
</template>
