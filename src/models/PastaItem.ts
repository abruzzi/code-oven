import { AbstractMenuItem } from "./AbstractMenuItem";
import { RemoteMenuItem } from "./RemoteMenuItem";

export class PastaItem extends AbstractMenuItem {
  private readonly servingSize: string;

  constructor(item: RemoteMenuItem, servingSize: string) {
    super(item);
    this.servingSize = servingSize;
  }
}
