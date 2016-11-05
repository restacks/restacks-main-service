//@flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home'
import * as HomeActions from './../actions/home';

function mapState(state) {
    return {
        msg: 'hello',
    }
}
function mapDispatch(dispatch) {
    return {} //bindActionCreators(HomeActions, dispatch);
}
export default () =>(
    <Home msg='Hello' />
);
// export default connect(mapState, mapDispatch)(Home);
