export function validarEmail(email) {
    const regexEmail = /\S+@\S+\.\S+/
    if (!email) return "O Email não pode estar vazio!"
    if (!regexEmail.test(email)) return 'Ooops! Nós precisamos validar o email.'
    return ''
}
