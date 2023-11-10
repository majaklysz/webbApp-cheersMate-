/* eslint-disable react/no-unescaped-entities */
//Maciek
import { Component } from "react";
import PopupRules1 from "./PopupRules1";
import PopupRules2 from "./PopupRules2";
import PopupRules3 from "./PopupRules3";
import PopupRules4 from "./PopupRules4";
import PopupRules5 from "./PopupRules5";
import PopupRules6 from "./PopupRules6";
import PopupRules7 from "./PopupRules7";
import PopupRules8 from "./PopupRules8";
import WheelGames from "./WheelGames";

class WheelOfFortune extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: [
        { startAngle: 0, endAngle: 45, modalId: "modal1" },
        { startAngle: 45, endAngle: 90, modalId: "modal2" },
        { startAngle: 90, endAngle: 135, modalId: "modal3" },
        { startAngle: 135, endAngle: 180, modalId: "modal4" },
        { startAngle: 180, endAngle: 225, modalId: "modal5" },
        { startAngle: 225, endAngle: 270, modalId: "modal6" },
        { startAngle: 270, endAngle: 315, modalId: "modal7" },
        { startAngle: 315, endAngle: 360, modalId: "modal8" },
      ],
      tick: 1,
      cycle: 6 * 360,
      animationVisible: false,
      modal1Visible: true,
      modal2Visible: true,
      modal3Visible: true,
      modal4Visible: true,
      modal5Visible: true,
      modal6Visible: true,
      modal7Visible: true,
      modal8Visible: true,
    };
  }

  getWheelResult(degrees) {
    const angle = ((degrees % 360) + 360) % 360; // Normalize the angle
    for (const segment of this.state.segments) {
      if (angle >= segment.startAngle && angle < segment.endAngle) {
        return segment.modalId;
      }
    }
  }
  toggleModal1 = () => {
    this.setState((prevState) => ({
      modal1Visible: !prevState.modal1Visible,
    }));
  };
  toggleModal2 = () => {
    this.setState((prevState) => ({
      modal2Visible: !prevState.modal2Visible,
    }));
  };
  toggleModal3 = () => {
    this.setState((prevState) => ({
      modal3Visible: !prevState.modal3Visible,
    }));
  };
  toggleModal4 = () => {
    this.setState((prevState) => ({
      modal4Visible: !prevState.modal4Visible,
    }));
  };
  toggleModal5 = () => {
    this.setState((prevState) => ({
      modal5Visible: !prevState.modal5Visible,
    }));
  };
  toggleModal6 = () => {
    this.setState((prevState) => ({
      modal6Visible: !prevState.modal6Visible,
    }));
  };
  toggleModal7 = () => {
    this.setState((prevState) => ({
      modal7Visible: !prevState.modal7Visible,
    }));
  };
  toggleModal8 = () => {
    this.setState((prevState) => ({
      modal8Visible: !prevState.modal8Visible,
    }));
  };
  spinButtonHandler = () => {
    // Code for handling the spin button click
    const { tick, cycle } = this.state;
    const content = document.getElementById("wheel");
    const animation = document.querySelector(".reducted");
    if (!content || !animation) {
      console.error("Element with ID 'wheel' or '.reducted' not found.");
      return;
    }
    // Random int injected into the rotation for random spins
    this.setState({ tick: tick + 1 });
    const cycles = Math.ceil(Math.random() * 360) + cycle * tick; // Random spin plus normal spins
    console.log("tick:", tick);
    console.log("cycle:", cycle);
    console.log("cycles:", cycles);
    content.style.transform = `rotate(${cycles}deg)`; // Rotate the wheel
    const prize = Math.ceil((cycles % 360) / 45); // Divides the wheel to determine prize | gives a value 1-8

    // Now, let's display different modals based on the prize value
    const modalId = "modal" + prize;
    const modal = document.getElementById(modalId);
    if (modal) {
      setTimeout(() => {
        modal.style.display = "block";
      }, 4250);
    } else {
      console.error(`Modal with ID '${modalId}' not found.`);
    }
  };

  transitionEndHandler = () => {
    const spin = document.getElementById("button");
    spin.style.opacity = "1";
    spin.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    spin.style.transform = "translate(0%, 0%)";
    spin.style.pointerEvents = "auto";
  };

  render() {
    return (
      <>
        <div className="wholewheel">
          <div className="container">
            <div id="top">
              <h1 className="heading">Don't know what to play?</h1>
              <p className="subheading">LET THE WHEEL CHOOSE</p>
            </div>
            <div className="spinwheel">
              <img
                className="indicator"
                 src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/Polygon%204.png?alt=media&token=b38c1649-f2f6-459d-97dc-f2e8888e277d"
                
              />
              <img
                id="wheel"
                 src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/Group%205.png?alt=media&token=1e5955d3-ca93-4cb0-b438-7e59e1dd3978"
             
              />
            </div>
            <p id="tagsheading">Choose tags to filter the options</p>
            <WheelGames />
          </div>
          <div id="buttoncontainer">
            <div id="button">
              <button
                className="spinner"
                id="spinButton"
                onClick={this.spinButtonHandler}
              >
                Spin!{" "}
                <img
                  className="balloons"
                  src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/fi-rr-balloons.png?alt=media&token=42717a5b-2466-45c7-91d5-6040806d7121"
                />
              </button>
            </div>
          </div>
          <div className="reducted"></div>
          <div className="popups">
            {this.state.modal1Visible && (
              <div id="modal1" className="popup">
                <PopupRules8 />
                <br></br>
                <div className="row5" onClick={this.toggleModal1}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal2Visible && (
              <div id="modal2" className="popup">
                <PopupRules1 />
                <br></br>
                <div className="row5" onClick={this.toggleModal2}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal3Visible && (
              <div id="modal3" className="popup">
                <PopupRules2 />
                <br></br>
                <div className="row5" onClick={this.toggleModal3}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal4Visible && (
              <div id="modal4" className="popup">
                <PopupRules7 />
                <br></br>
                <div className="row5" onClick={this.toggleModal4}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal5Visible && (
              <div id="modal5" className="popup">
                <PopupRules4 />
                <br></br>
                <div className="row5" onClick={this.toggleModal5}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal6Visible && (
              <div id="modal6" className="popup">
                <PopupRules5 />
                <br></br>
                <div className="row5" onClick={this.toggleModal6}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal7Visible && (
              <div id="modal7" className="popup">
                <PopupRules3 />
                <br></br>
                <div className="row5" onClick={this.toggleModal7}>
                  Cancel
                </div>
              </div>
            )}
            {this.state.modal8Visible && (
              <div id="modal8" className="popup">
                <PopupRules6 />
                <br></br>
                <div className="row5" onClick={this.toggleModal8}>
                  Cancel
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default WheelOfFortune;
