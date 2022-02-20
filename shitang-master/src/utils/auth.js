const userInfo = 'mt-username'
const userId = 'mt-userId'
export function getInfo() {
  return localStorage.getItem(userInfo)
}

export function setInfo(username) {
  return localStorage.setItem(userInfo, username)
}

export function removeInfo() {
  return localStorage.removeItem(userInfo)
}
export function getUserId() {
  return localStorage.getItem(userId)
}

export function setUserId(user_id) {
  return localStorage.setItem(userId, user_id)
}

export function removeUserId() {
  return localStorage.removeItem(userId)
}