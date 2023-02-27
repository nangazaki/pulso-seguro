<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div>
      <Form @submit="onSubmit" :validation-schema="schema"
        class="w-ful flex gap-8">
        <div class="bg-branco-claro w-[280px] h-[500px] rounded-lg p-4 card-shadow">
          <span class="font-montserrat pl-2 text-2xl text-cinza-1">Adicionar Paciente</span>

          <div class="w-full mt-8 overflow-hidden">
            <img
              class="w-40 h-40 mb-4 rounded-full object-cover"
              :src="`${imagem ? preview : 'https://templates.iqonic.design/vito/vue/dist/img/user-11.889f2489.png' }`"
              alt="Foto de perfil"
            />
            <div>
              <Field name="file" class="mb-4" v-slot="{ previewImage }">
                <input type="file" accept="image/*" @change="previewImage" />
              </Field>
              <span class="text-sm text-cinza-3">Só arquivos .jpg .png .jpeg são permitidos</span>
            </div>
          </div>
        </div>

        <div class="bg-branco-claro w-full h-auto rounded-lg p-8 card-shadow mb-8">
          <div class="pb-4 mb-8 border-b">
            <span class="font-montserrat text-xl block mb-4">Informações pessoais</span>
            <div class="mb-4 flex gap-4">
              <div class="form-add flex-wrap">
                <label class="block text-base text-cinza-3 mb-1">Nome:</label>
                <Field type="text" name="name"
                  class="form-add-info"
                  placeholder="Nome"
                />
                <ErrorMessage name="name" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Sobrenome:</label>
                <Field type="text" name="sobrenome"
                  class="form-add-info"
                  placeholder="Sobrenome"
                />
                <ErrorMessage name="sobrenome" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Província:</label>
                <Field type="text" name="provincia"
                  class="form-add-info"
                  placeholder="Província"
                />
                <ErrorMessage name="provincia" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Município:</label>
                <Field type="text" name="municipio"
                  class="form-add-info"
                  placeholder="Município"
                />
                <ErrorMessage name="municipio" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Bairro:</label>
                <Field type="text" name="bairro"
                  class="form-add-info"
                  placeholder="Bairro"
                />
                <ErrorMessage name="bairro" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Rua:</label>
                <Field type="text"  name="rua"
                  class="w-full h-10 px-2 py-4 border border-cinza-4 rounded-md texe-sm"
                  placeholder="Rua"
                />
                <ErrorMessage name="rua" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">B.I:</label>
                <Field type="text"  name="nBI"
                  class="form-add-info"
                  placeholder="Bilhete de identidade"
                />
                <ErrorMessage name="nBI" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Nº de Telefone:</label>
                <Field type="tel"  name="telefone"
                  class="form-add-info"
                  placeholder="Número de telefone"
                />
                <ErrorMessage name="telefone" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Data de Nascimento:</label>
                <Field type="date" name="dataNascimento"
                  class="form-add-info"
                  placeholder="Data de nascimento"
                />
                <ErrorMessage name="dataNascimento" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Gênero:</label>
                <Field name="genero" as="select" class="w-full h-10 p-2 bg-branco-claro border border-cinza-4 rounded-md text-sm text-cinza-3">
                  <option value="">Selecione o gênero</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </Field>
                <ErrorMessage name="genero" />
              </div>
            </div>
          </div>
  
          <div class="pb-4 mb-8 border-b">
            <span class="font-montserrat text-xl block mb-4">Informações de acesso</span>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Nome do usuário:</label>
                <Field type="text" name="usuario"
                  class="form-add-info"
                  placeholder="Nome de usuário"
                />
                <ErrorMessage name="usuario" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">E-mail:</label>
                <Field type="email" name="email"
                  class="form-add-info"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Senha:</label>
                <Field type="password"  name="password"
                  class="form-add-info"
                  placeholder="Senha"
                />
                <ErrorMessage name="password" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Repita a senha:</label>
                <Field type="password"  name="password2"
                  class="form-add-info"
                  placeholder="Senha"
                />
                <ErrorMessage name="password2" />
              </div>
            </div>
          </div>

          <div class="mb-8">
            <span class="font-montserrat text-xl block mb-4">Associar Doctor</span>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Nome do Doctor:</label>
                <Field type="text" name="doctorNome" 
                class="form-add-info" 
                placeholder="Nome de usuário"
                />
                <ErrorMessage name="doctorNome" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">ID:</label>
                <Field
                  type="number" name="doctorID"
                  class="form-add-info"
                  placeholder="ID Doctor"
                />
                <ErrorMessage name="doctorID" />
              </div>
            </div>
          </div>

          <div>
            <button class=" px-4 py-2 bg-primaria-claro text-branco-claro rounded-md mr-4">
              Adicionar Novo Paciente
            </button>
            <button class="px-4 py-2 bg-cinza-5 text-cinza-3 rounded-md mr-4" @click="fecharMenu">
              Cancelar
            </button>
          </div>
        </div>
      </Form>
    </div>
  </main>
</template>

<script>
import * as yup from "yup"
import { mapActions } from 'vuex'
import { dataPaciente } from "@/helpers/index"
import { Form, Field, ErrorMessage } from "vee-validate"

import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  data() {
    return {
      preview: null,
      schema: yup.object(dataPaciente),
      imagem: ''
    };
  },
  components: { NavbarComp, HeaderComp, Form, Field, ErrorMessage },
  methods: {
    ...mapActions('pacientes', ['ActionPostPacient']),
    onSubmit(values){
      this.ActionPostPacient(values)
    },
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
        this.form.imagem=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>