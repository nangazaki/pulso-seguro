<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <div>
      <Form @submit="onSubmit" :validation-schema="schema"
        class="w-ful flex gap-8"
      >
        <div class="bg-branco-claro w-[280px] h-[500px] rounded-lg p-4 card-shadow">
          <span class="font-montserrat pl-2 text-2xl text-cinza-1">Adicionar Admin</span>

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
            <span class="font-montserrat text-xl block mb-4">Informações</span>
            <div class="mb-4 flex gap-4">
              <div class="form-add flex-wrap">
                <label class="block text-base text-cinza-3 mb-1">Nome:</label>
                <Field type="text" name="nome"
                  class="form-add-info"
                  placeholder="Nome"
                />
                <ErrorMessage name="nome" />
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
                <label class="block text-base text-cinza-3 mb-1">Email:</label>
                <Field type="text" name="email"
                  class="form-add-info"
                  placeholder="Email"
                />
                <ErrorMessage name="email" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Telefone:</label>
                <Field type="text" name="telefone"
                  class="form-add-info"
                  placeholder="Telefone"
                />
                <ErrorMessage name="telefone" />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Usuário:</label>
                <Field type="text" name="usuario"
                  class="form-add-info"
                  placeholder="Nome de usuário"
                />
                <ErrorMessage name="usuario" />
              </div>
              <div class="form-add">
                <label class="block text-base text-cinza-3 mb-1">Senha:</label>
                <Field type="text"  name="senha"
                  class="w-full h-10 px-2 py-4 border border-cinza-4 rounded-md texe-sm"
                  placeholder="Senha"
                />
                <ErrorMessage name="senha" />
              </div>
            </div>
           </div>
          <div>
            <button class=" px-4 py-2 bg-primaria-claro text-branco-claro rounded-md mr-4">
              Adicionar Administrador
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
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { dataDoctor } from "@/helpers/index"

export default {
  data() {
    return {
      preview: null,
      schema: yup.object(dataDoctor),
      imagem: '',
    };
  },
  components: { NavbarComp, HeaderComp, Form, Field, ErrorMessage },
  methods: {
    fecharMenu() {
      this.isVisible = false;
      this.$router.back();
    },
    
    async onSubmit(values){
      console.log(values)
    },
    
    previewImage (event) {
      let input = event.target;
      console.log(input)
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