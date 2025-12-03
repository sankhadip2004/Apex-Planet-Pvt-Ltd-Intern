/* Basic interactive behavior:
   - menu toggle
   - project rendering + search
   - contact toast
   - year in footer
*/

document.addEventListener("DOMContentLoaded", () => {
  // menu
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("navLinks");
  menuBtn && menuBtn.addEventListener("click", () => nav.classList.toggle("show"));

  // smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
        nav.classList.remove('show');
      }
    })
  });

  // year
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- project data -----
  const projectData = [
    { title: "Job Listing Website", tags:["React","Tailwind"], image:"https://superdevresources.com/wp-content/uploads/2021/01/16_Jobster-Job-Board-HTML5.jpg", repo:"#"},
    { title: "Portfolio Website", tags:["HTML","CSS","JS"], image:"https://cdn.cmsfly.com/635bcad9b8a74e0091632998/images/screely1724170775613-EeO_2.png", repo:"#"},
    { title: "Doctor Booking System", tags:["Node","Express"], image:"data:image/jpeg;base64,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", repo:"#"},
    
  ];

  // render
  const projectsGrid = document.getElementById("projectsGrid");
  const noResult = document.getElementById("noResult");
  function renderProjects(list){
    projectsGrid.innerHTML = "";
    if(!list.length){
      noResult.style.display = "block"; return;
    } else { noResult.style.display = "none"; }
    list.forEach(p=>{
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}" />
        <div class="pc-body">
          <h3 style="margin:0 0 8px">${p.title}</h3>
          <div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <div style="margin-top:12px">
            <a class="project-link btn" href="${p.repo}" target="_blank">View</a>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }
  renderProjects(projectData);

  // search
  const searchInput = document.getElementById("searchInput");
  if(searchInput){
    searchInput.addEventListener('input', e=>{
      const q = e.target.value.toLowerCase().trim();
      const filtered = projectData.filter(p => p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q));
      renderProjects(filtered);
    });
  }

  // contact form toast
  const contactForm = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      toast.style.display = 'block';
      setTimeout(()=> toast.style.display = 'none', 3000);
      contactForm.reset();
    });
  }
});
