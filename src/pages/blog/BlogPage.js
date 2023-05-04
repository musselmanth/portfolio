import useFetch from '../../hooks/useFetch';
import './BlogPage.css';

const DEV_TO_URL = 'https://dev.to/api/articles?username=musselmanth'

const BlogPage = (props) => {
  const { isLoading, apiData, serverError } = useFetch(DEV_TO_URL)

  console.log(apiData)

  return (
    <>
      <h1>Blog</h1>
      <h3>View and Engage with my posts on <a href="https://dev.to/musselmanth">DEV.to</a></h3>
      <h3>Recent Posts:</h3>
    </>
  )
}

export default BlogPage