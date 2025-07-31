import { useEffect, useState } from "react";
import "./PostsList.css";
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
      <h2>Lista de Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, i) => (
          <Post key={i} post={post} onDelete={() => handleDelete(i)} />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}

export default PostsList;
