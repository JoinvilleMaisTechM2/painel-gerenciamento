import { useEffect, useState } from "react";
import "./PostsList.css";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsSalvos = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(postsSalvos);
  }, []);

  let cards = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    cards.push(
      <div key={i} className="post-card-horizontal">
        <img src={post.capa || post.urlImagem} alt={post.titulo} />
        <div className="post-content">
          <span className="post-tag">{(post.tipo || post.categoria || "").toUpperCase()}</span>
          <h3 className="post-title">{post.titulo}</h3>
          <p className="post-desc">{post.descricao}</p>
          <p className="post-date">Publicado em: {post.data || post.dataPublicacao}</p>
          <button className="delete-button">Excluir</button>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-list">
      <h2>Lista de Posts</h2>
      {cards.length > 0 ? cards : <p>Nenhum post encontrado.</p>}
    </div>
  );
}

export default PostsList;
