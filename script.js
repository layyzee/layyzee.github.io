// ==========================================================================
// Balaji Palani — SaaS Executive Interactive Telemetry & Sprint Engine
// ==========================================================================

// 1. 10-Day Sprint Cadence Telemetry Data
const sprintDays = {
  1: {
    phase: "PHASE: SPRINT KICKOFF",
    points: "REMAINING: 51 PTS",
    percent: "0% Completed",
    width: "0%",
    blockers: "0 Blockers Active",
    badge: "DAY 1 // SPRINT COMMITMENT & DOR LOCK",
    headline: "Automated DoR Gate Enforced & Sprint Backlog Locked",
    desc: "Facilitated sprint planning with 3 cross-functional squads. All 20+ user stories were pre-sliced with strict acceptance criteria verified through Jira automation. Capacity modeled around historical rolling velocity, avoiding over-commitment.",
    actions: [
      "Verified team member leaves and holiday schedules in Power BI dashboard.",
      "Aligned dependencies with upstream Payment Gateway teams.",
      "Secured shared QA and DevOps resource commitments."
    ]
  },
  2: {
    phase: "PHASE: EXECUTION IN PROGRESS",
    points: "REMAINING: 47 PTS",
    percent: "8% Completed",
    width: "8%",
    blockers: "0 Blockers Active",
    badge: "DAY 2 // DAILY STANDUP & SUB-TASK BURN",
    headline: "First Daily Standup (15-Min Timebox)",
    desc: "Strictly focused on sprint goal trajectory and immediate blockers. Developers selected top priority tasks from the sprint backlog without context-switching.",
    actions: [
      "Confirmed all high-priority user stories moved into 'In Progress'.",
      "Shielded engineers from extraneous stakeholder meeting invites.",
      "Set up pair programming sync for junior developers."
    ]
  },
  3: {
    phase: "PHASE: SCOPE SHIELDING",
    points: "REMAINING: 42 PTS",
    percent: "18% Completed",
    width: "18%",
    blockers: "1 Scope Creep Intercepted",
    badge: "DAY 3 // CHANGE PROTOCOL ACTIVATED",
    headline: "Intercepted Ad-Hoc Scope Request",
    desc: "Client executive requested an urgent mid-sprint feature. Instead of disrupting the active sprint, applied the Confluence Change Protocol: Product Owner agreed to swap out an equal 5-point story to protect team capacity.",
    actions: [
      "Protected sprint goal commitment without causing team friction.",
      "Documented swap trade-off in Confluence Change Log.",
      "Re-balanced sprint burndown velocity."
    ]
  },
  4: {
    phase: "PHASE: STEADY MOMENTUM",
    points: "REMAINING: 36 PTS",
    percent: "30% Completed",
    width: "30%",
    blockers: "0 Blockers Active",
    badge: "DAY 4 // ARCHITECTURAL SYNC",
    headline: "Deep Focus Flow & PR Reviews Moving",
    desc: "Burn velocity is on track with the ideal guideline. Reviewed PR review queues in GitHub to ensure pull requests don't sit unreviewed for more than 4 hours.",
    actions: [
      "Reduced PR review turnaround time from 24h to 4h.",
      "Engineers completed core API contract endpoints.",
      "DevOps staging deployment automated via CI/CD."
    ]
  },
  5: {
    phase: "PHASE: MID-SPRINT MILESTONE",
    points: "REMAINING: 28 PTS",
    percent: "45% Completed",
    width: "45%",
    blockers: "QA Dependency Escalated",
    badge: "DAY 5 // SCRUM OF SCRUMS ALIGNMENT",
    headline: "Escalated Cross-Squad QA Blocker",
    desc: "Detected a potential blocker with shared QA automation testing resources across the ART. Escalated in the daily Scrum of Scrums and negotiated dedicated QA coverage within 24 hours.",
    actions: [
      "Resolved cross-team dependency before it impacted delivery timeline.",
      "Maintained 48-hour resolution SLA.",
      "Updated cross-squad dependency tracker in Jira."
    ]
  },
  6: {
    phase: "PHASE: SPRINT ACCELERATION",
    points: "REMAINING: 22 PTS",
    percent: "57% Completed",
    width: "57%",
    blockers: "Blocker Resolved [Cleared]",
    badge: "DAY 6 // DEPENDENCY CLEARED",
    headline: "QA Resources Deployed & Testing Commenced",
    desc: "Shared QA resources deployed and test automation suite running smoothly. Zero mid-sprint blockers active.",
    actions: [
      "Verified regression test cases automated in CI/CD pipeline.",
      "Frontend and backend services integrated seamlessly.",
      "Burn curve strictly tracking ahead of schedule."
    ]
  },
  7: {
    phase: "PHASE: BACKLOG REFINEMENT",
    points: "REMAINING: 16 PTS",
    percent: "68% Completed",
    width: "68%",
    blockers: "0 Blockers Active",
    badge: "DAY 7 // FUTURE SPRINT REFINEMENT",
    headline: "Refined 20+ User Stories for Next Sprint",
    desc: "Facilitated bi-weekly refinement session with Product Owner and tech leads. Sliced incoming epic into sub-3-day stories with concrete acceptance criteria to ensure zero ambiguity for next sprint.",
    actions: [
      "Pre-screened upcoming sprint stories against DoR criteria.",
      "Estimated stories using Planning Poker technique.",
      "Identified upstream dependencies 2 weeks in advance."
    ]
  },
  8: {
    phase: "PHASE: CODE FREEZE & HARDENING",
    points: "REMAINING: 10 PTS",
    percent: "80% Completed",
    width: "80%",
    blockers: "0 Blockers Active",
    badge: "DAY 8 // CODE FREEZE & INTEGRATION",
    headline: "Core Features Integrated on Staging",
    desc: "All major user stories merged to main branch. Team transitioned from feature coding to edge-case validation and performance benchmarking.",
    actions: [
      "Monitored staging server performance on AWS ECS.",
      "Verified Definition of Done criteria on completed user stories.",
      "No new stories pulled into sprint backlog."
    ]
  },
  9: {
    phase: "PHASE: FINAL VERIFICATION",
    points: "REMAINING: 3 PTS",
    percent: "94% Completed",
    width: "94%",
    blockers: "0 Blockers Active",
    badge: "DAY 9 // PRE-RELEASE STAKEHOLDER DEMO",
    headline: "Pre-Release Verification & Stakeholder Sync",
    desc: "Dry-run demonstration of completed features. Stakeholders confirmed that user story acceptance criteria were 100% satisfied.",
    actions: [
      "Completed documentation in Confluence knowledge hub.",
      "Prepared release notes and demo flow.",
      "Final 3 points moving into 'Done' column."
    ]
  },
  10: {
    phase: "PHASE: SPRINT COMPLETE",
    points: "REMAINING: 0 PTS",
    percent: "100% Completed",
    width: "100%",
    blockers: "0 Blockers // All Targets Met",
    badge: "DAY 10 // SPRINT REVIEW & RETROSPECTIVE",
    headline: "100% On-Time Delivery & Actionable Retro",
    desc: "Sprint goal achieved with 51/51 Story Points burned. Facilitated a blameless, psychologically safe retrospective using the Sailboat technique, assigning 3 concrete improvement actions directly in Jira.",
    actions: [
      "Velocity confirmed at +20% above baseline average.",
      "Zero carried-forward user stories (spillover rate = 0%).",
      "Team morale rating: 4.8/5 on Health Check radar."
    ]
  }
};

