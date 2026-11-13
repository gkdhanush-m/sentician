<?php
declare(strict_types=1);

$pageTitle = 'AI Solutions — Sentician Organization OS';
$pageDescription = 'Explore our suite of AI-driven Organization OS solutions: Talent Acquisition & Intelligence, Workforce & Employee Management, and Growth, Performance & Intelligence.';
$activePage = 'services';

require_once __DIR__ . '/includes/header.php';

$solutionsData = [
    'talent-acquisition' => [
        'slug' => 'talent-acquisition',
        'title' => 'Talent Acquisition & Intelligence',
        'short_title' => 'Talent Acquisition',
        'hero_sub' => 'Attract, evaluate, and hire top talent faster with intelligent pipelines.',
        'summary' => 'Transform the way you attract, evaluate, and hire talent. Manage your entire recruitment lifecycle with intelligent tools designed to find the right people faster.',
        'right_heading' => 'Hire Smarter. Build Stronger Teams.',
        'bullets' => [
            'Applicant Tracking System (ATS)',
            'Talent CRM & AI-Powered Recruitment',
            'Candidate Management',
            'Interview & Selection',
            'Recruitment Analytics',
        ],
        'banner' => 'assets/images/solution-banner-1.webp',
        'features_heading' => 'Hire Smarter. Build Stronger Teams.',
        'features' => [
            [
                'title' => 'Applicant Tracking System (ATS)',
                'desc' => 'Centralize job requisitions, multi-channel postings, and candidate pipelines in one unified AI-native workspace built for high-velocity hiring teams.',
                'img' => 'assets/images/solution-feat-1.webp',
            ],
            [
                'title' => 'AI-Powered Recruitment & Talent CRM',
                'desc' => 'Automatically source, match, and nurture passive and active candidates using contextual skill graphs and intelligent outreach sequences.',
                'img' => 'assets/images/solution-feat-2.webp',
            ],
            [
                'title' => 'Candidate Management & Interviewing',
                'desc' => 'Coordinate panel schedules, structured interview scorecards, and automated candidate communications without manual back-and-forth.',
                'img' => 'assets/images/solution-feat-3.webp',
            ],
            [
                'title' => 'Recruitment Analytics',
                'desc' => 'Track time-to-hire, source quality, funnel conversion, and diversity metrics in real time with actionable AI forecasting.',
                'img' => 'assets/images/solution-feat-4.webp',
            ],
        ],
        'why_title' => 'Why AI for Talent Acquisition?',
    ],
    'workforce-management' => [
        'slug' => 'workforce-management',
        'title' => 'Workforce & Employee Management',
        'short_title' => 'Workforce Management',
        'hero_sub' => 'Simplify onboarding, attendance, payroll, and HR operations in one OS.',
        'summary' => 'Bring your entire employee lifecycle under one roof. Automate workforce operations, simplify administration, and create a seamless employee experience.',
        'right_heading' => 'Manage Your People. Simplify Every Process.',
        'bullets' => [
            'Employee Onboarding',
            'Attendance Management',
            'Leave Management',
            'Payroll Processing',
            'Employee Records & HR Operations',
        ],
        'banner' => 'assets/images/solution-banner-2.webp',
        'features_heading' => 'Manage Your People. Simplify Every Process.',
        'features' => [
            [
                'title' => 'Automated Employee Onboarding',
                'desc' => 'Deliver personalized day-one onboarding journeys—provisioning accounts, collecting compliance documents, and assigning role checklists automatically.',
                'img' => 'assets/images/solution-feat-1.webp',
            ],
            [
                'title' => 'Attendance & Leave Management',
                'desc' => 'Track global shifts, hybrid attendance, and time-off requests with policy-aware approvals and instant calendar synchronization.',
                'img' => 'assets/images/solution-feat-2.webp',
            ],
            [
                'title' => 'Payroll Processing & Compliance',
                'desc' => 'Eliminate manual spreadsheet errors with automated payroll runs, tax calculations, expense reimbursements, and audit-ready ledgers.',
                'img' => 'assets/images/solution-feat-3.webp',
            ],
            [
                'title' => 'Unified Employee Records & HR Ops',
                'desc' => 'Maintain a single source of truth for employee directories, compensation history, and role-scoped document governance.',
                'img' => 'assets/images/solution-feat-4.webp',
            ],
        ],
        'why_title' => 'Why AI for Workforce OS?',
    ],
    'growth-intelligence' => [
        'slug' => 'growth-intelligence',
        'title' => 'Growth, Performance & Intelligence',
        'short_title' => 'Growth & Intelligence',
        'hero_sub' => 'Turn workforce data into continuous learning, performance, and growth.',
        'summary' => 'Build a culture of continuous learning and measurable performance. Turn workforce data into meaningful insights and help your organization grow smarter.',
        'right_heading' => 'Empower People. Accelerate Organizational Growth.',
        'bullets' => [
            'Learning & Development',
            'Performance Management',
            'Employee Engagement',
            'Workforce Analytics',
            'HR Automation & AI-Powered Insights',
        ],
        'banner' => 'assets/images/solution-banner-3.webp',
        'features_heading' => 'Empower People. Accelerate Organizational Growth.',
        'features' => [
            [
                'title' => 'Learning & Development Pathways',
                'desc' => 'Deliver AI-curated training modules, skill certifications, and career progression roadmaps tailored to every employee’s role.',
                'img' => 'assets/images/solution-feat-1.webp',
            ],
            [
                'title' => 'Continuous Performance Management',
                'desc' => 'Run structured OKRs, 360-degree reviews, and continuous feedback cycles with AI-assisted goal tracking and calibration.',
                'img' => 'assets/images/solution-feat-2.webp',
            ],
            [
                'title' => 'Employee Engagement & HR Automation',
                'desc' => 'Capture real-time team sentiment through pulse surveys and automate routine HR workflows so leaders can focus on people.',
                'img' => 'assets/images/solution-feat-3.webp',
            ],
            [
                'title' => 'Workforce Analytics & AI Insights',
                'desc' => 'Transform attrition, productivity, and capacity data into predictive executive insights with built-in governance and privacy.',
                'img' => 'assets/images/solution-feat-4.webp',
            ],
        ],
        'why_title' => 'Why AI for Growth & Intelligence?',
    ],
];

