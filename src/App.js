import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import "./fullpage.parallax.min";
import logo from "./logo.png";
import "./App.css";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  // require("fullpage.js/vendors/scrolloverflow"); // Optional. When using scrollOverflow:true
  // require("./fullpage.parallax.min")
};

const originalColors = [
  /*"#a1e0fb", "rgb(250, 221, 181)",*/
  "#fff",
  "#8baedf",
  "#7680c5",
  "#5e4aa7",
  "#4b208f"
];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sectionsColor: [...originalColors],
//       fullpages: [
//         {
//           text: "section 1"
//         },
//         {
//           text: "section 2"
//         },
//         {
//           text: "section 3"
//         }
//       ]
//     };
//   }
//
//   onLeave(origin, destination, direction) {
//     console.log("onLeave", { origin, destination, direction });
//     // arguments are mapped in order of fullpage.js callback arguments do something
//     // with the event
//   }
//
//   handleChangeColors() {
//     const newColors =
//       this.state.sectionsColor[0] === "yellow"
//         ? [...originalColors]
//         : ["yellow", "blue", "white"];
//     this.setState({
//       sectionsColor: newColors
//     });
//   }
//
//   handleAddSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const { length } = fullpages;
//       fullpages.push({
//         text: `section ${length + 1}`,
//         id: Math.random()
//       });
//
//       return {
//         fullpages: [...fullpages]
//       };
//     });
//   }
//
//   handleRemoveSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const newPages = [...fullpages];
//       newPages.pop();
//
//       return { fullpages: newPages };
//     });
//   }
//
//   render() {
//     const { fullpages } = this.state;
//
//     if (!fullpages.length) {
//       return null;
//     }
//
//     const Menu = () => (
//       <div
//         className="menu"
//         style={{
//           position: "fixed",
//           top: 0,
//           zIndex: 100
//         }}
//       >
//         <ul>
//           <li>
//             <button onClick={() => this.handleAddSection()}>+ Section</button>
//             <button onClick={() => this.handleRemoveSection()}>
//               - Section
//             </button>
//             <button onClick={() => this.handleChangeColors()}>
//               Change colors
//             </button>
//           </li>
//         </ul>
//       </div>
//     );
//
//     return (
//       <div className="App">
//         <Menu />
//         <ReactFullpage
//           debug /* Debug logging */
//           navigation
//           anchors={["firstPage", "secondPage", "thirdPage"]}
//           sectionSelector={SECTION_SEL}
//           onLeave={this.onLeave.bind(this)}
//           sectionsColor={this.state.sectionsColor}
//           parallax
//           pluginWrapper={pluginWrapper}
//           render={comp => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <div class="fp-bg" />
//                   <h1>{text}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

const Menu = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      className="menu"
      style={{
        position: "fixed",
        zIndex: 100,
        background: "rgb(250, 221, 181)",
        padding: "1em"
      }}
    >
      menu placeholder here
    </div>
  </div>
);

const App = () => (
  <div className="App">
    {/*}<Menu />*/}
    <ReactFullpage
      pluginWrapper={pluginWrapper}
      sectionsColor={originalColors}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section opener">
              <img src={logo} alt="mishroom" width="800vw" />
              <br />
              <span>Something | Something | Something</span>
              {/*<button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
              <svg viewBox="0 0 425 300">
                <path
                  id="curve"
                  d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
                />
              </svg>*/}
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <div class="fp-bg" />
              <h1>3</h1>
            </div>
            <div className="section">
              <div class="fp-bg" />
              <h1>4</h1>
            </div>
            <div className="section">
              <div class="fp-bg" />
              <h1>5</h1>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);
export default App;
