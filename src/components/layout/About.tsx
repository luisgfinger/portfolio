export function About() {

    return (
        <section id="about" className="w-full bg-[var(--surface)] px-6 py-16 flex flex-col gap-2 items-center">
            <h3>Sobre mim</h3>
            <div className="md:max-w-2xl py-4 px-6 rounded-lg text-justify bg-[var(--background)]">
                <p>
                    Sou um desenvolvedor Full Stack com foco na construção de aplicações modernas, escaláveis e bem estruturadas.
                    Tenho experiência no desenvolvimento de interfaces com React e TypeScript, além da criação de APIs robustas utilizando Java com Spring Boot.
                    Também atuo com bancos de dados como MySQL e PostgreSQL, garantindo organização, desempenho e integridade dos dados.
                </p>

                <p className="py-4">
                    Minha abordagem combina conhecimento técnico com entendimento das necessidades do negócio,
                    buscando sempre entregar soluções que realmente gerem valor.
                    Tenho interesse em soluções em cloud com AWS e estou constantemente evoluindo minhas habilidades para construir sistemas cada vez mais completos,
                    seguros e eficientes.
                    Gosto de trabalhar em ambientes colaborativos, onde posso aprender, compartilhar conhecimento e contribuir com novas ideias.
                </p>
            </div>
        </section>
    );
}