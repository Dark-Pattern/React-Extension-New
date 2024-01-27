import React from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'

const Test = () => {
  axios
    .post('http://localhost:3000', { data: 'hello' })
    .then((res) => {
      console.log('success', res)
    })
    .catch((err) => {
      console.log(err)
    })
  return (
    <div style={{ width: '300px', borderRadius: '20px' }}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga
        minima unde sit accusantium consequuntur? Excepturi itaque blanditiis
        fugiat, ipsam cumque saepe officiis! Impedit totam reiciendis eligendi
        incidunt quos dolorem consequatur ipsum illo? Quaerat eligendi hic
        similique fugiat exercitationem, quis deserunt harum suscipit! Dicta
        quis unde repellat nesciunt sed ab cumque. Cum unde, vero dolorem
        assumenda totam omnis quia vel doloribus aperiam fugiat nobis sunt
        provident, ratione natus in, eum consectetur blanditiis adipisci quis.
        Suscipit, aliquam beatae qui dicta iste obcaecati? Voluptate, quaerat
        soluta voluptates dolorem, eum, repellendus velit odit fugiat officiis
        dolorum temporibus illo nesciunt iste eos quisquam perspiciatis.
      </p>
    </div>
  )
}

const container = document.createElement('div')
document.body.style.borderRadius = '20px'
document.body.style.border = '2px red solid'
document.body.style.margin = '0px'
document.body.style.padding = '0px'

document.body.appendChild(container)
const root = createRoot(container)
root.render(<Test />)