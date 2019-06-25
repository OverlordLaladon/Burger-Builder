import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        //in order to re-render the modal then the http request is sent we need to check if children is changed
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate() {
        console.log('[Modal] will update')
    }

    render() {
        //Pure to class megoldása this.props helyett
        const {
            props,
        } = this;

        return (
            <Aux>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;