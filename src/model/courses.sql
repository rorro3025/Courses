-- Creacion de la tabla de departamentos 
CREATE TABLE IF NOT EXISTS courses (
  idCourse INT NOT NULL AUTO_INCREMENT,
  descCourse VARCHAR(100) NOT NULL,
  fechaCreacion DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  fechaActualizacion DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idCourse));