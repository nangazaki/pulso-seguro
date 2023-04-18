import { defineStore } from "pinia";
import { fetch_pacientes, delete_pacientes } from "@/services";

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
      const response = await delete_pacientes(id)
      this.pacienteSelecionado = response.data
    },

    // // Metodos para Adicionar um Novo Paciente
    // ActionPostPacient = (payload, dataPacient) => {
    //   api.post('pacientes', dataPacient).then((res) => {
    //     return res.status
    //   })
    // },
    // // Metodos em fase de teste
    // ActionGetDoctorOfPacient() {
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
      const response = await delete_pacientes(this.modalDelete.paciente.id)
      return response.data
    },


    // // Modal para confirmar a adiccao de paciente novo
    // setModalPacient() {
    //   console.log(value)
    //   commit(types.SET_MODAL_PACIENTE, value)
    // },
  },


})