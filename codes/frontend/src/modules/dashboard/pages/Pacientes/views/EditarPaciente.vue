<script>
import * as yup from "yup";
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";

import { editar } from "@/utils/paciente";
import { doctorStore } from "@/store/doctorStore";
import { pacienteStore } from "@/store/pacienteStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage, DefaultLayout, Header },
  setup() {
    const schema = yup.object(editar);
    const route = useRoute();
    const router = useRouter();
    const DoctorStore = doctorStore();
    const PacienteStore = pacienteStore();
    const state = reactive({
      imagem: null,
      preview: null,
      paciente: null,
      doctorsList: null,
    });

    // Renderizar a imagem em tempo real.
    function previewImage(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          state.preview = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
        state.imagem = input.files[0];
      }
    }

    async function onSubmit(data) {
      const response = await PacienteStore.EditarPaciente(data, state.imagem);

      if (response === 422) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocorreu um erro ao actualizar os dados, tente novamente!",
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Paciente Actualizado!",
        showConfirmButton: false,
        timer: 1500,
      });
      fecharMenu();
    }

    function fecharMenu() {
      router.push("/dashboard/pacientes");
    }

    onMounted(async () => {
      await PacienteStore.SelecionarPaciente(route.params.id);
      await DoctorStore.PegarDoctores();
    });

    state.paciente = computed(() => PacienteStore.pacienteSelecionado);
    state.doctorsList = computed(() => DoctorStore.getDoctores);

    return { schema, state, onSubmit, fecharMenu, previewImage };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Editar Informações do Paciente" />
      <div class="px-8 pb-8 flex gap-8">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          class="w-ful flex gap-8"
        >
          <div class="bg-white w-[280px] h-[500px] rounded-xl p-4 shadow-card">
            <div class="w-full mt-8 overflow-hidden">
              <div class="w-full flex justify-center mb-4">
                <img
                  class="w-40 h-40 rounded-full object-cover"
                  :src="`${
                    state.preview
                      ? state.preview
                      : `http://localhost:8000/storage/${state.paciente.imagem}`
                  }`"
                  alt="Foto de perfil"
                />
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  name="imagem"
                  @change="previewImage"
                />
                <span class="text-sm text-gray-500"
                  >Só arquivos .jpg .png .jpeg são permitidos</span
                >
              </div>
            </div>
          </div>

          <div class="bg-white w-full h-auto rounded-xl p-8 shadow-card mb-8">
            <div class="pb-4 mb-8 border-b">
              <span class="text-md uppercase block mb-4 text-primary">
                Informações pessoais
              </span>
              <div class="mb-4 flex gap-4">
                <div class="form-add flex-wrap">
                  <label class="block text-base text-gray-500 mb-1">
                    Nome:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    v-model="state.paciente.name"
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
                    v-model="state.paciente.sobrenome"
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
                    v-model="state.paciente.provincia"
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
                    v-model="state.paciente.municipio"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Município"
                  />
                  <ErrorMessage name="municipio" />
                </div>
              </div>
              <div class="mb-4 flex gap-4">
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >Bairro:</label
                  >
                  <Field
                    type="text"
                    name="bairro"
                    v-model="state.paciente.bairro"
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
                    v-model="state.paciente.rua"
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
                    v-model="state.paciente.nBI"
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
                    v-model="state.paciente.telefone"
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
                    v-model="state.paciente.dataNascimento"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Data de nascimento"
                  />
                  <ErrorMessage name="dataNascimento" />
                </div>
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >Gênero:</label
                  >
                  <Field
                    name="genero"
                    as="select"
                    v-model="state.paciente.genero"
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

            <div class="pb-4 mb-8 border-b">
              <span class="text-md uppercase block mb-4 text-primary"
                >Informações de acesso</span
              >
              <div class="mb-4 flex gap-4">
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >Nome do usuário:</label
                  >
                  <Field
                    type="text"
                    name="usuario"
                    v-model="state.paciente.usuario"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Nome de usuário"
                  />
                  <ErrorMessage name="usuario" />
                </div>
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >E-mail:</label
                  >
                  <Field
                    type="email"
                    name="email"
                    v-model="state.paciente.email"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="E-mail"
                  />
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div class="mb-4 flex gap-4">
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >Senha:</label
                  >
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

            <div class="mb-8">
              <span class="text-md uppercase block mb-4 text-primary"
                >Associar Doctor</span
              >
              <div class="mb-4 flex gap-4">
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1"
                    >Nome do Doctor:</label
                  >
                  <Field
                    name="doctorNome"
                    as="select"
                    v-model="state.paciente.user_id"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option disabled value="">
                      Selecione o nome do Doctor
                    </option>
                    <option
                      v-for="(doctor, i) in state.doctorsList"
                      :key="i"
                      v-bind:value="doctor.id"
                    >
                      Dr. {{ doctor.name }} {{ doctor.sobrenome }}
                    </option>
                  </Field>
                  <ErrorMessage name="doctorNome" />
                </div>
                <div class="form-add">
                  <label class="block text-base text-gray-500 mb-1">ID:</label>
                  <Field
                    type="number"
                    name="user_id"
                    v-model="state.paciente.user_id"
                    class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Doctor ID"
                    disabled
                  />
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
      </div>
    </div>
  </DefaultLayout>
</template>