<script>
import * as yup from "yup";
import { doctor } from "@/helpers/index";
import { Form, Field, ErrorMessage } from "vee-validate";

import Footer from "@/layouts/Footer.vue";
import Navbar from "@/layouts/Navbar.vue";
import ConfirmDoctor from "../components/ConfirmDoctor.vue";

export default {
  components: { Navbar, Footer, Form, Field, ErrorMessage, ConfirmDoctor },
  setup() {
    const schema = yup.object(doctor);

    return { schema };
  },
};
</script>

<template>
  <navbar />
  <main class="overflow-y-scroll flex flex-col justify-between">
    <ConfirmDoctor />
    <div class="max-w-[1500px] mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Adicionar Doctor</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
      </header>
      <div class="px-8 pb-8 flex gap-8">
        <div>
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            class="w-ful flex gap-8"
          >
            <div
              class="bg-white w-[280px] h-[500px] rounded-xl p-4 shadow-card"
            >
              <div class="w-full mt-8 overflow-hidden">
                <div class="w-full flex justify-center mb-4">
                  <img
                    class="w-40 h-40 rounded-full object-cover"
                    :src="`${
                      preview
                        ? preview
                        : 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072178.jpg?w=740&t=st=1678925432~exp=1678926032~hmac=3a5c267e550607d8e22f2d3d0314179005b8feb6f556e40e24b576cf234383e0'
                    }`"
                    alt="Foto de perfil"
                  />
                </div>
                <div>
                  <input type="file" name="imagem" @change="previewImage" />
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
                      >Nº de Telefone:</label
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
                <span class="text-md uppercase block mb-4 text-primary">
                  Informações Profissional
                </span>
                <div class="mb-4 flex gap-4">
                  <div class="form-add">
                    <label class="block text-base text-cinza-3 mb-1">
                      Especialidade:
                    </label>
                    <Field
                      name="especialidade"
                      as="select"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Selecione a Especialidade</option>
                      <option value="Cardiologia">Cardiologia</option>
                      <option value="Hipertensão Arterial">
                        Hipertensão Arterial
                      </option>
                    </Field>
                    <ErrorMessage name="especialidade" />
                  </div>
                  <div class="form-add">
                    <label class="block text-base text-cinza-3 mb-1">
                      Nº da Carteira:
                    </label>
                    <Field
                      type="text"
                      name="idCarteira"
                      class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Nº da carteira"
                    />
                    <ErrorMessage name="idCarteira" />
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

              <div>
                <button
                  class="bg-gradient-1-lighter px-6 py-2 text-md text-white font-medium shadow-sm tracking-wider border rounded-md mr-4 ease-linear hover:bg-gradient-1-darker"
                >
                  Adicionar Doctor
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
    <Footer />
  </main>
</template>
