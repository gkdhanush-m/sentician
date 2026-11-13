<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';

$newsletterErrors = [];
$newsletterSuccess = false;
$newsletterAlreadySubscribed = false;
$subscriberEmail = '';
$subscriberFocus = 'Engineering & AI';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['form_action'] ?? '') === 'newsletter_subscribe') {
    $honeypot = trim((string)($_POST['website'] ?? ''));
    $csrf = (string)($_POST['csrf_token'] ?? '');
    $subscriberEmail = trim((string)($_POST['newsletter_email'] ?? ''));
    $subscriberFocus = trim((string)($_POST['newsletter_focus'] ?? 'Engineering & AI'));

    $allowedFocus = [
        'Engineering & AI',
        'Talent & People Ops',
        'Revenue & Growth',
        'Executive Leadership',
    ];
    if (!in_array($subscriberFocus, $allowedFocus, true)) {
        $subscriberFocus = 'Engineering & AI';
    }

    if ($honeypot !== '') {
        $newsletterErrors[] = 'Submission rejected.';
    } elseif (!verify_csrf($csrf)) {
        $newsletterErrors[] = 'Session expired. Please refresh the page and try again.';
    } elseif (!filter_var($subscriberEmail, FILTER_VALIDATE_EMAIL)) {
        $newsletterErrors[] = 'Please enter a valid email address.';
    }

    if (empty($newsletterErrors)) {
        $storageDir = __DIR__ . '/storage';
        if (!is_dir($storageDir)) {
            mkdir($storageDir, 0755, true);
        }
        $storageFile = $storageDir . '/newsletter.json';
        $existing = [];
        if (is_file($storageFile)) {
            $decoded = json_decode((string)file_get_contents($storageFile), true);
            if (is_array($decoded)) {
                $existing = $decoded;
            }
        }

        $normalizedEmail = strtolower($subscriberEmail);
        foreach ($existing as $entry) {
            if (isset($entry['email']) && strtolower((string)$entry['email']) === $normalizedEmail) {
                $newsletterAlreadySubscribed = true;
                break;
            }
        }

        if (!$newsletterAlreadySubscribed) {
            $existing[] = [
                'id' => bin2hex(random_bytes(6)),
                'submitted_at' => gmdate('c'),
                'email' => $subscriberEmail,
                'focus' => $subscriberFocus,
            ];
            file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT), LOCK_EX);
        }

        $newsletterSuccess = true;
        if (!$newsletterAlreadySubscribed) {
            $subscriberEmail = '';
        }
    }
}

$featuredArticle = [
    'id' => 'featured-organization-os',
    'category' => 'Organization OS',
    'category_slug' => 'organization-os',
    'title' => 'Designing Deterministic Guardrails for Multi-Agent Enterprise Workflows',
    'excerpt' => 'How Sentician pairs supervisor routing graphs with policy-enforced tool execution so autonomous agents operate with zero silent failures across HR, RevOps, and engineering.',
    'date' => 'Nov 12, 2026',
    'read_time' => '6 min read',
    'author' => 'Sentician Architecture Team',
    'image' => 'assets/images/domain-agi.jpg',
    'takeaways' => [
        'Separate intent classification from tool execution using typed JSON schema contracts.',
        'Bind every agent action to role-scoped RBAC tokens rather than shared service credentials.',
        'Instrument confidence thresholds that escalate edge cases to human reviewers in under 200ms.',
    ],
    'body' => [
        'Enterprise AI adoption rarely stalls because models lack reasoning capability—it stalls because organizations cannot afford unpredictable side effects when agents interact with live systems of record.',
        'At Sentician, our Organization OS treats every multi-agent workflow as a deterministic state machine wrapped around probabilistic reasoning. Before an agent can update an ATS stage, trigger a billing webhook, or draft an executive brief, its proposed payload is validated against strict schema contracts and tenant-level policy rules.',
        'By decoupling planning from execution, teams gain full auditability: every tool call, retrieval source, and approval checkpoint is logged in real time. The result is an autonomous workforce that scales operational velocity without compromising governance.',
    ],
];

