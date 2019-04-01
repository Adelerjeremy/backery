import React from 'react';

class Button extends React.Component {
    state = {
        isSelected: false,
      };
    render() {
        
        return (
            <div>
                <button
                className="btn btn-outline-success"
                 onClick={()=> {
                    this.props.onClick()
                    
                    this.setState({
                        isSelected:  this.state.isSelected,
                      });
                    }}
                  style={{
                    backgroundColor: this.state.isSelected ? '#fafafa' : '#fafafa',
                    color: this.state.isSelected ? "#242424" : "#1b1b1b"
                   
                }}>
                    {this.props.children}
                </button>

            </div>
        );
    }
}

export default Button;