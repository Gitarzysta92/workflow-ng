export class DashboardTile {
  id: number;
  name: string;
  sequence: number;
  size: string;
  component: Function;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sequence = data.sequence;
    this.size = data.size;
    this.component = data.component;
  }

}