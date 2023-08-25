import Post from '../Posts/Posts';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ComponentProps {
  loadMorePosts: () => void;
  loading: boolean;
  visiblePosts: number;
  posts: PostProps[];
}

function PostComponent(Props: ComponentProps) {

  return (
    <>
      <div className="container mx-auto min-h-screen min-w-full bg-fixed bg-gradient-to-br from-[#30bfd5] to-[#35ca82]">
        <div className='flex flex-col justify-center'>
          <h1 className="text-8xl uppercase font-zanna text-slate-600 text-center my-6">
            Posts
          </h1>
          {Props.loading ? (
            <div className='flex container mx-auto justify-center'>
              <p className="text-8xl p-6 rounded-xl text-slate-600 text-center font-sans animate-spin">
                ⚙
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-4 bg-transparent gap-6 mx-8'>
              {Props.posts.slice(0, Props.visiblePosts).map(post => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          )}
          <div className='flex container mx-auto justify-center mt-10 mb-4'>
            <button
              className="py-2 px-6 rounded-full border border-slate-600 text-slate-600 shadow-xl animate-bounce"
              onClick={Props.loadMorePosts}
            >
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostComponent;