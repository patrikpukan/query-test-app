import { FC } from "react";
import { Post } from "../model/content";
import useCreatePost from "../hooks/useCreatePost";
import { useState } from "react";

const Creator: FC = () => {
  const [newPost, setNewPost] = useState<Post>({
    title: "",
    body: "",
    userId: 0,
  });

  const { createPost } = useCreatePost(newPost);

  const handleSubmit = () => {
    createPost();
  };
  return (
    <div>
      <h1>Creator</h1>
      <p>{`Welcome to the creator page`}</p>
      <div>
        <input
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          type="text"
          placeholder="Body"
        />
        <input
          onChange={(e) =>
            setNewPost({ ...newPost, userId: parseInt(e.target.value) })
          }
          type="number"
          placeholder="User ID"
        />
        <button onClick={handleSubmit}>Create post</button>
      </div>
    </div>
  );
};

export default Creator;
