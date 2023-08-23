interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Post(Props: PostProps){
  return (
    <div className="flex flex-col justify-around p-4 gap-4 rounded shadow-lg">
      <h3 className="text-lg font-semibold">{Props.title}</h3>
      <p className="">{Props.body}</p>
    </div>
  );
}

export default Post;
