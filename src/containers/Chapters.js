import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../redux/actions/chapters';
import ChaptersCard from '../components/chapters/ChaptersCard';
import ProgressBar from '../components/chapters/ProgressBar';

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        props.fetchChapters();
    }

    render() {
        const { chapters, error } = this.props;

        if (error) {
            return <p>THERE IS AN ERROR.</p>
        }

        return (
            <React.Fragment>
                <ProgressBar percentage={50}/>
                {chapters.map(chapter =>
                    <ChaptersCard chapter={chapter} key={chapter.id}/>
                )}
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
