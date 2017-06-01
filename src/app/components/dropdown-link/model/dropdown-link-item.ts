export class DropdownLinkItem {
  constructor(private label:string) { }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): DropdownLinkItem {
    this.label = label;
    return this;
  }
}
