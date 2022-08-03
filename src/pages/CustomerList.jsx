import React from 'react';

import { Customer } from './Customer';

import customerList from './../data/customerList';

export const CustomerList = () => {
    return (
        <div>
            <div className='grid m-4 grid-cols-1 gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {customerList.map((customer) => {
                    console.log(`customer: ${JSON.stringify(customer)}`);
                    return (
                        <Customer
                            key={customer.id}
                            id={customer.id}
                            name={customer.name}
                            email={customer.email}
                            phone={customer.phone}
                            postalCode={customer.postalCode}
                            address={customer.address}
                        />
                    );
                })}
            </div>
        </div>
    );
};
