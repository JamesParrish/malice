import * as React from 'react';
import { ActionType } from '../ActionType';

interface Props {
    setAction: Function;
}

interface State {
}

class AttackPicker extends React.Component<Props, State> {
    render() {
      return (
        <div className="text-align-centre">
            <button onClick={e => this.props.setAction(ActionType.Decisive)}>I am winning initiative</button>
            <button onClick={e => this.props.setAction(ActionType.Withering)}>I am not winning initiative</button>
            <button onClick={e => this.props.setAction(ActionType.Attack)}>I want to see all attack charms</button>
        </div>
      );
    }
  }

  export default AttackPicker;