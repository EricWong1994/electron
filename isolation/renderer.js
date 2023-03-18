// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('button')
//   btn.addEventListener('click', () => {
//     console.log('dsfdsfdsfs')
//     window.api.toMain()
//   })
// })
// console.log(window.hd)


window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', () => {
    const width = Number(document.querySelector('[name=width]').value)
    const height = Number(document.querySelector('[name=height]').value)
    window.api.changeWidthPosition({ width, height })
  })
})