$blogPosts = [
    [
        'id' => 'post-talent-signal-scoring',
        'category' => 'AI Agents',
        'category_slug' => 'ai-agents',
        'title' => 'Beyond Keyword Matching: High-Signal Candidate Evaluation at Scale',
        'excerpt' => 'Replacing brittle boolean filters with structured competency rubrics, bias-audited scoring, and instant recruiter synthesis.',
        'date' => 'Nov 08, 2026',
        'read_time' => '5 min read',
        'author' => 'Sentician Talent Lab',
        'image' => 'assets/images/solution-banner-2.webp',
        'takeaways' => [
            'Structured rubrics reduce first-round screening variance across distributed hiring panels.',
            'Evidence-linked summaries cite exact portfolio and experience signals for every score.',
            'Automated scheduling agents cut time-to-interview from days to minutes.',
        ],
        'body' => [
            'Traditional applicant tracking workflows force recruiting teams to choose between speed and depth. High-volume roles overwhelm human reviewers, while rigid keyword filters quietly discard strong non-traditional candidates.',
            'Sentician Talent Acquisition agents evaluate applications against role-specific engineering and leadership rubrics calibrated with your hiring managers. Every candidate profile is distilled into an evidence-backed brief showing verified strengths, domain overlap, and suggested technical probes.',
            'Instead of replacing human judgment, the system removes repetitive triage so recruiters and engineering leads spend their time in high-context conversations with top finalists.',
        ],
    ],
    [
        'id' => 'post-hybrid-rag-latency',
        'category' => 'Engineering',
        'category_slug' => 'engineering',
        'title' => 'Sub-100ms Enterprise Retrieval: Hybrid Vector + BM25 Architecture',
        'excerpt' => 'Inside the indexing pipeline that keeps Sentician workspace copilots grounded across millions of Slack threads, docs, and tickets.',
        'date' => 'Nov 02, 2026',
        'read_time' => '7 min read',
        'author' => 'Sentician Core Systems',
        'image' => 'assets/images/exceptionality-speed.webp',
        'takeaways' => [
            'Dense embeddings alone miss exact SKU codes, error hashes, and internal acronyms.',
            'Reciprocal rank fusion combines lexical precision with semantic recall under 65ms.',
            'Document ACLs are enforced at index-query time so unauthorized snippets never enter context.',
        ],
        'body' => [
            'Pure semantic search excels at broad conceptual queries, yet enterprise teams frequently search for exact ticket IDs, API flags, or customer account codes where dense vectors blur critical distinctions.',
            'Our retrieval engine executes parallel BM25 lexical matching and HNSW vector similarity, merging candidates through reciprocal rank fusion with a lightweight cross-encoder reranker. Permission filters run directly inside the query predicate, ensuring strict tenant and role isolation.',
            'With incremental webhook ingestion, knowledge updates from Notion, Jira, and Confluence become searchable in seconds rather than waiting for overnight batch jobs.',
        ],
    ],
    [
        'id' => 'post-growth-telemetry',
        'category' => 'Enterprise AI',
        'category_slug' => 'enterprise-ai',
        'title' => 'Turning Fragmented Pipeline Signals Into Proactive Revenue Intelligence',
        'excerpt' => 'How Growth Intelligence unifies CRM velocity, call transcripts, and product usage telemetry to surface expansion and churn risks early.',
        'date' => 'Oct 26, 2026',
        'read_time' => '5 min read',
        'author' => 'Sentician RevOps Group',
        'image' => 'assets/images/solution-banner-3.webp',
        'takeaways' => [
            'Static weekly dashboards miss mid-cycle momentum shifts across enterprise accounts.',
            'Cross-signal agents correlate support escalations with renewal timelines automatically.',
            'Actionable next-step briefs land directly inside Slack and CRM deal rooms.',
        ],
        'body' => [
            'Most revenue teams are drowning in dashboards while starving for timely context. Critical deal signals live scattered across Gong recordings, Zendesk tickets, product telemetry, and CRM notes.',
            'Sentician Growth Intelligence continuously synthesizes these streams into live account health narratives. When champion engagement drops or a technical blocker surfaces two weeks before renewal, the platform alerts account owners with the exact context and recommended play.',
            'Teams move from reactive end-of-quarter forecasting to continuous, data-grounded pipeline execution.',
        ],
    ],
    [
        'id' => 'post-zero-trust-agents',
        'category' => 'Organization OS',
        'category_slug' => 'organization-os',
        'title' => 'Zero-Trust Security Architecture for Autonomous Enterprise Agents',
        'excerpt' => 'A look at Sentician’s multi-layer defense: PII redaction, prompt-injection isolation, and immutable audit trails.',
        'date' => 'Oct 19, 2026',
        'read_time' => '6 min read',
        'author' => 'Sentician Security Team',
        'image' => 'assets/images/security-slab-1.webp',
        'takeaways' => [
            'Untrusted external documents are sandboxed before reaching tool-calling planners.',
            'Inline DLP redacts sensitive customer identifiers prior to external model inference.',
            'Every state transition produces a cryptographic audit record for compliance teams.',
        ],
        'body' => [
            'Connecting AI agents to internal email, CRM, and codebase repositories introduces a new security surface: indirect prompt injection hidden inside external inputs.',
            'Sentician enforces strict privilege separation between data ingestion and action execution. External content is tagged as untrusted data and stripped of executable directives before reaching supervisor models, while high-impact actions require deterministic policy verification or human sign-off.',
            'Combined with SOC 2 aligned logging and zero data retention agreements, enterprises deploy autonomous workflows with full CISO confidence.',
        ],
    ],
    [
        'id' => 'post-workforce-orchestration',
        'category' => 'AI Agents',
        'category_slug' => 'ai-agents',
        'title' => 'Workforce Management Reimagined: Real-Time Capacity & Burnout Signals',
        'excerpt' => 'Using privacy-preserving operational telemetry to balance sprint loads, forecast hiring needs, and eliminate coordination drag.',
        'date' => 'Oct 11, 2026',
        'read_time' => '4 min read',
        'author' => 'Sentician Product Team',
        'image' => 'assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp',
        'takeaways' => [
            'Aggregate workload signals highlight team bottlenecks without invasive employee surveillance.',
            'Automated onboarding and IT provisioning checklists cut ramp time for new hires.',
            'Cross-functional dependency graphs keep distributed teams aligned without extra status meetings.',
        ],
        'body' => [
            'High-performing organizations rarely lose momentum from lack of effort—they lose it to invisible coordination bottlenecks, uneven sprint allocation, and slow cross-team handoffs.',
            'Sentician Workforce Management surfaces team-level capacity trends from project boards and calendar load while preserving individual privacy. Leaders spot overloaded functions weeks before deadlines slip and automate routine operational approvals.',
            'The outcome is calmer execution: fewer status meetings, faster onboarding, and clearer alignment from executive goals down to weekly delivery.',
        ],
    ],
    [
        'id' => 'post-eval-driven-ai',
        'category' => 'Engineering',
        'category_slug' => 'engineering',
        'title' => 'Why Eval-Driven Development Is Non-Negotiable for Production AI',
        'excerpt' => 'How continuous regression suites, golden datasets, and latency budgets prevent silent quality drift when models or prompts evolve.',
        'date' => 'Oct 03, 2026',
        'read_time' => '6 min read',
        'author' => 'Sentician Core Systems',
        'image' => 'assets/images/solution-banner-1.webp',
        'takeaways' => [
            'Prompt tweaks without automated evals create hidden regressions in edge-case reasoning.',
            'Sentician scores every workflow change on accuracy, schema adherence, and p95 latency.',
            'Shadow deployments validate new model weights on live traffic before full rollout.',
        ],
        'body' => [
            'Shipping an AI prototype takes an afternoon; keeping an enterprise agent reliable across thousands of daily runs requires the same rigor as distributed systems engineering.',
            'Every Sentician workflow ships with an automated evaluation harness covering domain accuracy, tool-argument validity, refusal behavior, and latency budgets. Whenever a model provider updates weights or a team refines instructions, CI runs the full regression suite before promotion.',
            'Eval-driven development turns AI from an unpredictable experiment into dependable enterprise software.',
        ],
    ],
];

