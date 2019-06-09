import React, { Component } from 'react';
import Moment from "react-moment";
import { Card, 
    CardTitle, 
    CardText, 
    CardImg, 
    CardImgOverlay,
    CardBody } from 'reactstrap';

import Comment from "./CommentComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const renderComments = (comments) =>{
    const commentsViews = comments.map( (comment) => {
        return(
            <div>
                <p>{comment.comment}</p>
                <p>--{comment.author}, &nbsp;
                <Moment format="MMM D, YYYY">{comment.date}</Moment> </p>
            </div>
        );
    });
    return commentsViews;
}

export default function DishDetailComponent(props) {
    if(!props.dish){
        return null;
    }
        
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-5 col-12 m-1">
                        <Card >
                            <CardImg width="100%" top src={baseUrl + props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 col-12 m-1">
                        <h4>Comments</h4>
                        {renderComments(props.comments)}
                        <Comment addComment={props.addComment}
                                dishId= {props.dish.id}/>
                    </div>
                </div>
            </div>
        )
    }
       
}

