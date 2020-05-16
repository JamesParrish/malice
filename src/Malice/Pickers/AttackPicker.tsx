import * as React from 'react';
import { AttackType } from '../AttackType';

interface Props {
    setAction: Function;
}

interface State {
}

class AttackPicker extends React.Component<Props, State> {
    render() {
      return (
        <div className="centralise">
            <button onClick={e => this.props.setAction(AttackType.Decisive)}>I am winning initiative</button>
            <button onClick={e => this.props.setAction(AttackType.Withering)}>I am not winning initiative</button>
            <button onClick={e => this.props.setAction(AttackType.Any)}>I want to see all charms</button>
        </div>
      );
    }
  }

  export default AttackPicker;