import React from 'react';
import { connect } from 'react-redux';
import { fetchOne } from "../redux/actions/chapters";
import Title from '../components/utils/Title';
import illustration from "../assets/chapters/lesson_illustration.svg";
import Card from '../components/utils/Card/Card';
import CardContent from '../components/utils/Card/CardContent';
import CardBottom from '../components/utils/Card/CardBottom';
import LessonList from '../components/chapter/LessonList';

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
                <Title>{chapter.name}</Title>
                <Card image={{ src: illustration, alt: 'test' }}>
                    <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cum eligendi
                            incidunt nobis quas similique voluptas. Atque autem consequatur, esse magnam minima nam
                            numquam placeat possimus qui quibusdam, temporibus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus provident sequi
                            ullam? Assumenda at consequuntur corporis ex hic inventore nam natus nobis odit pariatur
                            possimus, ratione rem. At, voluptates.
                        </p>
                    </CardContent>
                    <CardBottom>
                        Duration : 30 minutes
                    </CardBottom>
                </Card>
                <LessonList/>
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
