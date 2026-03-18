import type { ContactFormData } from "../types/contact";

interface ApiResponse {
  message?: string;
}

export async function sendContactMessage(formData: ContactFormData) {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

  if (!apiUrl) {
    throw new Error("VITE_CONTACT_API_URL não está definida.");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  let data: ApiResponse | null = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Erro ao enviar mensagem.");
  }

  return data;
}