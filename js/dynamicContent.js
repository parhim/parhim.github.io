const workExperience = [
  {
    company: "PsyFi | Armada",
    location: "Los Angeles, CA",
    logosrc: "./images/logos/psy.png",
    position: "Senior Full-Stack Engineer",
    duration: "Aug 2020 - Mar 2022",
    responsibilities: [
      "Built web app for trading options that interacts with order books on Solana [Next.js, Recoil, Anchor, Serum, Rust, solana/web3.js, Typescript]",
      "Designed the architechture and built a web app that creates collateralized options airdrops using Merkle trees for verification [React, Recoil, Node, Typescript, PostgreSql, Rust]",
      "Ported a borrow/lending frontend to React Native in order to support Solana Mobile days after it was released [React Native, Typescript]",
    ],
    techStack: "React, Redux, Node.js (Hapi), mysql, AWS, socket.io",
  },
  {
    company: "OnTraccr",
    location: "San Francisco, CA",
    logosrc: "./images/logos/ontraccr.png",
    position: "Full-Stack Engineer",
    duration: "Aug 2020 - Mar 2022",
    responsibilities: [
      "SaaS platform for construction contractors to track labour hours, forecast projects, share data and build automated workflows, reducing overhead costs",
      "Built components for managing timecards and dynamically calculating OT/pay [React, Redux, Node.js (Hapi), mysql, AWS, socket.io]",
      "Designed and implemented an end-to-end system for submission and multi-stage approval of timecards as well as budget/payroll analysis (core features)",
      "Designed and developed multiple core features for the React Native mobile app (dynamic forms, guide, document center)",
    ],
    techStack: "React, Redux, Node.js (Hapi), mysql, AWS, socket.io",
  },
  {
    company: "Atlas One",
    location: "San Francisco, CA",
    logosrc: "./images/logos/atlas.png",
    position: "Full-Stack Engineer (Contract)",
    duration: "Oct 2020 - Jan 2021",
    responsibilities: [
      "Designed and developed a research portal for asset-backed digital securities [React, Redux, Node.js (Express, Keystone), PostgreSql, CircleCI, GraphQL]",
      "Built cron tasks that pull live price data from different issuers and calculate an index based on historical price change of publicly traded tokens",
    ],
    techStack:
      "React, Redux, Node.js (Express, Keystone), PostgreSql, CircleCI, GraphQL",
  },
  {
    company: "WizeHire",
    location: "San Francisco, CA",
    position: "Software Engineer (Contract)",
    logosrc: "./images/logos/wize.png",
    duration: "May 2020 - Aug 2020",
    responsibilities: [
      "Developed multiple components that help manage job postings, speeding up both the customer and the support workflow (Full Stack) [React, Django, PHP, Jenkins]",
      "Built an automated virtual machine development stack, cutting down the onboarding time for new engineers from a week of environment setup to less than a few minutes [Linux, bash, GCP]",
    ],
    techStack: "React, Django, PHP, Jenkins",
  },
  {
    company: "Philips",
    location: "Vancouver, BC",
    position: "Software Developer",
    logosrc: "./images/logos/philips.png",
    duration: "May 2019 - May 2020",
    responsibilities: [
      "Integrated third-party IoT devices (smoke detectors, pull cords, smart watches) for a distributed smart senior home system and built apps to manage them and handle events (Full Stack) [Node.js, Angular, Python, AWS S3, Kubernetes, RabbitMQ, MySql, DynamoDB]",
      "Made multiple responsive dashboard components [Typescript, AngularJS, SCSS, Ionic] for monitoring the status of devices between facilities",
      "Took on responsibilities to scale the product and mentor interns/new hires in a team of 10 people",
    ],
    techStack:
      "Node.js, Angular, Python, AWS S3, Kubernetes, RabbitMQ, MySql, DynamoDB",
  },
  {
    company: "Terramera",
    location: "Vancouver, BC",
    position: "Software Engineer",
    duration: "Sep 2017 - Aug 2018",
    logosrc: "./images/logos/terramera.png",
    responsibilities: [
      "Developed a cron-activated Java script that runs on roaming Docker containers to download inventory data from Amazon, Home Depot, Target and Walmart; and then upload it to a PostgreSQL database, saving hours of weekly manual labor for sales analysts",
      "Developed statistical, analytical and administrative tools for an internal dashboard, significantly raising productivity in sales and chem research teams (Full Stack) [Vue.js, HTML, D3.js, CSS, JDBC]",
      "Worked on the prototyping and development of a high-throughput plant imaging system and a portable imaging box [RPi, MQTT, Python]",
      "Trained a stained egg segmentation algorithm with 96% accuracy using [Python, Keras, OpenCV]",
    ],
    techStack:
      "Vue.js, HTML, D3.js, CSS, JDBC, RPi, MQTT, Python, Keras, OpenCV",
  },
  {
    company: "IBA Group",
    location: "Minsk, Belarus",
    position: "Java Developer (Summer Internship)",
    logosrc: "./images/logos/iba.png",
    duration: "Jul 2016 - Aug 2016",
    responsibilities: [
      "Developed an Android app [Java, Maven, Android Studio] for a supermarket network (Evroopt) that scans passports to fill out rewards documents",
      "Built in Android studio using integrated libraries such as Google Vision and Tesseract for optical character recognition",
    ],
    techStack: "Java, Maven, Android Studio",
  },
];

