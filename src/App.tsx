import { useState, useEffect } from 'react';
import Post from './components/Post/Post';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(4);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLoading(false);
        setPosts(data);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, []);


  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 4);
  };

  return (
    <>
      <div className="container mx-auto min-h-screen min-w-full bg-fixed bg-gradient-to-br from-[#30bfd5] to-[#35ca82]">
        <div className='flex flex-col justify-center'>
          <h1 className="text-8xl uppercase font-zanna mb-4 p-8 text-slate-600 text-center">
            Posts
          </h1>
          {loading ? (
            <p className="text-4xl text-slate-600 text-center font-zanna">
              Loading <span className='inline-block animate-spin'>⚙</span>
            </p>
          ) : (
            <div className='grid grid-cols-4 bg-transparent gap-6 mx-8'>
              {posts.slice(0, visiblePosts).map(post => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          )}
          <button
            className="py-2 my-8 rounded-full border border-slate-600 text-slate-600 shadow-xl mx-[43rem] animate-bounce"
            onClick={loadMorePosts}
          >
            Load More Posts
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
