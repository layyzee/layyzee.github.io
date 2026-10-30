// ==========================================================================
// Balaji Palani — Dribbble / Framer-Tier Interactive Scripts
// Live Mumbai Clock, Spotlight Physics, Company Switcher & Playbook Engine
// ==========================================================================

// 1. Live Mumbai Time Clock (IST UTC+5:30)
function updateLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  const now = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST';
}
setInterval(updateLiveClock, 1000);
updateLiveClock();

// 2. Company Experience Data & Interactive Switcher
const companies = [
  {
    role: "Senior Scrum Master",
    company: "MITS Global Consulting",
    client: "UK BFSI & FinTech Programme",
    period: "07/2024 – 03/2026",
    badge: "Current Role",
    bullets: [
      "<strong>Multi-Team Delivery:</strong> Managed 3 cross-functional Scrum teams (8–9 members each) across BFSI and FinTech products, resolving dependencies and enabling on-time product delivery for key milestones.",
      "<strong>Jira Automation & DoR/DoD:</strong> Implemented Definition of Ready and Definition of Done via Jira automation, <strong>reducing sprint planning time by 30%</strong> and eliminating unclear requirements.",
      "<strong>Velocity Growth:</strong> Increased sprint velocity by <strong>20% over two quarters</strong> by enhancing retrospective effectiveness and diligently tracking action items.",
      "<strong>Scrum Master Mentorship:</strong> Coached two Scrum Masters on team health check assessments and retrospective redesigns, boosting team engagement by <strong>30%</strong> and sprint success rates by <strong>25%</strong>.",
      "<strong>Dependency Resolution:</strong> Collaborated with 5+ client executives, product & infrastructure teams, and vendors to track 30+ dependencies, resolving blockers within <strong>48 hours</strong>."
    ],
    tags: ["Jira Automation", "Confluence (100+ Docs)", "Power BI Dashboards", "UK BFSI", "Capacity Planning", "Sprint Retrospectives"]
  },
  {
    role: "SAFe Scrum Master",
    company: "Incedo Inc",
    client: "Verizon (Telecom Enterprise)",
    period: "09/2023 – 03/2024",
    badge: "Telecom ART",
    bullets: [
      "<strong>SAFe Delivery Execution:</strong> Led an Agile team of 8–10 members in Verizon's SAFe delivery model, improving delivery predictability by <strong>30%</strong> and velocity by <strong>15%</strong>.",
      "<strong>PI Planning Facilitation:</strong> Coordinated objectives, dependencies, and risks for <strong>two PI Planning events</strong> involving 5 cross-functional teams across the Agile Release Train (ART).",
      "<strong>Scrum of Scrums (SoS):</strong> Participated in Scrum of Scrums to align with 5+ cross-functional teams on the ART, proactively identifying and escalating cross-team impediments.",
      "<strong>Backlog Refinement:</strong> Facilitated bi-weekly backlog refinements with Product Owners, ensuring 20+ user stories were defined and prioritized ahead of sprint planning.",
      "<strong>Stakeholder Communication:</strong> Delivered bi-weekly sprint status updates and reports to 10+ stakeholders, enabling rapid adjustments to project direction."
    ],
    tags: ["SAFe 6.0", "PI Planning", "Scrum of Scrums", "Agile Release Train", "Verizon Telecom", "Backlog Refinement"]
  },
  {
    role: "Scrum Master",
    company: "CDP360 Technologies Pvt Ltd",
    client: "E-Commerce, EdTech, FinTech & Digital Assets",
    period: "06/2022 – 07/2023",
    badge: "International",
    bullets: [
      "<strong>Multi-Project Delivery:</strong> Managed 6 developers and 2 QA engineers across international client projects, successfully delivering <strong>6 full projects</strong>.",
      "<strong>Release Velocity:</strong> Increased software release delivery speed by <strong>20% in 6 months</strong> by implementing Agile best practices for a cross-functional team.",
      "<strong>Minimized Scope Changes:</strong> Defined user stories with crystal-clear acceptance criteria, reducing mid-sprint scope changes by <strong>30%</strong> and carried-forward stories from <strong>10 to 3 per sprint</strong>.",
      "<strong>Mobile & Cloud Architecture:</strong> Guided a team of 5 through mobile app development using React Native and managed AWS deployments on <strong>S3, Amplify, and ECS</strong>.",
      "<strong>Workflow Optimization:</strong> Developed and implemented new Jira and Trello workflows for a team of 15 members, eliminating visibility bottlenecks."
    ],
    tags: ["React Native", "AWS (S3, Amplify, ECS)", "Jira & Trello Workflows", "Scope Control", "Mobile & Web"]
  },
  {
    role: "Frontend Developer & Agile Lead",
    company: "Azure Soft Tech Solutions",
    client: "Engineering & Cloud Foundation",
    period: "12/2018 – 05/2022",
    badge: "Engineering Roots",
    bullets: [
      "<strong>Web & Mobile Architecture:</strong> Designed and developed <strong>15+ web and mobile applications</strong> using React.js and React Native with Redux and Webpack, improving user engagement by <strong>40%</strong> and reducing load times by <strong>25%</strong>.",
      "<strong>Cloud Infrastructure:</strong> Managed over <strong>10 AWS deployments</strong> using S3, Amplify, and ECS, successfully transitioning applications from development to production.",
      "<strong>Agile Facilitation Lead:</strong> Led Agile sprint cycles for a cross-functional team of 8 developers on 5+ React projects, utilizing Jira to achieve a <strong>30% decrease in sprint cycle time</strong>.",
      "<strong>Engineering Sprint Planning:</strong> Led sprint planning sessions leveraging deep frontend expertise, boosting team participation by <strong>25%</strong> across 3 cross-functional teams."
    ],
    tags: ["React.js", "React Native", "AWS Cloud", "Redux", "Webpack", "Sprint Planning", "Technical Lead"]
  }
];

