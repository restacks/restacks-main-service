//@flow
import React from 'react';
import * as HomeActions from './../actions/home';

type Props = {
    msg: string;
};

export default class Home extends React.Component {
    props: Props;




    render() {
        return (
            <div>
                {this.props.msg}
                <button> click </button>
            </div>
        )
    }
}