import * as React from 'react';
import { Charm } from './Models/Charm';

interface Props {
    charm: Charm;
}

interface State {
    showFullDetails: boolean;
}

class ResultRow extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
    
        this.state = {
            showFullDetails: false,
        };
    }

    toggleFullDetails() {
        this.setState({
            showFullDetails: !this.state.showFullDetails,
        });
    }

    render() {
        const charm = this.props.charm;

        let cost = "Costs " + charm.moteCost + " mote"
        if (charm.moteCost > 1) {
            cost = cost + "s";
        }
        if (charm.willpowerCost > 0) {
            cost = cost + " and " + charm.willpowerCost + " willpower";
        }

      return (
        <div onClick={e => this.toggleFullDetails()} className="charm">
            <div>
                <div className="c-4-12">{charm.name}</div>
                <div className="c-4-12">{cost}</div>
                <div className="c-4-12">See P{charm.pageReference} for full details</div>
                <div>{charm.summary}</div>
            </div>
            {this.state.showFullDetails &&
            <div>
                <div>{charm.details}</div>
            </div>}
        </div>
      );
    }
  }

  export default ResultRow;