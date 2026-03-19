import type { ContactFormData } from "../types/contact";

interface ApiResponse {
  message?: string;
}

export async function sendContactMessage(
  formData: ContactFormData,
  timeout = 10000
) {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

  if (!apiUrl) {
    throw new Error("VITE_CONTACT_API_URL não está definida.");
  }

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
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
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Tempo de requisição excedido. Tente novamente.");
    }

    throw error;
  } finally {
    clearTimeout(id);
  }
}
