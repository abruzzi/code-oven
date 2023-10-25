import { AbstractMenuItem } from "./AbstractMenuItem";

export class DefaultMenuItem extends AbstractMenuItem {
  calculateDiscount(): number {
    return 0;
  }
}
