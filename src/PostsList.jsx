import { useEffect, useState } from "react";
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsSalvos = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(postsSalvos);
  }, []);

  const handleDelete = (index) => {
    const novosPosts = [...posts];
    novosPosts.splice(index, 1);
    setPosts(novosPosts);
    localStorage.setItem("posts", JSON.stringify(novosPosts));
  };

  return (
    <div className="posts-list">
      <h2 className="titulo-lista">Lista de Posts</h2>

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post key={index} post={post} onDelete={() => handleDelete(index)} />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}

export default PostsList;
