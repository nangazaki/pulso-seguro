import { defineStore } from "pinia";
import { fetch_doctores, fetch_doctor, post_doctor, patch_doctor, delete_doctor } from "@/services/doctorServices";

export const doctorStore = defineStore('doctor', {
  state: () => {
    return {
      doctores: [],
      doctorSelecionado: {},
      pesquisar: false,
      modalDelete: {
        doctor: {}
      }
    }
  },

  getters: {
    getDoctores(state) {
      return state.doctores
    },

    getDoctor(state) {
      return state.doctorSelecionado
    },

    getPacientesDoDoctorSelecionado(state) {
      return state.doctorSelecionado.pacientes
    },

    getPesquisarDoctors(state) { return state.pesquisar }
  },

  actions: {

    // Metodo para Pegar os Doctores da BD
    async PegarDoctores() {
      const response = await fetch_doctores()
      this.doctores = response.data
    },

    // Metodos para Selecionar Doctor a ser visto
    async SelecionarDoctor(id) {
      const response = await fetch_doctor(id)
      this.doctorSelecionado = response.data
    },

    // Metodos para Adicionar um Novo Doctor
    async AdicionarDoctor(data, imagem) {
      const { name, sobrenome, provincia, municipio, bairro,
        rua, nBI, telefone, dataNascimento, genero, especialidade,
        idCarteira, usuario, email, password } = data

      const formData = new FormData();

      formData.append("name", name);
      formData.append("sobrenome", sobrenome);
      formData.append("imagem", imagem);
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

      const response = await post_doctor(formData)

      return response
    },

    // Metodos para Editar Doctor
    async EditarDoctor(data, imagem) {
      const { name, sobrenome, provincia, municipio, bairro,
        rua, nBI, telefone, dataNascimento, genero, usuario,
        email, especialidade, idCarteira, password } = data

      const formData = new FormData();

      console.log(!!imagem)

      if (!!imagem) {
        formData.append("imagem", imagem);
      }

      if (!!password) {
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
      formData.append("especialidade", especialidade);
      formData.append("idCarteira", idCarteira);
      formData.append("usuario", usuario);
      formData.append("email", email);

      const response = await patch_doctor(this.doctorSelecionado.id, formData)

      return response
    },

    // Metodos para a manipulacao do Modal do Doctor
    // Metodo para selecionar Doctor
    async selectDoctorDelete(id) {
      const { data } = await fetch_doctor(id)
      this.modalDelete.doctor = data
      // this.modalDelete.visible = true
    },
    // Metodo para cancelar a selecao de Doctor
    cancelDoctorDelete() {
      // this.modalDelete.visible = false
      this.modalDelete.doctor = {}
    },

    // Metodo para deletar Doctor
    async doctorDelete() {
      const response = await delete_doctor(this.modalDelete.doctor.id)
      return response.data
    },

    openModalPesquisar() {
      this.pesquisar = true
    },
    closeModalPesquisar() {
      this.pesquisar = false
    }
  },
})