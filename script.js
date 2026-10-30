// ==========================================================================
// Balaji Palani - Senior Scrum Master Portfolio Scripts
// Interactive Agile Simulator, Audience Lens Engine, and Clipboard Utilities
// ==========================================================================

// 1. Data Store for Real-World Scenarios
const scenarios = [
  {
    title: "15+ Mid-Sprint Requests Derailing Release Goals",
    desc: "Stakeholders submitting ad-hoc requirements mid-sprint without clear acceptance criteria, causing context switching, dev burnout, and 10+ carried-forward stories every cycle.",
    risk: "High churn, unpredictable sprint commitments, demotivated engineers.",
    solutionTitle: "DoR Enforcement & Automated Jira Change Protocol",
    steps: [
      "Implemented strict <strong>Definition of Ready (DoR)</strong> automated validation rules in Jira before tickets can enter Sprint Planning.",
      "Established a formalized change protocol on Confluence, requiring Product Owners to trade off equal story points for urgent additions.",
      "Ran weekly user story slicing sessions with developers to dissect complex tasks into sub-3-day estimable chunks."
    ],
    tools: "Jira Automation • Confluence Hub • Story Slicing",
    stat: "-30%",
    statLabel: "Planning Overhead Cut",
    statDetail: "Carried-forward stories plunged from <strong>10 down to 3 per sprint</strong>, while team predictability soared by 30%."
  },
  {
    title: "5 Cross-Functional Teams Blocked Across the ART",
    desc: "Multiple Scrum teams on Verizon's SAFe Agile Release Train were continuously blocked by shared QA and DevOps dependencies, creating critical deployment delays.",
    risk: "Missed Telecom release windows, cross-team blame culture.",
    solutionTitle: "Synchronized Scrum of Scrums & Dependency Mapping",
    steps: [
      "Coordinated objectives and inter-team dependencies for two enterprise <strong>Program Increment (PI) Planning</strong> events.",
      "Established a daily <strong>Scrum of Scrums (SoS)</strong> risk escalation channel to surface impediments before they impacted release milestones.",
      "Created a shared cross-team resource tracker aligning QA and DevOps allocation across all 5 squads."
    ],
    tools: "SAFe 6.0 • PI Planning • Scrum of Scrums • ART Board",
    stat: "-40%",
    statLabel: "Mid-Sprint Blockers Cut",
    statDetail: "Cross-team impediments resolved within <strong>48 hours</strong>, accelerating release delivery speed by 15%."
  },
  {
    title: "Stagnant Velocity & Disengaged Team Retrospectives",
    desc: "Retrospectives had become repetitive 'tick-box' meetings with zero follow-through on action items, causing velocity to stagnate and morale to drop.",
    risk: "Complacency, declining sprint commitment reliability.",
    solutionTitle: "Retrospective Redesign & Team Health Check Audits",
    steps: [
      "Revamped retrospective formats using Sailboat and 4Ls techniques, tying each action item directly to a Jira owner.",
      "Introduced bi-weekly anonymous <strong>Team Health Check</strong> radar assessments to track psychological safety and delivery friction.",
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
    solutionTitle: "Data-Driven Capacity Dashboards in Power BI & Jira",
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

// 2. Scenario Switcher Function
window.switchScenario = function (index) {
  const data = scenarios[index];
  if (!data) return;

  // Update tabs
  for (let i = 0; i < 4; i++) {
    const tab = document.getElementById(`scen-tab-${i}`);
    if (tab) {
      if (i === index) {
        tab.className = 'scenario-tab p-3.5 rounded-xl border border-blue-500 bg-blue-600/20 text-white font-bold text-xs text-left transition-all';
        tab.querySelector('span').className = 'block text-blue-400 text-[10px] uppercase font-mono mb-1';
      } else {
        tab.className = 'scenario-tab p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white font-semibold text-xs text-left transition-all';
        tab.querySelector('span').className = 'block text-slate-500 text-[10px] uppercase font-mono mb-1';
      }
    }
  }

  // Update content
  document.getElementById('scen-title').textContent = data.title;
  document.getElementById('scen-desc').textContent = data.desc;
  document.getElementById('scen-risk').textContent = `Risk: ${data.risk}`;

  document.getElementById('scen-solution-title').textContent = data.solutionTitle;
  const stepsList = document.getElementById('scen-steps');
  if (stepsList) {
    stepsList.innerHTML = data.steps.map((s, idx) => `
      <li class="flex items-start gap-2">
        <span class="text-blue-400 font-bold">${idx + 1}.</span>
        <span>${s}</span>
      </li>
    `).join('');
  }
  document.getElementById('scen-tools').textContent = `Tools Used: ${data.tools}`;

  const statEl = document.getElementById('scen-stat');
  if (statEl) {
    statEl.textContent = data.stat;
    statEl.className = 'text-3xl font-extrabold font-mono my-2 text-emerald-400';
  }
  document.getElementById('scen-stat-label').textContent = data.statLabel;
  document.getElementById('scen-stat-detail').innerHTML = data.statDetail;
};

// 3. Audience Lens Switcher (Executive vs Engineering)
window.setAudienceLens = function (lens) {
  const btnExec = document.getElementById('lens-exec');
  const btnTech = document.getElementById('lens-tech');
  const pitch = document.getElementById('hero-pitch');

  if (lens === 'tech') {
    btnTech?.classList.add('bg-blue-600', 'text-white');
    btnTech?.classList.remove('text-slate-400');
    btnExec?.classList.remove('bg-blue-600', 'text-white');
    btnExec?.classList.add('text-slate-400');

    if (pitch) {
      pitch.innerHTML = `Engineering-fluent Senior Scrum Master with <strong class="text-white font-semibold">4 years of hands-on React & AWS development experience</strong>. I speak your developers' language, understand technical debt and CI/CD pipelines, and shield engineers from useless meetings to maximize uninterrupted focus time.`;
    }
    showToast('Engineering Lens Activated: Highlighting technical empathy & developer ergonomics.');
  } else {
    btnExec?.classList.add('bg-blue-600', 'text-white');
    btnExec?.classList.remove('text-slate-400');
    btnTech?.classList.remove('bg-blue-600', 'text-white');
    btnTech?.classList.add('text-slate-400');

    if (pitch) {
      pitch.innerHTML = `Senior Scrum Master with <strong class="text-white font-semibold">7+ years of IT experience</strong> and <strong class="text-white font-semibold">4+ years leading cross-functional Agile teams</strong> across Global BFSI, FinTech, and Telecom. Backed by a Computer Science degree, CSM® and SAFe® 6 SSM credentials, delivering predictability, risk mitigation, and +20% velocity.`;
    }
    showToast('Business Lens Activated: Highlighting delivery predictability, governance, and capacity ROI.');
  }
};

// 4. Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Navbar Scroll Shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('shadow-2xl', 'bg-[#070b12]/95');
      navbar?.classList.remove('bg-[#070b12]/85');
    } else {
      navbar?.classList.remove('shadow-2xl', 'bg-[#070b12]/95');
      navbar?.classList.add('bg-[#070b12]/85');
    }
  });
});

// 5. Toast Notifications
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
  }, 3000);
}

// 6. Copy to Clipboard
window.copyToClipboard = function (text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${text} to clipboard!`);
    if (buttonElement) {
      const orig = buttonElement.textContent;
      buttonElement.textContent = 'Copied!';
      setTimeout(() => {
        buttonElement.textContent = orig;
      }, 2000);
    }
  }).catch(() => {
    showToast('Failed to copy');
  });
};

// 7. Contact Email Handler
window.handleContactSubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById('sender-name')?.value || '';
  const subject = document.getElementById('sender-subject')?.value || '';
  const message = document.getElementById('sender-message')?.value || '';

  const body = encodeURIComponent(
    `Hello Balaji,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}`
  );
  const sub = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);

  window.location.href = `mailto:balajinia@gmail.com?subject=${sub}&body=${body}`;
  showToast('Opening your email application...');
};
