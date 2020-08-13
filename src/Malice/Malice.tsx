import * as React from 'react';
import ActionPicker from './Pickers/ActionPicker';
import AttackPicker from './Pickers/AttackPicker';
import DecisivePicker from './Pickers/DecisivePicker';
import { Charm } from './Models/Charm';
import { getCharms } from './CharmImporter';
import Results from './Results';
import { ActionType } from './ActionType';

interface Props {
}

interface State {
  charms: Charm[];
  action: ActionType;
}

class Malice extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);

    const charms: Charm[] = getCharms();

    this.state = {
        charms: charms,
        action: ActionType.Any,
    };

    this.setAction = this.setAction.bind(this);
  }

  getCharms() {
    return 
  }

  actionIsDecisive() {
    return this.state.action === ActionType.Decisive ||
    this.state.action === ActionType.Disarm ||
    this.state.action === ActionType.Damage;
  }

  actionIsAttack() {
    return this.state.action === ActionType.Attack ||
    this.state.action === ActionType.Decisive ||
    this.state.action === ActionType.Disarm ||
    this.state.action === ActionType.Damage ||
    this.state.action === ActionType.Withering;
  }

  setAction(e: ActionType) {
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
              <ActionPicker setAction={this.setAction}/>
              {this.actionIsAttack() &&
                <div>
                  <div className="text-align-centre">and...</div>
                  <AttackPicker setAction={this.setAction}/>
                  {this.actionIsDecisive() && 
                    <div>
                      <div className="text-align-centre">and...</div>
                      <DecisivePicker setAction={this.setAction}/>
                    </div>
                  }
                </div>
              }
              <Results action={this.state.action}
                charms={this.state.charms}/>
            </div>
        </main>
      );
    }
  }

  export default Malice;