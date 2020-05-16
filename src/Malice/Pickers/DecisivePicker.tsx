import * as React from 'react';
import { AttackType } from '../AttackType';

interface Props {
    setAction: Function;
}

interface State {
}

class DecisivePicker extends React.Component<Props, State> {
    render() {
      return (
        <div className="centralise">
            <button onClick={e => this.props.setAction(AttackType.Damage)}>I want to hurt someone</button>
            <button onClick={e => this.props.setAction(AttackType.Disarm)}>I want to disarm someone</button>
            <button onClick={e => this.props.setAction(AttackType.Decisive)}>I want to see all decisive charms</button>
        </div>
      );
    }
  }

  export default DecisivePicker;