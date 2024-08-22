import React from "react";
import ReactDOM from "react-dom/client";
 
const heading = React.createElement (
    "h1",
    {
        id:"title",
    },
    "Heading 1 for parcel"
);

const heading2 = React.createElement (
    "h2",
    {
        id:"title",
    },
    "Heading 2"
);
/* <div class="header">
        <h1>Namasthe react</h1>
        <ul>
            <li>About us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
     </div> */

const container = React.createElement (
    "div",
    {
        id:"container",
        hello:"world",
    },
    [heading,heading2]
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

// async defer

root.render(container);

// render will modify DOM