$selectedSlug = isset($_GET['solution']) ? trim((string) $_GET['solution']) : '';
$activeSolution = isset($solutionsData[$selectedSlug]) ? $solutionsData[$selectedSlug] : null;

$useCasesBySolution = [
    'talent-acquisition' => [
        'sourcing' => [
            'tab' => 'Sourcing & CRM',
            'heading' => 'Sourcing & Talent CRM use cases',
            'desc' => 'Enable recruiting teams to deploy Sentician AI agents across ATS, Talent CRM, and job boards to discover passive candidates, enrich profiles, and launch personalized outreach.',
            'checks' => [
                'Screen and rank applicants automatically with AI',
                'Re-engage warm talent pools from previous requisitions',
                'Eliminate duplicate profiles and stale ATS records',
            ],
            'prompt' => 'Shortlist top senior backend candidates and draft tailored outreach sequences',
            'response_title' => 'Overview',
            'response_body' => 'Evaluated 142 applicants against the backend engineering rubric. Top 5 candidates matched with 94%+ technical alignment and outreach drafts are ready for review.',
            'response_date' => 'Thursday, September 23 — 2:00 PM EST',
        ],
        'interviewing' => [
            'tab' => 'Interviewing',
            'heading' => 'Interview & Selection use cases',
            'desc' => 'Automate panel scheduling, structured interview scorecards, and real-time candidate debrief summaries so hiring managers make faster, bias-free decisions.',
            'checks' => [
                'Coordinate multi-timezone panel availability in seconds',
                'Generate role-specific interview rubrics & scorecards',
                'Synthesize interviewer feedback into clear hiring briefs',
            ],
            'prompt' => 'Schedule final panel interviews for top 3 staff engineer finalists next week',
            'response_title' => 'Overview',
            'response_body' => 'Confirmed 4 interviewer calendars across San Francisco and London. Generated structured architecture scorecards and sent calendar invites to all finalists.',
            'response_date' => 'Tuesday, September 28 — 11:00 AM EST',
        ],
        'analytics' => [
            'tab' => 'Hiring Analytics',
            'heading' => 'Recruitment Analytics use cases',
            'desc' => 'Gain live visibility into funnel conversion, source-of-hire ROI, and time-to-fill forecasts across every department and requisition.',
            'checks' => [
                'Forecast requisition fill dates with pipeline velocity',
                'Identify stage bottlenecks before offers stall',
                'Track diversity and channel quality metrics in real time',
            ],
            'prompt' => 'Generate Q3 engineering hiring funnel velocity and bottleneck report',
            'response_title' => 'Overview',
            'response_body' => 'Average time-to-hire improved by 31% this quarter. Onsite-to-offer conversion reached 64%, with technical screen turnaround reduced to 18 hours.',
            'response_date' => 'Friday, October 1 — 9:00 AM EST',
        ],
    ],
    'workforce-management' => [
        'onboarding' => [
            'tab' => 'Onboarding',
            'heading' => 'Employee Onboarding use cases',
            'desc' => 'Deliver seamless day-one onboarding by automating offer-to-hire handoffs, IT account provisioning, compliance checklists, and role-specific orientation.',
            'checks' => [
                'Provision workspace accounts & hardware automatically',
                'Collect signed tax, NDA, and compliance forms early',
                'Assign buddy pairings and 30-60-90 day milestones',
            ],
            'prompt' => 'Provision onboarding checklist and IT access for 6 new hires starting Monday',
            'response_title' => 'Overview',
            'response_body' => 'Prepared 6 personalized onboarding tracks, triggered Okta & Slack provisioning, and scheduled day-one security orientation sessions.',
            'response_date' => 'Monday, September 27 — 9:00 AM EST',
        ],
        'attendance' => [
            'tab' => 'Time & Leave',
            'heading' => 'Attendance & Leave use cases',
            'desc' => 'Simplify global shift scheduling, hybrid attendance tracking, and policy-aware PTO approvals with zero manual spreadsheet reconciliation.',
            'checks' => [
                'Approve routine PTO requests against team coverage rules',
                'Sync regional holiday calendars and shift rosters live',
                'Flag overtime or coverage gaps proactively for managers',
            ],
            'prompt' => 'Check Q4 holiday coverage and pending leave requests for Operations',
            'response_title' => 'Overview',
            'response_body' => 'Verified 18 pending PTO requests against minimum shift coverage thresholds. Zero staffing conflicts detected across regional hubs.',
            'response_date' => 'Wednesday, September 29 — 3:30 PM EST',
        ],
        'payroll' => [
            'tab' => 'Payroll & HR Ops',
            'heading' => 'Payroll & HR Operations use cases',
            'desc' => 'Automate payroll verification, expense reconciliations, and 24/7 employee policy support with complete auditability and role-scoped governance.',
            'checks' => [
                'Reconcile timesheets, bonuses, and deductions automatically',
                'Answer employee benefits & policy questions 24/7',
                'Maintain audit-ready employee records in one OS',
            ],
            'prompt' => 'Prepare Q3 payroll reconciliation and verify approved leave balances across engineering',
            'response_title' => 'Overview',
            'response_body' => 'All 84 engineering timesheets and leave balances verified with zero discrepancies. Payroll batch #309 is ready for final executive sign-off.',
            'response_date' => 'Friday, September 24 — 5:00 PM EST',
        ],
    ],
    'growth-intelligence' => [
        'learning' => [
            'tab' => 'L&D Pathways',
            'heading' => 'Learning & Development use cases',
            'desc' => 'Curate role-specific upskilling tracks, technical certifications, and leadership readiness programs tailored to each employee’s career trajectory.',
            'checks' => [
                'Map individual skill gaps to curated learning modules',
                'Track compliance training & certification renewals',
                'Recommend stretch projects and mentorship matches',
            ],
            'prompt' => 'Build AI systems upskilling roadmap for mid-level platform engineers',
            'response_title' => 'Overview',
            'response_body' => 'Analyzed competency profiles for 28 platform engineers and assigned 3 targeted architecture tracks with quarterly certification checkpoints.',
            'response_date' => 'Monday, September 27 — 10:00 AM EST',
        ],
        'performance' => [
            'tab' => 'Performance',
            'heading' => 'Performance Management use cases',
            'desc' => 'Run structured OKR cycles, 360-degree peer reviews, and fair calibration briefings with AI-synthesized evidence from everyday work.',
            'checks' => [
                'Synthesize 360° peer feedback into unbiased review briefs',
                'Track real-time OKR progress across squads and teams',
                'Standardize promotion & calibration readiness packets',
            ],
            'prompt' => 'Generate Q4 leadership readiness summary and review synthesis for product teams',
            'response_title' => 'Overview',
            'response_body' => 'Completed competency analysis across 6 product squads. 91% OKR attainment recorded; calibration briefs prepared for review leads.',
            'response_date' => 'Thursday, September 30 — 1:00 PM EST',
        ],
        'insights' => [
            'tab' => 'Workforce Insights',
            'heading' => 'Workforce Analytics & Insights use cases',
            'desc' => 'Transform engagement pulse surveys, retention signals, and capacity metrics into predictive executive intelligence with strict privacy guardrails.',
            'checks' => [
                'Detect team burnout and retention risks early',
                'Model headcount & skill capacity for upcoming quarters',
                'Deliver anonymized executive sentiment dashboards',
            ],
            'prompt' => 'Forecast Q1 engineering capacity and engagement trends across all hubs',
            'response_title' => 'Overview',
            'response_body' => 'Engagement index rose +8% QoQ. Identified 2 high-growth squads needing senior capacity additions ahead of Q1 roadmap kickoff.',
            'response_date' => 'Friday, October 1 — 4:00 PM EST',
        ],
    ],
];

