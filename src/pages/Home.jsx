import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa';

export const Home = () => {
    return (
        <div className='flex flex-col align-middle justify-center items-center'>
            <h1 className='text-4xl my-12'>Welcome to the home page!</h1>
            <p className='text-2xl px-20 mx-auto'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                earum aliquam iste repellendus ex. Quam expedita in maxime aut
                dicta quia dolor enim numquam quisquam illo modi voluptatibus,
                sapiente eos debitis fuga corporis libero porro molestias
                explicabo dignissimos nobis quos sit? Id voluptates laborum
                neque similique sequi quasi. Culpa dicta temporibus non, ut
                obcaecati ipsam debitis suscipit ipsa praesentium cum itaque
                laborum sit exercitationem reiciendis dolorum fugit. Sed
                accusantium quasi fugiat nam illum quos natus! Voluptatibus
                rerum aut debitis quo accusantium, deleniti, ipsum
                necessitatibus soluta inventore, excepturi nemo eveniet dolorum
                hic aliquam eligendi officiis modi eum optio nulla sequi autem!
            </p>
            <Link
                className='btn btn-secondary btn-lg bnt-ghost mt-20'
                to='/customers'>
                <FaList className='mr-2' />
                Go to Customer List
            </Link>
        </div>
    );
};
