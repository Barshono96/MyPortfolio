import { TechCircuitBackground } from "@/components/tech-circuit-background";
import { Projects } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <TechCircuitBackground />
      <div className="relative z-10">
        <div className="container py-16">
          <h1 className="mb-8 text-4xl font-bold text-center">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
            Browse through my portfolio of projects. Each project showcases different skills 
            and technologies I've worked with throughout my career.
          </p>
        </div>
        <Projects />
      </div>
    </main>
  );
}
