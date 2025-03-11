import { ReactNode } from "react";
import "./List.css";

interface Item {
  id: string;
  title: string;
  description: ReactNode;
  image: string;
}

interface ListItem {
  item: Item;
  ltr: boolean;
}

interface ListProps {
  items: Item[];
}

function ListItem({ item, ltr }: ListItem) {
  return (
    <div className={`list-item ${ltr ? "list-item--ltr" : "list-item--rtl"}`}>
      <div className="list-item__content">
        <div className="list-item__wrapper">
          <div className="list-item__title">{item.title}</div>
          <div className="list-item__description">{item.description}</div>
        </div>
      </div>
      <div className="list-item__image">
        <img src={item.image} alt="" />
      </div>
    </div>
  );
}

function List({ items }: ListProps) {
  return (
    <div className="list">
      {items.map((item, index) => (
        <ListItem key={item.id} item={item} ltr={index % 2 === 0} />
      ))}
    </div>
  );
}

export default List;
