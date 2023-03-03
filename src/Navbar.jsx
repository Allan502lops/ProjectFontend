import { useEffect } from "react"

export default function Navbar({title}) {
  
  useEffect( () => {
    console.log("Navbar");
  }, [])

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{title}</span>
        </div>
      </nav>
    </div>
  )
}
