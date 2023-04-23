import { defineStore } from "pinia";
import { fetch_pacientes, fetch_paciente, post_paciente, delete_paciente } from "@/services/pacienteServices";

export const pacienteStore = defineStore('paciente', {
  state: () => {
    return {
      pacientes: [],
      pacienteSelecionado: {},
      doctorPaciente: null,
      ModalConfirm: false,
      modalDelete: {
        visible: false,
        paciente: {}
      }
    }
  },

  getters: {
    getModalDelete(state) {
      return state.modalDelete
    },
    getModalConfirm(state) {
      return state.ModalConfirm
    }
  },

  actions: {

    // Metodo para Pegar os Pacientes da BD
    async PegarPacientes() {
      const response = await fetch_pacientes("pacientes")
      this.pacientes = response.data
    },

    // Metodos para Selecionar Paciente a ser visto
    async SelecionarPaciente(id) {
      const response = await fetch_paciente(id)
      this.pacienteSelecionado = response.data
    },

    // Metodos para Adicionar um Novo Paciente
    async AdicionarPaciente(data, imagem) {
      const { name, sobrenome, provincia, municipio, bairro,
        rua, nBI, telefone, dataNascimento, genero, usuario,
        email, password, user_id } = data

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
      formData.append("usuario", usuario);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("user_id", user_id);

      const response = await post_paciente(formData)

      if (response !== 200) {
        console.log('Erro saiu do cu, meu veio')
        return
      }

      return response
    },

    // Metodos para Editar Paciente
    // async EditarPaciente(id, data, imagem) {
    //   api.get(`/medicos/${payload}`, config).then(res => {
    //     commit(types.SET_DOCTOR_OF_PACIENT, res.data)
    //   })
    // },

    // Metodos para a manipulacao do Modal do Paciente
    // Metodo para selecionar paciente
    selectPacienteDelete(paciente) {
      this.modalDelete.visible = true;
      this.modalDelete.paciente = paciente;
    },
    // Metodo para cancelar a selecao de paciente
    cancelPacienteDelete() {
      this.modalDelete.visible = false;
      this.modalDelete.paciente = {};
    },

    // Metodo para deletar paciente
    async pacienteDelete(id) {
      const response = await delete_paciente(this.modalDelete.paciente.id)
      return response.data
    },


    // Modal para confirmar a adiccao de paciente novo
    setModalConfirm() {
      this.ModalConfirm = true
      setTimeout(() => {
        this.ModalConfirm = false
      }, 3000)
    },
  },


})