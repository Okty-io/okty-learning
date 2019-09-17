import React from 'react';
import logo from '../../assets/okty.svg';
import Button from "../utils/Button";
import style from './Header.module.scss';

export default () => (
    <div className={style.container}>
        <div className={style.child}>
            <img className={style.logo} src={logo} alt="Okty's logo"/>
            <p className={style.brand}>Okty Learning</p>
        </div>
        <div className={style.child}>
            <a className={style.link} href="https://okty.io/">
                <Button>Go to okty.io</Button>
            </a>
        </div>
    </div>
)
