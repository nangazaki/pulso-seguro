import { defineStore } from "pinia";
import { fetch_pacientes } from "@/services";

export const doctorStore = defineStore('doctor', {
  state: () => {
    return {
      doctores: [],
      doctorSelecionado: {},
      ModalConfirm: false,
      modalDelete: {
        visible: false,
        doctor: {}
      }
    }
  },

  getters: {

  },

  actions: {

    // Metodo para Pegar os Pacientes da BD
    async PegarPacientes() {
      const response = await fetch_pacientes("pacientes")
      this.pacientes = response.data
    },

    // Metodos para Selecionar Paciente a ser visto
    async SelecionarPaciente(id) {
      const response = await fetch_pacientes(`pacientes/${id}`)
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
    selectDoctorDelete(doctor) {
      this.modalDelete.visible = true
      this.modalDelete.doctor = doctor
    },
    // Metodo para cancelar a selecao de paciente
    cancelDoctorDelete() {
      this.modalDelete.visible = false
      this.modalDelete.doctor = {}
    },

    // Metodo para deletar Doctor
    doctorDelete() {
      api.delete(`medicos/${this.modalDelete.doctor.id}`)
    },


    // // Modal para confirmar a adiccao de paciente novo
    // setModalPacient() {
    //   console.log(value)
    //   commit(types.SET_MODAL_PACIENTE, value)
    // },
  },


})