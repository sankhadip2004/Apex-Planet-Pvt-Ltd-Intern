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
    { title: "Doctor Booking System", tags:["Node","Express"], image:"images/image4.png", repo:"#"},
    { title: "IDragon Game", tags:["JS","Canvas"], image:"images/image5.png", repo:"#"}
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
