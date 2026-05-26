import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { PROJECTS } from "@/constants/site-content";
import { cn } from "@/lib/utils";

const PROJECT_ORDER = ["MeLiSA", "JabFab", "911Switch", "Predictr"] as const;

interface ProjectsSectionProps {
  title?: string;
  description?: string;
  pageHeading?: boolean;
  className?: string;
}

export default function ProjectsSection({
  title = "Real Results, Real Impact",
  description = "Every project tells a story. See how we've helped businesses transform their ideas into reality",
  pageHeading = false,
  className,
}: ProjectsSectionProps) {
  const orderedProjects = PROJECT_ORDER.map((client) =>
    PROJECTS.find((project) => project.client === client)
  ).filter((project): project is (typeof PROJECTS)[number] => Boolean(project));
  const projectColumns = [
    orderedProjects.filter((project) => project.client === "MeLiSA" || project.client === "911Switch"),
    orderedProjects.filter((project) => project.client === "JabFab" || project.client === "Predictr"),
  ];
  const HeadingTag = pageHeading ? "h1" : "h2";

  return (
    <section
      className={cn(
        "portfolio-section bg-white",
        pageHeading ? "pt-[162px] pb-10" : "py-20 md:py-24",
        className
      )}
      id="projects"
    >
      <Container>
        <HeadingTag
          className={cn(
            "portfolio-heading will-animate m-0 font-semibold text-[#262D30]",
            pageHeading
              ? "text-[40px] leading-[1.1] md:text-[56px] md:leading-[61.6px]"
              : "text-[40px] leading-[1.1] md:text-[52px]"
          )}
        >
          {title}
        </HeadingTag>
        {description ? (
          <p className="portfolio-description will-animate mt-5 max-w-[720px] text-[20px] leading-[1.5] text-[#262D30]">
            {description}
          </p>
        ) : null}

        <div className={cn("portfolio-grid grid gap-2 lg:grid-cols-2", description ? "mt-14" : "mt-20")}>
          {projectColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="grid gap-2">
              {column.map((project, index) => (
                <Link
                  key={project.client}
                  href={project.href}
                  className={cn(
                    "portfolio-card will-animate group relative flex flex-col gap-6 overflow-hidden rounded-2xl px-6 pt-6 transition-transform duration-300 focus-visible:outline-offset-4 md:gap-12 md:px-12 md:pt-12",
                    project.client === "JabFab"
                      ? "h-[372px] pr-0 md:h-[559px] md:pr-0"
                      : project.client === "Predictr"
                        ? "h-[352px] md:h-[559px]"
                        : "h-[326px] md:h-[559px]",
                    project.className
                  )}
                >
                  <span className="portfolio-card-overlay" aria-hidden="true" />
                  <div className="relative z-10 max-w-[500px]">
                    <p
                      className={cn(
                        "m-0 text-[18px] font-normal leading-[1.6] md:text-[20px]",
                        index === 0 && columnIndex === 0
                          ? "text-[#242424b3]"
                          : index === 0 && columnIndex === 1
                            ? "text-[#cfd8ea]"
                            : "text-white"
                      )}
                    >
                      {project.client}
                    </p>
                    <h3
                      className={cn(
                        "mt-2 text-[28px] font-semibold leading-[1.3] md:text-[32px]",
                        index === 0 && columnIndex === 0 ? "text-[#262D30]" : "text-white"
                      )}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.client} project preview`}
                    width={project.client === "JabFab" ? 3440 : 1520}
                    height={project.client === "Predictr" ? 1389 : project.client === "JabFab" ? 2392 : 1056}
                    className={cn(
                      "mt-auto h-auto w-full object-cover",
                      project.client !== "JabFab" && "md:w-[calc(100%-0px)]",
                      project.client === "JabFab" && "w-[calc(100%+24px)] md:w-[calc(100%+0px)]"
                    )}
                    loading="eager"
                    unoptimized
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
