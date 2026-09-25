import type { Clothe } from "../types/Clothe";

const API_URL = "http://127.0.0.1:8000/api/v1";

export async function getClothes() {
  const response = await fetch(`${API_URL}/clothes/`);
  if (!response.ok) {
    throw new Error("Erro ao buscar os vestidos e acessórios.");
  }
  const data = await response.json();
  return data;
}

export async function getClotheByID(id: number) {
  const response = await fetch(`${API_URL}/clothes/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar os vestidos e acessórios.");
  }
  const data = await response.json();
  return data;
}

export async function registerClothe(clotheInfo: Clothe) {
  const response = await fetch(`${API_URL}/clothes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: clotheInfo.name,
      collection_name: clotheInfo.collection_name,
      color: clotheInfo.color,
      size_num: clotheInfo.size_num,
      price: clotheInfo.price,
    }),
  });
  if (!response.ok) {
    throw new Error("Não foi possível atualizar as informações do vestido.");
  }
}

export async function updateClothe(clotheInfo: Clothe, id: number) {
  const response = await fetch(`${API_URL}/clothes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: clotheInfo.name,
      collection_name: clotheInfo.collection_name,
      color: clotheInfo.color,
      size_num: clotheInfo.size_num,
      price: clotheInfo.price,
    }),
  });
  if (!response.ok) {
    throw new Error("Não foi possível atualizar as informações do vestido.");
  }
}

export async function deleteClothe(id: number) {
  console.log(`${API_URL}/clothes/${id}`);
  const response = await fetch(`${API_URL}/clothes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Não foi possível deletar o vestido/acessório.");
  }
}
