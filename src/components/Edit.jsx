import { useHistory, useParams } from "react-router-dom";
import { firestore, dbName } from "../fsconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./addNew.css";

function AddItem() {
  const history = useHistory();
  const { id } = useParams();
  const [nameC, setNameC] = useState("");
  const [descriptionC, setDescriptionC] = useState("");
  const [urlC, setUrlC] = useState("");
  const [exits, setExits] = useState(false);
  // get doc from firestore
  const fillForm = async () => {
    const docRef = doc(firestore, dbName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setNameC(data.name);
      setUrlC(data.url);
      setDescriptionC(data.description);
      setExits(true);
    } else {
      setExits(false);
    }
  };
  // update doc from firestore
  const updateItem = async () => {
    let docRef = doc(firestore, dbName, id);
    let data = {
      name: nameC,
      url: urlC,
      description: descriptionC,
    };
    await updateDoc(docRef, data);
  };
  // event submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    updateItem().then(
     history.push("/"));
     setNameC("");
     setDescriptionC("");
     setUrlC(""); 
  };
  useEffect(() => {
    fillForm();
  }, []);
  return (
    <div className="container bg-light text-center">
      <h1>Edit course</h1>
      <p>
        {id} and {exits}
      </p>
      <main className="form-sign">
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name course
            </label>
            <input
              type="text"
              name="name"
              value={nameC}
              onChange={(e) => setNameC(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url" className="form-label">
              Link info
            </label>
            <input
              type="url"
              name="url"
              className="form-control"
              value={urlC}
              onChange={(event) => setUrlC(event.target.value)}
            />
          </div>
          <label htmlFor="description" className="form label">
            Course description
          </label>
          <textarea
            name="description"
            rows="3"
            className="form-control"
            value={descriptionC}
            onChange={(e) => setDescriptionC(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Update
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddItem;
