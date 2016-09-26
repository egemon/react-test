/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import store from "../Store/store";
const protocolFieldMixin = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(fieldName, event) {
    const fieldValue = event.target.value;
	  const {
	  	type,
		  number
	  } = this.props;
    store.dispatch({
      type: `${type.toUpperCase()}_CHANGE`,
      fieldName,
      fieldValue,
      number: number
    });
  }

  render() {
    return (
      <Component
        update={this.update}
        {...this.props}
      />
    );
  }
};

export default protocolFieldMixin;
