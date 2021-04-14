const randomColorBtn = document.querySelector('.random-color')

const randomNumber = () => {
  return Math.floor(Math.random() * 255)
}

const backgroundColor = () => {
  document.body.style.backgroundColor = `
  rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
}

randomColorBtn.addEventListener('click', backgroundColor)