$allArticlesForModal = array_merge([$featuredArticle], $blogPosts);

$pageTitle = 'Blogs & Newsletter';
$pageDescription = 'Read Sentician research, engineering deep-dives, and enterprise AI insights, and subscribe to The Sentician Dispatch newsletter.';
$activePage = 'blog';
include __DIR__ . '/includes/header.php';
?>

<!-- ==================== BLOGS & NEWSLETTER HERO (Matches Sentician Aurora Hero) ==================== -->
<section class="sentician-solutions-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" loading="eager" decoding="async">
        <div class="sentician-solutions-aurora-fade"></div>
    </div>

    <div class="sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow" data-reveal>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span>BLOGS &amp; NEWSLETTER</span>
        </div>

        <h1 class="sentician-solutions-title" data-reveal>Insights from the<br>Sentician Frontier</h1>
        <p class="sentician-solutions-sub" data-reveal>
            Engineering deep-dives, Organization OS architectures, and practical field notes on deploying reliable autonomous AI across the enterprise.
        </p>

        <div class="sentician-blog-hero-actions" data-reveal>
            <a href="#newsletter" class="btn-glow-pill">Subscribe to Newsletter</a>
            <a href="#latest-articles" class="btn-gradient-outline">Explore Articles</a>
        </div>
    </div>
