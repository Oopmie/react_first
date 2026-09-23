import "../Section2/Section2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="section2">
                <div className="container">
                    <div className="cont1">
                        <h1>Founded by Prince Harry, The Duke of Sussex, Travalyst is a coalition of some of the biggest names in travel:</h1>
                    </div>
                    <div className="cont2">
                        <img src={Photo.amadeus}/>
                        <img src={Photo.booking}/>
                        <img src={Photo.expodia}/>
                        <img src={Photo.google}/>
                        <img src={Photo.skyscanner}/>
                        <img src={Photo.travel}/>
                        <img src={Photo.tripad}/>
                    </div>
                    <div className="cont3">
                        <p>Our mission is to make the travel industry more sustainable. We do this by convening leading industry players in a pre-competitive coalition to collaborate on bringing consistent sustainability information to the mainstream for the first time. This means we can empower consumers to make better choices: for themselves, and for the planet.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
