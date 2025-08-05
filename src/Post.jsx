import './Post.css';

function Post({ post, onDelete }) {
  const { titulo, descricao, urlImagem, dataPublicacao, categoria } = post;

  return (
    <div className="post-card">
      <img
        src={urlImagem}
        alt="Imagem do post"
        className="post-image"
      />
      <div className="post-content">
        <span className="post-category">{categoria?.toUpperCase()}</span>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <p className="post-date">Publicado em: {dataPublicacao}</p>
        <button className="delete-button" onClick={onDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Post;
