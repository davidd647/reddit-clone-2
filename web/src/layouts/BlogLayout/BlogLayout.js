import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <div className="text-light">
      <div className="container">
        <h1>
          <Link to={routes.home()}>Reddit Clone 2</Link>
        </h1>
        <ul className="navbar-nav  mr-auto flex-row justify-content-between align-items-center border-bottom mb-3">
          <li className="nav-item">
            <Link className="nav-link" to={routes.about()}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.contact()}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" onClick={isAuthenticated ? logOut : logIn}>
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </a>
          </li>
          {isAuthenticated && <li>Logged in as {currentUser.email}</li>}
        </ul>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default BlogLayout
