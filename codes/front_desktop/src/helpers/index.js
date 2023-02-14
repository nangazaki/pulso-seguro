import * as yup from "yup"

export const dataSchema = {
  imagem: yup.string(),
  nome: yup.string().required('O campo Nome é obrigatório*'),
  sobrenome: yup.string().required('O campo Sobrenome é obrigatório*'),
  provincia: yup.string().required('O campo Província é obrigatório*'),
  municipio: yup.string().required('O campo Município é obrigatório*'),
  bairro: yup.string().required('O campo Bairro é obrigatório*'),
  rua: yup.string().required('O campo Rua é obrigatório*'),
  nBI: yup.string().trim().matches(/\d{9}[A-Za-z]{2}\d{3}$/, 'Não conseguimos validar o bilhete').required('O campo Bilhete é obrigatório*'),
  telefone: yup.number().required('O campo Telefone é obrigatório*').min(9, 'Número de telefone inválido'),
  dataNascimento: yup.date().max(new Date(2006, 0, 1), 'Data inválida').min(new Date(20, 0, 1), 'Data inválida').required('O campo Data de NAscimento é obrigatório*'),
  genero: yup.string('masculino' | 'feminino').required('O campo Genero é obrigatório*'),
  usuario: yup.string().required('O campo Usuario é obrigatório*'),
  email: yup.string().required('O campo Email é obrigatório*').email('Email inválido'),
  senha: yup.string().required('O campo Senha é obrigatório*').min(6, 'A Senha deve ter no mínimo 6 letras'),
  senha2: yup.string().required('O campo Senha é obrigatório*').min(6, 'A Senha deve ter no mínimo 6 letras'),
  doctorNome: yup.string().required('O campo Nome do Doctor é obrigatório*'),
  doctorID: yup.number().required('O campo ID é obrigatório*'),
}
