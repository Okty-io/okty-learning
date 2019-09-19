import React from 'react';
import { connect } from "react-redux";
import { fetchAll } from '../redux/actions/chapters';

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        props.fetchChapters();
    }

    render() {
        const { chapters } = this.props;

        return (
            <React.Fragment>
                {chapters.map(chapter =>
                    <p key={chapter.id}>{chapter.name}</p>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {

    const { chapters } = state.chaptersReducer;

    return { chapters };
};

const mapDispatchToProps = dispatch => ({
    fetchChapters: () => dispatch(fetchAll(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
