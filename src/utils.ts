
const info = window.console.error
export const console = {
  ...window.console,
  info: (arg1: any, ...arg2): void => {
    info.call(null, '%c[Tiny]', 'color: #0f0;', arg1, ...arg2)
  }
}

export default console