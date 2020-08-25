import React from 'react';
import './Hamburger.css';

const Hamburger = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div class={`hamburger ${open ? 'open' : ''}`} onClick={() => toggle()}>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default Hamburger;