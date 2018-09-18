// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {



  render() {
    return (
      <form>
        <input type="password" onKeyUp={(e) => console.log('Entering password...')} />
      </form>

    )
  }
}


export default Keypad;
