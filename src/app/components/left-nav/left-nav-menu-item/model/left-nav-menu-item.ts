export class LeftNavMenuItem {
  private active: boolean;
  private statistic: boolean;
  private startIcon: string;
  private label: string;
  private endIcon: string;
  private count: number;
  private subMenuItemList: Array<LeftNavMenuItem>;

  constructor(label: string, active = false, statistic = false, startIcon?: string, endIcon?: string, count = 0) {
    this.active = active;
    this.statistic = statistic;
    this.startIcon = startIcon;
    this.label = label;
    this.endIcon = endIcon;
    this.count = count;
    this.subMenuItemList = [];
  }

  isActive(): boolean {
    return this.active;
  }

  setActive(active: boolean): LeftNavMenuItem {
    this.active = active;
    return this;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): LeftNavMenuItem {
    this.label = label;
    return this;
  }

  isStatistic(): boolean {
    return this.statistic;
  }

  setStatistic(statistic: boolean): LeftNavMenuItem {
    this.statistic = statistic;
    return this;
  }

  getStartIcon(): string {
    return this.startIcon;
  }

  setStartIcon(startIcon: string): LeftNavMenuItem {
    this.startIcon = startIcon;
    return this;
  }

  getEndIcon(): string {
    return this.endIcon;
  }

  setEndIcon(endIcon: string): LeftNavMenuItem {
    this.endIcon = endIcon;
    return this;
  }

  getCount(): number {
    return this.count;
  }

  setCount(count: number): LeftNavMenuItem {
    this.count = count;
    return this;
  }

  getSubMenuItemList(): Array<LeftNavMenuItem> {
    return this.subMenuItemList;
  }

  addSubMenuItem(subMenuItem: LeftNavMenuItem): LeftNavMenuItem {
    this.subMenuItemList.push(subMenuItem);
    return this;
  }
}
