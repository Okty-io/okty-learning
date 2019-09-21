import React from 'react';
import style from './ChaptersLessonButton.module.scss';

class ChaptersLessonButton extends React.PureComponent {

    render() {
        const { lesson } = this.props;

        return (
            <React.Fragment>
                <div className={style.block}>
                    <p>{lesson.position}.{lesson.name}</p>
                    <div className={style.status}/>
                </div>
            </React.Fragment>
        )
    }
}

export default ChaptersLessonButton;
