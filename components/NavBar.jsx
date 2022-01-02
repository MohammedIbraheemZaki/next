import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'



const NavBar = () => {
  const router = useRouter()
  console.log(router);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center" >
            <Image className={styles.logo} src="/favicon.ico" alt="" width="40" height="40" />
            <span className='ms-2' >CodvBlog</span></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href='/'>
                <a className={`nav-link ${router.pathname === "/" ? 'active': ''}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/about'>
                <a className={`nav-link ${router.pathname === "/about" ? 'active': ''}`}>about</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/blog'>
                <a className={`nav-link ${router.pathname === "/blog" ? 'active': ''}`} >blog</a>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
