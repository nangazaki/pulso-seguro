export function validarSenha(password) {
  if (!password) return "A Senha não pode estar vazia."
  if (password.length < 5) return 'A Senha não pode ter menos de 5 caracteres.'
  return ''
}
