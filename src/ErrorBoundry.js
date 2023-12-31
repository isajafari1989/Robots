import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          OOPS WE CAN NOT LOAD THE SITE BUT WE ARE TRYING TO FIX IT. FOR MORE
          INFORMATION CONTACT US VIA BELOW LINK.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
