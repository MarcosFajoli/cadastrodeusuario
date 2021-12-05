const request = new XMLHttpRequest()

function getRequest() {
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      let { response } = request
      response = JSON.parse(response)
      console.log(response)
    }
  }

  request.open('GET', 'http://localhost:8080/users')

  request.send()
}

function setRegisterFormVisibleOrInvisible(state, setter = true) {
  if (setter) 
    setRegisteredListVisibleOrInvisible('hidden', false)
  const registerForm = document.getElementById('registerForm')
  const { style } = registerForm
  style.visibility = state
}

function setRegisteredListVisibleOrInvisible(state, setter = true) {
  if (setter) 
    setRegisterFormVisibleOrInvisible('hidden', false)
  const registeredList = document.getElementById('registeredList')
  const { style } = registeredList
  style.visibility = state
}

