/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import changeMetadata from "../Reducer/stateCreators/changeMetadata";
import changePlayer from "../Reducer/stateCreators/changePlayer";
const protocolFieldMixin = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(name, event) {
    const value = event.target.value;
	  const {
	  	type,
		  number
	  } = this.props;
    store.dispatch(type === "metadata" ? changeMetadata(name, value) : changePlayer(name, value, number));
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
