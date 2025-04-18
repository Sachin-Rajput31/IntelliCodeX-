import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Markdown Error:", error, errorInfo);
  }

  // Reset error when new children are received
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h4 style={{ color: "red", textAlign: "center" }}>
          ⚠️ Error rendering Markdown. Please check your input.
        </h4>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
