import { AboutStyle } from "./About.style"

import { forwardRef, useEffect, useRef, useState } from "react"
import { Fade } from "react-awesome-reveal"

import { useOnScreen } from "../../hooks/useOnScreen"

const HaveIdea = forwardRef((props, ref) => {
  const [onScreen, setOnScreen] = useState(false)
  const aboutRef = useRef()
  const aboutScreen = useOnScreen(aboutRef)

  useEffect(() => {
    if(aboutScreen) {
      setOnScreen(true)
    }
  }, [aboutScreen])


  return (
    <AboutStyle ref={ref}>
      <div className="container">
        <div className="content">
            <div className={`animated ${onScreen ? 'fade-in' : ''}`}>
              <h1 className="title">About</h1>
            </div>
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={0.9}
            delay={800}
            duration={800}
          >
            <p className="text" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu nisi id neque volutpat maximus eget egestas quam.
              Nullam placerat nunc elit, non aliquam velit feugiat sed.
            </p>
            <p className="text pull-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu nisi id neque volutpat maximus eget egestas quam.
              Nullam placerat nunc elit, non aliquam velit feugiat sed.
            </p>
          </Fade>

          <div ref={aboutRef}/>
        </div>
      </div>
    </AboutStyle>
  )
})

export default HaveIdea
