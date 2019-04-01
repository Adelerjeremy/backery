import React from 'react';
import specimen from "../../specimen.jpg";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            source: specimen,
        }

        // this.onChangeSource = this.onChangeSource.bind(this)
    };

    componentDidMount() {
        console.log(">> componentDidMount()")
        this.fetchSource(this.state.source);
        console.log("<< componentDidMount()")
    }

    fetchSource(source) {
        fetch(`http://digitous.konexio.eu/exercises/bakery/api/?q=${this.props.product}`)
        .then(res => res.json())
        .then(data => {
          this.setState ({
            source: data[0].source,
          });
        })
    }


    // componentDidMount() {
    //     console.log('#componentDidMount')
    //     this.fetchCountry(this.state.country)
    
    //   }
    
    //   fetchCountry(country) {
    
    //     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState ({
    //         country,
    //         city: data[0].capital,
    //         flag: data[0].flag,
    //       })
    //     })
    //   }
    render() {
        return(
            <div>
                <img src="{source}" alt="img"></img>
            </div>
        );
    }
}

export default Card;