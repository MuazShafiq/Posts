interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Posts(Props: PostProps){
  return (
    <div className="flex flex-col justify-center p-4 gap-4 rounded shadow-lg ease-in translate-y-1 duration-1000 delay-1000">
      <h3 className="text-lg font-semibold">{Props.title}</h3>
      <div className="bg-slate-700 h-[0.5px]">
      </div>
      <p className="">{Props.body}</p>
    </div>
  );
}

export default Posts;