// Projects Data
const projects = [
  {
    title: "Employee timecard system",
    value: [
      "Makes viewing/editing/approving employee timesheets possible",
      "Can track budget across all projects on a custom pay period",
      "Calculates overtime either daily or weekly",
      "Allows exporting employee payroll sheets with granular data",
    ],
    problem:
      "Employee timecards need to be budgeted accordingly, signed off and approved. The approval process needs to work through a custom chain of users/roles. Additionally, employees should be able to leave notes about the tasks they're working on. Finally, the data has to be live across all logged in users.",
    solution: [
      "Aggregated tasks with optional notes across a particular day into a timecard",
      "Dynamic calculation of pay periods based on settings with an anchor day",
      "Built a system for submitting and approving timecards with logging",
      "Set up socket.io to push updates across logged in users",
    ],
    techStack: [
      "Node/Express backend",
      "Socket.io",
      "MySQL DB",
      "React Frontend",
      "Moment.js/Luxon",
    ],
    link: "https://ontraccr.com/",
    image: "images/ontraccr.png",
  },
  {
    title: "Research dashboard for digital securities",
    value: [
      "Organizes digital security offerings from different platforms into one comprehensive dashboard",
      "Index for live traded offerings",
      "Subscription-based access to csv export features and financials",
    ],
    problem:
      "The market of asset-backed digital securities is fairly new, hence it exists in a wild state where some issuers only appear on their respective APIs, and others on a multitude of niche trading platforms. There wasn't a platform that carefully vetted the issuers, giving investors a go-to place for doing investment research.",
    solution: [
      "Developed the research portal with graphs/analytics/news, list/grid token directory with insights based on selected industry",
      "Wrote cronjobs for pulling live trade data from multiple sources",
      "Wrote an algorithm for calculating a running index based on historical trading data",
    ],
    techStack: [
      "Backend using Node and Keystone + GraphQL",
      "React with material UI",
    ],
    link: "https://atlasone.ca/",
    image: "images/atlas_one.gif",
  },
  {
    title: "Job template duplication ability",
    value: [
      "Made it possible for customer support to seamlessly duplicate templates saving hours of daily work",
      "Deeplinking made it easier for customer support to share templates saving even more time",
    ],
    problem:
      "WizeHire customer support team had no way of duplicating an existing job posting template, to make a similar one. They had to manually copy each qualification and description into an empty template",
    solution: [
      "Wrote a new Django REST Api that would replicate the structure of a template, while reusing existing template features (qualifications, descriptions, ...) to significantly reduce DB growth",
      "Added deep-linking support for those viewing/editing the job templates using React-Router",
    ],
    techStack: ["Django REST Apis", "React with material UI"],
    link: "",
    image: "images/template-dup.gif",
  },
  {
    title: "Automated dev environment VM setup script",
    value: [
      "Allowed onboarding setup for new hires to take a couple minutes with one click instead of a week",
      "Enabled creating identical cloud instances for dependency consistency across the whole team and the production servers",
    ],
    problem:
      "It would generally take around a week for a new hire to get the development environment up and running. Due to the distributed, multi-lingual nature of the system, and the amount of controlled dependencies, figuring out what went wrong with some step took valuable time away from engineers.",
    solution: [
      "Built a Django REST Api that spins up a templated Google Cloud compute instance, along with a front end that makes it possible in one click.",
      "Wrote a complex environment setup bash script that works consistently by relying on identical VM instances",
      "The Django endpoint pipes clients ip data into the template settings making the firewall setup fully automated",
      "Serves SQL dump files for the VMs using nginx",
    ],
    techStack: ["Django", "Bash", "nginx", "gcloud cli"],
    link: "",
    image: "images/env.png",
  },
  {
    title: "Porting a functional component from legacy system",
    value: [
      "Reduced the complexity of the product enabling the removal of the legacy system",
      "Eliminated the need for customers to switch between the new and legacy dashboards improving UX",
    ],
    problem:
      "WizeHire uses a legacy PHP system for some of the features. In this case, customers would have to switch to the legacy dashboard to invite candidates under a specific billing plan. Maintaining it adds unnecessary complexity to the overall product, requiring more engineering training.",
    solution: [
      "Wrote a new Django REST Api to add the missing workflow",
      "Built a React component with error handling and form data validation",
    ],
    techStack: ["Django REST Apis", "React with material UI", "PHP routing"],
    link: "",
    image: "images/invite.gif",
  },
  {
    title: "TSV data import support",
    value: [
      "Made it possible for customer support to import candidates in bulk, saving hours of manual work",
      "Eliminated the need to change the code every time a small format change occurs",
    ],
    problem:
      "WizeHire customer support team must be able to import job candidates from a variety of different sources. The format of the import data changes frequently, but the if data pipeline stops flowing, they cannot onboard new customers.",
    solution: [
      "Developed a file parser that would handle changes to the format, leaving the workflow uninterrupted.",
      "Built a TSV parser in PHP, utilizing regex for faster performance on large datasets",
      "Added a format validator with support for arbitrary number of columns",
      "Automated the process of checking whichever format is being uploaded (old Indeed, Breezy, etc...)",
      "Documented the code with a detailed article on Slab",
    ],
    techStack: [
      "PHP string parsing",
      "Modulo-based arbitrary column data extraction",
    ],
    link: "",
    image: "",
  },
];

