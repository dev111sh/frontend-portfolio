import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Sidmach Technologies",
    date: "2023 - Present",
    responsibilities: [
      "Participating in large scale application development.",
      "Improving user interfaces and performance of existing solutions.",
      "Implementing new ideas for better user experience.",
      "Collaborating with the back-end team to fix bugs and improve performance.",
    ],
  },
  {
    job: "FreeLancer",
    company: "Freelance Platforms",
    date: "2024",
    responsibilities: [
      "Developing reusable components and putting websites and applications together.",
      "Working with clients to understand their technical and business requirements and delivering solutions.",
      // "Participating in bootcamps.",
      // "Helping students through their way in learning web development technologies.",
    ],
  },
  {
    job: "Project Manager & Business Development Manager",
    company: "TECH DRIVE DIGITAL AGENCY",
    date: "2024",
    responsibilities: [
      "Working on the pet project MVP.",
      // "Help students with their assignments and grade them weekly.",
      "Bug fixes and providing support for their web site.",
    ],
  },
 

];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;