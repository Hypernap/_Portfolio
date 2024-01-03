import './App.css';

import React from 'react';
import Spline from '@splinetool/react-spline';
import { mdiInstagram,mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import { Button } from '@nextui-org/react';
import { LockIcon } from './downloading';
import myImage from './Picture1.png';
// import { useEffect } from 'react';
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
const user = {
  avatarUrl: require('./logo.svg').default
};

const icon_size = 1.5;

function onLoad() {
  console.log("loaded");
    setTimeout(() => {
      let foo = document.getElementById('lo');
      let loo = document.getElementById('loader');
      let doo = document.getElementById('sidebar');
      foo.style.display="block";
      loo.style.display="none";
      doo.style.display="none";
    }, 1000);
  
}




function App() {
  window.addEventListener('load', onLoad);
  return (
    <div className='black'>
            <div id="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      <div id='sidebar'><h1>INTERACT WITH THE OBJECTS WHICH MOVE ON-HOVER</h1></div>
      <div id='lo'>
              <section className='upper_nav'> 
                <div className="avatar" style={{ backgroundImage: `url(${user.avatarUrl})` }}></div>
                <span className='name'>Portfolio.</span>
                    <div className='social_icons'>
                      <a href="https://www.instagram.com/sankalpdubedy/" target="_blank" rel="noopener noreferrer" ><Icon path={mdiInstagram} size={icon_size} color="red"/></a>
                      <a href="https://twitter.com/Sankalpdubedy" target="_blank" rel="noopener noreferrer" ><Icon path={mdiTwitter } size={icon_size} color="rgb(0, 47, 255)"/></a>
                      {/* <a href="https://www.linkedin.com/in/sankalp-dubedy-a9aa50200/" ><Icon path={mdiLinkedin } size={icon_size} color="blue"/></a>
                      <a href="https://github.com/Hypernap" ><Icon path={mdiGithub} size={icon_size} color="black"/></a> */}
                      <a
                      className='upper_down_btn'
                      href={"https://drive.google.com/drive/folders/1Jzplx8VeHSEhIa4kKyoKLp9W3m0YT3Ka?usp=sharing"}
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
      
        <Spline className='land' scene="https://prod.spline.design/G4TWr51Lp5-mITtJ/scene.splinecode"  />
       
      </div>
    <section className='end'>
        <div className='im'><img src={myImage} className="Myimg" alt="My Self" /></div>
        <div className='part'>
        <span id="inner_name">Thank You </span>
        <span id="inner_name1">If you liked my Portfolio or want to colaborate with me , contact me through my socials. </span>
        </div>
    </section>
    </div>
    </div>

  );
}

export default App;