$useCasesTabs = $activeSolution ? ($useCasesBySolution[$activeSolution['slug']] ?? $useCasesBySolution['talent-acquisition']) : [];
?>

<?php if ($activeSolution === null): ?>
    <!-- ==================== AI SOLUTIONS MAIN PAGE (Matching sen9.mp4 00:00-00:08 & 00:30-00:37) ==================== -->
    <section class="sentician-solutions-hero">
        <div class="sentician-solutions-aurora" aria-hidden="true">
            <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1890" height="680" loading="eager" decoding="async">
        </div>

        <div class="container sentician-solutions-hero-inner">
            <div class="sentician-solutions-eyebrow">
                <img src="assets/images/icons/3UovOTKirX07vhyWYJGSliEt1E4.svg" alt="" width="20" height="20">
                <span>SOLUTIONS</span>
            </div>

            <h1 class="sentician-solutions-title">
                Discover the Power<br>of Sentician
            </h1>

            <p class="sentician-solutions-sub">
                Explore our suite of AI-driven<br>solutions designed to redefine work.
            </p>
        </div>
    </section>

    <section class="sentician-solutions-list-section">
        <div class="container sentician-solutions-stack">
            <?php foreach ($solutionsData as $sol): ?>
                <article class="sentician-sol-card" id="<?= e($sol['slug']) ?>" data-reveal>
                    <div class="sentician-sol-card-top">
                        <div class="sentician-sol-card-left">
                            <div class="sentician-sol-card-copy">
                                <h2><?= e($sol['title']) ?></h2>
                                <p><?= e($sol['summary']) ?></p>
                            </div>
                            <div class="sentician-sol-card-action">
                                <a href="services.php?solution=<?= urlencode($sol['slug']) ?>" class="sentician-learn-more-btn">
                                    <span class="learn-txt">Learn</span> <span class="more-txt">More</span>
                                </a>
                            </div>
                        </div>

                        <div class="sentician-sol-card-right">
                            <h3><?= e($sol['right_heading']) ?></h3>
                            <ul class="sentician-sol-bullet-list">
                                <?php foreach ($sol['bullets'] as $b): ?>
                                    <li>
                                        <span class="sentician-sol-bullet-dot" aria-hidden="true"></span>
                                        <span><?= e($b) ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>

                    <a href="services.php?solution=<?= urlencode($sol['slug']) ?>" class="sentician-sol-card-banner" aria-label="Explore <?= e($sol['title']) ?>">
                        <img src="<?= e($sol['banner']) ?>" alt="" width="1476" height="220" loading="lazy" decoding="async">
                    </a>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

