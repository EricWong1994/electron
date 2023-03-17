// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('#btn')
//   btn.addEventListener('click', () => {
//     window.api.hd()
//   })
// })
console.log(window.api)

// window.api.counter((value) => {
//   const el = document.querySelector('#counter')
//   el.innerHTML = Number(el.textContent) + value
// })

// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('#btn-upload')
//   btn.addEventListener('click', () => {
//     window.api.upload((file) => {
//       document.querySelector('input').value = file
//     })
//   })
// })

// 设置标题
window.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('#btn-title')
  btn.addEventListener('click', () => {
    const title = document.querySelector('input').value
    console.log('title: ', title);
    window.api.changeTitle(title)
  })
})
