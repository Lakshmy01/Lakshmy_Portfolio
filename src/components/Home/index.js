import LogoTitle from '../../assets/images/logo-s.png'
import photo from '../../assets/images/lakshmy.jpg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  

  const nameArray = ' Lakshmy,'.split('');
  const jobArray = 'web devloper.'.split('');
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
    
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span> <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          {/* <img
            src={LogoTitle}
            alt="JavaScript Developer Name, Web Developer Name"
          /> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Frontend Developer</h2>
        <Link className="flat-button" to="/contact">
          CONTACT ME
        </Link>
    
      </div>
        <div className='logo-container'>

        <img
            src={photo}
            alt="Photo"
            className=''
          />
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
