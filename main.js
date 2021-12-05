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

const registerBtn = document.getElementById('registerBtn')
const listBtn = document.getElementById('listBtn')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
registerBtn.addEventListener('click', () => {
  page1.classList.toggle('animation')
  if (page2.classList.contains('animation'))
    page2.classList.toggle('animation')
})

listBtn.addEventListener('click', () => {
  page2.classList.toggle('animation')
  if (page1.classList.contains('animation')) 
    page1.classList.toggle('animation')
})

function setPage1VisibleOrInvisible(state, setter = true) {
  if (setter) 
    setPage2VisibleOrInvisible('hidden', false)
  const page1 = document.getElementById('page1')
  const { style } = page1
  style.visibility = state
}

function setPage2VisibleOrInvisible(state, setter = true) {
  if (setter) 
    setPage1VisibleOrInvisible('hidden', false)
  const page2 = document.getElementById('page2')
  const { style } = page2
  style.visibility = state
}

