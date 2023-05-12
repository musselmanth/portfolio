import useFetch from '../../hooks/useFetch';
import './BlogPage.css';
import Image from '../../components/Image'

const DEV_TO_URL = 'https://dev.to/api/articles?username=musselmanth'

const BlogPage = (props) => {
  const { isLoading, apiData, serverError } = useFetch(DEV_TO_URL)

  return (
    <>
      <h1>Blog</h1>
      <p>All of my blog posts are published on my <a href="https://www.dev.to/musselmanth">dev.to</a>. I like to write about what I'm learning and how I solved interesting problems.</p><br/>
      <div className="posts-container">
        { isLoading && <h3 style={{textAlign: "center"}}>Loading...</h3>}
        { serverError && <h3 style={{textAlign: "center"}}>There was an error retrieving the posts.</h3> }
        { apiData !== null && apiData.map((post, i) => {
          return (
            <a className="post" href={post.url} key={`post-${i}`}>
              <Image imgSrc={post.social_image} divClassName="post-image" />
              <div className="post-body">
                <h2 className="post-title">{post.title}</h2>
                  <div className="tags-container">
                    <div className="post-tags-label">Tags:</div>
                    <ul className="post-tags-list">
                      {post.tag_list.map((tag, i) => {
                        return (
                          <li className="post-tag" key={`post-tag-${i}`}>#{tag}</li>
                        )
                      })}
                    </ul>
                  </div>
                <p className="post-description">{post.description}</p>
                <div className="post-bottom">
                  <div className="post-date">{new Date(post.published_at).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</div>
                  <div className="post-comments">Comments: {post.comments_count}</div>
                </div>
              </div>
            </a>
          )
        })}


      </div>
    </>
  )
}

export default BlogPage