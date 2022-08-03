import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'daisyui';
import { FaSave } from 'react-icons/fa';

export const Customer = () => {
    const currentLocation = useLocation();
    debugger;
    const { id, name, phone, postalCode, address, email } =
        currentLocation.state;
    const saveCustomer = (e, id) => {
        // TODO: Use an email service to send email.
        e.preventDefault();
        console.log(`save id: ${id}`);
    };

    return (
        <div className='form-control w-full mt-12 max-w-xs mx-auto px-6 h-2/3 bg-customLightGray lg:max-w-lg'>
            <label className='label mt-4'>
                <span
                    className='label-text text-sm text-black md:text-lg lg:text-xl'
                    placeholder='Please enter your Name'>
                    {name}
                </span>
            </label>
            <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered max-w-xs text-black bg-slate-200 mb-6 lg:max-w-lg'
            />
            {/* <Button
                className='btn btn-secondary btn-lng btn-ghost'
                onClick={(e) => saveCustomer(e, id)}>
                <FaSave className='mr-2' />
                Save
            </Button> */}
        </div>
        // <div className='form-control w-full mt-12 max-w-xs mx-auto px-6 h-2/3 bg-customLightGray lg:max-w-lg'>
        //     <label className='label mt-4'>
        //         <span
        //             className='label-text text-sm text-black md:text-lg lg:text-xl'
        //             placeholder='Please enter your Name'>
        //             {name}
        //         </span>
        //     </label>
        //     <input
        //         type='text'
        //         placeholder='Your Name'
        //         className='input input-bordered max-w-xs text-black bg-slate-200 mb-6 lg:max-w-lg'
        //     />
        //     <label className='label'>
        //         <span
        //             className='label-text text-sm text-black md:text-lg lg:text-xl'
        //             placeholder='Please enter your phone number'>
        //             {phone}
        //         </span>
        //     </label>
        //     <input
        //         type='text'
        //         placeholder='Your Email'
        //         className='input input-bordered max-w-xs bg-slate-200 text-black mb-6 lg:max-w-lg'
        //     />
        //     <label className='label'>
        //         <span
        //             className='label-text text-sm text-black md:text-lg lg:text-xl'
        //             placeholder='Please enter your postal code'>
        //             {postalCode}
        //         </span>
        //     </label>
        //     <input
        //         type='text'
        //         placeholder='Your Postal Code'
        //         className='input input-bordered max-w-xs bg-slate-200 text-black mb-6 lg:max-w-lg'
        //     />
        //     <label className='label'>
        //         <span
        //             className='label-text text-sm text-black md:text-lg lg:text-xl'
        //             placeholder='Please enter your address'>
        //             {address}
        //         </span>
        //     </label>
        //     <input
        //         type='text'
        //         placeholder='Your Address'
        //         className='input input-bordered max-w-xs bg-slate-200 text-black mb-6 lg:max-w-lg'
        //     />
        //     <label className='label'>
        //         <span
        //             className='label-text text-sm text-black md:text-lg lg:text-xl'
        //             placeholder='Please enter your Email Address'>
        //             {email}
        //         </span>
        //     </label>
        //     <input
        //         type='text'
        //         placeholder='Your Email Address'
        //         className='input input-bordered max-w-xs bg-slate-200 text-black mb-6 lg:max-w-lg'
        //     />
        //     <Button
        //         // onClick={onSave(id)}
        //         className='text-white mb-10 bg-customDarkBlue hover:bg-customMediumBlue mx-auto w-40 mt-2 outline-none lg:mb-6 '>
        //         Save
        //     </Button>
        // </div>
    );
};
