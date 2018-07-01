import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
    state = {
        quote: "",
        author: ""
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote = () => {

        axios.get('https://random-quote-generator.herokuapp.com/api/quotes/random')
            .then(response => {
                console.log(response.data);
                let quote, author;
                quote = response.data.quote
                author = response.data.author
                this.setState({ quote, author })
            })
            .catch(err => {
                console.log("error", err)
            })
    }

    tweetQuote = () => {
        console.log('tweet', this.state)
        let tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quote}\n -${this.state.author}`
        window.open(tweetUrl, "", "width=500,height=300");
    }

    render() {
        console.log("tatti", this.state)
        // let rndmQuote;
        // if (!this.state.quote) {
        //     rndmQuote = <h3>loading..</h3>
        // }

        return (
            <div className="container">
                <div className="quote-card">
                    <h2><strong>{this.state.quote}</strong></h2>
                    <h4><i>&mdash; {this.state.author}</i></h4>
                </div>
                <button className="quote" onClick={this.getQuote}>Get Quote</button>
                <button className="fa fa-twitter" onClick={this.tweetQuote}> Tweet</button>
            </div>
        );
    }
}

export default Quote;