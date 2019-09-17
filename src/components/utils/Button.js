import React from 'react';
import style from './Button.module.scss';

export default ({ children }) => (
    <div className={style.container}>
        {children}
    </div>
)