</section>

<!-- ==================== FEATURED EDITORIAL STORY ==================== -->
<section class="section sentician-blog-section">
    <div class="container">
        <article class="sentician-blog-featured" data-reveal>
            <div class="sentician-blog-featured-media">
                <img src="<?= e($featuredArticle['image']) ?>" alt="<?= e($featuredArticle['title']) ?>" loading="lazy" decoding="async">
                <span class="sentician-blog-featured-badge">Featured Dispatch</span>
            </div>
            <div class="sentician-blog-featured-body">
                <div class="sentician-blog-meta-row">
                    <span class="sentician-blog-cat-pill"><?= e($featuredArticle['category']) ?></span>
                    <span class="sentician-blog-meta-text"><?= e($featuredArticle['date']) ?> &bull; <?= e($featuredArticle['read_time']) ?></span>
                </div>
                <h2 class="sentician-blog-featured-title"><?= e($featuredArticle['title']) ?></h2>
                <p class="sentician-blog-featured-excerpt"><?= e($featuredArticle['excerpt']) ?></p>
                <div class="sentician-blog-featured-footer">
                    <span class="sentician-blog-author"><?= e($featuredArticle['author']) ?></span>
                    <button type="button" class="btn-gradient-outline sentician-blog-read-btn" data-open-article="<?= e($featuredArticle['id']) ?>">
                        Read Full Article &rarr;
                    </button>
                </div>
            </div>
        </article>
    </div>
</section>

<!-- ==================== CATEGORY FILTER & BLOG GRID ==================== -->
<section class="section sentician-blog-grid-section" id="latest-articles">
    <div class="container">
        <div class="sentician-blog-toolbar" data-reveal>
            <div>
                <div class="section-eyebrow">LATEST PUBLICATIONS</div>
                <h2 class="sentician-blog-section-heading">Research, Architecture &amp; Field Notes</h2>
            </div>

            <div class="sentician-blog-filters" role="tablist" aria-label="Filter blog articles by category">
                <button type="button" class="filter-pill is-active" data-blog-filter="all">All Posts</button>
                <button type="button" class="filter-pill" data-blog-filter="ai-agents">AI Agents</button>
                <button type="button" class="filter-pill" data-blog-filter="organization-os">Organization OS</button>
                <button type="button" class="filter-pill" data-blog-filter="engineering">Engineering</button>
                <button type="button" class="filter-pill" data-blog-filter="enterprise-ai">Enterprise AI</button>
            </div>
        </div>

        <div class="sentician-blog-grid">
            <?php foreach ($blogPosts as $post): ?>
                <article class="sentician-blog-card" data-blog-category="<?= e($post['category_slug']) ?>" data-reveal>
                    <div class="sentician-blog-card-media">
                        <img src="<?= e($post['image']) ?>" alt="<?= e($post['title']) ?>" loading="lazy" decoding="async">
                    </div>
                    <div class="sentician-blog-card-body">
                        <div class="sentician-blog-meta-row">
                            <span class="sentician-blog-cat-pill"><?= e($post['category']) ?></span>
                            <span class="sentician-blog-meta-text"><?= e($post['read_time']) ?></span>
                        </div>
                        <h3 class="sentician-blog-card-title"><?= e($post['title']) ?></h3>
                        <p class="sentician-blog-card-excerpt"><?= e($post['excerpt']) ?></p>
                        <div class="sentician-blog-card-footer">
                            <span class="sentician-blog-meta-text"><?= e($post['date']) ?></span>
                            <button type="button" class="sentician-blog-card-link" data-open-article="<?= e($post['id']) ?>">
                                Read Article <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ==================== NEWSLETTER SUBSCRIPTION SECTION ==================== -->
