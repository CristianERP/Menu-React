import { MENU } from "../../shared/dishes";
import DishDetail from "../DishDetail/DishDetail";

const ListDish = ({ category }) => {
  let dishes =
    category === "All"
      ? MENU.map((dish) => <DishDetail key={dish.id} {...dish} />)
      : MENU.filter((dish) => dish.category === category).map((dish) => (
          <DishDetail key={dish.id} {...dish} />
        ));

  return <div className="dish-all">{dishes}</div>;
};

export default ListDish;
