import React, { useEffect, useState } from 'react';

function Connect() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        fetch('http://localhost:8100/admin/getAll')
            .then((res) => res.json())
            .then(res => setData(res.fetchAll));
    }, []);

    return (<>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>Roll.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>DateOfBirth</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                {
                    data.map((x) => {
                        return (
                            <>
                                <tr>
                                    <td>{x.Id}</td>
                                    <td>{x.Name}</td>
                                    <td>{x.Email}</td>
                                    <td>{x.Number}</td>
                                    <td>{x.DOB}</td>
                                    <td>{x.Age}</td>
                                    <td>{x.Gender}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>

    </>)
};

export default Connect;

