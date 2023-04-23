<script>
import { doctorStore } from "@/store/doctorStore";
import { computed, reactive } from "vue";

export default {
  setup() {
    const state = reactive({ modalConfirm: false });
    const DoctorStore = doctorStore();

    state.modalConfirm = computed(() => DoctorStore.getModalConfirm);

    return { state };
  },
};
</script>

<template>
  <div
    v-show="state.modalConfirm"
    class="w-full h-screen fixed right-0 top-0 bg-[#000000b3] backdrop-blur-[2px] flex items-center justify-center transition ease-in"
  >
    <div
      class="modal-enter w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div class="">
        <div
          class="flex flex-col items-center text-center p-5 flex-auto justify-center"
        >
          <img
            src="@/assets/green-checkmark-line-icon.svg"
            class="block w-28"
          />
          <h3 class="text-xl font-bold py-4">Doctor Adicionado!</h3>
          <p class="text-md text-gray-500 px-8">
            O doctor foi adicionado com sucesso!
          </p>
          <p class="text-md text-gray-500 px-8">
            Aguarde o redirecionamento automático.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
