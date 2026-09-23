import "../Section3/Section3.scss"
import { Photo } from "../../Photo"
export default function App() {
    return (
        <>
            <section className="section3">
                <div className="container">
                    <div className="topcont">
                        <div>
                            <h1>“</h1>
                        </div>
                        <div>
                            <h3>At Travalyst, we’re bringing travellers, communities, and the travel industry to the table to change the way we see and share the world.</h3>
                            <p>By working with Travalyst and our industry partners, we aim to build tools and technology that enable travelers and businesses around the world to prioritize sustainability.”</p>
                        </div>
                    </div>
                    <div className="botcont">
                        <div className="slide">
                            <p>←</p>
                            <img src={Photo.man} />
                            <img src={Photo.man3} />
                            <img src={Photo.man2} />
                            <img src={Photo.girl} />
                            <img src={Photo.woman} />
                            <p>→</p>
                        </div>
                        <div className="text">
                            <h5>Prince Harry</h5>
                            <h5>The Duke of Sussex</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}