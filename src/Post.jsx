import './Post.css'

function Post({ tipo, titulo, descricao, data }) {
  return (
    <div className="post-card">
      <img
            src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2023/06/inteligencia-artificial.webp"
            alt="Imagem do post"
            className="post-image"
       />


      <div className="post-content">
        <span className="post-category">{tipo?.toUpperCase()}</span>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <p className="post-date">Publicado em: {data}</p>
        <button className="delete-button">Excluir</button>
      </div>
    </div>
  )
}

export default Post
