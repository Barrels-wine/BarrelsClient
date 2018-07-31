// @flow
import * as React from 'react';
import range from 'lodash/range';
import classNames from 'classnames';

import { AbstractInput } from './Abstract';

const STARS_NB = 5;
const CHAR = '★';

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.input.value,
        };
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.input.value !== nextProps.input.value) {
            this.setState({
                current: nextProps.input.value,
            });
        }
    }
 
    mouseOver = (note) => () => {
        this.setState({ current: note });
    }

    mouseOut = () => {
        this.setState({ current: this.props.input.value });
    }

    render() {
        const { current } = this.state;

        return (
            <div className="rating">
                {range(1, STARS_NB + 1).map(note => {
                    return (
                        <button
                            key={note}
                            onMouseOver={this.mouseOver(note)}
                            onMouseOut={this.mouseOut}
                            onClick={() => this.props.input.onChange(note)}
                            className={classNames('btn btn-link rating-star', {
                                active: note <= current,
                            })}
                        >
                            {CHAR}
                        </button>
                    );
                })}
            </div>
        );
    }
};

export default AbstractInput(props => <Rating {...props} />);
