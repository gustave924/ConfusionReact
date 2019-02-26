import React from "react";
import { Card, 
    CardTitle, 
    CardText, 
    CardImg, 
    CardImgOverlay,
    CardBody } from 'reactstrap';



export default function Menu(props) {
    const menu = props.dishes.map( dish => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => props.onDishClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.description} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });
  return (
    <div className="container">
        <div className="row">
            {menu}
        </div>
    </div>
  );
}
