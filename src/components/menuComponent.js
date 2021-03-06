import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './dishdetailComponent';


function RenderMenuItem({ dish, onClick }) {
    return (
        <card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-xs-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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
};


export default Menu;