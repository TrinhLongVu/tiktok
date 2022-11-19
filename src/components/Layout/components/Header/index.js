import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless'; 
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/button';

const cx = classNames.bind(styles);
console.log(images.logo);

function Header(){
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([]);
        }, 0)
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='tiktok'></img>
                <Tippy content=""
                    interactive = {true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className={cx('titleAccount')}>Account</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos'/>
        
                        <button><FontAwesomeIcon className={cx('close')} icon={faCircleXmark}></FontAwesomeIcon></button>
                        <button><FontAwesomeIcon className={cx('loading')} icon={faSpinner} /></button>
        
                        <button className={cx('search_btn')}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                    </div>
                </Tippy>
            <div className={cx('actions')}>
                <Button text disabled onClick={() => alert('aaa')}>
                    Log out
                </Button>

                <Button primary rounded>
                    Log in
                </Button>
                
            </div>
        </div>
    </header>
}

export default Header;