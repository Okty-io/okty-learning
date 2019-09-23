import React from 'react';
import style from './LessonListItem.module.scss';

class LessonListItem extends React.PureComponent {
    render() {
        return (
            <div className={style.container}>
                <div>
                    <input type="checkbox"/>
                </div>
                <div>
                    Text
                </div>
                <div>
                    5 minutes
                </div>
            </div>
        )
    }
}

export default LessonListItem;
