import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userService } from '../service/user.service';
import { setLoggedInUser } from '../store/user.action';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onSubmit = async (ev, username, password) => {
        ev.preventDefault();
        const user = await userService.login(username, password)
        if (user) {
            dispatch(setLoggedInUser(user));
        } else { alert('error') }
    };

    return (
        <section className='login-page'>
            <form onSubmit={(ev) => onSubmit(ev, username, password)}>
                <div className='fields'>
                    <div>
                        <label htmlFor='username'>userName</label>
                        <input
                            className={`ltr${username ? ' dirty' : ''}`}
                            id='username'
                            type='text'
                            maxLength='12'
                            autoComplete='off'
                            autoCorrect='off'
                            autoFocus
                            onChange={(ev) => setUsername(ev.target.value)}
                            value={username}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input
                            className={`ltr${password ? ' dirty' : ''}`}
                            id='password'
                            type='password'
                            maxLength='12'
                            onChange={(ev) => setPassword(ev.target.value)}
                            value={password}
                        />
                    </div>
                </div>
                <button disabled={!username || !password}>התחבר</button>
            </form>
        </section>
    );
};

