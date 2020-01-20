export class DashboardTile {
  // tile name
  public name: string;

  // Number which defined tile position
  // across other tiles
  public position: number;

  // Tile size - space in grid that is occupied 
  // defined in 12 columns grid
  private _size: number;
  public get size() { return this._size; }
  public set size(value) { this._size = value }


  constructor(tile) {
    this.name = tile.name;
    this.position = tile.position;
    this.size = tile.size;
  }


}