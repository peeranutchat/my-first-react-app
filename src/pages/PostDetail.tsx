import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { id } = useParams()
  const { posts, isLoading, error } = usePost(id || '1')

  if (!isLoading) return <h3>Loading...</h3>
  if (error) return <p>error</p>

  return (
    <div className={classes.postDetail}>
      <h2 style={{ color: 'blue' }}>{posts?.title}</h2>
      <p>PostedBy: {posts?.userId}</p>
      <p>Body: {posts?.body}</p>
    </div>
  )
}

export default PostDetail
