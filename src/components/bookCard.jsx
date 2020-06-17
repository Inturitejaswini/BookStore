
import React, { Component } from 'react';
import data from "../assets/bookDetails.json";
import { createMuiTheme, Divider, Button, MuiThemeProvider, Card } from '@material-ui/core';
import AddToCard from './addToCart';
const theme = createMuiTheme({
    overrides: {

    },
})


class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            book_Details: [],
            count: "",
            compareimage: "",
            comparingimage: []
        }
        this.addcart = this.addcart.bind(this)
    }
    addcart(value1, value2) {
        var t = value2
        this.state.comparingimage.push(t)
        this.setState({
            count: value1,
            compareimage: this.state.compareimage
        })
        localStorage.setItem('compareimage', this.state.comparingimage)
        this.props.cartchange(value1, value2)
    }
    render() {
        return (
            <div className="cardstyle">
                {
                    this.props.book_Details.map((books, id) => {
                        return (
                            <div key={id} className="card-div">
                                <MuiThemeProvider theme={theme}>
                                    <Card className="bookcard" style={{
                                        boxShadow: "0px 0px 0px 1px lightgrey",
                                        backgroundColor: "#eeeeef",
                                        borderRadius: "0px"
                                    }}>
                                        <div className="bookdetails">
                                            <div>
                                                <a href={books.url}>
                                                    <img src={books.logo} className="image" />
                                                </a>
                                            </div>
                                            < div><Divider type='horizontal' /></div>
                                            <div style={{ backgroundColor: "white" }} className="carddown">
                                                {books.roles.map(function (role, id) {
                                                    return <div key={id} id="cardtext">
                                                        <h5>{role.title}</h5>
                                                        <div className="authorname">
                                                            <span>{role.authorname}</span>
                                                        </div>
                                                        <div className="price">
                                                            <p>{role.price}</p>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <AddToCard logo={books.logo} addtocarthandling={this.addcart}></AddToCard>
                                    </Card>
                                </MuiThemeProvider>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default BookCard;
