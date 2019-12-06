import React from "react";
import SideNavBar from "./SideBar";
import FormsPane from "./FormPane";
class InitialPrereq extends React.Component {
  constructor(props) {
    super(props);
    var newState = {
      formKey: "",
      formData: []
    };
    this.updateFormKey = this.updateFormKey.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
    this.state = newState;
  }
  updateFormData(formData) {
    var newState = this.state;
    newState.formData = formData;
    this.setState(newState);
  }
  updateFormKey(e) {
    var newState = this.state;
    newState.formKey = e.formKey;
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <div class="row col-xs-5" style={{ height: 300 }}>
          <SideNavBar onClick={this.updateFormKey} />
        </div>
        <div class="row col-xs-7" style={{ marginLeft: 20, height: 400 }}>
          <FormsPane
            formKey={this.state.formKey}
            updateFormData={this.updateFormData}
          />
        </div>
      </div>
    );
  }
}
export default InitialPrereq;
