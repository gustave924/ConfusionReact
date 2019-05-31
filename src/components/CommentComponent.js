import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label} from "reactstrap";
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {

    constructor(props){
        super(props);

        this.state = {
            isCommentModalOpen: false
        }
    }

    toggleModal = () =>{
        this.setState(prevState => ({
            ...this.state,
            isCommentModalOpen: !prevState.isCommentModalOpen,
        }));
    }

    onSubmit = (values) => {
        //alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.name , values.comment);
    }

    render() {
        return (
            <div>
            <Button color="secondary" onClick={this.toggleModal}> Add Comment</Button>
            <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={this.onSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="name" md={12}>Rating</Label>
                            <Col >
                                <Control.select model=".rate" name="id" id="name" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label md={12}>Your name</Label>
                            <Col>
                                <Control.text placeholder="Your name" model=".name" name="name"
                                    id="name" className="form-control"
                                    validators = {{
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: "the name must be more than 3 character",
                                            maxLength: "the name must be less than 15 character"
                                        }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label md={12}>Comment</Label>
                            <Col>
                                <Control.textarea placeholder="Comment" model=".comment" name="comment"
                                    id="comment" rows="6" className="form-control"/>
                            </Col>
                        </Row>
                        <Button type="submit" name="submit" color="primary">Submit</Button>                    
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}


export default Comment;
