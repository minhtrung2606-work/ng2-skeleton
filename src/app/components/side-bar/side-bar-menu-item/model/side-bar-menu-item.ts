export class SideBarMenuItem {
  private active: boolean;
  private label: string;
  private icon: string;
  private count: number;
  private subMenuItemList: Array<SideBarMenuItem>;

  constructor(label: string, icon?: string, count?: number) {
    this.label = label;
    this.icon = icon;
    this.count = count;
    this.subMenuItemList = [];
  }

  isActive(): boolean {
    return this.active;
  }

  setActive(active: boolean): SideBarMenuItem {
    this.active = active;
    return this;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): SideBarMenuItem {
    this.label = label;
    return this;
  }

  getIcon(): string {
    return this.icon;
  }

  setIcon(icon: string): SideBarMenuItem {
    this.icon = icon;
    return this;
  }

  isStatistic(): boolean {
    return !isNaN(this.count);
  }

  getCount(): number {
    return this.count;
  }

  setCount(count: number): SideBarMenuItem {
    this.count = count;
    return this;
  }

  getSubMenuItemList(): Array<SideBarMenuItem> {
    return this.subMenuItemList;
  }

  addSubMenuItem(subMenuItem: SideBarMenuItem): SideBarMenuItem {
    this.subMenuItemList.push(subMenuItem);
    return this;
  }

  emptySubMenuItem(): SideBarMenuItem {
    this.subMenuItemList = [];
    return this;
  }

  equals(o: any): boolean {
    if (!o || !(o instanceof SideBarMenuItem)) {
      return false;
    } else if (this === o) {
      return true;
    } else if (this.label === o.getLabel()) {
      return  true;
    } else {
      return false;
    }
  }
}
