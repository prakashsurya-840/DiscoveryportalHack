import React from "react";
import Multistep from "react-multistep";
import InitialPrereq from "./InitialPrereq";
function Compone() {
  return <div>Component</div>;
}
class ToolBar extends React.Component {
  steps = [
    { name: "Initial Requirements", component: <InitialPrereq /> },
    { name: "Action Items", component: <Compone /> }
  ];
  render() {
    return (
      <div>
        <Multistep showNavigation={true} steps={this.steps} />
      </div>
    );
  }
}

export default ToolBar;
