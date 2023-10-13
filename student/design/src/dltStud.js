import React, { useState } from "react";

function DeleteStud() {
    const [id, setId] = useState('');

    const sub = async () => {
        await fetch(`http://localhost:8100/admin/deleteStud/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "out": "smile",
            })
        })
            .then((res) => res.json())
            .then((res) => alert(res.Message))
            .catch((err) => console.log(err));
    };

    return (<>
        <div className="card p-3 text-white bg-danger mb-3 mx-auto" style={{ "max-width": "60%" }}>
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-12">
                <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} placeholder="Roll Number" />
            </div>
            <br />
            <div className="col-sm-12">
                <button className="btn btn-primary" onClick={sub}>Delete</button>
            </div><br />
        </div>
    </>)
};

export default DeleteStud;
