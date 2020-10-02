export class Charm {
    id: number;
    name: string;
    ability: string;
    type: string;
    pageReference: number;
    summary: string;
    details: string;
    appliesToWithering: boolean;
    appliesToDamage: boolean;
    appliesToDisarm: boolean;
    appliesToDodge: boolean;
    appliesToParry: boolean;
    appliesToShips: boolean;
    moteCost: number;
    willpowerCost: number;
    initiativeCost: number;
    showFullDetails: boolean;
}