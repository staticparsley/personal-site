import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic.jpg';
import pic4 from '../assets/images/pyramid2.jpg';
import resume from '../assets/RubenMarin_Resume.pdf';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button ">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About Me
          </h2>
          <p>
           I'm a software engineer based out of NYC. 
           Orignally from Los Angeles I moved out to the East Coast in pursuit of a better life and escape the vapid LA lifestyle. 
           I started coding in 2012 after I had an existential crisis about my future as a music major. I ultimately put down the guitar and
           taught myself calculus in attempt to get into a STEM program. After a brief affair with Physics I landed on Computer Science and never
           looked back. Since then I've become a huge JavaScript fanboy and encourage everyone to jump in on the amazing JS community. </p>
           <p>
           When I'm not staring at code I can be found lifting weights, playing music, or hanging out with my dog.
           I'm also an avid fan of Brazillian Jiu-Jitsu, it is the reason for me to wake up each day. The lessons learned 
           on the mats translate well to the career of a developer as it reminds me to stay humble and check my ego. 
          </p>
        </header>
        
        <ul className="icons major">
          <li>
            <span className="icon solid fa-code major style3">
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Experience
          </h2>
           <h6>*Currently searching for my next opportunity</h6>
          <p>
            <br />
            <li>
              Tendigi: Web Developer
              <ol>October 2018 - August 2019</ol>
            </li>
            <li>
              CSULB Foundation: JavaScript Developer
              <ol>May 2017 - January 2018</ol>
            </li>
            <li>
              HSI-STEM: PHP Developer
              <ol>June 2015 - October 2016</ol>
            </li>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>
           Education
          </h2>
          <p>
            CSULB - Bachelor's of Science in Computer Science - Graduated May 2018
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
          <p>
           While I consider myself a Node specialist I am well-versed with other languages & technologies.
           
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-star">
            <h3>JavaScript</h3>
            <ul>Node.js</ul>
            <ul>React</ul>
            <ul>Express/Hapi/GraphQL</ul>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Python</h3>
            <ul>Django</ul>
            <ul>Flask</ul>
          </li>
          <li className="icon solid fa-server">
            <h3>AWS</h3>
            <ul>EC2</ul>
            <ul>Lambda + API Gateway</ul>
            <ul>S3</ul>
          </li>
          <li className="icon solid fa-database">
            <h3>Databases</h3>
            <ul>MongoDB</ul>
            <ul>PostgreSQL</ul>
            <ul>MySQL</ul>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Interested?</h2>
          <p>
            You can view my resume by clicking here.
          </p>
        </header>
        
        <ul className="actions stacked">
          <form method="get" action={resume}>
            <button className="button fit" primary>Resume</button>
          </form>
          {/* <li>
            <form method="get" action={resume}>
              <button className="button fit" primary>Resume</button>
            </form>
          </li>
          <li>
            <a href="/#" className="button fit">
              Back Home
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
