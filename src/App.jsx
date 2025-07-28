import { useState } from 'react'
import './App.css'

function App() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  return (
    <div className="container">
      <h1>Painel de Gerenciamento</h1>

      <form className="form">
        <h3 className="subtitulo">Novo Post</h3>

        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título"
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição"
          />
        </div>

      </form>
    </div>
  )
}

export default App
