<script>
import { reactive } from "vue";

export default {
  props: {
    apontamento: {
      type: Object,
      // required: true,
    },
    user_id: Number,
  },
  setup(props) {
    const date = new Date(props.apontamento.created_at);
    const state = reactive({
      data: undefined,
    });

    state.data = `${date.toLocaleDateString(
      "pt-PT"
    )}, ${date.getHours()}h${date.getMinutes()}`;

    return { state };
  },
};
</script>

<template>
  <div
    v-if="apontamento.user_id == user_id"
    class="bg-white min-w-0 w-full h-[180px] lg:w-[49%] p-6 overflow-hidden rounded-lg shadow-card transition ease-linear duration-500 hover:shadow-xl"
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
          <div>{{ state.data }}</div>
          <div class="mb-2">APONTAMENTO</div>
          <div>
            {{ apontamento.apontamento }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>