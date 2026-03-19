import { ProjectCard } from "../cards/ProjectCard";
import apgVideo from "../../assets/videos/apgVideo.mp4";
import crashesPicture from "../../assets/pictures/crashes-data.png";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
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
    {
      video: apgVideo,
      title: "Página Web para empresa (demo)",
      description:
        "Componente de carousel responsivo desenvolvido com React, utilizando react-responsive-carousel e CSS3. Suporte a múltiplos slides em telas grandes, adaptação para mobile e implementação de scroll suave entre seções da página.",
      stacks: ["React", "TypeScript", "HTML", "CSS"],
      gitHubLink: "https://github.com/luisgfinger/apg",
      liveLink: "https://autopostogrando.netlify.app/",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: projects.length > 2,
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="w-full bg-[var(--background)] py-8 px-4 pb-14 md:px-8 flex flex-col items-center"
    >
      <h2 className="py-6">Projetos</h2>

      <div className="flex items-center justify-center gap-4 w-full">
        <NextButton onClick={scrollPrev} isPrevious />

        <div className="w-full max-w-[1200px] overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] px-2 md:px-4"
                >
                  <div
                    className={`transition-[transform,opacity] duration-500 ease-in-out will-change-transform ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-60"
                    }`}
                  >
                    <ProjectCard
                      video={project.video}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      stacks={project.stacks}
                      gitHubLink={project.gitHubLink}
                      live={project.liveLink}
                      darkMode={darkMode}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <NextButton onClick={scrollNext} />
      </div>

      <div className="dots flex gap-2 justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-blue-600 scale-110"
                : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}