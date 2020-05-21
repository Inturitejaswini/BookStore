import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
const [page, setPage] = React.useState(1);

 export class Pagination1 extends Component {  
 handleChange(event, value){
      setPage(value);
    };
render(){
   
        return (
            <div>
                <Typography>Page: {page}</Typography>
                <Pagination count={10} />
            </div>
        );
    };
}
export default withRouter(Pagination1)