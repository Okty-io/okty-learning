import React from 'react';
import style from './LessonList.module.scss';
import LessonListItem from "./LessonListItem";

class LessonList extends React.PureComponent {
    render() {
        const lessons = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ];

        return (
            <div className={style.container}>
                {lessons.map(lesson => (
                    <LessonListItem key={lesson.id}/>
                ))}
            </div>
        )
    }
}

export default LessonList;
