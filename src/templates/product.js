
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'


const Message = props => {
  const { pageContext } = props
  const { productContent } = pageContext
  return (
    <Layout>
       <SEO title={pageContext.productContent.name} description={pageContext.productContent.description} image={pageContext.productContent.image}/>
      <div className="product_container">
        <figure className="product_image"><img src={pageContext.productContent.image} alt="" /></figure>
        <div className="product_content">
          <h1>{pageContext.productContent.name}</h1>
          <h4>{pageContext.productContent.name}</h4>
          <h4>{pageContext.productContent.description}</h4>
          <Link to="/productos">Go back</Link>
        </div>
        
      </div>
    </Layout>
  )
}
export default Message