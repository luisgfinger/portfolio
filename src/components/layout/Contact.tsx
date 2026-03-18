import { useState } from "react";
import { Linkedin } from "lucide-react";
import { toast } from "react-toastify";
import { GithubIcon } from "../icons/GitHubIcon";

interface ContactProps {
  darkMode: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsSending(true);

      console.log("Dados enviados:", formData);

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true;

          if (success) {
            resolve(true);
          } else {
            reject(new Error("Falha no envio"));
          }
        }, 1000);
      });

      toast.success("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact">
      <div className="w-full bg-[var(--background)] flex flex-col items-center py-16 gap-6">
        <h2 className="text-3xl font-bold">Contato</h2>

        <div className="w-[90%] max-w-4xl bg-[var(--surface)] flex flex-col items-center rounded-xl p-6 gap-6">
          <p className="text-lg text-justify">
            Estou sempre interessado em novas oportunidades e colaborações.
            Fique à vontade para entrar em contato!
          </p>

          <a
            href="https://github.com/luisgfinger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8
            hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <GithubIcon darkMode={darkMode} />
            </div>
            <p>github.com/luisgfinger</p>
          </a>

          <a
            href="https://www.linkedin.com/in/luis-gustavo-grando-finger-497596206/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8
            hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <Linkedin />
            </div>
            <p>linkedin.com/in/luis-gustavo-grando-finger</p>
          </a>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-[var(--background)] rounded-xl p-6 flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold">Envie uma mensagem</h3>

            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              resize-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full md:w-fit px-6 py-3 rounded-xl font-medium bg-blue-600 text-white
              hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed self-center"
            >
              {isSending ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}