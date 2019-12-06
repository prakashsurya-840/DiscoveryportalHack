import React from "react";
import Form from "react-jsonschema-form";
import { formDefinition } from "../forms/payments";

class FormsPane extends React.Component {
  constructor(props) {
    super(props);
    var newState = {
      formData: {}
    };
    this.state = newState;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    var newState = this.state;
    newState.formData = e.formData;
    this.setState(newState, () => this.props.updateFormData(e.formData));
  }
  render() {
    var schema = formDefinition[this.props.formKey + "Schema"];
    var uiSchema = formDefinition[this.props.formKey + "UiSchema"];
    return (
      <div>
        <Form
          schema={schema ? schema : {}}
          uiSchema={uiSchema ? uiSchema : {}}
          formData={this.state.formData ? this.state.formData : {}}
          onChange={this.handleChange}
        >
          <div />
        </Form>
      </div>
    );
  }
}

export default FormsPane;
