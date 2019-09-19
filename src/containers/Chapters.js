import React from 'react';
import { connect } from "react-redux";
import { fetchAll } from "../redux/actions/chapters";

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        props.fetchChapters();
    }


    render() {
        return (
            <div>Chapters | {this.props.chapters.length}</div>
        )
    }
}

const mapStateToProps = state => {

    const { chapters } = state.chaptersReducer;

    return { chapters };
};

const mapDispatchToProps = dispatch => ({
    fetchChapters: () => dispatch(fetchAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
