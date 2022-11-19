import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Styles from "./AccountItem.module.scss";

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                 src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                 alt="Hoaa" >
            </img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>NguyenVanA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem;