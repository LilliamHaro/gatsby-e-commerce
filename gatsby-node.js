const axios = require('axios')
exports.createPages = async ({ actions: { createPage } }) => {
    try {
        const response = await axios.get('https://circuit.com.pe/api/oazi/products');
        const allProductsComponent = require.resolve('./src/templates/all-products.js')
        const ProductComponent = require.resolve('./src/templates/product.js')
        const productosHole = require.resolve('./src/templates/pro-hol.js')
        const productosPur = require.resolve('./src/templates/pro-pur.js')
        const productosTon = require.resolve('./src/templates/pro-ton.js')
        
        createPage({
            path: '/productos',
            component: allProductsComponent,
            context: {
                allProducts: response.data.products
            }
        })
        response.data.products.forEach(element => {
            createPage({
                path: `/productos/${element.slug}`,
                component: ProductComponent,
                context: {
                    productContent: element
                }
            })
        });

        createPage({
            path: `/productos/zona-holistica`,
            component: productosHole,
            context: {
                productosHol: response.data.products
            }
        })

        createPage({
            path: `/productos/zona-pureza`,
            component: productosPur,
            context: {
                productosPure: response.data.products
            }
        })

        createPage({
            path: `/productos/zona-tonificante`,
            component: productosTon,
            context: {
                productosToni: response.data.products
            }
        })


        return Promise.resolve()
    } catch (error) {
        return Promise.reject(new Error(error))
    }
};
