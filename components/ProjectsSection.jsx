import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"; 
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Amazon-Cloned",
    description: "Project 1 description",
    image: "/ama2.webp",
    tag: ["All"],
    gitUrl: "https://github.com/Hemu21/amazon-clone",
    previewUrl: "https://hemu21.github.io/amazon-clone",
  },
  {
    id: 2,
    title: "Zomato-Cloned",
    description: "Project 2 description",
    image: "/zomato.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/Hemu21/zomato-clone-using-react",
    previewUrl: "https://hemu21.github.io/zomato-clone-using-react",
  },
  {
    id: 3,
    title: "Simple Calc",
    description: "Project 3 description",
    image: "/calc.webp",
    tag: ["All"],
    gitUrl: "https://github.com/Hemu21/simple-calc",
    previewUrl: "https://hemu21.github.io/simple-calc",
  },
  {
    id: 4,
    title: "Film-Review Application",
    description: "Project 4 description",
    image: "/film.jpeg",
    tag: ["All"],
    gitUrl: "https://github.com/Hemu21/habib-review-film",
    previewUrl: "https://habib-review-film.vercel.app/",
  },
  {
    id: 5,
    title: "ResQ Food",
    description: "Authentication and CRUD operations",
    image: "/food.jpeg",
    tag: ["All"],
    gitUrl: "https://github.com/Hemu21/ResQFood",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Postman-Challenge",
    description: "Project 5 description",
    image: "/post.png",
    tag: ["All", "Contributed"],
    gitUrl: "https://github.com/Hemu21/Postman-Challenge",
    previewUrl: "https://gssoc24.github.io/Postman-Challenge",
  },
  {
    id: 7,
    title: "Medi-Hub",
    description: "Project 5 description",
    image: "/meddi.png",
    tag: ["All", "Contributed"],
    gitUrl: "https://github.com/Hemu21/medi-hub",
    previewUrl: "https://medi--hub.vercel.app",
  },
  {
    id: 8,
    title: "E-Commerce_Website",
    description: "Project 5 description",
    image: "/ecom.svg",
    tag: ["All", "Contributed"],
    gitUrl: "https://github.com/Hemu21/e-commerce_website",
    previewUrl: "https://nestondc.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-[200px]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Contributed"
          isSelected={tag === "Contributed"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
