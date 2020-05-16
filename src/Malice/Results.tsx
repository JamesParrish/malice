import * as React from 'react';
import { Charm } from './Models/Charm';
import ResultRow from './ResultRow'
import { AttackType } from './AttackType'

interface Props {
    charms: Charm[];
    action: AttackType;
}

interface State {
}

class Results extends React.Component<Props, State> {
    isCharmValid(charm: Charm): boolean {
        return (this.props.action === AttackType.Decisive && (charm.appliesToDamage || charm.appliesToDisarm) ||
            (this.props.action === AttackType.Damage && charm.appliesToDamage ||
            (this.props.action === AttackType.Disarm && charm.appliesToDisarm ||
            (this.props.action === AttackType.Withering && charm.appliesToWithering) ||
            this.props.action === AttackType.Any
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