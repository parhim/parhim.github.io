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

const populateProjects = () => {
  const container = document.getElementById("projects");
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "sam-feature";
    div.innerHTML = `
            <div class="">
                <h3 class="project-title">${project.title}</h3>
                <p>
                <strong>Problem:
                <br/>
                 </strong>
                 <br>${project.problem}<br/>
                  <br/>
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

populateWorkExperience();
populateProjects();
