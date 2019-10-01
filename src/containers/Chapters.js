import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../redux/actions/chapters';
import ChapterCard from '../components/chapters/ChapterCard';
import ProgressBar from '../components/chapters/ProgressBar';

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        this.props.fetchChapters(this.props.locale);
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
                    <ChapterCard chapter={chapter} key={chapter.id}/>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { chapters, error } = state.chaptersReducer;
    const { locale } = state.localeReducer;

    return { chapters, error, locale };
};

const mapDispatchToProps = dispatch => ({
    fetchChapters: (locale) => dispatch(fetchAll(dispatch, locale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
