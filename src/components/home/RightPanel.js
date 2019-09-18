import React from 'react';
import illustration from '../../assets/home/drawing_illustration.svg'
import style from './RightPanel.module.scss'

export default () => (
    <div>
        <div className={style.blobs} style={{display: 'none'}}>
            <div className={style.main}>
                <img src={illustration} alt=""/>
            </div>

            <div className={style.blob}/>
            <div className={style.blob}/>
            <div className={style.blob}/>
        </div>
    </div>
)
