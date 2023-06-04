<script>
import * as yup from "yup";
import Swal from "sweetalert2";
import { authStore } from "@/store/authStore";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";

import { informacoesAcesso } from "@/utils/doctor";
import { doctorStore } from "@/store/doctorStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Header, Form, Field, ErrorMessage, DefaultLayout },
  setup() {
    const schema = yup.object(informacoesAcesso);
    const route = useRoute();
    const router = useRouter();
    const DoctorStore = doctorStore();
    const state = reactive({
      doctor: null,
      user: null,
    });

    function fecharMenu() {
      router.push("/dashboard/pacientes");
    }

    async function onSubmit(data) {
      const response = await authStore().updatePersonalDataAccess(
        data,
        state.user
      );

      if (response === 422) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocorreu um erro ao actualizar as suas informações, tente novamente!",
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Informações actualizadas!",
        showConfirmButton: false,
        timer: 1500,
      });
      fecharMenu();
    }

    onMounted(() => {
      state.user = computed(() => authStore().getUser);
      DoctorStore.SelecionarDoctor(state.user.id);
    });

    state.doctor = computed(() => DoctorStore.doctorSelecionado);

    return { schema, onSubmit, fecharMenu, state };
  },
};
</script>

<template>
  <section class="pb-8">
    <h2 class="text-primary mb-3">Editar Informações de Acesso</h2>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      class="w-full flex gap-8"
    >
      <div class="bg-white w-full h-auto rounded-xl p-8 shadow-card mb-8">
        <div class="pb-4 mb-8 border-b">
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Nome do usuário:</label
              >
              <Field
                type="text"
                name="usuario"
                v-model="state.doctor.usuario"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Nome de usuário"
              />
              <ErrorMessage name="usuario" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">E-mail:</label>
              <Field
                type="email"
                name="email"
                v-model="state.doctor.email"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="E-mail"
              />
              <ErrorMessage name="email" />
            </div>
          </div>
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">Senha:</label>
              <Field
                type="password"
                name="password"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Senha"
              />
              <ErrorMessage name="password" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Repita a senha:</label
              >
              <Field
                type="password"
                name="passwordConfirmation"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Senha"
              />
              <ErrorMessage name="passwordConfirmation" />
            </div>
          </div>
        </div>

        <div>
          <button
            class="bg-gradient-1-lighter px-6 py-2 text-md text-white font-medium shadow-sm tracking-wider border rounded-md mr-4 ease-linear hover:bg-gradient-1-darker"
          >
            Confirmar Edição
          </button>
          <button
            class="bg-white px-6 py-2 text-md shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:bg-gray-100"
            @click="fecharMenu"
          >
            Cancelar
          </button>
        </div>
      </div>
    </Form>
  </section>
</template>