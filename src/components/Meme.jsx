import React from "react"
import memesData from "../memesData"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random * memesArray.length)
        setMemeImage(memesArray[randomNumber.url])
    }

    return (

        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Generate custom meme 🧙🏼‍♂️
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>

    )
}

export default Meme