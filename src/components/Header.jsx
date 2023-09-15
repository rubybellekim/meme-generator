import React from "react"

function Header() {
    return (
        <header className="header">
            <img
                src="/images/paint-icon.png"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header-project">React Course - project</h4>
        </header>
    )
}

export default Header