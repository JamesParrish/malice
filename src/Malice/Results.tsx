import * as React from 'react';
import { Charm } from './Models/Charm';
import ResultRow from './ResultRow'
import { ActionType } from './ActionType'

interface Props {
    charms: Charm[];
    action: ActionType;
}

interface State {
}

class Results extends React.Component<Props, State> {
    isCharmValid(charm: Charm): boolean {
        return (this.props.action === ActionType.Attack && (charm.appliesToDamage || charm.appliesToDisarm || charm.appliesToWithering)) ||
            (this.props.action === ActionType.Decisive && (charm.appliesToDamage || charm.appliesToDisarm)) ||
            (this.props.action === ActionType.Damage && charm.appliesToDamage) ||
            (this.props.action === ActionType.Disarm && charm.appliesToDisarm) ||
            (this.props.action === ActionType.Withering && charm.appliesToWithering) ||
            (this.props.action === ActionType.Evade && (charm.appliesToDodge || charm.appliesToParry)) ||
            (this.props.action === ActionType.Ship && charm.appliesToShips) ||
            this.props.action === ActionType.Any;
    }

    render() {
        console.log(this.props.action);
        const charms: Charm[] = this.props.charms;

        const rows: JSX.Element[] = [];

        if (this.props.charms) {
            this.props.charms.forEach(charm => {   
                if (this.isCharmValid(charm))
                {
                    console.log(charm)
                    rows.push(
                        <ResultRow charm={charm} key={charm.id}></ResultRow>
                    );
                }
            });
        }

      return (
        <div>
            {rows}
        </div>
      );
    }
  }

  export default Results;