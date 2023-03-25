import * as yup from "yup"

const admin = {
  name: yup.string().required('O campo Nome é obrigatório*'),
  sobrenome: yup.string().required('O campo Sobrenome é obrigatório*'),
  telefone: yup.number().required('O campo Telefone é obrigatório*').min(9, 'Número de telefone inválido'),
  usuario: yup.string().required('O campo Usuario é obrigatório*'),
  email: yup.string().required('O campo Email é obrigatório*').email('Email inválido'),
  password: yup.string().required('O campo Senha é obrigatório*').min(6, 'A Senha deve ter no mínimo 6 letras'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'A Senha deve ser idêntica ao primeiro campo')
}

export default admin
