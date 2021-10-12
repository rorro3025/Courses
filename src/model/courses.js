import { collection, getDocs } from "firebase/firestore";
import { firestore, dbName } from "../fsconfig";

const dbCollection = collection(firestore, dbName);
const getAllDocs = async () => {
  let { docs } = await getDocs(dbCollection);
  let data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export { getAllDocs };
