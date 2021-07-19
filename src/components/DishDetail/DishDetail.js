const DishDetail = ({ id, img, price, desc, title, category }) => {
  return (
    <div key={id} className="dish">
      <img src={img} className="dish-img" alt={title} />
      <div>
        <header>
          <h3>{title}</h3>
          <h3 className="price">$ {price}</h3>
        </header>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};

export default DishDetail;
