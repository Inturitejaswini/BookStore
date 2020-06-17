import React, { Component } from 'react';
import { Card, Button ,AppBar} from '@material-ui/core'
import data1 from './orederSuccessful.json'
import { AppBar1 } from '../appBar';
import './bookDetails.less'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: "0px"
            }
        },
    },
})
class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order_Details: []
        }
    }
    handleContinue(){
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <AppBar1 />
                {
                    data1.order_Details.map((items, id) => {
                        return (
                            <div key={id} className="card-div">
                                <MuiThemeProvider theme={theme}>
                                    <div className="bookdetails">
                                        <div>
                                            <a href={items.url}>
                                                <img src={items.logo} className="image1" />
                                            </a>
                                        </div>
                                        <div className="carddown">
                                            <h5 id="title">{items.title}</h5>
                                            <div>
                                                <a href={items.url}>
                                                    <img src={items.logo1} className="image2" />
                                                </a>
                                            </div>
                                            <div className="description"> <p>{items.message}</p></div>
                                            <div id="id"> <p>{items.id}</p></div>
                                            <div id="id1"><p>{items.id1}</p></div>
                                        </div>
                                    </div>
                                    <div class="Table">
                                        <div class="Heading">
                                            <div class="Cell">
                                                <p>Email Us</p>
                                            </div>
                                            <div class="Cell">
                                                <p id="contact-us">Contact Us</p>
                                            </div>
                                            <div class="Cell">
                                                <p>Address</p>
                                            </div>
                                        </div>
                                        <div class="Row">
                                            <div class="Cell">
                                                <p>admin@bookstore.com</p>
                                            </div>
                                            <div class="Cell">
                                                <p>+91 835467732</p>
                                            </div>
                                            <div class="Cell">
                                                <p>42,14th Main,15th Cross,Sector4,
                                                opp to BDA complex,Near Kumarakom
                                                Restaurent,Hsr Layout,Bngalore 560034</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="continue-btn2">
                                        <Button onClick={()=>this.handleContinue()}>
                                           <span id="continue-text">Continue Shoping</span> 
                                        </Button>
                                    </div>
                                </MuiThemeProvider>
                            </div>
                        );
                    })
                }
                <div>
                    <AppBar position="sticky" id="bottomappbar"
                        style={{ backgroundColor: "black" }}>
                        {/* <Toolbar className="toolbar" > */}
                        <div className="appbar2">Copyright@2020,Bookstore Private Limited.All Rights Reserved</div>
                        {/* </Toolbar> */}
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default BookDetails;

