import React from 'react';
import style from './ChaptersCard.module.scss';
import ChaptersLessonButton from "./ChaptersLessonButton";
import illustration from '../../assets/chapters/lesson_illustration.svg'

class ChaptersCard extends React.PureComponent {


    render() {
        const {chapter} = this.props;


        return (
            <React.Fragment key={chapter.id}>
                <div className={style.container} key={chapter.id}>
                    <div className={style.avatar}>
                        <img src={illustration} alt="" />
                    </div>
                    <div className={style.lesson}>
                        <p className={style.title}>{chapter.name}</p>
                        <section>
                            {chapter.lessons.map(lesson =>
                                <ChaptersLessonButton key={lesson.id} lesson={lesson}/>
                            )}
                        </section>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ChaptersCard;
