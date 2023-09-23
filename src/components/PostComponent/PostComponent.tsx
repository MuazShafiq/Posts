import Posts from '../Posts/Posts';
import Marquee from "react-fast-marquee";

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
      <div className="container mx-auto min-h-screen min-w-full bg-fixed bg-[url('/images/bgImg2.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className='flex flex-col justify-center'>
          <div className='flex container mx-auto justify-center'>
            <h1 className="text-[7rem] font-extralight uppercase font-didot text-slate-600 ">
              <span className='text-black'>P</span>osts
            </h1>
          </div>
          {Props.loading ? (
            <div className='flex container mx-auto justify-center'>
              {/* <p className="text-8xl p-6 rounded-xl text-slate-600 text-center font-sans animate-spin">
                ⚙
              </p> */}
              <Marquee loop={0} direction='left' speed={200} className="text-4xl p-6 text-white bg-black text-center">
                Loading...
              </Marquee>
            </div>
          ) : (
            <div className='grid grid-cols-4 gap-6 mx-8'>
              {Props.posts.slice(0, Props.visiblePosts).map(post => (
                <Posts key={post.id} {...post} />
              ))}
            </div>
          )}
          <div className='flex container mx-auto justify-center mt-10 mb-4'>
            <button
              className="py-2 px-6 rounded-full border border-opacity-25 border-black text-black shadow-xl animate-bounce bg-opacity-40 backdrop-blur-md bg-gray-300"
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