<?php else: ?>
    <!-- ==================== AI SOLUTION DETAIL SUBPAGE (Matching sen9.mp4 00:08-00:28) ==================== -->
    <section class="sentician-solutions-hero sentician-solutions-hero--detail">
        <div class="sentician-solutions-aurora" aria-hidden="true">
            <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1890" height="680" loading="eager" decoding="async">
        </div>

        <div class="container sentician-solutions-hero-inner">
            <a href="services.php" class="sentician-solutions-eyebrow sentician-solutions-eyebrow--link">
                <img src="assets/images/icons/01d6Xos4x3sbU293TmKaFduYFAc.svg" alt="" width="20" height="20">
                <span>PRODUCTS</span>
            </a>

            <h1 class="sentician-solutions-title sentician-solutions-title--detail">
                <?= e($activeSolution['title']) ?>
            </h1>

            <p class="sentician-solutions-sub">
                <?= e($activeSolution['hero_sub']) ?>
            </p>
        </div>
    </section>

    <!-- 1. FEATURES: 4-Item Interactive Vertical Accordion + Right Visual Card (Matching sen9.mp4 00:11-00:16) -->
    <section class="section sentician-sol-features-section" id="solution-features">
        <div class="container sentician-sol-features-container">
            <div class="org-os-eyebrow-row" data-reveal>
                <div class="org-os-tag-pill">
                    <img src="assets/images/icons/3UovOTKirX07vhyWYJGSliEt1E4.svg" alt="" width="20" height="20">
                    <span>FEATURES</span>
                </div>
                <div class="org-os-header-line"></div>
            </div>

            <div class="sentician-sol-features-split" data-reveal>
                <div class="sentician-sol-features-left">
                    <h2><?= e($activeSolution['features_heading']) ?></h2>

                    <div class="sentician-sol-acc-list" id="solFeaturesAccordion">
                        <?php foreach ($activeSolution['features'] as $idx => $feat): ?>
                            <div class="sentician-sol-acc-item <?= $idx === 0 ? 'is-active' : '' ?>" data-sol-feat="<?= $idx ?>">
                                <div class="sentician-sol-acc-bar" aria-hidden="true">
                                    <div class="sentician-sol-acc-bar-fill"></div>
                                </div>
                                <div class="sentician-sol-acc-body">
                                    <button type="button" class="sentician-sol-acc-trigger" aria-expanded="<?= $idx === 0 ? 'true' : 'false' ?>">
                                        <?= e($feat['title']) ?>
                                    </button>
                                    <div class="sentician-sol-acc-panel">
                                        <div class="sentician-sol-acc-panel-inner">
                                            <p><?= e($feat['desc']) ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="sentician-sol-features-right">
                    <div class="sentician-sol-visual-stage">
                        <?php foreach ($activeSolution['features'] as $idx => $feat): ?>
                            <div class="sentician-sol-visual-pane <?= $idx === 0 ? 'is-active' : '' ?>" data-sol-pane="<?= $idx ?>">
                                <img src="<?= e($feat['img']) ?>" alt="<?= e($feat['title']) ?>" width="768" height="553" loading="lazy" decoding="async">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. USECASES: "Any use case, one solution" Interactive Tabs + Showcase Card (Matching sen9.mp4 00:17-00:21) -->
    <section class="section sentician-sol-usecases-section" id="solution-usecases">
        <div class="container sentician-sol-usecases-container">
            <div class="sentician-sol-usecases-head" data-reveal>
                <div class="org-os-eyebrow-row">
                    <div class="org-os-tag-pill">
                        <img src="assets/images/icons/lwNa4WCrpY0HtXMtN0IteQrJig.svg" alt="" width="20" height="20">
                        <span>USECASES</span>
                    </div>
                    <div class="org-os-header-line"></div>
                </div>

                <div class="faq-title-row">
                    <div class="faq-title-main">
                        <h2>Any use case, one solution</h2>
                    </div>
                    <div class="faq-title-sub">
                        <p>Unify every workflow with one intelligent AI platform built for all teams.</p>
                    </div>
                </div>
            </div>

            <div class="sentician-sol-tabs-row" role="tablist" aria-label="Solution Use Cases" data-reveal>
                <?php $tIdx = 0; foreach ($useCasesTabs as $key => $uc): ?>
                    <button type="button"
                            class="sentician-sol-tab-btn <?= $tIdx === 0 ? 'is-active' : '' ?>"
                            role="tab"
                            aria-selected="<?= $tIdx === 0 ? 'true' : 'false' ?>"
                            data-sol-uctab="<?= e($key) ?>">
                        <?= e($uc['tab']) ?>
                    </button>
                <?php $tIdx++; endforeach; ?>
            </div>

            <div class="sentician-sol-uc-stage" data-reveal>
                <?php $tIdx = 0; foreach ($useCasesTabs as $key => $uc): ?>
                    <div class="sentician-sol-uc-card <?= $tIdx === 0 ? 'is-active' : '' ?>" data-sol-ucpane="<?= e($key) ?>">
                        <div class="sentician-sol-uc-left">
                            <div class="sentician-sol-uc-copy">
                                <h3><?= e($uc['heading']) ?></h3>
                                <p><?= e($uc['desc']) ?></p>
                            </div>

                            <div class="sentician-sol-uc-checks">
                                <?php foreach ($uc['checks'] as $chk): ?>
                                    <div class="kickstart-point-pill">
                                        <span class="kickstart-point-icon" aria-hidden="true">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </span>
                                        <span class="kickstart-point-text"><?= e($chk) ?></span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <div class="sentician-sol-uc-right">
                            <img src="assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp" alt="" class="sentician-sol-uc-bg" loading="lazy">

                            <div class="sentician-sol-uc-chat">
                                <div class="sentician-sol-uc-prompt-bubble">
                                    <p><?= e($uc['prompt']) ?></p>
                                </div>

                                <div class="sentician-sol-uc-response-card">
                                    <div class="sentician-sol-uc-resp-head">
                                        <img src="assets/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png" alt="" width="20" height="20">
                                        <span>Response generated in five seconds.</span>
                                    </div>
                                    <div class="sentician-sol-uc-resp-body">
                                        <strong><?= e($uc['response_title']) ?></strong>
                                        <p><?= e($uc['response_body']) ?></p>
                                    </div>
                                    <div class="sentician-sol-uc-resp-meta">
                                        <span>Scheduled Execution:</span>
                                        <p>&#128197; <?= e($uc['response_date']) ?></p>
                                    </div>
                                    <div class="sentician-sol-uc-resp-actions">
                                        <a href="contact.php" class="sentician-sol-uc-start-btn">Start</a>
                                    </div>
                                </div>

                                <div class="sentician-sol-uc-input-bar">
                                    <span>How can<span class="sentician-uc-caret" aria-hidden="true">|</span></span>
                                    <div class="sentician-sol-uc-input-icons" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></svg>
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php $tIdx++; endforeach; ?>
            </div>
        </div>
    </section>

    <!-- 3. WHY SECTION: 3 Highlight Cards (Matching sen9.mp4 00:21-00:24) -->
    <section class="section sentician-sol-why-section" id="solution-why">
        <div class="container sentician-sol-why-container">
            <div class="sentician-sol-usecases-head" data-reveal>
                <div class="org-os-eyebrow-row">
                    <div class="org-os-tag-pill">
                        <img src="assets/images/icons/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg" alt="" width="20" height="20">
                        <span>WHY</span>
                    </div>
                    <div class="org-os-header-line"></div>
                </div>

                <div class="faq-title-row">
                    <div class="faq-title-main">
                        <h2><?= e($activeSolution['why_title']) ?></h2>
                    </div>
                    <div class="faq-title-sub">
                        <p>Simplify work, boost productivity, and unlock enterprise-wide efficiency.</p>
                    </div>
                </div>
            </div>

            <div class="sentician-sol-why-grid" data-reveal>
                <article class="sentician-sol-why-card">
                    <div class="sentician-sol-why-icon">
                        <img src="assets/images/icons/UhzKcwOlsFcygmiTZBSV1TlJWI.svg" alt="" width="24" height="24">
                    </div>
                    <div class="sentician-sol-why-text">
                        <h3>One-prompt control</h3>
                        <p>Trigger Sentician AI agents to run recruitment, HR, and operational workflows across apps, systems, and teams using natural language.</p>
                    </div>
                </article>

                <article class="sentician-sol-why-card">
                    <div class="sentician-sol-why-icon">
                        <img src="assets/images/icons/TRt8OkZ1B4j7B4TuuIPjZZ0f8.svg" alt="" width="24" height="24">
                    </div>
                    <div class="sentician-sol-why-text">
                        <h3>AI-powered productivity</h3>
                        <p>Access 200+ enterprise-ready Organization OS templates to elevate employee performance, hiring velocity, and experience.</p>
                    </div>
                </article>

                <article class="sentician-sol-why-card">
                    <div class="sentician-sol-why-icon">
                        <img src="assets/images/icons/Qmeyc8tpcFWa8qeWg0TXT3j1Bk.svg" alt="" width="24" height="24">
                    </div>
                    <div class="sentician-sol-why-text">
                        <h3>Build AI agents easily</h3>
                        <p>Empower anyone, not just developers, to create, publish, and manage AI agents securely and seamlessly across your organization.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
