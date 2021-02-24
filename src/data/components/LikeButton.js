import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        bgArray: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        likeNumber: 0
    }

    randomizeBG = () => {
        const { bgArray } = this.state;
        console.log(bgArray[Math.floor(Math.random() * (6 - 1) + 1)]);
        return bgArray[Math.floor(Math.random() * (6 - 1) + 1)];
    }

    incrementLikes = () => {
        const { likeNumber } = this.state;

        this.setState((state) => {
            return {
                likeNumber: likeNumber + 1
            }
        })

    }


    render() {
        const { likeNumber } = this.state;

        return (
            <div>
                <button style={{
                    backgroundColor: this.randomizeBG
                }} onClick={this.incrementLikes}>{likeNumber} likes</button>
            </div>
        )
    }
}

export default LikeButton;