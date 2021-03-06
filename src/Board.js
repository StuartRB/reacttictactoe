import React, {useEffect} from 'react';
import Square from './Square.js';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    useEffect(asyc function() {
        const squares = Array(9).fill(null);
        this.setState({squares: squares});
    }, []);
    handleClick(i) {
        const counter = this.state.counter+1;
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares,
            xIsNext: !this.state.xIsNext,
            counter: counter,
        });
    }

    renderSquare(i){
        return (
            <Square value={this.state.squares[i]}
                    onClick={ () => this.handleClick(i)} />
            )
    }

    isDraw(){
        return this.state.counter === 9;
    }

    calculateWinner(squares) {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    resetGame(){
        this.setState({counter: 0,
        squares: Array(9).fill(null),
        xIsNext: true})
    }

    renderResetButton(){
        if(this.calculateWinner(this.state.squares) || this.isDraw()){
            return (<div><button onClick={() => this.resetGame()}
                                 className="reset">
                             reset
                         </button>
                    </div>)
        }
    }

    render(){
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Player ' + winner + " wins!";
        } else if (this.isDraw()) {

            status = 'Draw!';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div>
                    {this.renderResetButton()}
                </div>
            </div>
            )
    }
}

export default Board;