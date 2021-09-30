import React from "react";
import { Modal } from "react-bootstrap";

function ModalDelete({
  show,
  handleClose,
  idCourse,
  courseName,
  deleteCourse,
}) {
  const handleDelete = () => {
    deleteCourse(idCourse).then(() => handleClose(false));
  };
  return (
    <Modal show={show} onHide={() => handleClose(false)}>
      <Modal.Header>
        <Modal.Title>Are you sure you want to delete this?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Course to delete is {courseName}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={() => handleClose(false)}>
          Cancel
        </button>
        <button className="btn btn-info" onClick={() => handleDelete()}>
          Agree
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
