import Tiny from "Tiny"

const tiny= new Tiny({
  name: 'main'
  ,render () {}
  ,replace: true
})
console.info(tiny)
tiny.mount('app', tiny)
