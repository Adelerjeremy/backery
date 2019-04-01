import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class List extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
};


    render() {

        const itemProductList = this.props.items.map((item, index) => {
            return (
                <p key={index}>{item.product}</p>
            )
        });
        
        const itemPriceList = this.props.items.map((item, index) => {
            return (
                <p 
                 key={index}>{item.price} €</p>
            )
        });


        const displayPosts = (

            <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
            <TabList>
                <Tab>Kart list</Tab>
            </TabList>
               <TabPanel>
                   
               <tbody>
                    <tr>
                        <td>{itemProductList} </td>
                        <td>{itemPriceList}</td>
                    </tr>
                </tbody>

               </TabPanel>
            </Tabs>
    );

        return (
            <div>
                {displayPosts}
            </div>

        );
    }
}

export default List;