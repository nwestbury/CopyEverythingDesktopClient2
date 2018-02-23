let nextLoginID = 0
export const login = (user, pass, loginResp) => {
  return {
    type: 'LOGIN',
      id: nextLoginID++,
      user,
      pass,
      loginResp
  }
}
