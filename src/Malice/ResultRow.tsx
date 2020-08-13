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
        if (charm.moteCost != 1) {
            cost = cost + "s";
        }
        if (charm.willpowerCost > 0) {
            cost = cost + " and " + charm.willpowerCost + " willpower";
        }
        if (charm.initiativeCost > 0) {
            cost = cost + " and " + charm.initiativeCost + " initiative";
        }

      return (
        <div onClick={e => this.toggleFullDetails()} className="charm">
            <div>
                <div>
                    <div className="c-4-12">{charm.name}</div>
                    <div className="c-4-12 text-align-centre">{charm.ability}</div>
                    <div className="c-4-12 text-align-right">{cost}</div>
                </div>
                {this.state.showFullDetails &&
                    <div>
                        <div className="c-6-12">{charm.type}</div>
                        <div className="c-6-12 text-align-right">P{charm.pageReference}</div>
                    </div>
                }
                <div>{charm.summary}</div>
                {this.state.showFullDetails &&
                    <div>{charm.details}</div>
                
                }
            </div>
        </div>
      );
    }
  }

  export default ResultRow;