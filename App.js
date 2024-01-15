//  <h1>Hello World!</h1> 
// <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Namaste React from Javascript";

//     const root = document.getElementById("root");
//     root.appendChild(heading);
// </script>
// <div id="parent">
//     <div id="child1">
//         <h1>I'm a h1 tag</h1>
//           <h2>I'm a h2 tag</h2>
//     </div> 
//     <div id="child2">
//         <h1>I'm a h1 tag</h1>
//           <h2>I'm a h2 tag</h2>
//     </div> 


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I'm a h1 tag!"), React.createElement("h2", {}, "I'm a h2 tag!")]),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm a h1 tag!"), React.createElement("h2", {}, "I'm a h2 tag!")])]);
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));// everything will be rendered inside this root , all the react code

root.render(parent);// heading is a react element passed as a javascript object to be rendered as a HTML element on the browser