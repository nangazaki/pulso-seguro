<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        class="w-ful flex gap-8"
      >
        <div
          class="bg-branco-claro w-[280px] h-[500px] rounded-lg p-4 card-shadow"
        >
          <span class="font-montserrat pl-2 text-2xl text-cinza-1"
            >Adicionar Paciente</span
          >

          <div class="w-full mt-8 overflow-hidden">
            <img
              class="w-40 h-40 mb-4 rounded-full object-cover"
              :src="`${
                preview
                  ? preview
                  : `http://localhost:8000/storage/${paciente.imagem}`
              }`"
              alt="Foto de perfil"
            />
            <div>
              <Field type="file" name="imagem" @change="previewImage" />
              <span class="text-sm text-cinza-3"
                >Só arquivos .jpg .png .jpeg são permitidos</span
              >
            </div>
          </div>
        </div>

        <div
          class="bg-branco-claro w-full h-auto rounded-lg p-8 card-shadow mb-8"
        >
          <div class="pb-4 mb-8 border-b">
            <span class="font-montserrat text-xl block mb-4"
              >Informações pessoais</span
            >
            <div class="mb-4 flex gap-4">
              <div class="form-add flex-wrap">
                <label class="block text-base text-cinza-3 mb-1">Nome:</label>
                <Field
                  type="text"
                  name="name"
                  v-model="paciente.name"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Nome"
                />
                <ErrorMessage name="name" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Sobrenome:</label
                >
                <Field
                  type="text"
                  name="sobrenome"
                  v-model="paciente.sobrenome"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Sobrenome"
                />
                <ErrorMessage name="sobrenome" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Província:</label
                >
                <Field
                  type="text"
                  name="provincia"
                  v-model="paciente.provincia"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Província"
                />
                <ErrorMessage name="provincia" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Município:</label
                >
                <Field
                  type="text"
                  name="municipio"
                  v-model="paciente.municipio"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Município"
                />
                <ErrorMessage name="municipio" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Bairro:</label>
                <Field
                  type="text"
                  name="bairro"
                  v-model="paciente.bairro"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Bairro"
                />
                <ErrorMessage name="bairro" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Rua:</label>
                <Field
                  type="text"
                  name="rua"
                  v-model="paciente.rua"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Rua"
                />
                <ErrorMessage name="rua" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">B.I:</label>
                <Field
                  type="text"
                  name="nBI"
                  v-model="paciente.nBI"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Bilhete de identidade"
                />
                <ErrorMessage name="nBI" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Nº de Telefone:</label
                >
                <Field
                  type="tel"
                  name="telefone"
                  v-model="paciente.telefone"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Número de telefone"
                />
                <ErrorMessage name="telefone" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Data de Nascimento:</label
                >
                <Field
                  type="date"
                  name="dataNascimento"
                  v-model="paciente.dataNascimento"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Data de nascimento"
                />
                <ErrorMessage name="dataNascimento" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Gênero:</label>
                <Field
                  name="genero"
                  as="select"
                  v-model="paciente.genero"
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
            <span class="font-montserrat text-xl block mb-4"
              >Informações de acesso</span
            >
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Nome do usuário:</label
                >
                <Field
                  type="text"
                  name="usuario"
                  v-model="paciente.usuario"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Nome de usuário"
                />
                <ErrorMessage name="usuario" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">E-mail:</label>
                <Field
                  type="email"
                  name="email"
                  v-model="paciente.email"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Senha:</label>
                <Field
                  type="password"
                  name="password"
                  v-model="paciente.password"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Senha"
                />
                <ErrorMessage name="password" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Repita a senha:</label
                >
                <Field
                  type="password"
                  name="confirmPassword"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Senha"
                />
                <ErrorMessage name="confirmPassword" />
              </div>
            </div>
          </div>

          <div class="mb-8">
            <span class="font-montserrat text-xl block mb-4"
              >Associar Doctor</span
            >
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1"
                  >Nome do Doctor:</label
                >
                <Field
                  name="doctorNome"
                  as="select"
                  v-model="option"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option disabled value="">Selecione o nome do Doctor</option>
                  <option
                    v-for="(doctor, i) in doctorsList"
                    :key="i"
                    v-bind:value="doctor.id"
                  >
                    Dr. {{ doctor.name }} {{ doctor.sobrenome }}
                  </option>
                </Field>
                <ErrorMessage name="doctorNome" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">ID:</label>
                <Field
                  type="number"
                  name="medico_id"
                  v-model="paciente.user_id"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Doctor ID"
                  disabled
                />
                <ErrorMessage name="medico_id" />
              </div>
            </div>
          </div>

          <div>
            <button
              class="px-4 py-2 bg-primaria-claro text-branco-claro rounded-md mr-4"
            >
              Adicionar Novo Paciente
            </button>
            <button
              class="px-4 py-2 bg-cinza-5 text-cinza-3 rounded-md mr-4"
              @click="fecharMenu"
            >
              Cancelar
            </button>
          </div>
        </div>
      </Form>
    </div>
  </main>
</template>

<script>
import * as yup from "yup";
import api from "@/service";
import { dataPaciente } from "@/helpers/index";
import { config } from "@/modules/auth/storage";
import { Form, Field, ErrorMessage } from "vee-validate";

import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  components: { NavbarComp, HeaderComp, Form, Field, ErrorMessage },
  data() {
    return {
      preview: null,
      schema: yup.object(dataPaciente),
      image: "",
      paciente: {},
    };
  },
  mounted() {
    this.getPaciente();
  },
  methods: {
    getPaciente() {
      api.get(`pacientes/${this.$route.params.id}`, config).then((res) => {
        this.paciente = res.data;
        console.log(res);
      });
    },
    onSubmit(values) {
      api.patch(`pacientes/${this.paciente.id}`, values).then((res) => {
        console.log(values);
        console.log(res);
      });
    },
    fecharMenu() {
      this.isVisible = false;
      this.$router.back();
    },
    previewImage(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.form.imagem = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>