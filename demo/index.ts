import Tiny from "Tiny"

const tiny= new Tiny({
  name: 'main'
  ,render () {}
  ,replace: true
})
console.info(tiny)
const fr = document.createDocumentFragment()
const app = document.querySelector('app')
tiny.mount(app, tiny)
// app.parentElement.replaceChild(fr, app)
