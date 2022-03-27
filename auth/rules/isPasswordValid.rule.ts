const isPasswordValid = (password: string): boolean =>
  password.length >= 8 && password.length <= 30
export default isPasswordValid
