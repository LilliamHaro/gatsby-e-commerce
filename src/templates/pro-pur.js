
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'

const DashboardPage = props => {
  const {pageContext} = props
  const {productosPure} = pageContext
  return (
    <Layout>
      <SEO title="Zona Pureza" description="Descripcion de zona pureza" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
      <h1>Zona pureza</h1>


    <ul className="pureza_products_list">
     {
      pageContext.productosPure.map( (prod,i) => {

        if(prod.category === "zona-pureza") {
          return (<li className="pureza_products_element" key={i}>{prod.name} <br/> <Link to={'/productos/'+prod.slug}>{prod.name}</Link> </li>)
        }
        
      }
      
    )
     }

    </ul>
    </Layout>
  )
}
export default DashboardPage