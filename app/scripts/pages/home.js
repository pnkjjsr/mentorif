class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="home">
              <div class="container">
              
                <div class="info first" role="mentor">
                  <div class="row">
                      <div class="col d-flex align-items-center">
                        <div class="heading">
                          Looking for
                          <br />
                          Serious Mentors

                          <small>
                            Create your mentors community to shape your future
                          </small>
                        </div>
                      </div>

                      <div class="col">
                        <figure>
                          <img class="w-100" src="../../images/mentor.gif" alt="" />
                        </figure>
                      </div>
                    </div>
                </div>

                <hr />

                <div class="info" role="mentees">
                  <div class="row">
                      <div class="col d-flex flex-column">
                        <div class="heading">
                          Looking for
                          <br />
                          meaningful
                          <br />
                          Mentees

                          <small>
                            Create community to unleash your true potential
                          </small>
                        </div>
                        <div class="action">
                          <button class="btn btn-lg btn-primary">GET STARTED</button>
                        </div>
                      </div>

                      <div class="col">
                        <figure>
                          <img class="w-100" src="../../images/mentees.gif" alt="" />

                          <figcaption>
                            Give back what you have learned and see it grow unimaginable
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                </div>

              </div>
          </div>

          <div class="home">
            
            <div class="info bg-blue d-flex flex-column align-items-center text-center" role="features">
              <div class="container">
                <div class="heading color-black">
                  What you can do on mentorIF
                </div>
                
                <ul class="features d-flex flex-row justify-content-between">
                  <li>
                    <i>
                      <img src="" alt="" />
                    </i>
                    <label>
                      CONTACT
                    </label>
                  </li>
                  <li>
                    <i>
                      <img src="" alt="" />
                    </i>
                    <label>
                      INVITE
                    </label>
                  </li>
                  <li>
                    <i>
                      <img src="" alt="" />
                    </i>
                    <label>
                      CREATE
                    </label>
                  </li>
                  <li>
                    <i>
                      <img src="" alt="" />
                    </i>
                    <label>
                      COLLABORATE
                    </label>
                  </li>
                </ul>

                <p>
                  mentorIF is designed the way we interact in real life
                </p>
              </div>
            </div>

            <div class="info d-flex flex-column align-items-center text-center" role="add people">
              <div class="container">
                <div class="heading color-red">
                  Who are the next three people you  would like to add in your real life...
                </div>

                <div class="row mt-5">
                  <div class="col">
                    <p>
                      Not Sure?
                    </p>
                  </div>
                  <div class="col">
                    <button class="btn btn-lg btn-primary">GET STARTED</button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div class="container-fluid">
              <div class="info" role="Quality vs Quantity">
                  <div class="row">

                      <div class="col">
                        <figure>
                          <img class="w-100" src="../../images/network.gif" alt="" />
                        </figure>
                      </div>

                      <div class="col d-flex flex-column">
                        <div class="heading color-orange">
                            Prefer quality over quantity
                        </div>
                        <p class="large">
                          Connect with people that really matter in life
                        </p>
                        <div class="action">
                          <button class="btn btn-lg btn-primary">CUT NOISE</button>
                        </div>
                      </div>
                      
                    </div>
                </div>
            </div>

            <div class="info bg-orange d-flex flex-column align-items-center text-center" role="features">
              <div class="container">
                <div class="heading color-black">
                  How mentorIF Works
                </div>

                <figure>
                  <img src="../../images/how.gif" alt="" />
                </figure>
              </div>
            </div>

            <div class="container">
              <div class="info d-flex flex-column align-items-center" role="features">
                  <div class="heading color-black">
                    How mentorIF Works
                  </div>

                  <div class="row">
                    <div class="col">
                      <figure>
                        <img src="../../images/feedback.gif" alt="" />
                      </figure>
                    </div>
                    <div class="col d-flex flex-column justify-content-center">
                      <div class="heading color-orange">
                        Headline goes here Small 2 liner 
                      </div>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and  tyettin industry. Lorem Ipsum has been  the industry's industrorem Ips
                      </p>
                    </div>
                  </div>
                
              </div>
            <div>

          </div>
          `;
  }
}

window.customElements.define('app-home', Home);