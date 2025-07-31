import "./Post.css";

function Post({ post, onDelete }) {
  return (
    <div className="post-card-horizontal">
      <img src={post.capa || post.urlImagem} alt={post.titulo} />
      <div className="post-content">
        <span className="post-tag">{(post.tipo || post.categoria || "").toUpperCase()}</span>
        <h3 className="post-title">{post.titulo}</h3>
        <p className="post-desc">{post.descricao}</p>
        <p className="post-date">Publicado em: {post.data || post.dataPublicacao}</p>
        <button className="delete-button" onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}

export default Post;
