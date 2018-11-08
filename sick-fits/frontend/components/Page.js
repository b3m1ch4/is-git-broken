import React, { Component } from 'react';
import Header from './Header.js';

export default class Page extends Component {
  render() {
    return (
        <div>
        <Header />
        <p>Hey, I'm the page component.</p>
        {this.props.children}
        </div>
    )
  }
}
