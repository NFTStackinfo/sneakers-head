import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { Button, Icon } from "../UIKit"
import { useLockedBody } from "../../hooks/useLockedBody"
import { navList } from "./config"

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [drawerOpened])

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(!locked)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }
  return (
    <HeaderStyle className={drawerOpened ? "open" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <a className="logo" href={"#"}>
              <img src="logo.png" alt="BamBoozles" />
            </a>
          </div>

          <ul className="social">
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="discord" size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="twitter" size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="instagram" size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
