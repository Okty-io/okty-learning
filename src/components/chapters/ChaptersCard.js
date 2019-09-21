import React from 'react';
import style from './ChaptersCard.module.scss';
import ChaptersLessonButton from './ChaptersLessonButton';
import illustration from '../../assets/chapters/lesson_illustration.svg'

class ChaptersCard extends React.PureComponent {

    render() {
        const { chapter, chapter: { lessons } } = this.props;

        return (
            <React.Fragment>
                <div className={style.container} key={chapter.id}>
                    <div className={style.avatar}>
                        <img src={illustration} alt="Chapter illustration"/>
                    </div>
                    <div className={style.lesson}>
                        <p className={style.title}>{chapter.name}</p>
                        {lessons.map(lesson =>
                            <ChaptersLessonButton key={lesson.id} lesson={lesson}/>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ChaptersCard;
