interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* interface ComponentProps {
  loadMorePosts: () => void;
  loading: boolean;
  visiblePosts: number;
  posts: PostProps[];
} */

function Posts(Props: PostProps) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center p-4 gap-4 rounded-lg shadow-2xl bg-opacity-40 backdrop-blur-md bg-gray-300">
        <h3 className="text-lg font-semibold">{Props.title}</h3>
        <div className="bg-slate-700 h-[0.5px]">
        </div>
        <p className="">{Props.body}</p>
      </div>
    </div>
  );
}

export default Posts;