
import {Card,Button} from 'react-bootstrap';
import { Switch,BrowserRouter,Route,Link } from 'react-router-dom';

import Img4 from '../Images/4.jpg'
function My_card(props)
{
return(
  <Link to="/ProductScreen">
    <div className="my_card">

<Card  className="card" style={{ width: '15rem'}}>
  <Card.Img  className="card_image" variant="top" src={props.product_image} />
  <Card.Body>
  <Card.Text style={{fontSize:'15px'}}>
    Fresho
    </Card.Text>
    <Card.Title >{props.product_name}</Card.Title>
    <Card.Text>
    {props.product_weight}
    </Card.Text>
    <Card.Text>
    {props.product_price}
    </Card.Text>
    <Button variant="dark" className="mx-auto d-block">ADD</Button>
  </Card.Body>
</Card>


    </div>
    </Link>
)
}
export default My_card;