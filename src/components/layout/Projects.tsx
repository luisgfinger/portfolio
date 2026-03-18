import { ProjectCard } from "../cards/ProjectCard";
import apgVideo from "../../assets/videos/apgVideo.mp4";
import crashesPicture from "../../assets/pictures/crashes-data.png";
import { useRef, useState } from "react";
import { NextButton } from "../buttons/NextButton";

type Project = {
  video?: string;
  image?: string;
  title: string;
  description: string;
  stacks: string[];
  gitHubLink?: string;
  liveLink?: string;
};

interface ProjectsProps{
  darkMode: boolean;
}

export function Projects({darkMode}:ProjectsProps) {
  const [currentProject, setCurrentProject] = useState(0);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const projects: Project[] = [
    {
      video: apgVideo,
      title: "Página Web para empresa (demo)",
      description:
        "Componente de carousel responsivo desenvolvido com React, utilizando react-responsive-carousel e CSS3. Suporte a múltiplos slides em telas grandes, adaptação para mobile e implementação de scroll suave entre seções da página.",
      stacks: ["React", "TypeScript", "HTML", "CSS"],
      gitHubLink: "https://github.com/luisgfinger/apg",
      liveLink: "https://autopostogrando.netlify.app/",
    },
    {
      image: crashesPicture,
      title: "Crashes Data Project",
      description:
        "Pipeline de dados em camadas (Bronze → Silver → Gold) no AWS S3, usando Python, Pandas e PyArrow. Aplica validação de schema e regras de qualidade, com dados em Parquet particionado. Integrado ao AWS Glue e Data Catalog para consultas serverless via Athena.",
      stacks: [
        "Python",
        "Pandas",
        "PyArrow",
        "CSS",
        "AWS S3",
        "AWS Glue",
        "AWS Athena",
      ],
      gitHubLink: "https://github.com/luisgfinger/crashes_data_project",
    },
  ];

  function nextSlide() {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }

  function prevSlide() {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }

  function handleStart(clientX: number) {
    startX.current = clientX;
    currentX.current = clientX;
    isDragging.current = true;
  }

  function handleMove(clientX: number) {
    if (!isDragging.current) return;
    currentX.current = clientX;
  }

  function handleEnd() {
    if (!isDragging.current) return;

    const distance = currentX.current - startX.current;
    const threshold = 50;

    if (distance > threshold) {
      prevSlide();
    } else if (distance < -threshold) {
      nextSlide();
    }

    isDragging.current = false;
  }

  const prevIndex =
    currentProject === 0 ? projects.length - 1 : currentProject - 1;

  const nextIndex =
    currentProject === projects.length - 1 ? 0 : currentProject + 1;

  return (
    <section id="projects" className="w-full bg-[var(--background)] py-8 px-4 pb-14 md:px-8 flex flex-col items-center">
      <h2  className="py-6">Projetos</h2>

      <div className="flex items-center justify-center gap-4 w-full">
        <NextButton onClick={prevSlide} isPrevious />

        <div
          className="relative w-full max-w-[1200px] h-auto select-none touch-pan-y"
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          <div className="hidden md:flex items-center justify-center relative w-full min-h-[500px] overflow-hidden">
            <div className="absolute left-0 w-[25%] scale-90 opacity-50 pointer-events-none -translate-x-[15%] transition-all duration-500 ease-in-out">
              <ProjectCard
                video={projects[prevIndex].video}
                image={projects[prevIndex].image}
                title={projects[prevIndex].title}
                description={projects[prevIndex].description}
                stacks={projects[prevIndex].stacks}
                gitHubLink={projects[prevIndex].gitHubLink}
                live={projects[prevIndex].liveLink}
                darkMode={darkMode}
              />
            </div>

            <div className="relative z-10 w-[50%] translate-x-0 transition-all duration-500 ease-in-out">
              <ProjectCard
                video={projects[currentProject].video}
                image={projects[currentProject].image}
                title={projects[currentProject].title}
                description={projects[currentProject].description}
                stacks={projects[currentProject].stacks}
                gitHubLink={projects[currentProject].gitHubLink}
                live={projects[currentProject].liveLink}
                darkMode={darkMode}
              />
            </div>

            <div className="absolute right-0 w-[25%] scale-90 opacity-50 pointer-events-none translate-x-[15%] transition-all duration-500 ease-in-out">
              <ProjectCard
                video={projects[nextIndex].video}
                image={projects[nextIndex].image}
                title={projects[nextIndex].title}
                description={projects[nextIndex].description}
                stacks={projects[nextIndex].stacks}
                gitHubLink={projects[nextIndex].gitHubLink}
                live={projects[nextIndex].liveLink}
                darkMode={darkMode}
              />
            </div>
          </div>

          <div className="md:hidden cursor-grab active:cursor-grabbing transition-all duration-500 ease-in-out">
            <ProjectCard
              video={projects[currentProject].video}
              image={projects[currentProject].image}
              title={projects[currentProject].title}
              description={projects[currentProject].description}
              stacks={projects[currentProject].stacks}
              gitHubLink={projects[currentProject].gitHubLink}
              live={projects[currentProject].liveLink}
              darkMode={darkMode}
            />
          </div>
        </div>

        <NextButton onClick={nextSlide} />
      </div>

      <div className="dots flex gap-2 justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentProject === index
                ? "bg-blue-600 scale-110"
                : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}