import React, { Component } from 'react';

class Timer extends Component {
  state = {
    value: new Date(),
  };

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        value: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.value.toTimeString()}</p>
      </div>
    );
  }
}

export default Timer;
