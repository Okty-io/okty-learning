import React from 'react';
import { connect } from 'react-redux';
import { fetchOne } from "../redux/actions/chapters";

class Chapter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { chapterId: props.match.params.chapterId };

        this.props.fetchChapter(this.state.chapterId);
    }

    render() {
        const { chapter } = this.props;

        return (
            <React.Fragment>
                <h1>{chapter.name}</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { currentChapter } = state.chaptersReducer;

    return { chapter: currentChapter };
};

const mapDispatchToProps = dispatch => ({
    fetchChapter: (id) => dispatch(fetchOne(dispatch, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
