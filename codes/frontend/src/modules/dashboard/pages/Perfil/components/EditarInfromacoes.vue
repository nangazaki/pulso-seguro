<script>
import * as yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { authStore } from "@/store/authStore";
import { computed, onMounted, reactive } from "vue";

import { informacoesPessoais } from "@/utils/doctor";
import { doctorStore } from "@/store/doctorStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Header, Form, Field, ErrorMessage, DefaultLayout },
  setup() {
    const schema = yup.object(informacoesPessoais);
    const router = useRouter();
    const DoctorStore = doctorStore();
    const state = reactive({
      imagem: null,
      preview: null,
      doctor: null,
      user: null,
    });

    function fecharMenu() {
      router.push("/dashboard/doctores");
    }

    async function onSubmit(data) {
      const response = await authStore().updatePersonalData(data, state.user);

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
    <h2 class="text-primary mb-3">Editar Informações Pessoais</h2>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      class="w-full flex gap-8"
    >
      <div class="bg-white w-full h-auto rounded-xl p-8 shadow-card mb-8">
        <div class="pb-4 mb-8 border-b">
          <div class="mb-4 flex gap-4">
            <div class="form-add flex-wrap">
              <label class="block text-base text-gray-500 mb-1"> Nome: </label>
              <Field
                type="text"
                name="name"
                v-model="state.doctor.name"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Nome"
              />
              <ErrorMessage name="name" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Sobrenome:</label
              >
              <Field
                type="text"
                name="sobrenome"
                v-model="state.doctor.sobrenome"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Sobrenome"
              />
              <ErrorMessage name="sobrenome" />
            </div>
          </div>
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Província:</label
              >
              <Field
                type="text"
                name="provincia"
                v-model="state.doctor.provincia"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Província"
              />
              <ErrorMessage name="provincia" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Município:</label
              >
              <Field
                type="text"
                name="municipio"
                v-model="state.doctor.municipio"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Município"
              />
              <ErrorMessage name="municipio" />
            </div>
          </div>
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">Bairro:</label>
              <Field
                type="text"
                name="bairro"
                v-model="state.doctor.bairro"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Bairro"
              />
              <ErrorMessage name="bairro" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">Rua:</label>
              <Field
                type="text"
                name="rua"
                v-model="state.doctor.rua"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Rua"
              />
              <ErrorMessage name="rua" />
            </div>
          </div>
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">B.I:</label>
              <Field
                type="text"
                name="nBI"
                v-model="state.doctor.nBI"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Bilhete de identidade"
              />
              <ErrorMessage name="nBI" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Nº de Telefone:</label
              >
              <Field
                type="tel"
                name="telefone"
                v-model="state.doctor.telefone"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Número de telefone"
              />
              <ErrorMessage name="telefone" />
            </div>
          </div>
          <div class="mb-4 flex gap-4">
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1"
                >Data de Nascimento:</label
              >
              <Field
                type="date"
                name="dataNascimento"
                v-model="state.doctor.dataNascimento"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Data de nascimento"
              />
              <ErrorMessage name="dataNascimento" />
            </div>
            <div class="form-add">
              <label class="block text-base text-gray-500 mb-1">Gênero:</label>
              <Field
                name="genero"
                as="select"
                v-model="state.doctor.genero"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Selecione o gênero</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </Field>
              <ErrorMessage name="genero" />
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