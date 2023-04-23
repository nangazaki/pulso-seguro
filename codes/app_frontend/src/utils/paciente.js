import * as yup from "yup"

const paciente = {
  name: yup.string().required('Nome é um campo obrigatório*'),
  sobrenome: yup.string().required('Sobrenome é um campo obrigatório*'),
  provincia: yup.string().required('Província é um campo obrigatório*'),
  municipio: yup.string().required('Município é um campo obrigatório*'),
  bairro: yup.string().required('Bairro é um campo obrigatório*'),
  rua: yup.string().required('Rua é um campo obrigatório*'),
  nBI: yup.string().trim().matches(/\d{9}[A-Za-z]{2}\d{3}$/, 'Não conseguimos validar o bilhete').required('Bilhete é um campo obrigatório*'),
  telefone: yup.number().required('Telefone é um campo obrigatório*').min(9, 'Número de telefone inválido'),
  dataNascimento: yup.date().max(new Date(1963, 0, 1), 'Data inválida').min(new Date(1920, 0, 1), 'Data inválida').required('Data de Nascimento é um campo obrigatório*'),
  genero: yup.string('masculino' | 'feminino').required('Gênero é um campo obrigatório*'),
  usuario: yup.string().required('Usuario é um campo obrigatório*'),
  email: yup.string().required('Email é um campo obrigatório*').email('Email inválido'),
  password: yup.string().required('Senha é um campo obrigatório*').min(6, 'A Senha deve ter no mínimo 6 letras'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'A Senha deve ser idêntica ao primeiro campo'),
  doctorNome: yup.string().required('Nome do Doctor é um campo obrigatório*'),
  user_id: yup.number().required('ID é um campo obrigatório*'),
}

export default paciente
