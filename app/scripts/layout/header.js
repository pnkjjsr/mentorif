class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="header" role="main">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="logo">
                    <figure>
                      <img src="../images/logo.gif" alt="" />
                    </figure>
                  </div>
                </div>
                <div class="col">
                  <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Why <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">What & How <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About us <i class="fa fa-angle-down"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="col d-flex justify-content-end">
                  <button class="btn btn-link">Join</button>
                  <button class="btn btn-outline-primary">Sign In</button>
                </div>
              </div>
            </div>
        </div>
        `;
  }
}

window.customElements.define('app-header', Header);
