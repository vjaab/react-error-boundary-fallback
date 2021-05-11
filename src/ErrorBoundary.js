import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // It will catch error in any component below. We can also log the error to an error reporting service.
    console.log('caught the error');
  }
  render() {
    if (this.state.hasError) {
      return <div>Something is wrong.</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
