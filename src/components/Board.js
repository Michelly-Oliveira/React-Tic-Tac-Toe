import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import PropTypes from 'prop-types';

export class Board extends Component {
    render() {
        // Get the pieces property
        const pieces = this.props.pieces;

        return pieces.map(piece => <BoardPiece  key={piece.key} piece={piece} addContent={this.props.addContent} />);
    }
}

Board.propTypes = {
    addContent: PropTypes.func.isRequired
}; 

export default Board;
