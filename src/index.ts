import {
  elementOpen as H_,
  elementClose as _H,
  elementVoid as H_H,
  text,
  patch
} from 'incremental-dom'

const log = window.console.info
const console = {
  info (): void {
    log(`%c[Tiny]`, 'color: skyblue;', ...arguments)
  }
}

function renderNode (TagName: string): void {
  H_(TagName, '', null)
  console.info(123, {TagName})
  text(123)
  _H(TagName)
}
console.info({
  H_, _H, H_H
})

function $mount (
  tag: any
  ,component: any
): void {
  if (typeof tag === 'string') {
    tag = document.querySelector(tag)
    // DocumentFragment
  }
  console.info(typeof tag, component, this.name)
  const virtual = this.replace
    ? document.createDocumentFragment()
    : tag
  patch(virtual, () => {
    console.info(123, this.name)
    renderNode(this.name)
    if (this.replace) {
      Promise.resolve()
      .then(() => {
        tag.parentElement.replaceChild(virtual, tag)
      })
    }
    // return component
  })
}

class Tiny {
  public name: string
  public render: Function
  public mount: Function

  constructor (obj: {
    name: string
    ,render: Function
    ,replace: boolean
  }) {
    // console.info({obj}, obj.render)
    this.name = obj.name
    this.render = obj.render
    this.mount = $mount
    this.replace = obj.replace
    return this
  }
}

export default Tiny
