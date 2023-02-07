<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div>
      <form
        type="post"
        @submit.prevent="ActionPostPacient(form)"
        class="w-ful flex gap-8"
      >
        <div class="bg-branco-claro w-[280px] h-[500px] rounded-lg p-4 card-shadow">
          <span class="font-montserrat pl-2 text-2xl text-cinza-1">Adicionar Paciente</span>

          <div class="w-full mt-8 overflow-hidden">
            <img
              class="w-40 h-40 mb-4"
              src="https://templates.iqonic.design/vito/vue/dist/img/user-11.889f2489.png"
              alt="Foto de perfil"
            />
            <div>
              <input type="file" accept="image/*" class="mb-4" />
              <span class="text-sm text-cinza-3">Só arquivos .jpg .png .jpeg são permitidos</span>
            </div>
          </div>
        </div>
        <div class="bg-branco-claro w-full h-auto rounded-lg p-8 card-shadow mb-8">
          <div class="pb-4 mb-8 border-b">
            <span class="font-montserrat text-xl block mb-4">Informações pessoais</span>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px] flex-wrap">
                <label class="block text-base text-cinza-3 mb-1">Nome:</label>
                <input
                  type="text"
                  v-model="form.nome"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Nome"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Sobrenome:</label>
                <input
                  type="text"
                  v-model="form.sobrenome"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Sobrenome"
                />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Província:</label>
                <input
                  type="text"
                  v-model="form.provincia"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Província"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Município:</label>
                <input
                  type="text"
                  v-model="form.municipio"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Município"
                />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Bairro:</label>
                <input
                  type="text"
                  v-model="form.bairro"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Bairro"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Rua:</label>
                <input
                  type="text"
                  v-model="form.rua"
                  class="w-full h-10 px-2 py-4 border border-cinza-4 rounded-md texe-sm"
                  placeholder="Rua"
                />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">B.I:</label>
                <input
                  type="text"
                  v-model="form.bilhete"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Bilhete de identidade"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Nº de Telefone:</label>
                <input
                  type="tel"
                  v-model="form.tel"
                  class="w-full h-10 px-2 py-4 border border-cinza-4 rounded-md text-sm"
                  placeholder="Número de telefone"
                />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Data de Nascimento:</label>
                <input
                  type="date"
                  v-model="form.nascimento"
                  class="w-full h-10 px-2 py-4 border border-cinza-4 rounded-md text-sm text-cinza-3"
                  placeholder="Data de nascimento"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Gênero:</label>
                <select v-model="form.genero" class="w-full h-10 p-2 bg-branco-claro border border-cinza-4 rounded-md text-sm text-cinza-3">
                  <option value="">Selecione o gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-8">
            <span class="font-montserrat text-xl block mb-4">Informações de acesso</span>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Nome do usuário:</label>
                <input
                  type="text"
                  v-model="form.username"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Nome de usuário"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">E-mail:</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div class="mb-4 flex gap-4">
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Senha:</label>
                <input
                  type="password"
                  v-model="form.senha"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Senha"
                />
              </div>
              <div class="w-full min-w-[330px]">
                <label class="block text-base text-cinza-3 mb-1">Repita a senha:</label>
                <input
                  type="password"
                  v-model="form.repetirSenha"
                  class="w-full h-10 p-2 border border-cinza-4 rounded-md text-sm"
                  placeholder="Senha"
                />
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
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex"
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  data() {
    return {
      form: {
        imagem: "",
        nome: "",
        sobrenome: "",
        provincia: "",
        municipio: "",
        bairro: "",
        rua: "",
        bilhete: "",
        tel: "",
        nascimento: "",
        genero: "",
        username: "",
        email: "",
        senha: "",
        repetirSenha: ""
      },
    };
  },
  components: { NavbarComp, HeaderComp },
  methods: {
    ...mapActions('pacientes', ['ActionPostPacient']),
    fecharMenu() {
      this.isVisible = false;
      this.$router.back();
    },
  },
};
</script>