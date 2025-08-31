const projects = [
    {
        imgLink:"/CyNotesSamplePage1.png",
        projName:"CyNotes! - Your Trusty Note Taker",
        projDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque recusandae laboriosam, odio, beatae doloribus quos porro ipsam illo natus corrupti alias accusamus quae, ipsa assumenda laborum laudantium fuga delectus? At reiciendis cumque dolor labore, facilis commodi magni amet pariatur dignissimos itaque quis nemo exercitationem dolorum? Qui et, cupiditate quos itaque laboriosam quia quibusdam! Eius voluptatem adipisci voluptate deserunt voluptates exercitationem nesciunt ad, dignissimos vero sed accusantium cupiditate quasi ratione quis minus harum nam illo suscipit unde itaque, architecto maiores explicabo magni aliquam. Ut, tenetur. Voluptas aspernatur officia minus earum beatae debitis quos nemo, molestias obcaecati rem nam, veniam provident iure!",
        toolsUsed:[
            "React","Git"
        ],
        projLink:"",
    }
]

const skills = [
    {
        skillIcon:`<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.36 122.88" style="enable-background:new 0 0 108.36 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M0,0l9.86,110.59l44.25,12.29l44.37-12.3L108.36,0L0,0L0,0L0,0z M86.89,36.18h-51.9l1.24,13.89l49.43,0 l-3.72,41.64l-27.82,7.71l-27.79-7.71l-1.9-21.31h13.62l0.97,10.83l15.11,4.07l0.03-0.01l15.11-4.08l1.57-17.59l-47.01,0 l-3.65-41.02h67.94L86.89,36.18L86.89,36.18L86.89,36.18L86.89,36.18z"/></g></svg>`,
        skillName:"HTML",
        skillDesc:"Description about the skill goes here.",
        skillProg:80
    }
]

const services = [
    {
        serviceIcon:`<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.36 122.88" style="enable-background:new 0 0 108.36 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M0,0l9.86,110.59l44.25,12.29l44.37-12.3L108.36,0L0,0L0,0L0,0z M86.89,36.18h-51.9l1.24,13.89l49.43,0 l-3.72,41.64l-27.82,7.71l-27.79-7.71l-1.9-21.31h13.62l0.97,10.83l15.11,4.07l0.03-0.01l15.11-4.08l1.57-17.59l-47.01,0 l-3.65-41.02h67.94L86.89,36.18L86.89,36.18L86.89,36.18L86.89,36.18z"/></g></svg>`,
        serviceName:"HTML",
        serviceDesc:"Description about the service goes here."
    }
]

renderLists()

function generateProjHTML(){
    let html = ""
    projects.forEach((proj)=>{
        html += `
            <div class="project-box">
                    <figure class="project-image-container">
                        <img src="${proj.imgLink}" alt="" class="project-image">
                    </figure>
                    <div class="project-content">
                        <h2 class="project-title">${proj.projName}</h2>
                        <p class="project-description">${proj.projDesc}</p>
                        <p class="project-tools-used">
                            <strong>Tools Used:</strong> ${proj.toolsUsed.join(", ")}
                        </p>
                        <a href="#" class="project-link">
                            <button onclick="
                                window.location.href = '${proj.projLink}'
                            " class="go-to-project-btn btn">
                                Go To Project
                            </button>
                        </a>
                    </div>
                </div>
        `
    })
    return html;
}

function generateSkillsHTML(){
    let html = ""
    skills.forEach((skill)=>{
        html += `
            <div class="skill-box">
                <div class="skill-top">
                    <figure class="skill-icon">
                        ${skill.skillIcon}
                    </figure>
                    <div class="skill-text">
                        <h2 class="skill-name">
                            ${skill.skillName}
                        </h2>
                        <p class="skill-desc">
                            ${skill.skillDesc}
                        </p>
                    </div>
                </div>
                <div class="skill-bottom">
                    <div class="skill-progress-bar">
                        <div class="bar-outline">
                            <div class="bar-fill" style="width:${skill.skillProg}%"></div>
                        </div>
                    </div>
                    <p class="progress-text">${skill.skillProg}%</p>
                </div>
                
            </div>
        `
    })
    return html;
}

function generateServicesHTML(){
    let html = ""
    services.forEach((service)=>{
        html += `
            <div class="service-box">
                    <div class="service-top">
                        <figure class="service-icon">
                            ${service.serviceIcon}
                        </figure>
                        <div class="service-text">
                            <h2 class="service-name">
                                ${service.serviceName}
                            </h2>
                            <p class="service-desc">
                                ${service.serviceDesc}
                            </p>
                        </div>
                    </div>
                </div>
        `
    })
    return html;
}

function renderProj(){
    const projListElem = document.querySelector('.projects-list')
    projListElem.innerHTML= generateProjHTML()
}

function renderSkills(){
    const skillsListElem = document.querySelector('.skills-list')
    skillsListElem.innerHTML= generateSkillsHTML()
}

function renderServices(){
    const servicesListElem = document.querySelector('.services-list')
    servicesListElem.innerHTML= generateServicesHTML()
}

function renderLists(){
    renderProj()
    renderSkills()
    renderServices()
}