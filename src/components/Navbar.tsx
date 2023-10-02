import navStlye from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={navStlye.navbar}>
      <h3>NavBar</h3>
      <button className={navStlye.login}>Login</button>
    </div>
  )
}

export default Navbar
