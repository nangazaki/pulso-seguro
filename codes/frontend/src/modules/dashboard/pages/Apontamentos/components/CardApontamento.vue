<script>
export default {
  props: {
    apontamento: {
      type: Object,
      // required: true,
    },
  },
  setup(porps) {
    const date = Date(props.apontamento.created_at);
  },
};
</script>

<template>
  <div
    class="bg-white min-w-0 w-full h-[180px] lg:w-[49%] p-6 overflow-hidden rounded-lg shadow-card"
  >
    <div class="w-full flex gap-4">
      <div class="w-auto flex-grow-0 flex-shrink-0">
        <div
          class="w-12 h-12 border flex items-center justify-center border-gradient-1 rounded-full"
        >
          <i class="ph ph-note" :class="`text-xl text-gradient-1`"></i>
        </div>
      </div>
      <div class="flex-grow-1">
        <div class="w-full">
          <div>{{}}</div>
          <div>Cardiologia</div>
          <div>
            {{ apontamento.apontamento }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>