const populateWorkExperience = () => {
  const container = document.getElementById("work-experience");
  container.innerHTML = ""; // Clear existing content
  workExperience.forEach((exp) => {
    const div = document.createElement("div");
    div.className = "experience-item";
    div.innerHTML = `
      <div class="experience-header">
        <div class="experience-logo">
          <img src="${exp.logosrc}" alt="${
      exp.company
    } logo" class="logo-image" />
        </div>
        <div class="experience-company">
          <h3 class="company-name">${exp.company}</h3>
        </div>
      </div>
      <div class="experience-details">
        <div class="title-duration">
          <p class="duration">${exp.location}<br/> ${exp.duration}</p>
          <h4 class="job-title">${exp.position}</h4>
        </div>
      </div>
      <div class="experience-responsibilities">
        <ul>
          ${exp.responsibilities
            .map((responsibility) => `<li>${responsibility}</li>`)
            .join("")}
        </ul>
      </div>
    `;
    container.appendChild(div);
  });
};

// Function to populate projects
const populateProjects = () => {
  const container = document.getElementById("projects");
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "sam-feature";
    div.innerHTML = `
            <div class="">
                <h3 class="project-title">${project.title}</h3>
                <p>

   <strong>Problem:<br/> </strong><br>${project.problem}<br/>
                    <br>
                  
               
                <strong>Solution: </strong>
                        <ul>
                            ${project.solution
                              .map((sol) => `<li>${sol}</li>`)
                              .join("")}
                        </ul>
              
                    <br>
                    <strong>Value:  <br/></strong>
                  
                        <ul>
                            ${project.value
                              .map((val) => `<li>${val}</li>`)
                              .join("")}
                        </ul>
                    <br>
                  ${
                    project.image &&
                    ` 
                    ${
                      project.link &&
                      ` <a href="${project.link}" target="_blank" rel="noopener noreferrer">`
                    }
                        <img src="${project.image}" alt="${
                      project.title
                    }" class="preview">
                    ${project.link && " </a>"}
                    `
                  }
                    <br>
                    <br/>
<strong>Tech to make it happen:</strong>
                        <ul>
                            ${project.techStack
                              .map((tech) => `<li>${tech}</li>`)
                              .join("")}
                        </ul>

                    ${
                      project.link &&
                      `<div style="text-align: center;">
                          <strong >
                            <a
                              href="${project.link}"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Check it out
                            </a>
                          </strong>
                          </div>
                     `
                    }

                </p>
            </div>
        `;
    container.appendChild(div);
  });
};

// Call the functions to populate the content
populateWorkExperience();
populateProjects();
