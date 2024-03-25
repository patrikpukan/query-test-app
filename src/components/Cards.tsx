import useLoadPosts from "../hooks/useLoadPosts";
import { Post } from "../model/content";
import { FC } from "react";

const Cards: FC = () => {
  const { data, error, isError, isLoading } = useLoadPosts();
  if (isError) {
    return <div>{error?.message}</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log(data);

  return (
    <div className="grid grid-cols-4 gap-1">
      {data?.map((post: Post) => (
        <div
          key={post.id}
          className=" bg-gray-400 shadow-md w-64 h-64 px-8 pt-2 pb-2 mb-4 rounded-md"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-700 text-base">
            {post.body.split(" ").slice(0, 3).join(" ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
