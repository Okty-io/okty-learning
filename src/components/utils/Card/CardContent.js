import React from 'react';
import style from "./CardContent.module.scss";

export default ({ children }) => (
    <div className={style.content}>
        {children}
    </div>
)
