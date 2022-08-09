import axios from "axios";
const MEDICINE_API_BASE_URL = "http://localhost:8089/api/v1/medicines";
class MedicineService {
  getMedicines() {
    return axios.get(MEDICINE_API_BASE_URL);
  }
  addMedicines(medicines) {
    return axios.post(MEDICINE_API_BASE_URL, medicines);
  }
  getMedicinesById(medicineid) {
    return axios.get(MEDICINE_API_BASE_URL + "/" + medicineid);
  }
}
export default new MedicineService();
