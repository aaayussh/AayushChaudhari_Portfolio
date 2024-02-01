import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a final year student persuing Btech degree in <b><i>Information Technology</i></b> from International Institute of Information Technology (IIIT), Bhubaneswar. With a keen interest in crafting seamless user experiences, I specialize in full-stack development, leveraging the MERN stack to create efficient and secure web applications.With a diverse skill set in languages, frameworks, and tools, I strive to create impactful solutions and push technology's boundaries.
        </p>

        <br />

        <p className="text-xl">

        As a dedicated full-stack developer with a strong foundation in Information Technology, I am well-positioned to adapt to new technologies and tech stacks with ease. My proficiency in the MERN stack is a testament to my ability to quickly grasp complex frameworks and leverage them to create efficient and secure web applications. Beyond my current skill set, I am proactive in staying updated with emerging technologies and trends in the field. I thrive in dynamic environments that demand continuous learning and innovation, and I am eager to apply my adaptability and problem-solving skills to tackle new challenges head-on. With a track record of successfully navigating diverse tech stacks and delivering high-quality solutions, I am confident in my ability to contribute effectively to your team and drive impactful outcomes.</p> 
         </div>
    </div>
  );
};

export default About;