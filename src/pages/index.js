import React from "react"
import { Link } from "gatsby"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


const IndexPage = ({ settings }) => (
  //layout tomarlo como main
  <Layout>
     <SEO title="Home" description="Home Description" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
    <div className="home_slider_container">
      <Slider {...settings}>
        <div className="home_slider_content">
          <h3> Hola desde el home</h3>
          <div className="image-container">
            <Image filename="gatsby-icon.png" />
          </div>
        </div>
        <div className="home_slider_content">
        <div className="home_slider_background">
        <Image filename="gatsby-icon.png"/>
        </div>
        <div className="home_slider_containt">
              sección 2
        </div>
           
        </div>
        <div className="home_slider_content">
          <h3>3</h3> 
        </div>
      </Slider>
    </div>



  </Layout>
)

export default IndexPage
