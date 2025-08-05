import { useState, useEffect } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [urlImagem, setUrlImagem] = useState('')
  const [dataPublicacao, setDataPublicacao] = useState('')
  const [categoria, setCategoria] = useState('')
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    const postsSalvos = JSON.parse(localStorage.getItem('posts')) || []
    setTotalPosts(postsSalvos.length)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!titulo || !descricao || !urlImagem || !dataPublicacao || !categoria) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)

    const [ano, mes, dia] = dataPublicacao.split('-').map(Number)
    const dataEscolhida = new Date(ano, mes - 1, dia)

    if (dataEscolhida < hoje) {
      toast.error('A data deve ser hoje ou no futuro')
      return
    }

    const novoPost = {
      titulo,
      descricao,
      urlImagem,
      dataPublicacao,
      categoria
    }

    const postsSalvos = JSON.parse(localStorage.getItem('posts')) || []
    postsSalvos.push(novoPost)
    localStorage.setItem('posts', JSON.stringify(postsSalvos))

    setTotalPosts(postsSalvos.length)
    toast.success('Post criado e salvo com sucesso!')

    setTitulo('')
    setDescricao('')
    setUrlImagem('')
    setDataPublicacao('')
    setCategoria('')
  }

  return (
    <div className="container">
      <h1>Painel de Gerenciamento</h1>
      <p className="total-posts"><strong>Total de posts:</strong> {totalPosts}</p>

      <form className="form" onSubmit={handleSubmit}>
        <h3 className="subtitulo">NOVO POST</h3>

        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título"
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição"
          />
        </div>

        <div className="form-control">
          <label htmlFor="url">URL da imagem de capa</label>
          <input
            type="text"
            id="url"
            value={urlImagem}
            onChange={(e) => setUrlImagem(e.target.value)}
            placeholder="URL da imagem da capa"
          />
        </div>

        <div className="form-control">
          <label htmlFor="data">Data de publicação</label>
          <input
            type="date"
            id="data"
            value={dataPublicacao}
            onChange={(e) => setDataPublicacao(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="categoria">Tipo do post</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="noticia">Notícia</option>
            <option value="artigo">Artigo</option>
            <option value="entrevista">Entrevista</option>
          </select>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit">Criar post</button>
        </div>

      </form>

      <ToastContainer />
    </div>
  )
}

export default App
