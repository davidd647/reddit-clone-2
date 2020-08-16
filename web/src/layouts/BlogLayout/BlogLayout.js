import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
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
      </ul>
      <div>{children}</div>
    </div>
  )
}

export default BlogLayout
