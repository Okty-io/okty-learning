import React from 'react';
import style from './Title.module.scss';

export default ({ children }) => {
    return (
        <h1 className={style.title}>{children}</h1>
    );
}
