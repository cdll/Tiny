// libs:
import {
  elementOpen as H_,
  elementClose as _H,
  elementVoid as H_H,
  text,
  skip,
  patch
} from 'incremental-dom'

// utils:
import console from './utils.ts'

function renderNode (
  TagName: string
): void {
  H_(TagName, '', null)
  console.info(223, {TagName}, this)
  const R = temp2DOMtree(this.template)
  console.info({R})
  // text(123)
  _H(TagName)
}

function $mount (
  tag: string
  ,component: any
): void;
function $mount (
  tag: HTMLElement
  ,component: any
): void;
function $mount (
  tag
  ,component
): void {
  if (typeof tag === 'string') {
    tag = document.querySelector(tag)
  }
  console.info(component, this.name)
  const _TAG = this.replace
    ? document.createDocumentFragment()
    : tag
  patch(_TAG, () => {
    console.info('PATCHING:', this)
    renderNode.call(this, this.name)
    if (this.replace) {
      Promise.resolve()
      .then(() => {
        tag.parentElement.replaceChild(_TAG, tag)
      })
    }
    // return component
  })
}

interface CreateOptions {
  name: string
  ,render: Function
  ,replace: boolean
  ,template: string
}

class Tiny {
  public name: string
  public replace: boolean
  public render: Function
  public mount: Function
  protected template: string

  constructor (obj: CreateOptions) {
    // console.info({obj}, obj.render)
    this.name = obj.name
    this.replace = obj.replace
    if (obj.template) {
      this.template = obj.template
    }
    else {
      this.render = obj.render
    }
    this.mount = (arg1, ...arg2) => $mount.call(this, arg1, ...arg2)
    return this
  }
}

function temp2DOMtree (
  template: string
): Function {
  console.info({template})
  const flatDOMtree = template.match(/<\w{1,}.+>|<\/\w{1,}>/ig)
  // console.log({flatDOMtree})
  const tagName = flatDOMtree[0]?.match(/\w+/)
  const innerDOMstring = template.replace(
    /<\w{1,}.+>(\s|\S)|<\/\w{1,}>/ig
    ,(MATCHED) => {
      // console.info(MATCHED, tagName)
      if (MATCHED.match(tagName)) {
        return '\r'
      }
      return MATCHED
    }
  )
  const hasInnerTag = innerDOMstring.match(/<\w{1,}.+>|<\/\w{1,}>/ig)
  // debugger
  // return
  console.log({innerDOMstring}, {flatDOMtree})
  H_(tagName)
  hasInnerTag
    ? temp2DOMtree(innerDOMstring)
    : renderHTML(template)
  _H(tagName)
  return flatDOMtree
}

function renderHTML (
  template: string
) {
  const HTML_BLOB = H_('html-blob')
  HTML_BLOB.innerHTML = template
  skip()
  _H('html-blob')
}

export default Tiny
