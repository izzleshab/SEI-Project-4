// User authentication 

export const logoutId = () => {
  localStorage.removeItem('userId')
}


// Token authentication


export const logout = () => {
  localStorage.removeItem('token')
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}
export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  return now < payload.exp
}