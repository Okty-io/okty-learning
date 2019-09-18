import React from 'react';
import style from './Button.module.scss';

export default ({ children, onClick }) => (
    <div onClick={() => onClick()} className={style.container}>
        {children}
    </div>
)
