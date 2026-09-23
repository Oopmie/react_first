import "../Section6/Section6.scss"
import { Photo } from "../../Photo"
export default function App() {
  return (
    <>
      <section className="section6">
        <div className="container">
          <div className="cont">
            <div className="text">
              <p>Travellers want to travel<br />
                more sustainably:</p>
            </div>
            <div className="table">
              <div className="stroke">
                <div className="left">
                  <p>71<span>%</span></p>
                </div>
                <div className="centre">
                  <p>of travellers want to make more effort in the next<br />
                    year to travel more sustainably, up 10% from 2021</p>
                </div>
                <div className="right">
                  <h2>*</h2>
                  <button></button>
                </div>
              </div>
              <div className="stroke">
                <div className="left">
                  <p>68<span>mn</span></p>
                </div>
                <div className="centre">
                  <p>have selected lower emissions flights on Skyscanner<br />
                    since 2019</p>
                </div>
                <div className="right">
                  <h2>*</h2>
                  <button></button>
                </div>
              </div>
              <div className="stroke">
                <div class="leftyo">
                  <p>7<span>in 10</span></p>
                </div>
                <div className="centre">
                  <p>feel overwhelmed by starting the process of being a <br />
                    more sustainable traveller</p>
                </div>
                <div className="right">
                  <h2>*</h2>
                  <button><a>Expedia</a></button>
                </div>
              </div>
            </div>
            <div className="textyo">
              <p>It’s not always easy for travellers to know whether they are making good<br />
                choices from a sustainability perspective, even when they want to. This is<br />
                why we are bringing the industry together to help make it clearer to <br />
                consumers what to look for.
              </p>
            </div>
          </div>
          <div className="ballon">
            <img src={Photo.ballon} />
          </div>
        </div>
      </section>
    </>
  )
}