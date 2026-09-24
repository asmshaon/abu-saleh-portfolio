## Purpose

Defines what the portfolio page contains and how visitors act on it. It is a focused showcase of work that sends contact to the main site, without resume, services or direct contact details.

## ADDED Requirements

### Requirement: Page composition
The page SHALL consist of, in order: a hero introducing the portfolio, the Work section (filter and projects), the Approach section, a call-to-action band and a footer. It SHALL NOT contain a Services section, an Experience or Resume section, an About section or an embedded contact form.

#### Scenario: Removed sections
- **WHEN** the page is loaded
- **THEN** there is no element with the id "services", "resume" or "about", and no services, skills or resume content is shown

### Requirement: Navigation
The navigation SHALL list only "Work" and "Approach" as section links, plus the theme toggle and a "Let's talk" call-to-action button. The active link SHALL follow the section in view. On phone widths the links and the call to action SHALL be available from a menu.

#### Scenario: Desktop navigation
- **WHEN** a visitor views the navigation on a wide screen
- **THEN** it shows Work, Approach, the theme toggle and "Let's talk", with no Services or Experience links

#### Scenario: Mobile menu
- **WHEN** a visitor opens the menu at phone width
- **THEN** it offers Work, Approach and "Let's talk"

### Requirement: Single call to action to the main site
Every call to action on the page (navigation, hero and the call-to-action band) SHALL use the label "Let's talk" and link to the contact section of the main site (`https://asmshaon.tech/#contact`). The bare word "Contact" SHALL NOT be used as a label, and there SHALL be no "Hire Me", "Get a Quote" or "Book a Call" actions.

#### Scenario: Call-to-action target
- **WHEN** a visitor activates any "Let's talk" control
- **THEN** the browser navigates to the main site's contact section

### Requirement: No direct contact details or CV
The page SHALL NOT display an email address, phone number or WhatsApp number or link, SHALL NOT embed a map, and SHALL NOT offer a CV or resume download. The CV PDF SHALL no longer be served by the site.

#### Scenario: No direct details
- **WHEN** the rendered page is searched for "mailto:", "tel:", "wa.me", "WhatsApp", "@gmail", "iframe" and ".pdf"
- **THEN** no matches are found

#### Scenario: CV no longer served
- **WHEN** a visitor requests `/Abu Saleh Muhammad Shaon.pdf`
- **THEN** the site responds with not found

### Requirement: Profile links
The footer SHALL link to the main site, the blog, LinkedIn, GitHub and X.

#### Scenario: Footer links
- **WHEN** a visitor reads the footer
- **THEN** it links to the main site, the blog, LinkedIn, GitHub and X

### Requirement: Business-first metadata
The page title and description SHALL present the site as a portfolio of business problems solved, SHALL state 16+ years of experience, and SHALL NOT claim AI-powered application work.

#### Scenario: Metadata
- **WHEN** the page's title and meta description are read
- **THEN** they describe a portfolio of solved business problems, mention 16+ years, and contain no AI claim
