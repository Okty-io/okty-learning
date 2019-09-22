import React from 'react';
import style from "./CardBottom.module.scss";

export default ({children}) => (
    <div className={style.bottom}>
        {children}
    </div>
)
