// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route
        path="/blog-comment/{id:Int}"
        page={BlogCommentPage}
        name="blogComment"
      />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/comments/new" page={NewCommentPage} name="newComment" />
        <Route
          path="/comments/{id:Int}/edit"
          page={EditCommentPage}
          name="editComment"
        />
        <Route path="/comments/{id:Int}" page={CommentPage} name="comment" />
        <Route path="/comments" page={CommentsPage} name="comments" />
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route
          path="/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
