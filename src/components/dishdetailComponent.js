import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({ comments }) {
    return (
        comments.map((cmnt) => {
            return (
                <div class="enclosed">
                    <p>{cmnt.comment}</p>
                    <p>-- {cmnt.author}, {new Intl.DateTimeFormat('en-Us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))} </p>
                </div>
            );

        })
    );
}


function RenderDish({ dish }) {
    return (
        <div>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {

    if (props.dish) {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div class="col-xs-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
};



export default DishDetail; 