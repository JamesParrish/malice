import * as React from 'react';
import AttackPicker from './Pickers/AttackPicker';
import DecisivePicker from './Pickers/DecisivePicker';
import { Charm } from './Models/Charm';
import { getCharms } from './CharmImporter';
import Results from './Results';
import { AttackType } from './AttackType';

interface Props {
}

interface State {
  charms: Charm[];
  action: AttackType;
}

class Malice extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);

    const charms: Charm[] = getCharms();

    this.state = {
        charms: charms,
        action: AttackType.Any,
    };

    this.setAction = this.setAction.bind(this);
  }

  getCharms() {
    return 
  }

  actionIsDecisive() {
    return this.state.action === AttackType.Decisive ||
    this.state.action === AttackType.Disarm ||
    this.state.action === AttackType.Damage;
  }

  setAction(e: AttackType) {
    this.setState({
      action: e,
    });
  }
    
    render() {
      return (
        <main>
            <h1>O Captain, my Captain</h1>
            <h2>How shall I defeat my enemies today?</h2>
            <div className="content">
              <AttackPicker setAction={this.setAction}/>
                {this.actionIsDecisive() && 
                <div><div className="centralise">and...</div>
                <DecisivePicker setAction={this.setAction}/></div>}
              <Results action={this.state.action}
                charms={this.state.charms}/>
            </div>
        </main>
      );
    }
  }

  export default Malice;