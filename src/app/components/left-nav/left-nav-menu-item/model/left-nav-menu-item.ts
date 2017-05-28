export class LeftNavMenuItem {
  private primary: boolean;
  private statistic: boolean;
  private startIcon: string;
  private label: string;
  private endIcon: string;
  private count: number;

  constructor(label: string, isPrimary = true, statistic = false, startIcon?: string, endIcon?: string, count = 0) {
    this.primary = isPrimary;
    this.statistic = statistic;
    this.startIcon = startIcon;
    this.label = label;
    this.endIcon = endIcon;
    this.count = count;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): LeftNavMenuItem {
    this.label = label;
    return this;
  }

  isPrimary(): boolean {
    return this.primary;
  }

  setPrimary(primary: boolean): LeftNavMenuItem {
    this.primary = primary;
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
}
