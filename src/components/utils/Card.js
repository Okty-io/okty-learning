import React from 'react';
import style from './Card.module.scss';

export default ({ children, textAlign = 'left' }) => (
    <div className={style.container} style={{textAlign}}>
        {children}
    </div>
);
