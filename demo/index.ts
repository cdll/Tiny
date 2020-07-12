import Tiny from "Tiny"

const tiny= new Tiny({
  name: 'main'
  ,render () {}
  ,template: `
<center class=''>
  <ul class=''>
    <li class=''>123</li>
    <li class=''>234</li>
    <li class=''>345</li>
    <li class=''>456</li>
  </ul>
  <dl class=''>
    <dd class=''>asd</dd>
    <dd class=''>qwe</dd>
    <dd class=''>jkl</dd>
  </dl>
</center>
  `
  ,replace: true
})
console.info({tiny})
tiny.mount('app', tiny)
