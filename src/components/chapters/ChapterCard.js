import React from 'react';
import style from './ChapterCard.module.scss';
import ChaptersLessonButton from './ChaptersLessonButton';
import illustration from '../../assets/chapters/lesson_illustration.svg'
import Button from '../utils/Button';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import CardContent from "../utils/Card/CardContent";
import CardBottom from "../utils/Card/CardBottom";
import Card from "../utils/Card/Card";

class ChapterCard extends React.PureComponent {
    render() {
        const { chapter, chapter: { lessons } } = this.props;

        const { match: { params: { locale } } } = this.props;

        return (
            <React.Fragment>
                <Card image={{ src: illustration, alt: 'test' }}>
                    <CardContent>
                        <p className={style.title}>{chapter.name}</p>
                        {lessons.map((lesson, index) =>
                            <ChaptersLessonButton key={lesson.id} lesson={lesson} position={index + 1} chapter={chapter}/>
                        )}
                    </CardContent>
                    <CardBottom> <Link to={`/${locale}/chapters/${chapter.id}`}>
                        <Button>Details</Button>
                    </Link>
                    </CardBottom>
                </Card>
            </React.Fragment>
        )
    }
}

export default withRouter(ChapterCard);
