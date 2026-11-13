<?php
declare(strict_types=1);

$pageTitle = 'Terms and Conditions';
$pageDescription = 'Review the enterprise terms of service, acceptable use guidelines, and service level commitments governing the Sentician AI Organization OS.';
$activePage = 'terms';

require_once __DIR__ . '/includes/header.php';
?>

<section class="legal-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1890" height="680" loading="eager" decoding="async">
    </div>

    <div class="container legal-hero-inner">
        <div class="legal-badge">
            <img src="assets/images/icons/01d6Xos4x3sbU293TmKaFduYFAc.svg" alt="" width="18" height="18">
            <span>LEGAL &amp; GOVERNANCE</span>
        </div>

        <h1 class="legal-title">Terms and Conditions</h1>

        <p class="legal-sub">
            These terms define our mutual commitments, operational guardrails, and enterprise service standards across the Sentician platform.
        </p>

        <div class="legal-meta-pills">
            <div class="legal-meta-pill">
                <span>Last Updated:</span>
                <strong>November 2026</strong>
            </div>
            <div class="legal-meta-pill">
                <span>Enterprise SLA:</span>
                <strong>99.9% Uptime Commitment</strong>
            </div>
            <div class="legal-meta-pill">
                <span>IP Ownership:</span>
                <strong>100% Customer Retained</strong>
            </div>
        </div>
    </div>
</section>

