import React, { useState } from "react";

function UpdateStud() {
    const [data, setData] = useState([{}]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    console.log(data);
    console.log(name);
    console.log(email);
    console.log(gender);
    console.log(dob);

    function onValueChange(event) {
        // Updating the state with the selected radio button's value
        setGender(event.target.value);
    };

    const findId = async () => {
        await fetch(`http://localhost:8100/admin/findId/${id}`)
            .then((res) => res.json())
            .then((res) => {
                alert(res.Message);
                setData(res.data);
                setName(res.data.Name);
                setEmail(res.data.Email);
                setNumber(res.data.Number);
                setDob(res.data.DOB);
                setGender(res.data.Gender);
                document.getElementById('form').style.display = 'block';
            }).catch((err) => console.log(err));
    };

    const sub = async () => {
        await fetch(`http://localhost:8100/admin/updateStud/${data.Id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "Name": name,
                "Email": email,
                "Number": number,
                "DOB": dob,
                "Gender": gender,
            })
        })
            .then((res) => res.json())
            .then((res) => alert(res.Message))
            .catch((err) => console.log(err));
    };

    return (<>
        <div className="card p-3 text-white bg-dark mb-3 mx-auto" style={{ "max-width": "60%" }}>
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-12">
                <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} placeholder="Roll Number" />
            </div>
            <br />
            <div className="col-sm-12">
                <button className="btn btn-primary" onClick={findId}>Search</button>
            </div><br />
            <form id="form" style={{ display: "none" }}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Id</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={data.Id} id="inputId" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue={data.Name} onChange={(e) => setName(e.target.value)} id="inputName" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" defaultValue={data.Email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Number</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue={data.Number} onChange={(e) => setNumber(e.target.value)} id="inputNumber" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputDob" className="col-sm-2 col-form-label">DateOfBirth</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" defaultValue={data.DOB} onChange={(e) => setDob(e.target.value)} id="inputDob" />
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="GenderMale" id="GenderMale" value="Male" checked={gender === "Male"} onChange={onValueChange} />
                                <label className="form-check-label" for="GenderMale">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="GenderFemale" id="GenderFemale" value="Female" checked={gender === "Female"} onChange={onValueChange} />
                                <label className="form-check-label" for="GenderFemale">
                                    Female
                                </label>
                            </div>
                            <div class="form-check disabled">
                                <input className="form-check-input" type="radio" name="GenderOthers" id="GenderOthers" value="Others" checked={gender === "Others"} onChange={onValueChange} />
                                <label className="form-check-label" for="GenderOthers">
                                    Others
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset><br />
                <div className="form-group row">
                    <button className="btn btn-primary btn-sm" onClick={sub}>Update</button>
                </div>
            </form>
        </div>
    </>)
};

export default UpdateStud;