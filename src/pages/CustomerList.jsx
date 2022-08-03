import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

import customerList from './../data/customerList';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    // Fetch the customers asynchronously from Json Server.
    useEffect(() => {
        // Define the function to use to execute the side effect (i.e., fetch the data)
        async function fetchCustomers() {
            const response = await fetch('http://localhost:8000/customerList');
            const fetchedCustomers = await response.json(response);
            setCustomers(fetchedCustomers);
        }
        // Invoke the function
        fetchCustomers();
    }, []);

    // console.log(`customers: ${customers}`);

    const editCustomer = (e, id, name, phone, postalCode, address, email) => {
        // This is probably unnecessary because the navigate component handles it.
        e.preventDefault();
        const url = `/customers/${id}`;
        console.log(`Navigate to customer id: ${id} at URL: ${url}`);
        navigate(url, {
            state: { id, name, phone, postalCode, address, email },
        });
    };

    return (
        <div className='overflow-x-auto'>
            <table className='table table-zebra w-full'>
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
                                            className='btn btn-primary btn-lng'
                                            onClick={(e) =>
                                                editCustomer(
                                                    e,
                                                    customer.id,
                                                    customer.name,
                                                    customer.phone,
                                                    customer.postalCode,
                                                    customer.address,
                                                    customer.email
                                                )
                                            }>
                                            <FaEdit className='mr-2' />
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
