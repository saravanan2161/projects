import React, { useState } from "react";

function AddStud() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("Male");

    function onValueChange(event) {
        // Updating the state with the selected radio button's value
        setGender(event.target.value);
    };

    const sub = async () => {
        await fetch('http://localhost:8100/admin/addStud', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                number: number,
                dob: dob,
                gender: gender
            })
        })
            .then((res) => console.log(res.json()))
            .then((res) => alert(res.Message))
            .catch((err) => console.log(err));

    };

    return (<>
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} id="inputId" placeholder="Roll Number" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="inputName" placeholder="Name" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="inputEmail" placeholder="Email" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputNumber" className="col-sm-2 col-form-label">Number</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setNumber(e.target.value)} id="inputNumber" placeholder="Number" />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputDob" className="col-sm-2 col-form-label">DateOfBirth</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" onChange={(e) => setDob(e.target.value)} id="inputDob" placeholder="Date Of Birth" />
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
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button onClick={sub} className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    </>)
};

export default AddStud;