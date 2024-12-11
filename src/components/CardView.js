



import React from "react";
import Card from "./Card";
import "./CardView.css";

const CardView = () => {
  const projects = [
    {
      title: "Stock 1",
      description: "Description of the first stock. Includes details about tools used, key features, and outcomes.",
      link: "#"
    },
    {
      title: "Stock 2",
      description: "Description of the second stock. Includes details about challenges faced and how they were solved.",
      link: "#"
    },
    {
      title: "Stock 3",
      description: "Description of the third stock. Showcases the innovative approach to problem-solving and results.",
      link: "#"
    },
    {
      title: "Stock 4",
      description: "Description of the fourth stock. Includes details about tools used, key features, and outcomes.",
      link: "#"
    },
    {
      title: "Stock 5",
      description: "Description of the fifth stock. Includes details about tools used, key features, and outcomes.",
      link: "#"
    },
    {
      title: "Stock 6",
      description: "Description of the sixth stock. Includes details about challenges faced and how they were solved.",
      link: "#"
    },
    {
      title: "Stock 7",
      description: "Description of the seventh stock. Showcases the innovative approach to problem-solving and results.",
      link: "#"
    },
    {
      title: "Stock 8",
      description: "Description of the eighth stock. Showcases the innovative approach to problem-solving and results.",
      link: "#"
    }
  ];

  // Split projects into two groups: one for the first row (2 columns) and one for the second row (4 columns)
  const firstRowProjects = projects.slice(0, 2);
  const secondRowProjects = projects.slice(2, 6);

  return (
    <div className="cardview-container">
      {/* First row with 2 columns */}
      <div className="row">
        {firstRowProjects.map((project, index) => (
          <div key={index} className="col col-6"> {/* col-6 for two columns */}
            <Card title={project.title} description={project.description} link={project.link} />
          </div>
        ))}
      </div>

      {/* Second row with 4 columns */}
      <div className="row">
        {secondRowProjects.map((project, index) => (
          <div key={index} className="col col-3"> {/* col-3 for four columns */}
            <Card title={project.title} description={project.description} link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;

// import React from "react";
// import Card from "./Card";
// import "./CardView.css";

// const CardView = () => {
//   const projects = [
//     {
//       title: "Stock 1",
//       description: "Description of the first stock. Includes details about tools used, key features, and outcomes.",
//       link: "#"
//     },
//     {
//       title: "Stock 2",
//       description: "Description of the second stock. Includes details about challenges faced and how they were solved.",
//       link: "#"
//     },
//     {
//       title: "Stock 3",
//       description: "Description of the third stock. Showcases the innovative approach to problem-solving and results.",
//       link: "#"
//     },
//     {
//         title: "Stock 4",
//         description: "Description of the forth stock. Includes details about tools used, key features, and outcomes.",
//         link: "#"
//     },
//     {
//       title: "Stock 5",
//       description: "Description of the fifth stock. Includes details about tools used, key features, and outcomes.",
//       link: "#"
//     },
//     {
//       title: "Stock 6",
//       description: "Description of the sixth stock. Includes details about challenges faced and how they were solved.",
//       link: "#"
//     },
//     {
//       title: "Stock 7",
//       description: "Description of the seventh stock. Showcases the innovative approach to problem-solving and results.",
//       link: "#"
//     },
//     {
//         title: "Stock 8",
//         description: "Description of the eight stock. Showcases the innovative approach to problem-solving and results.",
//         link: "#"
//     }
//   ];

//   return (
//     <div className="cardview-container">
//       <div className="row">
//         {projects.map((project, index) => (
//           <div key={index} className="col">
//             <Card title={project.title} description={project.description} link={project.link} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardView;
