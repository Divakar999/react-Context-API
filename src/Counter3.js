import React from 'react';
import { Context } from './Context';

class Counter3 extends React.Component {
  static contextType = Context;
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h3> Counter 3 Component </h3>
        Value : {this.context.initialValue} <br /> <br />
        <button onClick={this.context.handleIncrementFromProvider}>
          Increment
        </button>
        &nbsp; &nbsp;
        <button onClick={this.context.handleDecrementFromProvider}>
          Decrement
        </button>
        &nbsp; &nbsp;
        <button onClick={this.context.handleResetFromProvider}>Reset</button>
      </>
    );
  }
}

export default Counter3;
