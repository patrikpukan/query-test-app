import httpClient from "../components/ApiClient";
import { Post } from "../model/content";
import { useMutation, QueryClient } from "@tanstack/react-query";
import useCreatePost from "./useCreatePost";

const useUpdatePost = (post: Post) => {
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (post: Post) => {
      return httpClient
        .put<Post>(`/posts`, post)
        .then((res) => console.log(res));
    },
    onSuccess: () => {
      console.log('Sucessfully updated a post');
    }
    onError: (error) => {
      console.error("Error updating post", error);
    }
  });

  const updatePost = () => {
    if (post) {
      mutate(post);
    }
  }
  return {updatePost, isLoading, isError, error}
};

export default useCreatePost;
