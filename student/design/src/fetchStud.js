import React, { useState } from "react";

function GetStud() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [out, setOut] = useState([{}]);

    const sub = async () => {
        await fetch(`http://localhost:8100/student/${email}/${id}`)
            .then((res) => res.json())
            .then((res) => {
                const dis = document.getElementById("card");
                dis.style.display = "block";
                alert(res.Message);
                setOut(res.Details)
            })
            .catch((err) => console.log(err));
    }

    // console.log(out)

    return (
        <>
            <div className="card p-3 text-white bg-info mb-3 mx-auto" style={{ "max-width": "75%" }}>
                <label className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} id="inputId" placeholder="Roll Number" />
                </div>
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} id="inputEmail" placeholder="Email" />
                </div>
                <br />
                <div className="col-sm-10">
                    <button onClick={sub} className="btn btn-primary">Submit</button>
                </div>
                <br />
                <div id="card" style={{ "display": "none" }}>
                    <hr />
                    <div className="card-header"><h3>Student Details</h3></div>
                    <div className="card-body">
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
                                <tr>
                                    <td>{out.Id}</td>
                                    <td>{out.Name}</td>
                                    <td>{out.Email}</td>
                                    <td>{out.Number}</td>
                                    <td>{out.DOB}</td>
                                    <td>{out.Age}</td>
                                    <td>{out.Gender}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GetStud;