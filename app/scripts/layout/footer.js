class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="footer" role="main">
            <div class="container">
              <div class="row">
                <div class="col-4 col-lg-3">
                  <div class="logo">
                    <figure>
                      <img class="img-fluid" src="../images/logo-t.png" alt="" />
                    </figure>
                  </div>
                </div>
                <div class="col-lg-5  d-none d-lg-flex justify-content-end">
                  <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Terms & Conditions</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                    </li>
                  </ul>
                </div>
                <div class="col-8 col-lg-4 d-flex justify-content-end">
                  <ul class="social-links">
                    <li>
                      <a class="d-flex align-items-center justify-content-center">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-center">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-center">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-center">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center justify-content-center">
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        `;
  }
}

window.customElements.define('app-footer', Footer);
