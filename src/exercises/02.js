// Compound Components

import React from 'react';
import { Switch } from '../switch';

class Toggle extends React.Component {
  // you can create function components as static properties!
  // for example:
  // static Candy = (props) => <div>CANDY! {props.children}</div>
  // Then that could be used like: <Toggle.Candy />
  // This is handy because it makes the relationship between the
  // parent Toggle component and the child Candy component more explicit
  // 🐨 You'll need to create three such components here: On, Off, and Button
  //    The button will be responsible for rendering the <Switch /> (with the right props)
  // 💰 Combined with changes you'll make in the `render` method, these should
  //    be able to accept `on`, `toggle`, and `children` as props.
  //    Note that they will _not_ have access to Toggle instance properties
  //    like `this.state.on` or `this.toggle`.
  state = { on: false };
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  );
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    );
  }
}
function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}
Usage.title = 'Compound Components';
export { Toggle, Usage as default };