let activeDayIndex = 1;

window.inspectDay = function(day) {
  const d = sprintDays[day];
  if (!d) return;

  activeDayIndex = day;

  // Update day buttons
  for (let i = 1; i <= 10; i++) {
    const btn = document.getElementById(`day-btn-${i}`);
    if (btn) {
      if (i === day) {
        btn.className = 'day-btn py-2.5 rounded-xl border border-blue-500 bg-blue-600/20 text-white font-mono text-xs font-bold transition-all text-center';
      } else {
        btn.className = 'day-btn py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 hover:text-white font-mono text-xs font-medium transition-all text-center';
      }
    }
  }

  // Update left telemetry visual card
  document.getElementById('burndown-phase').textContent = d.phase;
  document.getElementById('burndown-points').textContent = d.points;
  document.getElementById('burn-percent').textContent = d.percent;
  document.getElementById('burn-bar').style.width = d.width;
  document.getElementById('blocker-status').textContent = d.blockers;

  // Update right tactical report
  document.getElementById('day-badge').textContent = d.badge;
  document.getElementById('day-headline').textContent = d.headline;
  document.getElementById('day-desc').textContent = d.desc;

  const actionsList = document.getElementById('day-actions');
  if (actionsList) {
    actionsList.innerHTML = d.actions.map(act => `
      <li class="flex items-start gap-2">
        <span class="text-blue-400 font-bold">›</span>
        <span>${act}</span>
      </li>
    `).join('');
  }
};

window.stepDay = function(delta) {
  let nextDay = activeDayIndex + delta;
  if (nextDay < 1) nextDay = 10;
  if (nextDay > 10) nextDay = 1;
  window.inspectDay(nextDay);
};

// 2. Toast & 1-Click Clipboard Copy
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
      const origText = buttonElement.textContent;
      buttonElement.textContent = 'Copied!';
      setTimeout(() => {
        buttonElement.textContent = origText;
      }, 2000);
    }
  }).catch(() => {
    showToast('Failed to copy');
  });
};

// 3. Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Burndown on Day 1
  inspectDay(1);
});
