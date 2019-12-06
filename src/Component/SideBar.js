import React from "react";
import Treemenu from "./Treemenu";

class SideNavBar extends React.Component {
  render() {
    return (
      <div>
        <Treemenu {...this.props} />
      </div>
    );
  }
}
export default SideNavBar;
