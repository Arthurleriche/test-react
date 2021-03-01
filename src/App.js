import './App.css';
import File1 from './File1'
import File2 from './File2'
import File3 from './File3'
import React, {useState} from 'react'



function App() {

  const [scroll, setScroll] = useState(true)
  const [translate, setTranslate] = useState(0)
  const [top, setTop] = useState(0)
  const [start, setStart] = useState(0)

 

  const touchStart = (e) => {
    
    setStart(e.changedTouches[0].clientY)
  }

  const touchEnd = (e) => {    
    
      const deltaY = (e.changedTouches[0].clientY - start) 

      if(deltaY > 0){
        animationUp()
      } else{
        animationDown()
      }


  }


  const animationDown = () => {
    setScroll(false)
    if(scroll){
      setTranslate(translate -100)
    }

    setTimeout(() => {
      setScroll(true)
    }, 1000)
  }

  const animationUp = () => {
    setScroll(false)
    if(scroll){
      setTranslate(translate + 100)
    }
    setTimeout(() => {
      setScroll(true)
    }, 1000)
  }


  return (
    <div className="app"> 
      <div className="home-container">
        <div className='home-grid -animate' style={{transform: `translate(0, ${translate}vh)`,  top:`${top}vh`}}>
          <div className='grid-card'>
          <File1 animationDown={animationDown} touchStart={touchStart} touchEnd={touchEnd}/>
          <File2 animationDown={animationDown} touchStart={touchStart} touchEnd={touchEnd}/>
          <File3 animationDown={animationDown} touchStart={touchStart} touchEnd={touchEnd}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
