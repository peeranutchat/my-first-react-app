import classes from './Post.module.css'
import { PostDTO } from './types/dto'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const handleClick = (id: number) => {
    alert(`clicked ${id}`)
  }

  return (
    <div onClick={() => handleClick(post.id)} className={classes.post}>
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  )
}
export default Post
