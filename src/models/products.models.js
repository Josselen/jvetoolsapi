import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase.js";

const productsCollection = collection(db, "products");

// GET todos los productos
export const getAllProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

// GET producto por id
export const getProductByIdModel = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  };
};

// POST crear producto
export const createProductModel = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  const newSnap = await getDoc(docRef);

  return {
    id: newSnap.id,
    ...newSnap.data(),
  };
};

// DELETE producto
export const deleteProductModel = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
};

//Actualizar producto 
export const updateProductModel = async (id, data) => {
  const ref = doc (db, 'products', id);
  await updateDoc (ref, data);

  const snap = await getDoc (ref);
  return {id: snap.id, ...snap.data()}
}