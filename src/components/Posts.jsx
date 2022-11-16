import { Post } from './Post';

function Posts() {
  const posts = [
    {
      author: {
        username: 'meowed',
        image: 'assets/stories-images/meowed.png'
      },
      postImage: 'assets/posts-images/gato-telefone.png'
    },
    {
      author: {
        username: 'barked',
        image: 'assets/stories-images/barked.png'
      },
      postImage: 'assets/posts-images/dog.png'
    },
    {
      author: {
        username: 'meowed',
        image: 'assets/stories-images/meowed.png'
      },
      postImage: 'assets/posts-images/gato-telefone.png'
    },
    {
      author: {
        username: 'barked',
        image: 'assets/stories-images/barked.png'
      },
      postImage: 'assets/posts-images/dog.png'
    }
  ];
  return (
    <div className="feed">
      {posts.map(post => <Post author={post.author} postImage={post.postImage}/>)}
    </div>
  );
}

export { Posts };