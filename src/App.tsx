import { FormEvent, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { PostDTO } from './components/types/dto'

const initialPosts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
]

function App() {
  const [posts, setPosts] = useState<PostDTO[]>(initialPosts)
  const [newTitle, setNewtitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handSubmit = (e: FormEvent) => {
    e.preventDefault()

    const currentPosts = [...posts]

    currentPosts.push({
      id: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    })
    setPosts(currentPosts)

    setNewtitle('')
    setNewBody('')
  }

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Ann" isLoggedIn={true} />
      <form onSubmit={handSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewtitle(e.target.value)} required></input>
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required></input>
        <button type="submit">Submit</button>
      </form>
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
