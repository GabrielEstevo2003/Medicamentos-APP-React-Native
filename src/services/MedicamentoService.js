import { medicamentoHttp } from "./api";

export async function listMedicamentos(){
    const { data } = await medicamentoHttp.get("/medicamentos");
    return data;
}

export async function createMedicamento(medicamento){
    const {data} = await medicamentoHttp.post("/medicamentos", medicamento);
    alert('Registro de medicamento inserido', JSON.stringify(data))
    return data;
}

export async function deleteMedicamento(id){
    await medicamentoHttp.delete(`/medicamentos/${id}`);
}