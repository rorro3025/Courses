import {useState} from "react";
import {collection, addDoc} from "firebase/firestore"
import {firestore,dbName} from "../fsconfig"
import "./addNew.css";

function AddNew() {
    const [nameC, setNameC] = useState("");
    const [descriptionC, setDescriptionC] = useState("");

    const addNew = async () => {
        let obj = {
            name: nameC,
            url: descriptionC,
            description: "description defaults to "+ nameC
        }
        let docRef = await addDoc(collection(firestore, dbName), obj)
        console.log("document written with id " + docRef.id)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNew().catch((error)=>{
            error.message = error.message
        })
        setNameC("")
        setDescriptionC("")
    }
    return (
        <div className="container bg-light text center">
            <main className="form-sign">
                <h2>Add new course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" name="course" className="form-control"
                               onChange={(e) => setNameC(e.target.value)} value={nameC}/>
                        <label htmlFor="course">Course name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="description" className="form-control"
                               onChange={(e) => setDescriptionC(e.target.value)} value={descriptionC}/>
                        <label htmlFor="description">Description course</label>
                    </div>
                    <button className="w-100 btn btn-primary" type="submit">Save</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2021</p>
                    <p>{nameC} and {descriptionC}</p>
                </form>
            </main>
        </div>
    )
}

export default AddNew;