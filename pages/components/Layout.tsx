import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title = null, headers = null }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{title ? title + ' - ' : ''}Ecommerce Strapi</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        {headers}
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Buscar" />
          </form>
        </div>
      </div>
    </>
  );
}
