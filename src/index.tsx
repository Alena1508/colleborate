import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import DemoProject from "./pages/DemoProject";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<DemoProject />, document.getElementById("demoProject"));
registerServiceWorker();
