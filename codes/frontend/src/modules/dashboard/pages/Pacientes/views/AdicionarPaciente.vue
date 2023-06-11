<script>
import * as yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { paciente } from "@/utils/index";
import { paciente_doctor } from "@/utils/paciente";
import { computed, onMounted, reactive } from "vue";

import { authStore } from "@/store/authStore";
import { doctorStore } from "@/store/doctorStore";
import { pacienteStore } from "@/store/pacienteStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage, DefaultLayout, Header },
  setup() {
    const state = reactive({
      preview: null,
      imagem: undefined,
      doctores: null,
      schema: null,
      user: undefined,
    });
    const router = useRouter();
    const DoctorStore = doctorStore();
    const PacienteStore = pacienteStore();

    const isAdmin = computed(() => authStore().getIsAdmin);
    state.user = computed(() => authStore().getUser);
    state.doctores = computed(() => DoctorStore.getDoctores);

    if (isAdmin.value) {
      state.schema = yup.object(paciente);
    } else {
      state.schema = yup.object(paciente_doctor);
    }

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

    // Submeter os valores para criar um novo paciente
    async function onSubmit(values) {
      const response = await PacienteStore.AdicionarPaciente(
        values,
        state.imagem,
        state.user
      );

      if (response === 422) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocorreu um erro ao salvar os dados, tente novamente!",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Paciente Adicionado!",
        showConfirmButton: false,
        timer: 1500,
      });
      fecharMenu();
    }

    function fecharMenu() {
      router.push("/dashboard/pacientes");
    }

    onMounted(async () => {
      await DoctorStore.PegarDoctores();
    });

    return { onSubmit, fecharMenu, previewImage, state, isAdmin };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Adicionar Paciente" />
      <div class="px-8 flex gap-8">
        <div>
          <Form
            @submit="onSubmit"
            :validation-schema="state.schema"
            class="w-ful flex gap-8"
          >
            <div
              class="bg-white w-[280px] h-[500px] rounded-xl p-4 shadow-card"
            >
              <div class="w-full mt-8 overflow-hidden">
                <div class="w-full flex justify-center mb-4">
                  <img
                    class="w-40 h-40 border rounded-full object-cover"
                    :src="`${state.preview ? state.preview : '/upload.png'}`"
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
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Bairro"
                    />
                    <ErrorMessage name="bairro" />
                  </div>
                  <div class="form-add">
                    <label class="block text-base text-gray-500 mb-1"
                      >Rua:</label
                    >
                    <Field
                      type="text"
                      name="rua"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Rua"
                    />
                    <ErrorMessage name="rua" />
                  </div>
                </div>
                <div class="mb-4 flex gap-4">
                  <div class="form-add">
                    <label class="block text-base text-gray-500 mb-1"
                      >B.I:</label
                    >
                    <Field
                      type="text"
                      name="nBI"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Bilhete de identidade"
                    />
                    <ErrorMessage name="nBI" />
                  </div>
                  <div class="form-add">
                    <label class="block text-base text-gray-500 mb-1"
                      >Telefone do Responsável:</label
                    >
                    <Field
                      type="tel"
                      name="telefone"
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

              <div v-if="isAdmin" class="mb-8">
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
                      v-model="option"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option disabled value="">
                        Selecione o nome do Doctor
                      </option>
                      <option
                        v-for="(doctor, i) in state.doctores"
                        :key="i"
                        v-bind:value="doctor.id"
                      >
                        Dr. {{ doctor.name }} {{ doctor.sobrenome }}
                      </option>
                    </Field>
                    <ErrorMessage name="doctorNome" />
                  </div>
                  <div class="form-add">
                    <label class="block text-base text-gray-500 mb-1"
                      >ID:</label
                    >
                    <Field
                      type="number"
                      name="user_id"
                      v-model="option"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Doctor ID"
                      disabled
                    />
                    <ErrorMessage name="user_id" />
                  </div>
                </div>
              </div>

              <div>
                <button
                  class="bg-gradient-1-lighter px-6 py-2 text-md text-white font-medium shadow-sm tracking-wider border rounded-md mr-4 ease-linear hover:bg-gradient-1-darker"
                >
                  Adicionar Paciente
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
    </div>
  </DefaultLayout>
</template>