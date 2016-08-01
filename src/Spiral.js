import React from 'react';
import ReactDOM from 'react-dom';

export default class Sprial extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.startAngle = 0;
    this.num = 200;
    this.particleDist = 500;

    for (let i = 0; i < this.num; i++) {
      this.particles.push({
        x: 0,
        y: 0,
        radius: 5,
      });
    }
  }

  componentDidMount() {
    this.ctx = ReactDOM.findDOMNode(this.canvas).getContext('2d');
    requestAnimationFrame(this.update.bind(this));
  }

  update(time) {
    requestAnimationFrame(this.update.bind(this));
    const canvas = ReactDOM.findDOMNode(this.canvas);

    this.particles = this.particles.map((particle, i) => {
      const radius = this.particleDist * i / this.particles.length;
      const theta = this.startAngle * i;


      return {
        ...particle,
        x: (canvas.width / 2) + radius * Math.cos(3 * theta),
        y: (canvas.height / 2) + radius * Math.sin(3 * theta),
      };
    });

    this.startAngle += 0.00010;

    this.draw();
  }

  draw() {
    const canvas = ReactDOM.findDOMNode(this.canvas);
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.fillStyle = "blue";
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, false);
      this.ctx.fill();
    });
  }

  render() {
    return <canvas
      ref={ref => this.canvas = ref}
      width='1000'
      height='1000'
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  }
}
