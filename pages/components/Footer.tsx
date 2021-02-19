import SectionInstagram from './SectionInstagram';

export default function Footer() {
  return (
    <>
      <SectionInstagram></SectionInstagram>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="/">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.
                </p>
                <div className="footer__payment">
                  <a href="#">
                    <img src="img/payment/payment-1.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/payment/payment-2.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/payment/payment-3.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/payment/payment-4.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/payment/payment-5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Acesso rápido</h6>
                <ul>
                  <li>
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Conta</h6>
                <ul>
                  <li>
                    <a href="#">Minha conta</a>
                  </li>
                  <li>
                    <a href="#">Rastreios</a>
                  </li>
                  <li>
                    <a href="#">Carrinho</a>
                  </li>
                  <li>
                    <a href="#">Lita de desejos</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NOVIDADES</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Inscrever
                  </button>
                </form>
                <div className="footer__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy; 2021 All rights reserved | This template is made with{' '}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}