const ListButtons = ({ onClick }) => {
  return (
    <div className="btn-container">
      <button id="All" onClick={onClick}>
        All
      </button>
      <button id="breakfast" onClick={onClick}>
        breakfast
      </button>
      <button id="lunch" onClick={onClick}>
        lunch
      </button>
      <button id="shakes" onClick={onClick}>
        snakes
      </button>
      <button id="dinner" onClick={onClick}>
        dinner
      </button>
    </div>
  );
};

export default ListButtons;
