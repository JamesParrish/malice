import * as React from 'react';
import { ActionType } from '../ActionType';

interface Props {
    setAction: Function;
}

interface State {
}

class ActionPicker extends React.Component<Props, State> {
    render() {
      return (
        <div className="text-align-centre">
            <button onClick={e => this.props.setAction(ActionType.Attack)}>I am attacking</button>
            <button onClick={e => this.props.setAction(ActionType.Dodge)}>I am under attack</button>
            <button onClick={e => this.props.setAction(ActionType.Any)}>I want to see all charms</button>
        </div>
      );
    }
  }

  export default ActionPicker;