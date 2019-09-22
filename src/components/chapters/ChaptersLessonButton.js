import React from 'react';
import style from './ChaptersLessonButton.module.scss';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

export default withRouter(({ lesson, chapter, match: { params: { locale } } }) => (
    <React.Fragment>
        <div className={style.block}>
            <Link to={`/${locale}/chapters/${chapter.id}/lessons/${lesson.id}`}>
                <p>{lesson.position}. {lesson.name}</p>
            </Link>
        </div>
    </React.Fragment>
));
