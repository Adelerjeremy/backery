import React from 'react';
import Button from './core/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Add extends React.Component {
    render() {
        return (
            <div>
                <form  className="box">

                    <input className="col-8"
                        type="text"
                        value={this.props.name}
                        onChange={(evt) => {
                        this.props.onChange(evt.target.value); 
                        }} />

                        <button className="btn btn-primary col-4"
                            onClickTabAdd={() => {
                                this.setState({
                                isClicked: !this.state.isClicked,
                            }) 
                        }}>
                          ADD
                        </button>

                </form>  

                <p className="col-12 text-center">{this.props.num}</p>

                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={(val) =>
                         this.props.onChangeFn(val)}
                />
                
            </div>
        );
    }
}

export default Add;