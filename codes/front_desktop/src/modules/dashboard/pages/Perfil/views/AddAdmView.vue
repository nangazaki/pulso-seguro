<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <span class="block mb-5 font-montserrat pl-2 text-lg text-cinza-4">
      <router-link to="#" class="text-cinza-4">Admin</router-link> 
      /
      <span class="text-cinza-1">
        Adicionar Admin
      </span>
    </span>

    <div>
      <Form @submit="onSubmit" :validation-schema="schema"
        class="w-ful flex gap-8"
      >
        <div>
          <div class="bg-branco-claro w-[280px] rounded-lg p-4 card-shadow">
            <div class="w-full mt-8 overflow-hidden">
              <img
                class="w-40 h-40 mb-4 rounded-full object-cover"
                :src="`${preview ? preview : 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072178.jpg?w=740&t=st=1678925432~exp=1678926032~hmac=3a5c267e550607d8e22f2d3d0314179005b8feb6f556e40e24b576cf234383e0' }`"
                alt="Foto de perfil"
              />
              <div>
                <input type="file" name="imagem" @change="previewImage" />
                <span class="text-sm text-cinza-3">Só arquivos .jpg .png .jpeg são permitidos</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-branco-claro w-full h-auto rounded-lg p-8 card-shadow mb-8">
          <div class="pb-4 mb-8 border-b">
            <span class="font-montserrat text-xl block mb-4">Informações</span>
            <div class="mb-4 flex gap-4">
              <div class="form-add flex-wrap">
                <label class="block text-base text-cinza-3 mb-1">Nome:</label>
                <Field type="text" name="name"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="Nome"
                />
                <ErrorMessage name="name" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Sobrenome:</label>
                <Field type="text" name="sobrenome"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="Sobrenome"
                />
                <ErrorMessage name="sobrenome" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">E-mail:</label>
                <Field type="text" name="email"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Telefone:</label>
                <Field type="text" name="telefone"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="Telefone"
                />
                <ErrorMessage name="telefone" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Usuário:</label>
                <Field type="text" name="usuario"
                  class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="Nome de usuário"
                />
                <ErrorMessage name="usuario" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Palavra-passe:</label>
                <Field type="password"  name="password"
                class="text-sm appearance-none block w-full bg-gray-100 text-gray-700 
                    border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none 
                  focus:bg-white focus:border-gray-500"
                  placeholder="Palavra-passe"
                />
                <ErrorMessage name="password" />
              </div>
            </div>
           </div>
          <div>
            <button type="submit" class="bg-primaria-claro px-6 py-2 text-md shadow-sm tracking-wider border text-white rounded-md mr-4 hover:shadow-lg">
              Adicionar Administrador
            </button>
            <button class="bg-white px-6 py-2 text-md shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100" @click="fecharMenu">
              Cancelar
            </button>
          </div>
        </div>
      </Form>
    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { admin } from "@/helpers/index"

export default {
  data() {
    return {
      preview: null,
      schema: yup.object(admin),
      imagem: '',
    };
  },
  components: { NavbarComp, HeaderComp, Form, Field, ErrorMessage },
  methods: {
    fecharMenu() {
      this.isVisible = false;
      this.$router.back();
    },
    previewImage (event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
        this.imagem = input.files[0]
      }
    },
  },
};
</script>