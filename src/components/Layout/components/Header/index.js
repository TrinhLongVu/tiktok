import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
console.log(images.logo);

function Header(){
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='tiktok'></img>
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos'/>

                <button><FontAwesomeIcon className={cx('close')} icon={faCircleXmark}></FontAwesomeIcon></button>
                <button><FontAwesomeIcon className={cx('loading')} icon={faSpinner} /></button>

                <button className={cx('search_btn')}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
            </div>
            <div>
                {}
            </div>
        </div>
    </header>
}

export default Header;