<section class="section sentician-newsletter-section" id="newsletter">
    <div class="container">
        <div class="sentician-newsletter-card" data-reveal>
            <div class="sentician-newsletter-glow" aria-hidden="true"></div>
            <div class="sentician-newsletter-grid">
                <div class="sentician-newsletter-copy">
                    <div class="section-eyebrow">THE SENTICIAN DISPATCH</div>
                    <h2 class="sentician-newsletter-title">Stay ahead of autonomous enterprise AI.</h2>
                    <p class="sentician-newsletter-desc">
                        Receive our bi-weekly engineering brief covering multi-agent patterns, Organization OS releases, and real-world deployment benchmarks—zero fluff, straight to your inbox.
                    </p>
                    <ul class="sentician-newsletter-perks">
                        <li>Architecture blueprints &amp; guardrail patterns</li>
                        <li>Product updates across Talent, Workforce &amp; Growth OS</li>
                        <li>Curated research notes from Sentician engineers</li>
                    </ul>
                </div>

                <div class="sentician-newsletter-form-wrap">
                    <?php if ($newsletterSuccess): ?>
                        <div class="sentician-newsletter-alert is-success" role="status">
                            <?php if ($newsletterAlreadySubscribed): ?>
                                <strong>You’re already subscribed.</strong> <?= e($subscriberEmail) ?> is on The Sentician Dispatch list.
                            <?php else: ?>
                                <strong>Welcome to The Sentician Dispatch.</strong> You’ll receive our next bi-weekly briefing directly in your inbox.
                            <?php endif; ?>
                        </div>
                    <?php elseif (!empty($newsletterErrors)): ?>
                        <div class="sentician-newsletter-alert is-error" role="alert">
                            <?= e($newsletterErrors[0]) ?>
                        </div>
                    <?php endif; ?>

                    <form method="post" action="blog.php#newsletter" class="sentician-newsletter-form" novalidate>
                        <input type="hidden" name="form_action" value="newsletter_subscribe">
                        <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
                        <div class="hp-field" aria-hidden="true">
                            <label for="nl_website">Website</label>
                            <input type="text" id="nl_website" name="website" tabindex="-1" autocomplete="off">
                        </div>

                        <div class="sentician-newsletter-field">
                            <label for="newsletter_email">Work Email</label>
                            <input
                                type="email"
                                id="newsletter_email"
                                name="newsletter_email"
                                value="<?= e($subscriberEmail) ?>"
                                placeholder="alex@company.com"
                                required
                                autocomplete="email"
                            >
                        </div>

                        <div class="sentician-newsletter-field">
                            <label for="newsletter_focus">Primary Focus</label>
                            <select id="newsletter_focus" name="newsletter_focus">
                                <?php foreach (['Engineering & AI', 'Talent & People Ops', 'Revenue & Growth', 'Executive Leadership'] as $focusOption): ?>
                                    <option value="<?= e($focusOption) ?>" <?= $subscriberFocus === $focusOption ? 'selected' : '' ?>>
                                        <?= e($focusOption) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <button type="submit" class="btn-glow-pill sentician-newsletter-submit">
                            Subscribe to Dispatch
                        </button>
                        <p class="sentician-newsletter-note">No spam. Unsubscribe anytime with one click.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== ARTICLE READER MODAL ==================== -->
<div class="sentician-blog-modal" id="blogArticleModal" hidden aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="blogModalTitle">
    <div class="sentician-blog-modal-backdrop" data-close-article></div>
    <div class="sentician-blog-modal-dialog">
        <button type="button" class="sentician-blog-modal-close" data-close-article aria-label="Close article">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>

        <div class="sentician-blog-modal-meta">
            <span class="sentician-blog-cat-pill" id="blogModalCategory"></span>
            <span class="sentician-blog-meta-text" id="blogModalMeta"></span>
        </div>

        <h2 class="sentician-blog-modal-title" id="blogModalTitle"></h2>
        <p class="sentician-blog-modal-author" id="blogModalAuthor"></p>

        <div class="sentician-blog-modal-cover">
            <img id="blogModalImage" src="" alt="">
        </div>

        <div class="sentician-blog-modal-takeaways">
            <div class="sentician-blog-modal-takeaways-label">Key Takeaways</div>
            <ul id="blogModalTakeaways"></ul>
        </div>

        <div class="sentician-blog-modal-body" id="blogModalBody"></div>

        <div class="sentician-blog-modal-footer">
            <a href="#newsletter" class="btn-gradient-outline" data-close-article>Subscribe for Future Briefs</a>
            <a href="contact.php" class="btn-glow-pill btn-glow-pill--sm">Talk to Sentician</a>
        </div>
    </div>
</div>

<script type="application/json" id="senticianBlogData"><?= json_encode($allArticlesForModal, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?></script>

<?php include __DIR__ . '/includes/footer.php'; ?>
