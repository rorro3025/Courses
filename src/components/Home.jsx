import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { firestore, dbName } from "../fsconfig";
import { useHistory } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import { getAllDocs } from "../model/courses";

function Home() {
  const history = useHistory();
  const editItem = (id) => {
    console.log("click on " + id);
    history.push("/edit/" + id);
  };
  const deleteItem = async (id) => {
    await deleteDoc(doc(firestore, dbName, id));
  };
  const handleDelete = (id, name) => {
    setItemId(id);
    setItemName(name);
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [list, setList] = useState([]);
  const getAll = async () => {
    let { docs } = await getDocs(collection(firestore, dbName));
    let data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setList(data);
  };
  useEffect(() => {
    getAll().then(() => {
      console.log("get done");
    });
    console.log("--");
    const doSomething = async () => {
      let cosas = await getAllDocs();
      console.log(cosas);
    };
    doSomething();
  }, []);
  return (
    <div className="container bg-light">
      <h1>Home</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id item</th>
            <td>Name course</td>
            <td>Link course</td>
            <td>Description course</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {list.map((doc) => (
            <tr className="table-warning" key={doc.id}>
              <th scope="row">{doc.id}</th>
              <td>{doc.name}</td>
              <td>{doc.url}</td>
              <td>{doc.description}</td>
              <td className="text-center">
                <div className="d-flex">
                  <button
                    className="btn btn-info m-1"
                    onClick={() => editItem(doc.id)}
                  >
                    <i className="bi bi-brush"></i>
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(doc.id, doc.name)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        show={showModal}
        handleClose={setShowModal}
        idCourse={itemId}
        courseName={itemName}
        deleteCourse={deleteItem}
      />
    </div>
  );
}

export default Home;
