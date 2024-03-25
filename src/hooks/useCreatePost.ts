import { Post } from "../model/content";
import { useMutation, QueryClient } from "@tanstack/react-query";
import httpClient from "../components/ApiClient";

const useCreatePost = (post: Post) => {
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (post: Post) => {
      return httpClient
        .post<Post>(`/posts`, post)
        .then((res) => console.log(res));
    },

    onSuccess: () => {
      console.log("Successfully created post");
    },
    onError: (error) => {
      console.error("Error creating post", error);
    },
  });

  const createPost = () => {
    if (post) {
      mutate(post);
    }
  };
  return { createPost, isLoading, isError, error };
};

export default useCreatePost;
