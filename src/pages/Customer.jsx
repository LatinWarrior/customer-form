import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSave } from 'react-icons/fa';

export const Customer = () => {
    const currentLocation = useLocation();

    const { id, name, phone, postalCode, address, email } =
        currentLocation.state;

    const initialCustomer = {
        id: id,
        name: name,
        phone: phone,
        postalCode: postalCode,
        address: address,
        email: email,
    };

    const saveCustomer = (e, id) => {
        // TODO: Use an email service to send email.
        e.preventDefault();
        console.log(`save id: ${id}`);
        console.log(`customer: ${JSON.stringify(customer)}`);
    };

    const [customer, setCustomer] = useState(initialCustomer);

    const handleNameInputChange = (event) => {
        const value = event.target.value;
        console.log(`name value: ${value}`);
        setCustomer({ ...customer, name: value });
    };

    const handlePhoneInputChange = (event) => {
        const value = event.target.value;
        console.log(`phone value: ${value}`);
        setCustomer({ ...customer, phone: value });
    };

    const handlePostalCodeInputChange = (event) => {
        const value = event.target.value;
        console.log(`postal code value: ${value}`);
        setCustomer({ ...customer, postalCode: value });
    };

    return (
        <div className='form-control w-full mt-12 max-w-xs mx-auto px-6 h-2/3 bg-customLightGray lg:max-w-lg'>
            <label
                className='label mt-4'
                placeholder='Please enter your Name'
                value='Please enter your Name'
                htmlFor='name'>
                Name
            </label>
            <input
                type='text'
                id='name'
                value={customer.name}
                onChange={handleNameInputChange}
                placeholder='Your Name'
                className='input input-bordered max-w-xs text-black bg-slate-200 mb-6 lg:max-w-lg'
            />
            <label
                className='label mt-4'
                placeholder='Please enter your Phone Number'
                value='Please enter your Phone Number'
                htmlFor='phone'>
                Phone
            </label>
            <input
                type='text'
                id='phone'
                value={customer.phone}
                onChange={handlePhoneInputChange}
                placeholder='Your Phone Number'
                className='input input-bordered max-w-xs text-black bg-slate-200 mb-6 lg:max-w-lg'
            />
            <label
                className='label mt-4'
                placeholder='Please enter your Postal Code'
                value='Please enter your Postal Code'
                htmlFor='postal-code'>
                Postal Code
            </label>
            <input
                type='text'
                id='postal-code'
                value={customer.postalCode}
                onChange={handlePostalCodeInputChange}
                placeholder='Your Postal Code'
                className='input input-bordered max-w-xs text-black bg-slate-200 mb-6 lg:max-w-lg'
            />
            <button
                type='submit'
                onClick={(event) => saveCustomer(event, customer.id)}
                className='group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500'>
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <FaSave
                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                        aria-hidden='true'
                    />
                </span>
                Save
            </button>
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
