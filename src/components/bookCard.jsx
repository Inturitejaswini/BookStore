
import React, { Component } from 'react';
import data from "../assets/bookDetails.json";
import Card from '@material-ui/core/Card';
import { createMuiTheme, Divider, Button } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: "0px"
            }
        },
    },
})


class BookCard1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    handleChange() {
        // window.open('/addToCard')
    }
    render() {
        return (
            <div className="cardstyle">
                {data.book_Details.map((books, i) => {
                    return (
                        <div key={i} className="card-div">
                            <MuiThemeProvider theme={theme}>
                                <Card className="bookcard" style={{ backgroundColor: "#eeeeef", marginTop: "16px" }}>
                                    <div className="bookdetails">
                                        <div>
                                            <a href={books.url}>
                                                <img src={books.logo} className="image" />
                                            </a>
                                        </div>
                                        < div><Divider type='horizontal' /></div>
                                        <div style={{ backgroundColor: "white" }} className="carddown">
                                            {books.roles.map(function (role, i) {
                                                return <div key={i} id="cardtext">
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
                                    <div >
                                        {!this.state.open ? (
                                            <div className="form-group">
                                            <Button type="tagbtn" id="tag" onClick={() => this.handleChange()}>
                                                <div className="texttag"> ADD TO BAG</div>
                                            </Button>
                                             <Button className="whishlistbtn">
                                             <text className="whishtext">WHISHLIST</text>
                                            </Button>
                                            </div>
                                        ):(
                                            <Button onClick={() => this.handleChange()}>
                                                teju
                                            </Button>

                                        )}
                                    </div>
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
export default BookCard1;