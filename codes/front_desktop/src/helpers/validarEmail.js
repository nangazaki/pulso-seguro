export function validateEmail(email) {
  // if the field is empty
  if (!email) {
    return 'O campo Email não pode estar vazio!';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(email)) {
    return 'Ooops! O seu email é inválido';
  }
  // All is good
  return true;
}