<section class="legal-main-section">
    <div class="container legal-layout">
        <!-- Sticky Left Table of Contents -->
        <aside class="legal-sidebar" aria-label="Terms Table of Contents">
            <h3 class="legal-sidebar-title">Sections</h3>
            <nav class="legal-toc-nav">
                <a href="#term-01" class="legal-toc-item">1. Agreement to Terms</a>
                <a href="#term-02" class="legal-toc-item">2. Service Scope &amp; OS Access</a>
                <a href="#term-03" class="legal-toc-item">3. AI Operations &amp; Guardrails</a>
                <a href="#term-04" class="legal-toc-item">4. Customer Data Ownership</a>
                <a href="#term-05" class="legal-toc-item">5. Acceptable Use Policy</a>
                <a href="#term-06" class="legal-toc-item">6. Service Levels &amp; Uptime</a>
                <a href="#term-07" class="legal-toc-item">7. Liability &amp; Indemnity</a>
                <a href="#term-08" class="legal-toc-item">8. Termination &amp; Contact</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="legal-content">
            <article class="legal-card" id="term-01" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">01</span>
                    <h2>Agreement to Terms</h2>
                </div>
                <p>
                    By accessing, subscribing to, or integrating the Sentician AI Organization OS ("Service", "Platform"), your organization ("Customer", "You") agrees to be bound by these Terms and Conditions. If you are accepting on behalf of an enterprise or other legal entity, you represent that you possess full administrative authority to bind that entity.
                </p>
                <ul>
                    <li>These terms apply to all workspace administrators, operators, and integration service accounts.</li>
                    <li>Enterprise master service agreements (MSAs) executed with Sentician supersede these terms where explicitly stated.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-02" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">02</span>
                    <h2>Service Scope &amp; Workspace Access</h2>
                </div>
                <p>
                    Sentician grants your organization a non-exclusive, non-transferable, worldwide commercial license to deploy and operate Sentician agents, Organization OS workflows, and connector integrations:
                </p>
                <ul>
                    <li><strong>Seat &amp; Tenant Governance:</strong> Account credentials must not be shared among multiple individuals; each authorized operator must maintain unique identity verification via SAML/SSO or enterprise email.</li>
                    <li><strong>API Rate Limits:</strong> Sentician enforces equitable throughput quotas to guarantee low latency and high availability across distributed multi-tenant workloads.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-03" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">03</span>
                    <h2>AI Agent Operations &amp; Human-in-the-Loop Oversight</h2>
                </div>
                <p>
                    Sentician provides deterministic guardrails, structured validation schemas, and approval queues designed to keep autonomous workflows safe and reliable:
                </p>
                <ul>
                    <li><strong>Human Oversight:</strong> Critical, high-impact enterprise actions (such as irreversible candidate rejections, payroll disbursements, or production database alterations) must be configured with human-in-the-loop sign-off gates.</li>
                    <li><strong>Autonomous Agent Monitoring:</strong> Administrators maintain continuous visibility into agent execution transcripts, decision histories, and token consumption metrics.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-04" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">04</span>
                    <h2>Customer Data &amp; Intellectual Property Ownership</h2>
                </div>
                <p>
                    Sentician respects organizational autonomy and intellectual property ownership:
                </p>
                <ul>
                    <li><strong>Customer Retains 100% IP:</strong> You retain complete, unrestricted ownership of all inputs, proprietary documents, prompt payloads, organizational workflows, and synthesized outputs produced by Sentician agents for your workspace.</li>
                    <li><strong>Sentician IP:</strong> Sentician retains all rights, title, and interest in and to the underlying software, algorithms, UI components, agent orchestrator engines, and documentation.</li>
                    <li><strong>No Derivation:</strong> Sentician will never extract proprietary enterprise insights from customer data to develop competitive products.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-05" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">05</span>
                    <h2>Acceptable Use Policy &amp; Safety Guardrails</h2>
                </div>
                <p>
                    Customer agrees not to misuse the Platform, tamper with system infrastructure, or violate regulatory safety standards:
                </p>
                <ul>
                    <li>Prohibited from attempting reverse engineering, unauthorized penetration probing, or bypassing access boundaries.</li>
                    <li>Prohibited from dispatching agents for unlawful, deceptive, discriminatory, or malicious workflows.</li>
                    <li>Obligated to maintain valid compliance with applicable labor, data protection, and industry-specific regulations.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-06" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">06</span>
                    <h2>Service Level Agreements (SLA) &amp; Availability</h2>
                </div>
                <p>
                    Sentician commits to enterprise-tier availability and continuous monitoring:
                </p>
                <ul>
                    <li><strong>99.9% Uptime:</strong> We maintain a 99.9% monthly service availability commitment for core agent dispatch and Organization OS infrastructure.</li>
                    <li><strong>Maintenance Windows:</strong> Scheduled maintenance is communicated at least 5 business days in advance and conducted outside primary operating hours.</li>
                    <li><strong>Status Transparency:</strong> Real-time platform health and uptime records are available 24/7.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-07" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">07</span>
                    <h2>Limitation of Liability &amp; Mutual Indemnification</h2>
                </div>
                <p>
                    To the maximum extent permitted by applicable law:
                </p>
                <ul>
                    <li>Neither party shall be liable for indirect, incidental, punitive, or consequential damages resulting from system usage.</li>
                    <li>Sentician agrees to defend and indemnify the Customer against third-party claims asserting that the core Sentician Platform infringes a valid intellectual property patent or copyright.</li>
                    <li>Customer indemnifies Sentician against claims arising from unauthorized data ingested into the workspace without lawful consent.</li>
                </ul>
            </article>

            <article class="legal-card" id="term-08" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">08</span>
                    <h2>Term, Termination &amp; Legal Notices</h2>
                </div>
                <p>
                    Subscription terms automatically renew unless terminated in accordance with your commercial order schedule:
                </p>
                <div class="legal-contact-callout">
                    <p><strong>Sentician Legal &amp; Commercial Operations</strong></p>
                    <p>Corporate Inquiries: <a href="mailto:legal@sentician.com">legal@sentician.com</a></p>
                    <p>Enterprise Contracts &amp; Amendments: <a href="mailto:contracts@sentician.com">contracts@sentician.com</a></p>
                    <p>Questions or Schedule Review: <a href="contact.php">Contact Enterprise Team &rarr;</a></p>
                </div>
            </article>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
