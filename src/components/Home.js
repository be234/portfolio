import desk from "../img/desk.svg";
import speaker from "../img/speaker.jpg";
import { SiFramer } from 'react-icons/si';
import { DiBootstrap } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { DiTerminal } from 'react-icons/di';
import { SiSass } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { BiDevices } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

import { motion } from "framer-motion";

const Home = () => {
    return ( 
      <div className="home">
     <div className="color-one"></div>
          <div className="color-two"></div>
          
      <div className="hero-section">
 
        <div className="container-one selection-transparent">
          <img src={desk} id="svg" alt="desk" />
        </div>
        <div className="container-two  selection-one">
          {/* <p>Hi, I'm Belal</p> */}
          <h1>I like making <span>fun</span>, interactive things with code. I also  <span>talk</span> & <span>write</span> about those things.</h1>
        </div>
      </div>

      <div className="about-section">
        <div className="flex-container">
      <div className="item-one">
        <h1>Frontend <br /> Developer</h1>
        <p>I like to craft solid and scalable frontend products with great user experiences.</p> <br />
        <p>So naturally I said yes. Since then I’ve spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
        {/* <p><a href="#">Check out my videos and upcoming talks.</a></p> */}
      </div>
        <div className="item-two">
          <img src={speaker} alt="front end" />
          <div className="frame"></div>
        </div>
      </div>
        </div>

        <div className="projects-section">
          <h1>Current Projects</h1>
          <div className="flex-container">
            <div className="item-one">
              <div className="image"></div>
            </div>
            <div className="item-two">
                <h3>EYEDEAL</h3>
                <h4>Is your eyeliner on fleek?</h4>
                <p>An online store made with Vanilla JS (no external libraries!). Shop, add to your cart, and see your total. Products come from Makeup API.</p>
                <h4>MADE WITH</h4>
                <div className="icons icons1">
                <h3><FaHtml5 /></h3>
                <h3><SiSass /></h3>
                <h3><DiJavascript /></h3>
                <h3><DiTerminal /></h3>
                </div>
                <div className="button">
                  <div>VISIT THE SITE</div>
                </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="item-one item-one-one">
              <div className="image"></div>
            </div>
            <div className="item-two item-two-two">
                <h3>TO DO IN TO</h3>
                {/* <h4>Is your eyeliner on fleek?</h4> */}
                <p>An online store made with Vanilla JS (no external libraries!). Shop, add to your cart, and see your total. Products come from Makeup API.</p>
                <h4>MADE WITH</h4>
                <div className="icons icons2">
                <h3><FaHtml5 /></h3>
                <h3><SiSass /></h3>
                <h3><DiJavascript /></h3>
                <h3><SiFramer /></h3>
                </div>
                <div className="button">
                  <div>VISIT THE SITE</div>
                </div>
            </div>
          </div>

          <div className="arsenal">
            <h1>ARSENAL</h1>
            <div className="items">
              <div>
                <motion.h3 
                drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><FaHtml5 /></motion.h3>
                <h4>HTML5</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiCss3 /></motion.h3>
                <h4>CSS</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiJavascript /></motion.h3>
                <h4>JAVASCRIPT</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><SiSass /></motion.h3>
                <h4>SASS</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><SiFramer /></motion.h3>
                <h4>FRAMER MOTION</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}} ><SiTypescript/></motion.h3>
                <h4>TYPESCRIPT</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiReact /></motion.h3>
                <h4>REACT</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><SiFirebase /></motion.h3>
                <h4>FIREBASE</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiGit /></motion.h3>
                <h4>GIT</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiTerminal /></motion.h3>
                <h4>TERMINAL</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><BiDevices /></motion.h3>
                <h4>RESPONSIVE DESIGN</h4>
              </div>
              <div>
                <motion.h3 drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}><DiBootstrap /></motion.h3>
                <h4>BOOTSTRAP</h4>
              </div>
              
            </div>
          </div>
        </div>
        <div className="space">
        <div className="footer">
            <div className="square">
              <h1>Hey There!</h1>
                <div className="item-one">
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Let’s build something together!" cols="30" rows="9"></textarea>
                    <div className="btn">
                      <div>SEND IT!</div>
                    </div>
                    <div className="icons icons1">
                    <h3><AiFillGithub /></h3>
                    <h3><AiFillLinkedin /></h3>
                    <h3><AiOutlineInstagram /></h3>
                    <h3><AiOutlineCodepen /></h3>
                 </div>
                </div>
                <div className="item-two">
                  <p>If you have any  questions about me or my projects, or argue about the best albums and movies of the 90s, I’m your man!</p>
                  <p>I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!</p>
                  <h3>Find me on these online spaces!</h3>
                  <div className="icons icons1">
                    <h3><AiFillGithub /></h3>
                    <h3><AiFillLinkedin /></h3>
                    <h3><AiOutlineInstagram /></h3>
                    <h3><AiOutlineCodepen /></h3>
                 </div>
                </div>
            </div>
        </div>
        </div>
   </div>

     );
}
 
export default Home;
