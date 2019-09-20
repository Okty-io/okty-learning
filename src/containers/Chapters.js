import React from 'react';
import { connect } from "react-redux";
import { fetchAll } from '../redux/actions/chapters';
import ChaptersCard from "../components/chapters/ChaptersCard";

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        props.fetchChapters();
    }

    render() {
        const { chapters, error } = this.props;

        return (
            <React.Fragment>
                {!error && chapters.map(chapter =>
                    <ChaptersCard chapter={chapter} key={chapter.id}/>
                )}
                {error &&
                    <p>THERE IS AN ERROR.</p>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {

    const { chapters, error } = state.chaptersReducer;

    return { chapters, error };
};

const mapDispatchToProps = dispatch => ({
    fetchChapters: () => dispatch(fetchAll(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
