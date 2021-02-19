import Layout from '../components/Layout';
import React from 'react';
import SectionCategories from './components/SectionCategories';
import SectionDiscounts from './components/SectionDiscounts';
import SectionProducts from './components/SectionProducts';
import SectionServices from './components/SectionServices';
import SectionTrends from './components/SectionTrends';

export default function Home() {
  return (
    <Layout>
      <SectionCategories></SectionCategories>
      <SectionProducts></SectionProducts>
      <SectionDiscounts></SectionDiscounts>
      <SectionTrends></SectionTrends>
      <SectionServices></SectionServices>
    </Layout>
  );
}
