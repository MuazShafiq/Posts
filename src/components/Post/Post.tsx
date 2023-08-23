interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Post(Props: PostProps){
  return (
    <div className="grid grid-rows-2 px-4 rounded shadow-lg">
      <h3 className="text-xl font-semibold pt-4">{Props.title}</h3>
      <p className="pb-4 -mt-4">{Props.body}</p>
    </div>
  );
}

export default Post;
