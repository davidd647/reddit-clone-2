import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <div>
      <h1>
        <Link to={routes.home()}>Reddit Clone 2</Link>
      </h1>
      <ul>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
        <li>
          <Link to={routes.contact()}>Contact</Link>
        </li>
        <li>
          <a href="#" onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </a>
        </li>
        {isAuthenticated && <li>Logged in as {currentUser.email}</li>}
      </ul>
      <div>{children}</div>
    </div>
  )
}

export default BlogLayout
