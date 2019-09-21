import React from 'react';
import style from './ProgressBar.module.scss'

export default ({ percentage }) => (
    <div className={style.wrapper}>
        <div className={style.bar} style={{ width: `${percentage}%` }}/>
        <div className={style.text}>{percentage}%</div>
    </div>
)

