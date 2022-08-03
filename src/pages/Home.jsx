import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa';

export const Home = () => {
    return (
        <div>
            <Link
                className='btn btn-secondary btn-lg bnt-ghost'
                to='/customers'>
                <FaList className='mr-2' />
                Go to Customer List
            </Link>
        </div>
    );
};
