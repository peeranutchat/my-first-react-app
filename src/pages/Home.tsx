import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'
import Post from '../components/Post'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { posts } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log(isLoggedIn)
  return (
    <div className={classes.feedContainer}>
      <h3>Feed</h3>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default Home
