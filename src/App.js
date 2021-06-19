import './App.css';
import React from 'react';
import { MENU } from './shared/dishes';


class DishDetail extends React.Component{

  render(){
    let dishes;
    if(this.props.category === 'All'){
      dishes = MENU.map(dish =>{
        return(
        <div key={dish.id} className='dish'>
          <img src={dish.img} className="dish-img" alt={dish.title}/>
          <div>
            <header>
              <h3>{dish.title}</h3>
              <h3 className="price">$ {dish.price}</h3>
            </header>
            <p className="description">{dish.desc}</p>
          </div>
        </div>
        )
      })
    }else {
      dishes = MENU
      .filter(dish => dish.category === this.props.category)
          .map(dish => {
            return(
              <div key={dish.id} className='dish'>
                <img src={dish.img} className="dish-img" alt={dish.title}/>
                <div>
                  <header>
                    <h3>{dish.title}</h3>
                    <h3 className="price">$ {dish.price}</h3>
                  </header>
                  <p className="description">{dish.desc}</p>
                </div>
              </div>
            )
          })
    }
    return(
      <div className="dish-all">
        {dishes}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: 'All'
    }
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(e){
    this.setState({
      category: e.target.id
    })
  }

  render(){
    return (
      <div>
        <div className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button id="All" onClick={this.setCategory}>All</button>
          <button id="breakfast" onClick={this.setCategory}>breakfast</button>
          <button id="lunch" onClick={this.setCategory}>lunch</button>
          <button id="shakes" onClick={this.setCategory}>snakes</button>
          <button id="dinner" onClick={this.setCategory}>dinner</button>
        </div>
        <section>
          <DishDetail category={this.state.category}/>
        </section>
      </div>
    );
  }
}

export default App;
