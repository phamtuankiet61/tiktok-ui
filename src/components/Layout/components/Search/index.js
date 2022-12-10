import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles)

function Search() {
    const [accounts, setAccounts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    
    useEffect(() => {
        if (!searchValue.trim()) {
            setAccounts([])
            return
        }
        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`)
            .then(res => res.json())
            .then(res => {
                setAccounts(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }, [searchValue])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setAccounts([])
    }

    return ( 
        <HeadlessTippy
            interactive
            visible={showResult && accounts.length > 0}
            render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                        <PropperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {accounts.map(account => (
                                <AccountItem key={account.id} data={account} />
                            ))}
                        </PropperWrapper>
                    </div>
            )}
            onClickOutside={() => {
                setShowResult(false)
            }}
        >
            <div className={cx('search')} >
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and videos'
                    spellCheck={false}
                    onChange={e => {
                        setSearchValue(e.target.value)
                    }}
                    onFocus={() => {
                        setShowResult(true)
                    }}
                />
                {!!searchValue && !loading && (
                    <button 
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;