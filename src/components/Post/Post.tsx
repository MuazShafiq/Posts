interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Post(Props: PostProps){
  return (
    <div className="border p-4 my-4">
      <h3 className="text-lg font-semibold">{Props.title}</h3>
      <p>{Props.body}</p>
      <p className="text-gray"> User ID: {Props.userId}, Post ID: {Props.id}</p>
    </div>
  );
}

export default Post;
