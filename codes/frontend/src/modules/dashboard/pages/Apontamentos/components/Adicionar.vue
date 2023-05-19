<script>
import * as yup from "yup";
import { computed, reactive } from "vue";
import { notasStore } from "@/store/notasStore";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";

export default {
  props: {},
  setup() {
    const router = useRouter();
    const schema = yup.object({
      apontamento: yup
        .string()
        .required("É obrigatório preencher o campo *")
        .min(6, "A nota deve possuir no mínimo 6 caracters")
        .max(150, "Número de caracters execedido!"),
    });
    const state = reactive({ modal: false });
    const NotasStore = notasStore();
    state.modal = computed(() => NotasStore.getNewNotesModal);

    async function sendNote(values) {
      const response = await NotasStore.AdicionarNota(values);

      if (response.status === 200) {
        router.go();
      }
    }
    function closeModal() {
      NotasStore.closeNewNotesModal();
    }
    return { state, sendNote, closeModal, schema };
  },
  components: { Form, Field, ErrorMessage },
};
</script>

<template>
  <div
    v-show="state.modal"
    class="w-full h-screen fixed right-0 top-0 bg-[#000000b3] flex justify-center transition ease-in py-16"
  >
    <div class="p-6 max-w-[840px] w-full h-[420px] flex gap-4 modal-enter">
      <div class="bg-white w-full overflow-hidden rounded-2xl">
        <div class="p-8 w-full">
          <h3 class="font-montserrat text-lg text-primary mb-2">Nova Nota</h3>
          <Form @submit="sendNote" :validation-schema="schema" class="">
            <div class="relative w-full mb-4">
              <Field
                as="textarea"
                name="apontamento"
                cols="30"
                rows="8"
                placeholder="Este é um exemplo de uma nota. Tu podes escrever aqui a tua nota."
                class="p-4 text-base appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <ErrorMessage name="apontamento" class="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              class="bg-gradient-1-lighter px-6 py-2 text-md text-white font-medium shadow-sm tracking-wider border rounded-md mr-4 ease-linear hover:bg-gradient-1-darker"
            >
              Adicionar
            </button>
          </Form>
        </div>
      </div>
      <div
        @click="closeModal"
        class="bg-white w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:text-gradient-1-lighter"
      >
        <i class="ph ph-x"></i>
      </div>
    </div>
  </div>
</template>