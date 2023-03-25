import * as yup from "yup"

const login = {
  usuario: yup.string().required('O campo Usuario é obrigatório*'),
  password: yup.string().required('O campo Senha é obrigatório*').min(6, 'A Senha deve ter no mínimo 6 letras'),
}

export default login
