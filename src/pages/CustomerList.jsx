import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

import customerList from './../data/customerList';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchCustomers() {
            const response = await fetch('http://localhost:8000/customerList');
            const fetchedCustomers = await response.json(response);
            setCustomers(fetchedCustomers);
        }
        fetchCustomers();
    }, []);

    // console.log(`customers: ${customers}`);

    const editCustomer = (e, id) => {
        e.preventDefault();
        const url = `/customers/:${id}`;
        return <Link to={url} />;
    };

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
                        customers.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        <Button
                                            onClick={(e) =>
                                                editCustomer(e, customer.id)
                                            }>
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    ;
                </tbody>
            </table>
        </div>
    );
};
