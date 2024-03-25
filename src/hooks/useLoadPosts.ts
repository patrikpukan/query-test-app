import httpClient from "../components/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Posts } from "../model/content";

const useLoadPosts = () => {
  // const getPosts = async () => {
  //   const response = await httpClient.get<Posts | undefined>("/posts");
  //   return response.data;
  // };
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => httpClient.get(`/posts`).then((response) => response.data),
  });

  return { data, error, isError, isLoading };
};

export default useLoadPosts;
