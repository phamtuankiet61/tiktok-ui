import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '../../../../apiServices/searchServices';
import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(styles)

function Search() {
    const [accounts, setAccounts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 600);
    
    useEffect(() => {
        if (!debounced.trim()) {
            setAccounts([])
            return
        }
        
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounced);
            setAccounts(result)

            setLoading(false)
        }

        fetchApi();
        
    }, [debounced])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setAccounts([])
    }

    const handleOnchange = e => {
        const valueInput = e.target.value

        if (!valueInput.startsWith(' ')) {
            setSearchValue(valueInput)
        }
    }

    return ( 
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
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
                        onChange={handleOnchange}
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
                    <button 
                        onMouseDown={e => {
                            e.preventDefault()
                        }} 
                        className={cx('search-btn')}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;