window.selectCompany = function (index) {
  const comp = companies[index];
  if (!comp) return;

  // Update button tabs
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`comp-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.className = 'company-tab px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all bg-blue-600 text-white shadow-md shadow-blue-600/30';
      } else {
        btn.className = 'company-tab px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all bg-white/5 text-slate-400 hover:text-white border border-white/5';
      }
    }
  }

  // Render company details
  const display = document.getElementById('company-display');
  if (display) {
    display.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
        <div>
          <h3 class="text-xl font-display font-bold text-white">${comp.role}</h3>
          <div class="text-xs text-blue-400 font-mono mt-0.5">${comp.company} <span class="text-slate-500">• ${comp.client}</span></div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">${comp.period}</span>
          <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">${comp.badge}</span>
        </div>
      </div>
      <ul class="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
        ${comp.bullets.map(b => `
          <li class="flex items-start gap-2.5">
            <span class="text-blue-400 font-bold mt-0.5">›</span>
            <span>${b}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Render tags
  const tagsEl = document.getElementById('company-tags');
  if (tagsEl) {
    tagsEl.innerHTML = comp.tags.map(t => `<span class="pill-tag">${t}</span>`).join('');
  }
};

// 3. Playbook Scenario Data & Switcher
const playbookScenarios = [
  {
    title: "15+ Mid-Sprint Requests Derailing Release Goals",
    desc: "Stakeholders submitting ad-hoc requirements mid-sprint without clear acceptance criteria, causing context switching, developer burnout, and 10+ carried-forward stories.",
    risk: "High churn, unpredictable sprint commitments, team frustration.",
    solution: "DoR Enforcement & Automated Jira Change Protocol",
    steps: [
      "Configured automated <strong>Definition of Ready (DoR)</strong> validation gates in Jira before any ticket can enter Sprint Planning.",
      "Established a formalized change protocol on Confluence: Product Owners trade off equal story points for emergency scope additions.",
      "Facilitated weekly user story slicing sessions with developers to cut oversized stories into sub-3-day estimable increments."
    ],
    tools: "Jira Automation • Confluence Change Hub • Story Slicing",
    stat: "-30%",
    statLabel: "Planning Overhead Cut",
    statDetail: "Carried-forward stories dropped from 10 down to 3 per sprint; team delivery predictability increased by 30%."
  },
  {
    title: "5 Cross-Functional Teams Blocked Across the ART",
    desc: "Multiple Scrum squads on Verizon's SAFe Agile Release Train were continuously blocked by shared QA and DevOps dependencies, stalling releases.",
    risk: "Missed enterprise Telecom rollout windows, cross-team silos.",
    solution: "Synchronized Scrum of Scrums & Dependency Mapping",
    steps: [
      "Facilitated objectives and inter-team dependencies for two enterprise <strong>Program Increment (PI) Planning</strong> events.",
      "Established daily <strong>Scrum of Scrums (SoS)</strong> risk escalation pathways to surface cross-team blockers early.",
      "Created a shared cross-team resource allocation tracker aligning QA and DevOps allocation across all 5 squads."
    ],
    tools: "SAFe 6.0 • PI Planning • Scrum of Scrums • ART Board",
    stat: "-40%",
    statLabel: "Mid-Sprint Blockers Cut",
    statDetail: "Cross-team impediments resolved within <strong>48 hours</strong>; overall release delivery speed accelerated by 15%."
  },
  {
    title: "Stagnant Velocity & Disengaged Team Retrospectives",
    desc: "Retrospectives had become repetitive 'tick-box' meetings with zero follow-through on action items, causing velocity to plateau.",
    risk: "Complacency, declining sprint commitment reliability.",
    solution: "Retrospective Redesign & Team Health Check Audits",
    steps: [
      "Revamped retrospective formats using Sailboat and 4Ls techniques, tying each action item directly to a Jira owner.",
      "Introduced bi-weekly anonymous <strong>Team Health Check</strong> radar assessments to track psychological safety.",
      "Coached two junior Scrum Masters across the programme on facilitation techniques and agile coaching practices."
    ],
    tools: "Agile Coaching • Team Health Checks • Retrospective Frameworks",
    stat: "+20%",
    statLabel: "Sustained Velocity Surge",
    statDetail: "Team engagement increased by <strong>30%</strong> and sprint goal success rates climbed by <strong>25%</strong> over 2 quarters."
  },
  {
    title: "Capacity Burnout & Frequent Over-Commitment",
    desc: "Teams consistently over-committed during sprint planning due to optimistic estimations and failure to account for holidays, leaves, and unexpected bug fixes.",
    risk: "Developer burnout, incomplete user stories, missed client deadlines.",
    solution: "Data-Driven Capacity Dashboards in Power BI & Jira",
    steps: [
      "Instituted historical velocity rolling averages instead of gut-feel point estimations during sprint planning sessions.",
      "Built unified <strong>Jira & Power BI capacity dashboards</strong> factoring in developer time-off and maintenance buffer margins.",
      "Coached Product Owners on setting realistic sprint goals that shielded core architecture work from scope creep."
    ],
    tools: "Power BI Dashboards • Jira Capacity Analytics • Rolling Velocity",
    stat: "70%",
    statLabel: "Spillover Reduction",
    statDetail: "Reduced instances of over-commitment by <strong>20%</strong> and achieved 100% on-time milestone delivery for UK BFSI clients."
  }
];

