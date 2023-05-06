import { defineStore } from "pinia";
import { $axios } from "../services";
import { fetch_pacientes, fetch_paciente, post_paciente, patch_paciente, delete_paciente } from "@/services/pacienteServices";

export const pacienteStore = defineStore('paciente', {
  state: () => {
    return {
      pacientes: [],
      pacienteSelecionado: {},
      doctorPaciente: null,
      pesquisar: false
    }
  },

  getters: {
    getPesquisarPacientes(state) {
      return state.pesquisar
    }
  },

  actions: {

    // Metodo para Pegar os Pacientes da BD
    async PegarPacientes() {
      const response = await fetch_pacientes("pacientes")
      this.pacientes = response.data
    },

    // Metodo para Selecionar Paciente a ser visto
    async SelecionarPaciente(id) {
      const response = await fetch_paciente(id)
      await this.PegarDoctorPaciente(response.data.user_id)
      this.pacienteSelecionado = response.data
    },

    // Metodo para Pegar o Doctor do Paciente
    async PegarDoctorPaciente(id) {
      const response = await $axios.get(`/medicos/${id}`)
      const { name, sobrenome } = response.data
      this.doctorPaciente = `${name} ${sobrenome}`
    },

    // Metodo para Adicionar um Novo Paciente
    async AdicionarPaciente(data, imagem, user) {
      const formData = new FormData();

      const { name, sobrenome, provincia, municipio, bairro,
        rua, nBI, telefone, dataNascimento, genero, usuario,
        email, password, user_id } = data

      formData.append("name", name);
      formData.append("sobrenome", sobrenome);
      formData.append("provincia", provincia);
      formData.append("municipio", municipio);
      formData.append("bairro", bairro);
      formData.append("rua", rua);
      formData.append("nBI", nBI);
      formData.append("telefone", telefone);
      formData.append("dataNascimento", dataNascimento);
      formData.append("genero", genero);
      formData.append("usuario", usuario);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("imagem", imagem);

      if (!!user.isAdmin) {
        formData.append("user_id", user_id);
      } else {
        formData.append("user_id", user.id);
      } Proxy

      console.log({ formData })

      const response = await post_paciente(formData)

      return response
    },

    // Metodos para Editar Paciente
    async EditarPaciente(data, img) {
      const { name, sobrenome, provincia, municipio, bairro,
        rua, nBI, telefone, dataNascimento, genero, usuario,
        email, password, user_id } = data

      let imagem = img

      const formData = new FormData();

      if (imagem) {
        formData.append("imagem", imagem);
      }

      if (password) {
        formData.append("password", password)
      }

      formData.append("_method", "patch");
      formData.append("name", name);
      formData.append("sobrenome", sobrenome);
      formData.append("provincia", provincia);
      formData.append("municipio", municipio);
      formData.append("bairro", bairro);
      formData.append("rua", rua);
      formData.append("nBI", nBI);
      formData.append("telefone", telefone);
      formData.append("dataNascimento", dataNascimento);
      formData.append("genero", genero);
      formData.append("usuario", usuario);
      formData.append("email", email);
      formData.append("user_id", user_id);

      const response = await patch_paciente(this.pacienteSelecionado.id, formData)

      return response
    },

    // Metodo para deletar paciente
    async pacienteDelete(id) {
      const response = await delete_paciente(id)
      return response.data
    },

    openModalPesquisar() {
      this.pesquisar = true
    },
    closeModalPesquisar() {
      this.pesquisar = false
    },

    // Baixar PDF
    async downloadpdf() {
      const response = await fetch_pacientes('pdfPaciente')
      await this.PegarDoctorPaciente(response.data.user_id)
      this.pacienteSelecionado = response.data
    },
  },


})