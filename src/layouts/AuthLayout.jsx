import React from 'react';

/**
 * Layout component for pages in the authentication flow.
 *
 * Centers its children in a responsive column and optionally renders
 * a footer with IFN branding and links. The styles mirror the
 * original Bootstrap prototype provided.
 */
export function AuthLayout({ children }) {
  return (
    <>
      <section className="container my-5" id="login-screen">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6">{children}</div>
        </div>
      </section>
      {/* Footer similar to the HTML prototype */}
      <footer className="footer-ifn bg-white border-top mt-5">
        <div className="container py-4">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="/img/logoIFN.png"
                  alt="IFN"
                  className="footer-logo"
                  style={{ height: '40px', width: 'auto' }}
                />
                <div className="small">
                  <div className="fw-bold text-dark">
                    Inventario Forestal Nacional – IFN
                  </div>
                  <div className="text-muted">
                    Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <ul className="list-unstyled small mb-0 text-muted">
                <li>
                  Basado en el <strong>Manual de Campo del IFN, versión 4 (2018)</strong>.
                </li>
                <li>
                  Créditos: FAO, MADS e IDEAM. ISBN FAO: 978-92-5-130594-2 · ISBN IDEAM:
                  978-958-5489-03-5.
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 text-md-end">
              <ul className="list-unstyled small mb-2">
                <li>
                  <a
                    href="https://www.instagram.com/ideamcolombia/#"
                    target="_blank"
                    rel="noreferrer"
                    className="link-secondary text-decoration-none"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/IDEAMColombia"
                    target="_blank"
                    rel="noreferrer"
                    className="link-secondary text-decoration-none"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ideam.instituto/#"
                    target="_blank"
                    rel="noreferrer"
                    className="link-secondary text-decoration-none"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-3" />
          <div className="d-flex flex-column flex-md-row justify-content-between small text-muted">
            <div>
              © <span id="footer-year">{new Date().getFullYear()}</span> IFN – IDEAM. Todos
              los derechos reservados.
            </div>
            <div>Proyecto académico de demostración — No oficial.</div>
          </div>
        </div>
      </footer>
    </>
  );
}