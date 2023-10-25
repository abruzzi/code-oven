import { useMenuItems } from "./useMenuItems";
import React, { useState } from "react";
import { IMenuItem } from "./models/IMenuItem";
import { PizzaMenuItem } from "./models/PizzaMenuItem";
import { PastaItem } from "./models/PastaItem";
import { AbstractMenuItem } from "./models/AbstractMenuItem";

export const MenuList = ({
  onAddMenuItem,
}: {
  onAddMenuItem: (item: IMenuItem) => void;
}) => {
  const { menuItems } = useMenuItems();
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState<string>("small");

  const handleAddMenuItem = (item: IMenuItem) => {
    console.log(item);
    const remoteItem = AbstractMenuItem.from(item);
    if (item.type === "pizza") {
      onAddMenuItem(new PizzaMenuItem(remoteItem, 3));
    } else if (item.type === "pasta") {
      onAddMenuItem(new PastaItem(remoteItem, "large"));
    } else {
      onAddMenuItem(item);
    }
  };

  return (
    <div data-testid="menu-list" className="menu-list">
      <ol>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <div>
              {item.ingredients.map((ingredient) => (
                <span>{ingredient}</span>
              ))}
            </div>
            <button onClick={() => handleAddMenuItem(item)}>Add</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
