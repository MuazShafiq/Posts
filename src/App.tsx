import { useState, useEffect } from 'react';
import Post from './components/Post/Post';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
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
      <div className="container mx-auto min-h-screen bg-fixed bg-gradient-to-br from-[#30bfd5] to-[#35ca82]">
        <h1 className="text-4xl font-semibold mb-4 p-8 text-slate-700">Posts</h1>
        <div className='grid grid-cols-4 bg-transparent gap-6 mx-8'>
          {posts.slice(0, visiblePosts).map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
        <button
          className="ml-8 py-2 px-4 my-8 rounded-full border border-slate-700 text-slate-600 shadow-xl"
          onClick={loadMorePosts}
        >
          Load More Posts
        </button>
      </div>
    </>
  );
}

export default App;
