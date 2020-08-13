import * as React from 'react';
import { ActionType } from '../ActionType';

interface Props {
    setAction: Function;
}

interface State {
}

class DecisivePicker extends React.Component<Props, State> {
    render() {
      return (
        <div className="text-align-centre">
            <button onClick={e => this.props.setAction(ActionType.Damage)}>I want to hurt someone</button>
            <button onClick={e => this.props.setAction(ActionType.Disarm)}>I want to disarm someone</button>
            <button onClick={e => this.props.setAction(ActionType.Decisive)}>I want to see all decisive charms</button>
        </div>
      );
    }
  }

  export default DecisivePicker;