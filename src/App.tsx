import {useState, useEffect} from 'react';
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
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      {posts.slice(0, visiblePosts).map(post => (
        <Post key={post.id} {...post} />
      ))}
      <button
        className="btext-white py-2 px-4 mt-4 rounded"
        onClick={loadMorePosts}
      >
        Load More Posts
      </button>
    </div>
  );
}

export default App;
