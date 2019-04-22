
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'

const DashboardPage = props => {
  const {pageContext} = props
  const {productosToni} = pageContext
  return (
    <Layout>
      <SEO title="Zona Tonificante" description="Descripcion de zona tonificante" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
      <h1>Zona Tonificante</h1>

    <ul className="tonificante_products_list">
     {
      pageContext.productosToni.map( (prod,i) => {

        if(prod.category === "zona-tonificante") {
          return (<li className="tonificante_products_element" key={i}>{prod.name} <br/> <Link to={'/productos/'+prod.slug}>{prod.name}</Link></li>)
        }
        
      }
      
    )
     }

    </ul>
    </Layout>
  )
}
export default DashboardPage