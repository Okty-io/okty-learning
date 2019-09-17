import React from 'react';
import Card from '../utils/Card';
import Button from '../utils/Button';
import style from './LeftPanel.module.scss';

export default () => (
    <div className={style.text}>
        <Card textAlign='center'>
            <p>
                Welcome to Okty’s Docker Learning Module where we’re going to teach you all you need to know
                to master Docker. On this V1 you'll find theoretical learning lessons, quizzes and cheat
                sheets.
            </p>

            <p>
                Keep in mind that we’ll be including more chapters over time this year in order to complete
                this
                module with interactive terminal exercises, docker for production, kubernetes, docker with
                cloud
                (probably AWS or GCP).
            </p>

            <p>
                Feel free to open issues and help us improve our learning module Here.
            </p>

            <p className={style.action}>
                <Button>Get started</Button>
            </p>
        </Card>
    </div>
)
