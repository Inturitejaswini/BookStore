import React, { Component } from 'react';
import { createMuiTheme, Divider, Button } from '@material-ui/core';
class AddToCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            book_Details: []
        }
    }
    addtocart(id) {

        // window.open('/addToCard')
        this.setState({
            open: !this.state.open
        });
        console.log("addtocart button", this.state.open)
    }

    render() {

        return (
            <div>
                {!this.state.open ? (
                    <div className="form-group">
                        <Button type="tagbtn" id="tag" onClick={() => this.addtocart()}>
                            <div className="texttag"> ADD TO BAG</div>
                        </Button>
                        <Button className="whishlistbtn" >
                            <text className="whishtext">WHISHLIST</text>
                        </Button>
                    </div>
                ) : (
                        <div className="assaa">
                            <Button onClick={() => this.addtocart()} id="addbutton">
                                <div className="added">added to bag</div>
                            </Button>
                        </div>
                    )}
            </div>
        );
    }
}

export default AddToCard;