window.switchPlaybook = function (index) {
  const p = playbookScenarios[index];
  if (!p) return;

  // Update tabs
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`pb-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.className = 'playbook-tab p-4 rounded-2xl bg-blue-600 text-white font-bold text-xs text-left shadow-lg shadow-blue-600/30 transition-all';
        btn.querySelector('span').className = 'block text-blue-200 text-[10px] font-mono uppercase mb-1';
      } else {
        btn.className = 'playbook-tab p-4 rounded-2xl bg-white/5 text-slate-400 hover:text-white font-semibold text-xs text-left border border-white/5 transition-all';
        btn.querySelector('span').className = 'block text-slate-500 text-[10px] font-mono uppercase mb-1';
      }
    }
  }

  // Update content
  document.getElementById('pb-title').textContent = p.title;
  document.getElementById('pb-desc').textContent = p.desc;
  document.getElementById('pb-risk').textContent = `Risk: ${p.risk}`;
  document.getElementById('pb-solution').textContent = p.solution;
  document.getElementById('pb-steps').innerHTML = p.steps.map((s, idx) => `
    <li class="flex items-start gap-2">
      <span class="text-blue-400 font-bold font-mono">${idx + 1}.</span>
      <span>${s}</span>
    </li>
  `).join('');
  document.getElementById('pb-tools').textContent = `Tools: ${p.tools}`;
  document.getElementById('pb-stat').textContent = p.stat;
  document.getElementById('pb-stat-label').textContent = p.statLabel;
  document.getElementById('pb-stat-detail').innerHTML = p.statDetail;
};

// 4. Cursor Spotlight Physics for Bento Cards
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.bento-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 5. Toast & Copy to Clipboard
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}

window.copyToClipboard = function (text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${text}`);
    if (buttonElement) {
      const orig = buttonElement.innerHTML;
      buttonElement.innerHTML = `<span>Copied!</span>`;
      setTimeout(() => {
        buttonElement.innerHTML = orig;
      }, 2000);
    }
  }).catch(() => {
    showToast('Failed to copy');
  });
};

// Initialize First Tabs on Load
document.addEventListener('DOMContentLoaded', () => {
  selectCompany(0);
  switchPlaybook(0);
});
