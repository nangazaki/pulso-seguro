import { defineStore } from "pinia";
import { fetch_doctores, fetch_doctor, post_doctor, delete_doctor } from "@/services/doctorServices";

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
    getDoctores(state) {
      return state.doctores
    },

    getDoctor(state) {
      return state.doctorSelecionado
    },

    getPacientesDoDoctorSelecionado(state) {
      return state.doctorSelecionado.pacientes
    },

    getModalConfirm(state) {
      return state.ModalConfirm
    }
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

      if (response !== 200) {
        console.log('Erro saiu do cu, meu veio')
        return
      }

      return response
    },


    // Metodos para a manipulacao do Modal do Doctor
    // Metodo para selecionar Doctor
    selectDoctorDelete(doctor) {
      this.modalDelete.visible = true
      this.modalDelete.doctor = doctor
    },
    // Metodo para cancelar a selecao de Doctor
    cancelDoctorDelete() {
      this.modalDelete.visible = false
      this.modalDelete.doctor = {}
    },

    // Metodo para deletar Doctor
    async doctorDelete() {
      const response = await delete_doctor(this.modalDelete.doctor.id)
      return response.data
    },


    // Modal para confirmar a adiccao de Doctor novo
    setModalConfirm() {
      this.ModalConfirm = true
      setTimeout(() => {
        this.ModalConfirm = false
      }, 3000)
    },
  },
})