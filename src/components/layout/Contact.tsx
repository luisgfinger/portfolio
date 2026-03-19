import { useState } from "react";
import { Linkedin } from "lucide-react";
import { toast } from "react-toastify";
import { GithubIcon } from "../icons/GitHubIcon";
import { sendContactMessage } from "../../api/contactApi";
import type { ContactFormData } from "../../types/contact";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

      await sendContactMessage(formData);

      toast.success("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente.";

      toast.error(message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full bg-[var(--background)] flex flex-col items-center py-16 gap-6"
    >
      <header className="w-[90%] max-w-4xl flex flex-col items-center gap-4">
        <h2 id="contact-title" className="text-3xl font-bold">Contato</h2>
        <p className="text-lg text-center md:text-justify">
          Estou sempre interessado em novas oportunidades e colaborações.
          Fique à vontade para entrar em contato.
        </p>
      </header>

      <div className="w-[90%] max-w-4xl bg-[var(--surface)] flex flex-col items-center rounded-xl p-6 gap-6">
        <address className="w-full not-italic">
          <ul className="flex flex-col gap-4">
            <li>
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
                <span>github.com/luisgfinger</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/luis-gustavo-grando-finger-497596206/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8
                hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6">
                  <Linkedin aria-hidden="true" />
                </div>
                <span>linkedin.com/in/luis-gustavo-grando-finger</span>
              </a>
            </li>
          </ul>
        </address>

        <form
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-title"
          aria-busy={isSending}
          className="w-full bg-[var(--background)] rounded-xl p-6 flex flex-col gap-4"
        >
          <h3 id="contact-form-title" className="text-xl font-semibold">
            Envie uma mensagem
          </h3>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              focus:ring-2 focus:ring-blue-500"
              placeholder="Insira seu nome"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              focus:ring-2 focus:ring-blue-500"
              placeholder="Insira seu melhor email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl p-3 bg-[var(--surface)] border border-gray-300 outline-none
              resize-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua mensagem"
            />
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

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
    </section>
  );
}
