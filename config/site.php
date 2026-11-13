<?php
declare(strict_types=1);

/**
 * Centralized site configuration and structured content for Sentician.
 * Modeled after the Sentician AI Agent & Automation architecture, styled in Sentician's logo palette.
 */

return [
    'brand' => [
        'name' => 'Sentician',
        'tagline' => 'Intelligence. Automation. Impact.',
        'announcement' => 'Sentician Autonomous Agent Platform v2.0 is Live',
        'description' => 'Sentician helps enterprises accelerate business velocity with our AI Platform, Autonomous Agents, and intelligent workflow engineering.',
        'linkedin_url' => 'https://www.linkedin.com/company/sentician/',
        'twitter_url' => 'https://x.com/sentician',
        'instagram_url' => 'https://instagram.com/sentician',
        'reddit_url' => 'https://reddit.com/r/sentician',
        'email' => 'hello@sentician.com',
        'location' => 'Bengaluru, India • AI, Robotics & Emerging Technologies',
        'founded_year' => '2026',
    ],
    'palette' => [
        'bg_primary' => '#000000',
        'bg_elevated' => '#0A0B0F',
        'accent_blue' => '#0084FF',
        'accent_amber' => '#FF7A00',
        'accent_indigo' => '#6366F1',
        'accent_violet' => '#8B5CF6',
        'accent_magenta' => '#EC4899',
    ],
    'nav' => [
        ['label' => 'AI Solutions', 'href' => 'services.php', 'slug' => 'services'],
        ['label' => 'Who We Are', 'href' => 'about.php', 'slug' => 'about'],
        ['label' => 'Integrations', 'href' => 'integrations.php', 'slug' => 'integrations'],
        ['label' => 'Tech Insights', 'href' => 'blog.php', 'slug' => 'blog'],
        ['label' => 'Join Us', 'href' => 'careers.php', 'slug' => 'careers'],
        ['label' => 'Contact', 'href' => 'contact.php', 'slug' => 'contact'],
    ],
    'exceptionalities' => [
        [
            'index' => '01',
            'title' => 'Speed',
            'description' => 'Faster time-to-value with production-ready enterprise AI solutions and deployable agent templates.',
            'accent' => 'blue',
        ],
        [
            'index' => '02',
            'title' => 'Deep Capabilities',
            'description' => 'An agent architecture with the depth to adapt to every interaction, workflow, behavior, and system.',
            'accent' => 'indigo',
        ],
        [
            'index' => '03',
            'title' => 'Control',
            'description' => 'Deterministic guardrails, role-scoped permissions, and standardized governance built for enterprise demands.',
            'accent' => 'violet',
        ],
        [
            'index' => '04',
            'title' => 'Flexibility',
            'description' => 'Ecosystem-agnostic design allowing you to choose your models, cloud infrastructure, and data connectors.',
            'accent' => 'magenta',
        ],
    ],
    'feature_tabs' => [
        [
            'id' => 'usage',
            'tab_label' => 'Usage',
            'title' => 'AI Agent for work',
            'description' => 'Connect to your business systems, understand your internal knowledge and workflows, and activate reliable agentic execution across teams.',
            'tags' => ['Healthcare', 'Tech Assistance', 'Support', 'Marketer'],
            'cta_label' => 'See Uses',
            'cta_href' => 'services.php',
            'metric' => '42% Faster Resolution',
            'preview_title' => 'Active Workspace Agents',
            'preview_rows' => [
                ['label' => 'Support Triage Agent', 'status' => 'Running', 'stat' => '142ms'],
                ['label' => 'RevOps Pipeline Copilot', 'status' => 'Synced', 'stat' => '99.4%'],
                ['label' => 'Engineering Docs Assistant', 'status' => 'Grounded', 'stat' => '1,240 docs'],
            ],
        ],
        [
            'id' => 'technology',
            'tab_label' => 'Technology',
            'title' => 'Sentician Core Technology',
            'description' => 'Create grounded AI agents and deterministic agentic workflows with automated evals, supervisor routing, and continuous control.',
            'tags' => ['Multi-Agent', 'Latest Models', 'Dialog Engine', 'Supervisor Agents'],
            'cta_label' => 'Explore Tech',
            'cta_href' => 'services.php#ai-copilots',
            'metric' => '99.8% Schema Compliance',
            'preview_title' => 'Supervisor Routing Graph',
            'preview_rows' => [
                ['label' => 'Intent & Policy Classifier', 'status' => 'Verified', 'stat' => '18ms'],
                ['label' => 'Hybrid Vector + BM25 RAG', 'status' => 'Cached', 'stat' => '64ms'],
                ['label' => 'Tool Execution Guardrail', 'status' => 'Strict', 'stat' => '0 leaks'],
            ],
        ],
        [
            'id' => 'data',
            'tab_label' => 'Data',
            'title' => 'Enterprise data sources',
            'description' => 'Our design approach is ecosystem-agnostic, allowing you to connect live enterprise warehouses, wikis, and ticketing stacks securely.',
            'tags' => ['SharePoint', 'SAP', 'Slack', 'Confluence'],
            'cta_label' => 'Start Setup',
            'cta_href' => 'integrations.php',
            'metric' => '25+ Native Connectors',
            'preview_title' => 'Connected Knowledge Mesh',
            'preview_rows' => [
                ['label' => 'SharePoint & Confluence', 'status' => 'Indexed', 'stat' => 'Real-time'],
                ['label' => 'SAP & Salesforce CRM', 'status' => 'OAuth2', 'stat' => 'Bi-directional'],
                ['label' => 'Slack & Jira Streams', 'status' => 'Webhooks', 'stat' => 'Sub-second'],
            ],
        ],
    ],
    'verticals' => [
        [
            'id' => 'automation',
            'label' => 'Automation',
            'title' => 'Process Automation',
            'description' => 'Streamline complex cross-app workflows with intelligent AI agents that elevate efficiency, accuracy, and speed across your enterprise.',
            'bullets' => [
                'Automate Tasks — Reduce manual operational effort',
                'Optimize Workflows — Boost cross-team productivity',
                'Stay Compliant — Enforce deterministic accuracy',
            ],
            'kpi_value' => '68%',
            'kpi_label' => 'Cycle Time Reduction',
        ],
        [
            'id' => 'banking',
            'label' => 'Banking & FinOps',
            'title' => 'Financial Operations',
            'description' => 'Accelerate KYC checks, invoice reconciliation, and anomaly detection with auditable AI decision trails.',
            'bullets' => [
                'Automated document extraction & reconciliation',
                'Real-time risk & policy compliance scoring',
                'Full audit logs for every agent decision',
            ],
            'kpi_value' => '99.6%',
            'kpi_label' => 'Audit Traceability',
        ],
        [
            'id' => 'recruitment',
            'label' => 'Recruitment',
            'title' => 'Talent & Onboarding',
            'description' => 'Screen technical fit fairly, coordinate interview loops, and automate employee provisioning without bottlenecks.',
            'bullets' => [
                'Structured candidate brief & skill synthesis',
                'Automated calendar & feedback orchestration',
                'Zero-touch IT & HR onboarding checklists',
            ],
            'kpi_value' => '3.2x',
            'kpi_label' => 'Faster Hiring Loop',
        ],
        [
            'id' => 'marketing',
            'label' => 'Marketing',
            'title' => 'Growth & Revenue Ops',
            'description' => 'Optimize campaigns, personalize enterprise outreach, and turn pipeline telemetry into actionable sales playbooks.',
            'bullets' => [
                'Account-based research & brief generation',
                'CRM enrichment & intent signal routing',
                'Automated attribution & funnel insights',
            ],
            'kpi_value' => '+41%',
            'kpi_label' => 'Qualified Pipeline Lift',
        ],
        [
            'id' => 'development',
            'label' => 'Development',
            'title' => 'Engineering & DevOps',
            'description' => 'Accelerate code reviews, incident triage, and internal developer portals with context-aware engineering agents.',
            'bullets' => [
                'Automated PR summaries & regression checks',
                'Incident root-cause runbook lookup in seconds',
                'CI/CD telemetry & release note automation',
            ],
            'kpi_value' => '10x',
            'kpi_label' => 'Faster Triage & Ship',
        ],
    ],
    'kickstart_steps' => [
        [
            'step' => '01.',
            'title' => 'One account, endless sign-in choices',
            'description' => 'Connect securely using Google, GitHub, enterprise SSO, or passkey authentication—ready for distributed teams.',
            'highlights' => [
                'Sign in instantly with Google, GitHub, or SSO',
                'Role-based workspace permissions from day one',
                'Encrypted secrets & scoped connector tokens',
            ],
        ],
        [
            'step' => '02.',
            'title' => 'Choose the Agent You Want to Deploy',
            'description' => 'From a curated catalog of specialized enterprise agents, pick the architecture that fits your operational workflow.',
            'highlights' => [
                'Choose agents tailored to work, service, or process',
                'Attach your internal knowledge bases in minutes',
                'Preview grounded responses before going live',
            ],
        ],
        [
            'step' => '03.',
            'title' => 'Prompt or Set to Automation Mode',
            'description' => 'Guide workflows interactively via natural language, or switch to autonomous event-driven execution with guardrails.',
            'highlights' => [
                'Prompt the agent and refine rules interactively',
                'Let the agent execute end-to-end across APIs',
                'Toggle effortlessly between human-in-loop & auto',
            ],
        ],
    ],
    'security_layers' => [
        [
            'title' => 'Intelligent Protection',
            'description' => 'End-to-end TLS + AES-256 encryption, automatic PII redaction before model inference, and zero model-training guarantees on your data.',
            'tag' => 'Layer 01',
        ],
        [
            'title' => 'Real-Time Threat Detection',
            'description' => 'Continuous prompt-injection filtering, output schema validation, and anomaly rate-limiting across every agent endpoint.',
            'tag' => 'Layer 02',
        ],
        [
            'title' => 'Seamless Compliance',
            'description' => 'Immutable execution logs, RBAC access scopes, and SOC2-aligned governance controls built for regulated enterprises.',
            'tag' => 'Layer 03',
        ],
    ],
    'faqs' => [
        // Left Column (Part 01)
        [
            'q' => 'What is Sentician?',
            'a' => 'Sentician is an AI-powered enterprise platform and autonomous agent ecosystem that unifies talent, operations, and cross-app workflows to accelerate business growth.',
        ],
        [
            'q' => 'How are AI Agents different from automation tools?',
            'a' => 'Unlike static bots or scripts, AI Agents in Sentician are adaptive, collaborative, and context-aware. They don’t just follow rules — they learn, reason, and make decisions to handle complex business processes.',
        ],
        [
            'q' => 'Can Sentician integrate with our existing systems?',
            'a' => 'Yes. Sentician is designed for seamless integration with common enterprise tools, CRMs, ERPs, cloud services, and custom APIs, ensuring your workflows stay connected without disruption.',
        ],
        [
            'q' => 'Is Sentician secure for enterprise use?',
            'a' => 'Absolutely. Sentician uses multi-layered security including end-to-end encryption, role-based access control, and continuous behavior monitoring to keep your enterprise data protected.',
        ],
        // Right Column (Part 02)
        [
            'q' => 'How quickly can Sentician be implemented?',
            'a' => 'Most teams can deploy pre-built AI Agents within minutes and roll out custom enterprise workflows in just a few days with zero disruption to existing operations.',
        ],
        [
            'q' => 'Can AI Agents replace human employees?',
            'a' => 'No. Sentician’s AI Agents are designed to augment human teams, not replace them. They take over repetitive and time-consuming tasks so people can focus on strategic, creative, and decision-driven work.',
        ],
        [
            'q' => 'How does Sentician improve customer service?',
            'a' => 'Sentician AI Agents provide instant, 24/7 intelligent responses, resolve complex inquiries autonomously, and seamlessly hand off nuanced cases to human specialists with full context.',
        ],
        [
            'q' => 'Is Sentician scalable for global operations?',
            'a' => 'Yes. Sentician is cloud-native and built for scalability, allowing businesses to deploy AI Agents across multiple regions, teams, and departments with ease.',
        ],
    ],
    'integrations' => [
        ['name' => 'Slack', 'category' => 'Collaboration', 'desc' => 'Trigger agents, stream approvals, and deliver grounded digests directly in channels.'],
        ['name' => 'SharePoint', 'category' => 'Knowledge', 'desc' => 'Index enterprise policies, SOPs, and PDFs with live permission inheritance.'],
        ['name' => 'SAP', 'category' => 'ERP & Ops', 'desc' => 'Automate procurement, invoice matching, and order status orchestration.'],
        ['name' => 'Confluence', 'category' => 'Knowledge', 'desc' => 'Keep engineering runbooks and product specs continuously synchronized.'],
        ['name' => 'Salesforce', 'category' => 'CRM', 'desc' => 'Enrich accounts, summarize call transcripts, and automate pipeline routing.'],
        ['name' => 'Jira', 'category' => 'Engineering', 'desc' => 'Auto-triage bug reports, link root-cause context, and update sprint boards.'],
        ['name' => 'GitHub', 'category' => 'Engineering', 'desc' => 'Accelerate PR reviews, release notes, and repository Q&A securely.'],
        ['name' => 'PostgreSQL', 'category' => 'Data', 'desc' => 'Run guarded read/write queries and real-time operational analytics.'],
        ['name' => 'HubSpot', 'category' => 'CRM', 'desc' => 'Score inbound leads, draft personalized follow-ups, and sync lifecycle events.'],
    ],
    'services' => [
        [
            'id' => 'ai-copilots',
            'category' => 'ai',
            'category_label' => 'AI for Work',
            'title' => 'Enterprise AI Copilots & RAG Systems',
            'summary' => 'Turn fragmented internal docs, databases, and tickets into grounded, citation-backed intelligence.',
            'deliverables' => [
                'Hybrid semantic + keyword retrieval pipelines',
                'Automated hallucination & grounding eval suites',
                'Role-scoped permissions & source citations',
            ],
            'stack' => ['LLMs', 'Vector DB', 'Eval Harness', 'Python / TS'],
            'timeline' => '4–6 Weeks',
        ],
        [
            'id' => 'agent-automation',
            'category' => 'automation',
            'category_label' => 'AI for Process',
            'title' => 'End-to-End Workflow Automation',
            'summary' => 'Eliminate manual handoffs across operations, finance, support, and onboarding with resilient orchestration.',
            'deliverables' => [
                'Event-driven webhooks & queue workers',
                'Human-in-the-loop approval dashboards',
                'Retry, fallback & dead-letter recovery',
            ],
            'stack' => ['Temporal / Queues', 'REST & GraphQL', 'Webhooks', 'Node / PHP'],
            'timeline' => '3–5 Weeks',
        ],
        [
            'id' => 'ai-service',
            'category' => 'ai',
            'category_label' => 'AI for Service',
            'title' => 'Autonomous Customer & IT Support Agents',
            'summary' => 'Resolve Tier-1 and Tier-2 inquiries instantaneously while routing complex escalations with full context.',
            'deliverables' => [
                'Omnichannel ticket & chat resolution',
                'Policy-checked refund, reset & SLA actions',
                'Live sentiment & deflection telemetry',
            ],
            'stack' => ['Dialog Engine', 'Zendesk / Jira', 'Guardrails', 'Streaming'],
            'timeline' => '3–5 Weeks',
        ],
        [
            'id' => 'saas-product',
            'category' => 'engineering',
            'category_label' => 'SaaS & Cloud Engineering',
            'title' => 'Custom SaaS & AI Product Engineering',
            'summary' => 'From zero-to-one MVP to enterprise multi-tenant scale—crafted with modern liquid-glass UX clarity.',
            'deliverables' => [
                'Design systems & interactive frontend interfaces',
                'Multi-tenant APIs, billing & telemetry',
                'CI/CD pipelines & cloud infrastructure as code',
            ],
            'stack' => ['Cloud Native', 'Postgres', 'Modern UI/UX', 'Docker'],
            'timeline' => '6–12 Weeks',
        ],
        [
            'id' => 'data-pipelines',
            'category' => 'automation',
            'category_label' => 'AI for Process',
            'title' => 'Predictive Analytics & Data Pipelines',
            'summary' => 'Unify streaming and warehouse events into real-time forecasting, anomaly detection, and executive KPIs.',
            'deliverables' => [
                'Automated ETL/ELT ingestion & normalization',
                'Churn, demand & anomaly scoring models',
                'Live executive decision dashboards',
            ],
            'stack' => ['SQL / dbt', 'ML Pipelines', 'Streaming', 'BI Layer'],
            'timeline' => '4–8 Weeks',
        ],
        [
            'id' => 'ai-advisory',
            'category' => 'consulting',
            'category_label' => 'Strategic Consulting',
            'title' => 'AI Readiness & Architecture Advisory',
            'summary' => 'Cut through hype with a concrete technical blueprint, build-vs-buy matrix, and 90-day ROI roadmap.',
            'deliverables' => [
                'Workflow audit & automation ROI scoring',
                'Security, privacy & model selection blueprint',
                'Executive & engineering team enablement',
            ],
            'stack' => ['Architecture', 'FinOps', 'Governance', 'Roadmapping'],
            'timeline' => '2 Weeks',
        ],
    ],
    'impact_metrics' => [
        [
            'value' => '42%',
            'label' => 'Average reduction in manual operational overhead within 90 days',
            'tag' => 'Operations',
        ],
        [
            'value' => '3.4x',
            'label' => 'Faster engineering delivery from concept to production launch',
            'tag' => 'Velocity',
        ],
        [
            'value' => '99.98%',
            'label' => 'Pipeline availability across automated enterprise workflows',
            'tag' => 'Reliability',
        ],
    ],
    'values' => [
        [
            'title' => 'Outcomes Over Hype',
            'description' => 'We never ship AI for novelty. Every model, agent, and line of code is tied to measurable cycle-time, revenue, or cost impact.',
        ],
        [
            'title' => 'Crafted Clarity',
            'description' => 'Complex backends deserve effortless interfaces. We pair rigorous systems engineering with crisp, human-centered UI/UX.',
        ],
        [
            'title' => 'Production Rigor',
            'description' => 'Observability, deterministic fallbacks, and clean security boundaries are built in on day one—never bolted on later.',
        ],
        [
            'title' => 'Transparent Partnership',
            'description' => 'You own your IP, code, and data. We embed alongside your stakeholders with direct communication and weekly demos.',
        ],
    ],
];
