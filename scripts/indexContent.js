import * as data from './data.js'

renderLists()

function generateProjHomeHTML(){
    let html = ""
    let count = 1
    data.projects.forEach((proj)=>{
        if(count <= 3){
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
            count++
        }
    })
    return html;
}

function generateSkillsHTML(){
    let html = ""
    data.skills.forEach((skill)=>{
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
    data.services.forEach((service)=>{
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
    projListElem.innerHTML= generateProjHomeHTML()
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