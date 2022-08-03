import React from 'react';

import customerList from './../data/customerList';

export const CustomerList = () => {
    return (
        <div class='overflow-x-auto'>
            <table class='table table-zebra w-full'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList &&
                        customerList.map((customer) => {
                            return (
                                <tr>
                                    <th>{customer.id}</th>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            );
                        })}
                    ;
                </tbody>
            </table>
        </div>
    );
}
