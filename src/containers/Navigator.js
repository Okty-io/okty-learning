import React from 'react';
import { connect } from "react-redux";

class Navigator extends React.Component {

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {

    return {}
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
