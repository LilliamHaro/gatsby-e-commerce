    
// import React from 'react';
// import { Link } from 'gatsby';
// import axios from 'axios'

// import Layout from "../components/layout"
// import SEO from "../components/seo"


// let getUsers = async () => {
//   let res = await axios.get("https://circuit.com.pe/api/oazi/products").then( response => {
//     console.log(response.data.products)
//     return response.data.products
//   });
// };

// getUsers()


// export default ({ pageContext: { allPokemon } }) => (

//   <Layout >
//     {console.log(allPokemon)}
//     <SEO title="Pokemon Lista" description="Description List Pokemon" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
//   <div style={{ width: 960, margin: '4rem auto' }}>
//     <h1>Choose a Pokémon!</h1>
//     <ul style={{ padding: 0 }}>
//       {allPokemon.map(pokemon => (
//         <li
//           key={pokemon.id}
//           style={{
//             textAlign: 'center',
//             listStyle: 'none',
//             display: 'inline-block'
//           }}
//         >
//           <Link to={`/pokemon/${pokemon.name}`}>
//             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
//           </Link>
//         </li>
//       ))}
//       <li>
//         <Link to="/">Inicio</Link>
//       </li>
//       <li>
//         <Link to="/page-2">Page 2</Link>
//       </li>
//     </ul>
//   </div>
//   </Layout>
// );


import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'

const DashboardPage = props => {
  const {pageContext} = props
  const {allProducts} = pageContext
  return (
    <Layout>
      <SEO title="Zona Productos" description="Descripcion de Productos" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>

      <div className="all_products_container container">
      <h1 className="text-center">Productos</h1>
    {console.log(pageContext.allProducts)}
    <ul className="all_products_list">
      {
        pageContext.allProducts.map( (mess,i) => (
          <li className="all_products_element" key={i}>{mess.name}

            <Link to={`/productos/${mess.slug}`}>
                <p>{mess.name}</p>
              </Link>
          </li>
        ))
      }

     
    </ul>
      </div>
      
    </Layout>
  )
}
export default DashboardPage