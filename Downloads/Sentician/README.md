# Sentician Web Platform (PHP)

Multi-page dark-mode PHP website designed for **Sentician** (*Intelligence. Automation. Impact.*), styled around the official Sentician logo color system (`#000A24` Midnight Navy, `#2F6BFF` Cobalt Delta, and `#6366F1` → `#EC4899` gradient accents) with Refero-inspired SaaS UI/UX patterns.

## Project Structure

- `index.php` — Full 11-section COSMOQ-inspired landing page with live Agent Console, Enterprise Statement, 4-card Exceptionalities, Usage/Technology/Data tabs, Industry Vertical switcher, 3 Steps to Kickstart, Multi-Layer Security, Testimonials, Pricing (Monthly/Yearly 30% off), 8-item FAQ, and Integration Orbit.
- `services.php` — Filterable AI solutions catalog (`AI for Work`, `AI for Service`, `AI for Process`, `SaaS & Cloud`) plus an interactive Automation ROI Estimator.
- `integrations.php` — Filterable enterprise connector hub (Slack, SharePoint, SAP, Confluence, Salesforce, Jira, GitHub, PostgreSQL, HubSpot).
- `pricing.php` — Interactive Monthly / Yearly (`30% off`) pricing plans and FAQ accordion.
- `about.php` — Brand philosophy, interactive logo/palette showcase, and core engineering principles.
- `contact.php` — Session-backed CSRF-protected contact & architecture consultation form that persists submissions to `storage/inquiries.json`.
- `config/site.php` — Single source of truth for copy, navigation, services, pricing, FAQs, integrations, and brand links.
- `includes/` — Shared `header.php`, `footer.php`, and `helpers.php` (including `render_logo_svg()`, `render_pricing_section()`, `render_faq_section()`, and `render_cta_banner()`).
- `assets/css/styles.css` & `assets/js/main.js` — Modular design system and interactive frontend behavior.

## Running Locally

Using PHP's built-in development server (PHP 8.0+):

```bash
cd "C:\Users\91915\Downloads\Sentician"
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser. Alternatively, place the folder inside `C:\xampp\htdocs\sentician` or `C:\laragon\www\sentician` and access it via your local Apache/Nginx host.

## Customizing Content

Edit `config/site.php` to update headlines, service offerings, LinkedIn URL, email address, or case metrics across all pages at once.
