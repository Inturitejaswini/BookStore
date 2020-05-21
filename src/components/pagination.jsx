import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
 export class Pagination1 extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        }
    }
    changeCurrentPage(numPage){
        this.setState({currentPage:numPage})
    }
render(){
        return (
            <div className="pagination">
            <Pagination count={10}
             color="primary" 
             className="paginationnumber"
              />
        </div>
        );
    };
}
export default withRouter(Pagination1)