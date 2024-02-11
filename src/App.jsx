import { useState, useRef } from 'react';
import classNames from 'classnames';

import FacebookIcon from '/icons/social/facebook.svg';
import LinkedInIcon from '/icons/menu/linkedin_rotated.svg';
import GitHubIcon from '/icons/social/github.svg';

import './assets/style.scss';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const overlayRef = useRef(null);

  const openMenu = () => {
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target == overlayRef?.current) {
      closeMenu();
    }
  });

  const { menuClass } = {
    menuClass: classNames('menu', {
      active: isActive,
    }),
  };
  return (
    <>
      <aside className="sidepanel">
        <a
          href="https://www.facebook.com/ivan.nikanau"
          className="sidepanel__link"
        >
          <img src={FacebookIcon} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-nikanau/"
          className="sidepanel__link"
        >
          <img src={LinkedInIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/SBavia" className="sidepanel__link">
          <img src={GitHubIcon} alt="github" />
        </a>
        <div className="sidepanel__divider"></div>
        <div className="sidepanel__text">
          <span>Contacts</span>
        </div>
      </aside>

      <div className={menuClass}>
        <div className="menu__block">
          <div className="menu__close" onClick={closeMenu}>
            <img src="/icons/menu/Close.svg" alt="close" />
          </div>

          <nav>
            <ul className="menu__list">
              <li className="menu__link" onClick={closeMenu}>
                <a href="#about">About</a>
              </li>
              <li className="menu__link" onClick={closeMenu}>
                <a href="#experience">Experience</a>
              </li>
              <li className="menu__link" onClick={closeMenu}>
                <a href="#skills">Skills</a>
              </li>
              <li className="menu__link" onClick={closeMenu}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="menu__link" onClick={closeMenu}>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>

          <div className="menu__social">
            <a href="https://github.com/SBavia">
              <img src="/icons/menu/Github.svg" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/ivan-nikanau/">
              <img src="/icons/menu/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://www.facebook.com/ivan.nikanau">
              <img src="/icons/menu/Facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
        <div className="menu__overlay" ref={overlayRef}></div>
      </div>

      <section className="promo">
        <div className="hamburger" onClick={openMenu}>
          <span></span>
          <span className="long"></span>
          <span></span>
        </div>
        <div className="container">
          <div className="title title_fz20 promo__subtitle">
            Hello 👋 I'm Ivan Nikanau
          </div>
          <h1 className="title title_fz48 promo__title">
            And I am frontend developer from Vilnius
          </h1>
          <div className="promo__btns">
            <a href="#portfolio" className="promo__link btn">
              Portfolio
            </a>
            <a href="#about" className="promo__link">
              About
            </a>
            <a href="test" className="promo__link">
              Test
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__photo">
              <img src="/img/main_photo.jpg" alt="photo" />
            </div>
            <div className="about__descr">
              <h2 className="title title_fz16 about__title">About</h2>
              <div className="title title_fz36 about__subtitle">
                My name is Ivan
              </div>
              <div className="divider"></div>
              <p className="about__text">
                I'm an enthusiastic young man, who wants to challenge his skills
                and dreams. I have a various of interests (most of them is
                related to computers). Previously, I worked as a system
                administrator almost 2 years, combined with my study. While I
                was trying to become a Python developer, I understood that
                interface creating is more about my personality. I like seeing
                results of my work and reaction on it , that's why I've decided
                to be a Frontend Developer. Despite the lack of mentoring, I
                believe that my eagerness to learn has helped me to achieve some
                results already(you can see them on my GitHub page). Currently,
                I am looking for a company with interesting projects and great
                mentoring. On my side , I can promise to be reliable and
                respectful to critic.
              </p>
            </div>
            <div className="about__skills">
              <div className="about__skills-item">
                <div className="about__skills-circle">
                  <img
                    src="/icons/about_me/web_development.svg"
                    alt="web-dev"
                  />
                </div>
                <div>
                  <div className="title title_fz14">Web development</div>
                  <div className="about__skills-text">
                    Development and support of web applications: sites,
                    services, various platforms
                  </div>
                </div>
              </div>
              <div className="about__skills-item">
                <div className="about__skills-circle">
                  <img src="/icons/about_me/mobile_dev.svg" alt="mobile-dev" />
                </div>
                <div>
                  <div className="title title_fz14">
                    Application Development
                  </div>
                  <div className="about__skills-text">
                    Planning, designing, creating, testing, and deploying a
                    software application to perform various business operations
                  </div>
                </div>
              </div>
              <div className="about__skills-item">
                <div className="about__skills-circle">
                  <img src="/icons/about_me/design.svg" alt="design" />
                </div>
                <div>
                  <div className="title title_fz14">UI/UX Design</div>
                  <div className="about__skills-text">
                    Designing convenient, understandable and aesthetic user
                    interfaces
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="resume">
        <div className="container">
          <h2 className="title title_fz16 title__section-title">Experience</h2>
          <div className="title title_fz36 title__section-subtitle">
            How can I be useful
          </div>
          <div className="divider"></div>
          <div className="resume__wrapper">
            <div className="resume__column">
              <h3 className="title title_fz20 resume__column-title">
                Education
              </h3>
              <ul>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img
                          src="/icons/experience/university.svg"
                          alt="university"
                        />
                      </div>
                      <h4 className="title title_fz14">
                        Belarussian State Univercity of Informatics and
                        Radioelectronics
                      </h4>
                      <div className="rsume__item-location">
                        Bachelor (2016-2021)
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img
                          src="/icons/experience/courses.svg"
                          alt="courses"
                        />
                      </div>
                      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7021878277292085249/">
                        Udemy
                      </a>
                      <div className="rsume__item-location">
                        WEB Developer 2022
                      </div>
                    </div>
                  </div>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img
                          src="/icons/experience/courses.svg"
                          alt="courses"
                        />
                      </div>
                      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7021879170095841280/">
                        Udemy
                      </a>
                      <div className="rsume__item-location">
                        JavaScript + React
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume__column">
              <h3 className="title title_fz20 resume__column-title">
                Experience
              </h3>
              <ul>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img
                          src="/icons/experience/developer.svg"
                          alt="developer"
                        />
                      </div>
                      <h4 className="title title_fz14">System administrator</h4>
                      <div className="rsume__item-location">
                        Republican Regulatory Research Center (2019 - 2021)
                      </div>
                    </div>
                    <div className="resume__item-body">
                      <ul>
                        <li>Technical support and user assistance.</li>
                        <li>
                          Installation, configuration and updating of office and
                          application software.
                        </li>
                        <li>
                          Ensuring the health and safety of the company network.
                        </li>
                        <li>
                          Diagnostics and Troubleshooting of Hardware/System
                          Problems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="title title_fz16 title__section-title">Skills</h2>
          <div className="title title_fz36 title__section-subtitle">
            What I use at work
          </div>
          <div className="divider"></div>

          <div className="skills__items">
            <div className="skills__item">
              <div className="skills__item-img">
                <img src="/icons/skills/html5.svg" alt="html5" />
              </div>
              <h3 className="title title_fz14">HTML5</h3>
              <p>
                It is he who creates the framework of your site or application,
                and the fifth version will allow me to create a more
                SEO-optimized structure of your product
              </p>
            </div>
            <div className="skills__item">
              <div className="skills__item-img">
                <img src="/icons/skills/css3.svg" alt="css3" />
              </div>
              <h3 className="title title_fz14">CSS3</h3>
              <p>
                This style language allows me to create absolutely any look for
                your site or application. Everything is limited only by your
                imagination!
              </p>
            </div>
            <div className="skills__item">
              <div className="skills__item-img">
                <img src="/icons/skills/js.svg" alt="java script" />
              </div>
              <h3 className="title title_fz14">Java Script</h3>
              <p>
                This programming language allows you to bring anything to life:
                sliders, windows, tooltips, tabs, receiving data from the
                server, and much more
              </p>
            </div>
            <div className="skills__item">
              <div className="skills__item-img">
                <img src="/icons/skills/redux.svg" alt="Redux" />
              </div>
              <h3 className="title title_fz14">Redux</h3>
              <p>
                Redux helps you write applications that behave consistently, run
                in different environments (client, server, and native), and are
                easy to test
              </p>
            </div>
            <div className="skills__item">
              <div className="skills__item-img">
                <img src="/icons/skills/react.svg" alt="React" />
              </div>
              <h3 className="title title_fz14">React</h3>
              <p>
                This library allows you to create web applications. It will help
                you create the most interactive product exactly for your goals
              </p>
            </div>
          </div>

          <div className="skills__ratings">
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Website development
              </div>
              <div className="skills__ratings-counter">100%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '100%' }} />
              </div>
            </div>
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Application creation
              </div>
              <div className="skills__ratings-counter">85%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '85%' }} />
              </div>
            </div>
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Working with data
              </div>
              <div className="skills__ratings-counter">90%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '90%' }} />
              </div>
            </div>
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Creativity
              </div>
              <div className="skills__ratings-counter">75%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '75%' }} />
              </div>
            </div>
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Design creation
              </div>
              <div className="skills__ratings-counter">90%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '90%' }} />
              </div>
            </div>
            <div className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">
                Soft skills
              </div>
              <div className="skills__ratings-counter">95%</div>
              <div className="skills__ratings-line">
                <span style={{ width: '95%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="title title_fz16 title__section-title">Portfolio</h2>
          <div className="title title_fz36 title__section-subtitle">
            My works
          </div>
          <div className="divider"></div>

          <div className="portfolio__wrapper">
            <a
              href="https://github.com/SBavia/test_uber"
              className="portfolio__item"
            >
              <img src="/img/works/uber.jpg" alt="uber" />
            </a>
            <a
              href="https://github.com/SBavia/Pulse"
              className="portfolio__item"
            >
              <img src="/img/works/pulse.jpg" alt="pulse" />
            </a>
            <a href="#" className="portfolio__item">
              <img src="/img/works/bread.jpg" alt="bread" />
            </a>
            <a href="#" className="portfolio__item vertical">
              <img src="/img/works/plans.jpg" alt="plans" />
            </a>
            <a href="#" className="portfolio__item">
              <img src="/img/works/ipad.jpg" alt="ipad" />
            </a>
            <a href="#" className="portfolio__item horizontal">
              <img src="/img/works/mac.jpg" alt="mac" />
            </a>
          </div>
        </div>
      </section>

      <section id="contacts" className="contacts">
        <div className="container">
          <div className="contacts__wrapper">
            <div className="contacts__photo">
              <img src="/img/main_photo.jpg" alt="photo" />
            </div>
            <div className="contacts__descr">
              <div>
                <h2 className="title title_fz16 conclusion__title">
                  In conclusion
                </h2>
                <h5 className="title title_fz14 languages__title">
                  I know two languages:
                </h5>
                <div>Russian - native;</div>
                <div>English - B1.</div>
                <h5 className="title title_fz14 interests__title">
                  My interests
                </h5>
                <p>
                  When I started living alone I began cooking and now it is my
                  hobby. I like preparing new dishes. Now in order to make my
                  flat more comfortable I start growing flowers. Like reading
                  non-fiction books and driving.
                </p>
              </div>
              <div className="contacts__descr-end">
                <div className="title title_fz36 contacts__subtitle">
                  Contact me
                </div>
                <div className="divider"></div>

                <div className="title title_fz14 contacts__text">
                  In any way convenient for you:
                </div>
                <div className="contacts__social">
                  <a
                    href="https://www.facebook.com/ivan.nikanau"
                    className="contacts__link"
                  >
                    <img
                      src="/icons/social/facebook_straight.svg"
                      alt="facebook"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivan-nikanau/"
                    className="contacts__link"
                  >
                    <img src="/icons/social/linkedin.svg" alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/SBavia"
                    className="contacts__link"
                  >
                    <img src="/icons/social/github_big.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
