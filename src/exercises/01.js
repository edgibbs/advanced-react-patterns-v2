// Building the toggle component

import React from 'react'; // It takes an `onClick` and an `on` prop
// 🐨 uncomment this import to get the switch component.
import { Switch } from '../switch';

class Toggle extends React.Component {
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }
}
// Don't make changes to the Usage component. It's here to show you how your
function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return <Toggle onToggle={onToggle} />;
}
Usage.title = 'Build Toggle';
export { Toggle, Usage as default };
