import LICENSE from './LICENSE'
import Lorem from './lorem-ipsum.text'
import Siren from './siren.glsl'

console.log(LICENSE, LICENSE)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>LICENSE</h1>
  <pre>${LICENSE}</pre>
  <h1>Lorem</h1>
  <pre>${Lorem}</pre>
  <h1>Siren</h1>
  <pre>${Siren}</pre>
`
