import React from "react"
import PageContainer from '../components/PageContainer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Hero from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <Navbar />
      <Hero />
    </PageContainer>
  </Layout>
)

export default IndexPage
