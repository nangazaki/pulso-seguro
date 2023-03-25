<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />
    <ModalConfirm />

    <span class="block mb-5 font-montserrat pl-2 text-lg text-cinza-4">
      <router-link to="/lista-medicos" class="text-cinza-4"
        >Doctores</router-link
      >
      /
      <span class="text-cinza-1"> Adicionar Doctor </span>
    </span>

    <div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        class="w-ful flex gap-8"
      >
        <div
          class="bg-branco-claro w-[280px] h-[500px] rounded-lg p-4 card-shadow"
        >
          <div class="w-full mt-8 overflow-hidden">
            <img
              :src="`${
                preview
                  ? preview
                  : 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072178.jpg?w=740&t=st=1678925432~exp=1678926032~hmac=3a5c267e550607d8e22f2d3d0314179005b8feb6f556e40e24b576cf234383e0'
              }`"
              class="w-40 h-40 mb-4 rounded-full object-cover"
              alt="Foto de perfil"
            />
            <div>
              <input type="file" name="imagem" @change="previewImage" />
              <span class="block text-sm text-cinza-3"
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
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Bilhete de identidade"
                />
                <ErrorMessage name="nBI" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">
                  Nº de Telefone:
                </label>
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
                <label class="block text-base text-cinza-3 mb-1">
                  Data de Nascimento:
                </label>
                <Field
                  type="date"
                  name="dataNascimento"
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
            <span class="font-montserrat text-xl block mb-4">
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

          <div class="mb-8">
            <span class="font-montserrat text-xl block mb-4">
              Informações de acesso
            </span>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">
                  Nome do usuário:
                </label>
                <Field
                  type="text"
                  name="usuario"
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
                  name="passwordConfirmation"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Confirme a senha"
                />
                <ErrorMessage name="passwordConfirmation" />
              </div>
            </div>
          </div>

          <div>
            <button
              class="bg-primaria-claro px-6 py-2 text-md shadow-sm tracking-wider border text-white rounded-md mr-4 hover:shadow-lg"
            >
              Adicionar Novo Doctor
            </button>
            <button
              class="bg-white px-6 py-2 text-md shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
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
import { doctor } from "@/helpers/index";
import { Form, Field, ErrorMessage } from "vee-validate";

import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

import ModalConfirm from "../components/ModalConfirm.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      preview: null,
      schema: yup.object(doctor),
      imagem: "",
    };
  },
  components: {
    NavbarComp,
    HeaderComp,
    Form,
    Field,
    ErrorMessage,
    ModalConfirm,
  },
  mounted() {
    this.setModalConfirm(true);
  },
  methods: {
    ...mapActions("medicos", ["ActionPostDoctor", "setModalConfirm"]),

    async onSubmit(values) {
      let {
        name,
        sobrenome,
        provincia,
        municipio,
        bairro,
        rua,
        nBI,
        telefone,
        dataNascimento,
        genero,
        especialidade,
        idCarteira,
        usuario,
        email,
        password,
      } = values;

      let formData = new FormData();
      formData.append("name", name);
      formData.append("sobrenome", sobrenome);
      formData.append("imagem", this.imagem);
      formData.append("provincia", provincia);
      formData.append("municipio", municipio);
      formData.append("bairro", bairro);
      formData.append("rua", rua);
      formData.append("nBI", nBI);
      formData.append("telefone", telefone);
      formData.append("dataNascimento", dataNascimento);
      formData.append("genero", genero);
      formData.append("especialidade", especialidade);
      formData.append("idCarteira", idCarteira);
      formData.append("usuario", usuario);
      formData.append("email", email);
      formData.append("password", password);

      await this.ActionPostDoctor(formData)
        .then((res) => {
          if (res == 200) {
            this.setModalConfirm(true);

            setTimeout(() => {
              this.setModalConfirm(false);
              this.$router.push("/lista-medicos");
            }, 3500);
          }
        })
        .catch((err) => {
          console.log(err);
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

        reader.readAsDataURL(input.files[0]);
        this.imagem = input.files[0];
      }
    },
  },
};
</script>