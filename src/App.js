import React from 'react';
import Add from './components/add';
import List from './components/list';
import Pay from './components/pay';
import Button from './components/core/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Card from './components/product/Card';


class App extends React.Component {

  //---------------------------//
//---------CONSTRUCTOR-----------//
  //---------------------------//

  constructor(props) {
    super(props);

    this.state = {
      price: 1,
      product:'',
      activeTab: "add",
      items: [],
      tabIndex: 0
    }
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);

  }

  //---------------------------//
//-----------FUNCTIONS-----------//
  //---------------------------//

  onChangeProduct(product) {
    console.log('>> ApponChangeProduct()');
    console.log('onChangeProduct/product: ', product);
    this.setState({
      product,
    });
    console.log('<< ApponChangeProduct()');
  }

  onChangePrice(price) {
    console.log('>> ApponChangePrice()');
    console.log('onChangePrice/price: ', price+ " €");
    this.setState({
      price,
    });
    console.log('<< ApponChangePrice()');
  }

  onAdd() {
    console.log('>> ApponAdd()');
    const item = {
      product: this.state.product,
      price: this.state.price
    };
    console.log("#1 items: ", item)
    const newItems = this.state.items;
    console.log("#2 newItems: ", newItems);
    newItems.push(item);
    console.log("#3 newItems: ", newItems);

    this.setState({
      items: newItems
    });  
    console.log('<< ApponAdd()');
  }

  onClickTabList() {
    console.log('>> ApponClickTabList()');
    this.setState({
      activeTab: "list"
    })
    console.log('<< ApponClickTabList()');
  }

  onClickTabAdd() {
    console.log(">> ApponClickTabAdd()");
    this.setState({
      activeTab: "add"
    })
    console.log("<< ApponClickTabAdd()");
  }

  onClickTabPay() {
    console.log(">> ApponClickTabPay()");
    this.setState({
      activeTab: "pay"
    })
    console.log("<< ApponClickTabPay()");
  }

  //---------------------------//
//-----------RENDER-------------//
  //---------------------------//

  render() {
    console.log("AppRender()");
    return(
      <div 
      className=""
      style={{
        position: "absolute",
        top:"50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        
      }}
      >  
      <div className="text-center">
      <h2>Mysterious Drogs Store</h2>
        <div className="d-inline-flex ">
          <Button onClick={this.onClickTabAdd}>Add</Button>
          <Button onClick={this.onClickTabList}>List</Button>
          <Button onClick={this.onClickTabPay}>Pay</Button>
        </div>
        <div>
          {this.state.activeTab === "list" && <List
           items={this.state.items}/>}

          {this.state.activeTab === "add" && <Add 
              product={this.state.product}
              price={this.state.price}
              onChangePrice={this.onChangePrice}
              onChangeProduct={this.onChangeProduct}        
              min={1}
              max={20}
              onAdd={this.onAdd}
          />}

          {this.state.activeTab === "pay" && <Pay/>}
          <Card/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;