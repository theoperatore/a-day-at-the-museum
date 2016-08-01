import React from 'react';

import Spiral from './Spiral';
import Pedals from './Pedals';

export default class App extends React.Component {
  render() {
    switch (this.props.cmp) {
      case 'spiral': {
        return <Spiral />
      }
      case 'pedal': {
        return <Pedals />
      }
      default: return <div className='p2'>
        <h1>A day at the museum...</h1>
        <p><a className='' href='/a-day-at-the-museum/#spiral'>Spiral</a></p>
        <p className='p2'>A classic Archimedes Spiral sped up with each individual point's velocity adjusted based on distance from the center. It's a little dizzying, but eventually the patten repeats itself as the "arms" of the spiral grows and shrings in number.</p>
        <p><a href='/a-day-at-the-museum/#pedal'>Pedals</a></p>
        <p className='p2'>Same animation type as the Sprial, this uses a 48-pedal polar rose as the shape the dots trace. Once all of the pedals are formed, some interesting "coiling" and "uncoiling" patterns emerge.</p>
        <p>Inspired by:</p>
        <dl>
          <dt>Simulation of a Two-Gyro Gravity-Gradient Attitude Control System (excerpt)</dt>
          <dd>1963, Edward E. Zajac</dd>
          <dt>Hypercube (excerpt)</dt>
          <dd>1965, A. Michael Noll</dd>
          <dt>Hypersphere (excerpt)</dt>
          <dd>1965, A. Michael Noll</dd>
          <dt>Computer-Generated Ballet (excerpt)</dt>
          <dd>1965, A. Michael Noll</dd>
          <dt>Hummingbird (excerpt)</dt>
          <dd>1967, Charles A. Csuri and James P. Shaffer</dd>
          <dt>Poemfield No. 3</dt>
          <dd>1967, Stan VanDerBeek and Kenneth Knowlton</dd>
          <dt>Catalog</dt>
          <dd>1961, John Whitney</dd>
          <dt>Lapis</dt>
          <dd>1966, James Whitney</dd>
          <dt>Permutations</dt>
          <dd>1968, James Whitney</dd>
        </dl>
        <p>Which comes from <a href='http://www.movingimage.us/exhibitions/2016/03/25/detail/computer-films-of-the-1960s/'>This exhibit</a> at the <a href='http://www.movingimage.us/'>Museum of the Moving Image</a></p>
      </div>
    }
  }
}
