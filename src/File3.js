import React from 'react'

export default function File1({animationDown, touchStart, touchEnd}) {
  return (
    <div style={{backgroundColor:"green", height:"100%", width:"100%"}} onWheel={animationDown}  onTouchStart={(e) => touchStart(e)} onTouchEnd={(e) => touchEnd(e)} onTouchMove={(e) =>console.log(e)}>

    </div>
  )
}
