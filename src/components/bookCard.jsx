
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


class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            book_Details:[]
        }
    }
    addtocart(id) {

        // window.open('/addToCard')
        this.setState({
            open:!this.state.open
        });
        console.log("addtocart button",this.state.open)
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
                                        backgroundColor: "#eeeeef"}}>
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
                                        { ! this.state.open ? (
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


// {this.state.addtocart ? (
//     <div className="Addddddiv">Add to bag</div>
// ) : (
//         <div className="minidivb">
//             <div className="Adddiv" onClick={() => this.addtocart()}>Add to bag</div>
//             <div className="whisilistdiv">wishilst</div>
//         </div>
//     )}