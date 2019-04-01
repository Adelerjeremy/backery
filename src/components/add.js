import React from 'react';
// import Button from './core/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Add extends React.Component {
    state = {
        isClicked: false,
      };
    render() {
        console.log("Addrender()");
        return (
            <div>
                <h4>PAGE ADD</h4>
                    <input className="col-8"
                        type="text"
                        value={this.props.product}
                        onChange={(evt) => {
                        this.props.onChangeProduct(evt.target.value); 
                        }} />


                        <button 
                            className="btn btn-success"
                            onClick={() => {
                                console.log('Add/button/onClick()');
                                this.props.onAdd();
                                console.log('Add/button/this', this);
                                console.log('Add/button/this.props', this.props);
                            }}>
                          ADD
                        </button>


                <p className="col-12 text-center">{this.props.num}</p>

                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={(val) =>
                         this.props.onChangePrice(val)}
                />
                
            </div>
        );
    }
}

export default Add;