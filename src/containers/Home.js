import React from 'react';
import HomeLeftPanel from '../components/home/LeftPanel';
import HomeRightPanel from '../components/home/RightPanel';
import HomeBackground from '../components/home/Background';
import style from './Home.module.scss';

class Home extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className={style.grid}>
                    <HomeLeftPanel/>
                    <HomeRightPanel/>
                </div>
                <HomeBackground/>
            </React.Fragment>
        )
    }
}

export default Home;
