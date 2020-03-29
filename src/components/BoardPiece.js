import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BoardPiece extends Component {
    render() {
        const {key, content} = this.props.piece;
        return (
            <div style={pieceStyle} onClick={this.props.addContent.bind(this, key)}>
                {content}
            </div>
        )
    }
}

const pieceStyle = {
    width: '46px', 
    height: '46px',
    backgroundColor: '#333',
    cursor: 'pointer',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '46px',
};

BoardPiece.propTypes = {
    addContent: PropTypes.func.isRequired
}; 

export default BoardPiece;