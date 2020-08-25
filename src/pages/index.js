import React from "react"
import PageContainer from '../components/PageContainer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedWork from "../components/FeaturedWork";

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <Navbar />
      <Hero />
      <Skills />
    </PageContainer>
    <FeaturedWork />
  </Layout>
)

export default IndexPage
