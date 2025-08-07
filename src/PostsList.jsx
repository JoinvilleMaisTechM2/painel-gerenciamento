import { useEffect, useState } from "react";
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsSalvos = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(postsSalvos);
    contarCategorias(postsSalvos);
  }, []);

  const contarCategorias = (lista) => {
    const contagem = {};
    lista.forEach((post) => {
      const cat = post.categoria?.toLowerCase();
      if (cat) {
        contagem[cat] = (contagem[cat] || 0) + 1;
      }
    });
  };

  const handleDelete = (id) => {
    const novosPosts = posts.filter((post) => post.id !== id);
    setPosts(novosPosts);
    localStorage.setItem("posts", JSON.stringify(novosPosts));
    contarCategorias(novosPosts);
  };

  return (
    <div className="posts-list">
      <h2 className="titulo-lista">Lista de Posts</h2>

      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onDelete={() => handleDelete(post.id)}
          />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}

export default PostsList;
