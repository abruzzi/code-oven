import { IMenuItem } from "./IMenuItem";
import { RemoteMenuItem } from "./RemoteMenuItem";
import { NoDiscountStrategy } from "./strategy/NoDiscountStrategy";
import { IDiscountStrategy } from "./strategy/IDiscountStrategy";

export class AbstractMenuItem implements IMenuItem {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _type: string;
  private readonly _price: number;
  private readonly _ingredients: string[];
  private _discountStrategy: IDiscountStrategy;

  constructor(item: RemoteMenuItem) {
    this._id = item.id;
    this._name = item.name;
    this._price = item.price;
    this._type = item.category;
    this._ingredients = item.ingredients;
    this._discountStrategy = new NoDiscountStrategy();
  }

  static from(item: IMenuItem): RemoteMenuItem {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.type,
      ingredients: item.ingredients,
    };
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get type() {
    return this._type.toLowerCase();
  }

  get ingredients() {
    return this._ingredients.slice(0, 3);
  }

  set discountStrategy(strategy: IDiscountStrategy) {
    this._discountStrategy = strategy;
  }

  calculateDiscount() {
    return this._discountStrategy.calculate(this.price);
  }
}
