import * as data from './data.js'

renderProj()

function generateProjHTML(){
    let html = ""
    data.projects.forEach((proj)=>{
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
        `;
    })
    return html;
}
function renderProj(){
    const projListElem = document.querySelector('.projects-list')
    projListElem.innerHTML= generateProjHTML()
}