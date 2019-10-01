import React from 'react';
import logo from '../../assets/okty.svg';
import Button from "../utils/Button";
import style from './Header.module.scss';
import french_flag from '../../assets/flags/french.svg';
import us_flag from '../../assets/flags/united-states.svg';
import * as PropTypes from "prop-types";

class Header extends React.PureComponent {

    flagToDisplay = {
        'en_US': french_flag,
        'fr_FR': us_flag
    }

    altToDisplay = {
        'en_US': 'French flag',
        'fr_FR': 'United states of america flag'
    }

    render() {
        const { locale } = this.props;

        return (
            <div className={style.container}>
                <div className={style.child}>
                    <img className={style.logo} src={logo} alt="Okty's logo"/>
                    <p className={style.brand}>Okty Learning</p>
                </div>
                <div className={style.child}>
                    <img src={this.flagToDisplay[locale]} alt={this.altToDisplay[locale]} className={style.flag}
                         onClick={this.props.onSwitchLocale}/>
                    <a className={style.link} href="https://okty.io/">
                        <Button>Go to okty.io</Button>
                    </a>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    onSwitchLocale: PropTypes.func,
    locale: PropTypes.string
}

export default Header;

