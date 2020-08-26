import React from "react"
import PageContainer from '../components/PageContainer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedWork from "../components/FeaturedWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const IndexPage = () => (
  <Layout>
    <PageContainer>
      <Hero />
      <Skills />
    </PageContainer>
    <FeaturedWork />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
