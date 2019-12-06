import React from "react";
import TreeMenu from "react-simple-tree-menu";
class Treemenu extends React.Component {
  constructor(props) {
    super(props);
    var state = {
      counter: 0
    };
    this.state = state;
  }
  treeData = [
    {
      key: "Payments",
      label: "Payments",
      nodes: [],
      formKey: "Payments"
    },
    {
      key: "GeoCheck",
      label: "GeoCheck and Marketplace",
      nodes: [],
      formKey: "GeoCheck"
    },
    {
      key: "publishing",
      label: "Publishing",
      nodes: [],
      formKey: "Publishing"
    }
  ];
  render() {
    return (
      <div>
        <TreeMenu
          data={this.treeData}
          onClickItem={this.props.onClick}
          hasSearch={false}
        />
      </div>
    );
  }
}

export default Treemenu;
