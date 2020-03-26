import React, { Component } from 'react';

export class RestartBtn extends Component {
    getStyle = () => {
        return {
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#000',
            background: '#f4f4f4',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            bottom: '70px',
            display: this.props.gameOver ? 'block' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()} onClick={this.props.restartGame}>
                Click to restart
            </div>
        )
    }
}

export default RestartBtn;
