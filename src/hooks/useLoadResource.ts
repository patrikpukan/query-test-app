import httpClient from "../components/ApiClient";
import { useQuery } from "@tanstack/react-query";

const useLoadResource = () => {

  const {data} = useQuery({queryKey: ['posts'], queryFn: () => httpClient.get('/posts')}); 
  
  return data;
};

export 