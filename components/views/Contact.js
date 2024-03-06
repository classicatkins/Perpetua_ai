import html from "html-literal";
export default () => html`
  <section id="contact">

      <div class="container">
          <!-- <h1>Contact</h1> -->
          <h2 class="center">How can I help you?</h2>
          <form class="form" action="https://formspree.io/f/myyqrbne" method="POST">
            <div class="form-container">
            <div class="flex-row-names">
                  <div class="input-group">
                      <label for="firstName">First Name <span class="required">*</span></label>
                      <input class="names" type="text" id="firstName" name="firstName" required>
                  </div>
                  <div class="input-group">
                      <label for="lastName">Last Name <span class="required">*</span></label>
                      <input class="names" type="text" id="lastName" name="lastName" required>
                  </div>
              </div>
              <div class="flex-row-names-vertical">
              <div class="input-group">
                  <label for="email">Email <span class="required">*</span></label>
                  <input class="names" type="text" id="email" name="email" required>
              </div>
              <div class="input-group">
                  <label for="phone">Phone</label>
                  <input class="names" type="text" id="phone" name="phone">
              </div>
              </div>
              <div class="textarea-group">
                  <label for="message">Message<span class="required">*</span></span></label>
                  <textarea id="message" name="message" required></textarea>
              </div>
              <div class="submit-group">
                  <button type="submit" id="submit" name="submit">Submit</button>
              </div>
            </div>
          </form>
          <div class="connect-box">
              <div class="connect-column">
                <div class="connect-opacity">
                <h2 class="center">Get in Contact</h2>
                <h3>Connect</h3>
                  <div class="logos-container">
                      <div class="logo-group">
                          <i class="fa-brands fa-linkedin"></i>
                          <a href="https://www.linkedin.com/in/melissa-atkins03/" target="_blank" class="logo-link">
                              <span>LinkedIn</span>
                          </a>
                      </div>
                      <div class="logo-group">
                          <i class="fa-brands fa-github"></i>
                          <a href="https://github.com/classicatkins" target="_blank" class="logo-link">
                              <span>GitHub</span>
                          </a>
                      </div>
                      <div class="logo-group">
                          <i class="fa-solid fa-globe"></i>
                          <a href="https://www.linkedin.com/in/melissa-atkins03/" target="_blank" class="logo-link">
                              <span>Website</span>
                          </a>
                      </div>
                  </div>
              </div>
              <div class="contact-column">
                  <h3>Contact</h3>
                  <p>matkins@duck.com</p>
              </div>
                </div>
          </div>
      </div>
      <br>
      <br>
  </section>
`;
