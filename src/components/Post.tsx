import { useState } from 'react'
import classes from './Post.module.css'
import { PostDTO } from './types/dto'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [showMsg, setShowMsg] = useState<boolean>(false)

  const toggleShow = () => {
    setShowMsg(!showMsg)
  }

  return (
    <>
      <div className={classes.post}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
        {showMsg && <p>more post info</p>}
        <button onClick={toggleShow}>{showMsg ? 'Show Less' : 'Show More'}</button>
      </div>
    </>
  )
}
export default Post
