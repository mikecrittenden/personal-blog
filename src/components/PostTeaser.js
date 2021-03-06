import React from 'react'
import Link from 'gatsby-link'

const PostTeaser = props => (
  <div className="md:flex justify-between my-8 items-center">
    <h3 className="font-normal">
      <Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link>
    </h3>
    <p>
      <small>{props.post.frontmatter.date}</small>
    </p>
  </div>
)

export default PostTeaser
