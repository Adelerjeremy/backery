import React from 'react';
import Add from './components/add';
import List from './components/list';
import Pay from './components/pay';
import Button from './components/core/Button';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 1,
      activeTab: true
      // items: []
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeActiveTab = this.onChangeActiveTab.bind(this);
    // this.onChangeItems = this.onChangeItems.bind(this);
  }

  onChangeName(name) {  
    this.setState({
      name
    });
  }
  
  onChangePrice(value) {
    console.log("onChangePrice value: ", value);
    this.setState({price:value});
  }

  // onChangeName(name) {  
  //   this.setState({
  //     name
  //   });
  // }

  onChangeActiveTab() {
    this.setSate ({
      add: true,
      list: true,
      pay: true

    })
    console.log('')
  }

  render() {
    return(
      <div className="container">  
      <div className="row">
        <div className="col-12 d-inline-flex">
          <Button onChangeActiveTab={this.state.add} >Add</Button>

          <Button onChangeActiveTab={this.state.list}>List</Button>
          <Button onChangeActive={this.onChangeActiveTab}>Pay</Button>
        </div>
        <List/>
        <Pay/>

        <Add
        name={this.state.name}
        num={this.state.price + " €"}
        onChange={this.onChangeName}
        min={1}
        max={20}
        onChangeFn={this.onChangePrice}
        
        />
      </div>
    </div>
    );
  }
}

export default App;