import './App.css';
import Spline from '@splinetool/react-spline';
import { mdiInstagram,mdiTwitter,mdiLinkedin,mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import { Button } from '@nextui-org/react';
import { LockIcon } from './downloading';
import myImage from './Picture1.png';

const user = {
  avatarUrl: require('./logo.svg').default
};
const icon_size = 1.5;
function App() {
  return (
    <div className='black'>
              <section className='upper_nav'> 
                <div className="avatar" style={{ backgroundImage: `url(${user.avatarUrl})` }}></div>
                <span className='name'>Portfolio.</span>
                    <div className='social_icons'>
                      <a href="https://www.instagram.com/sankalpdubedy/" ><Icon path={mdiInstagram} size={icon_size} color="red"/></a>
                      <a href="https://twitter.com/Sankalpdubedy" ><Icon path={mdiTwitter } size={icon_size} color="rgb(0, 47, 255)"/></a>
                      <a href="https://www.linkedin.com/in/sankalp-dubedy-a9aa50200/" ><Icon path={mdiLinkedin } size={icon_size} color="blue"/></a>
                      <a href="https://github.com/Hypernap" ><Icon path={mdiGithub} size={icon_size} color="black"/></a>
                      <a
                      className='upper_down_btn'
                      href={"https://drive.google.com/file/d/1pHty1AA2pYw7FL2_SlKEs16j3eu2EPzI/view?usp=drive_link"}
                      download="Sankalp_Dubedy_Resume"
                      target="_blank"
                      rel="noreferrer"
                      >
                      <Button ripple size="sm" icon={<LockIcon fill="currentColor"/>} color="gradient" >
                      Resume
                      </Button>
                      </a>
                    </div>
              </section>
      <div className='land'>
      
        <Spline className='land' scene="https://prod.spline.design/G4TWr51Lp5-mITtJ/scene.splinecode" />
        <div className='sidebar'>HITS: INTERACT WITH THE OBJECTS WHICH MOVE ON-HOVER</div>
      </div>
    <section className='end'>
        <img src={myImage} className="Myimg" alt="My Self" />
        <h1 id="inner_name">Thank You </h1>
    </section>
    </div>

  );
}

export default App;
