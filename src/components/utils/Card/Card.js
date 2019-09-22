import React from 'react';
import style from './Card.module.scss';

export default ({ children, image }) => (
    <div className={style.container}>
        <div className={style.image}>
            <img src={image.src} alt={image.alt}/>
        </div>
        {children}
    </div>
);
