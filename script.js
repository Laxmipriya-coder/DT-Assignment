function toggleBar(){
  document.getElementById("sideBar").classList.toggle("open");
}
const projectData = {
  title: "Technical Project Management",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure Your Pointers",
          asset_description:
            "Write a 400–500 word article from your thread.",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content_type: "accordion",
        },
      ],
    },
  ],
};

const task = projectData.tasks[0];

document.getElementById("projectTitle").innerText = projectData.title;
document.getElementById("taskTitle").innerText = task.task_title;
document.getElementById("taskDesc").innerText = task.task_description;

const sidebarList = document.getElementById("sidebarList");
task.assets.forEach(asset => {
  const li = document.createElement("li");
  li.innerText = asset.asset_title;
  sidebarList.appendChild(li);
});

function createAssetCard(asset) {
  let content = "";

  if (asset.asset_content_type === "video") {
    content = `<iframe src="${asset.asset_content}" allowfullscreen></iframe>`;
  }

  if (asset.asset_content_type === "threadbuilder") {
    content = `
      <h4>Thread A</h4>
      <div class="thread-row">
        <div>
          <label>Sub Thread</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Sub Interpretation</label>
          <textarea></textarea>
        </div>
      </div>
      <button class="sub-thread-btn">+ Sub thread</button>
      <label>Summary</label>
      <textarea></textarea>
    `;
  }

  if (asset.asset_content_type === "article") {
    content = `
      <label>Title</label>
      <input type="text">
      <label>Content</label>
      <textarea class="editor"></textarea>
    `;
  }

  if (asset.asset_content_type === "accordion") {
    content = `
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <span>Introduction</span>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
        <div class="accordion-content show">
          <p>The 4SA Method explains structured thinking.</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="card">
      <div class="card-header">
        <span>${asset.asset_title}</span>
        <i class="fa-solid fa-circle-info"></i>
      </div>
      <div class="card-body">
        <p class="description">
          <strong>Description:</strong> ${asset.asset_description}
        </p>
        ${content}
      </div>
    </div>
  `;
}
const assetGrid = document.getElementById("assetGrid");

task.assets.forEach(asset => {
  assetGrid.innerHTML += createAssetCard(asset);
});
function toggleAccordion(header) {
  header.nextElementSibling.classList.toggle("show");
}

function toggleBar() {
  document.getElementById("sideBar").classList.toggle("open");
}
