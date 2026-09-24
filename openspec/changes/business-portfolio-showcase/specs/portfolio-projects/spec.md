## Purpose

Presents the engineer's work as anonymized business projects that show what problem each business had, how it was solved and what changed. It is written for recruiters and non-technical readers, and every claim can be traced to the career inventory.

## ADDED Requirements

### Requirement: Project set
The page SHALL present exactly these 12 projects, each backed by an engagement in the shareable career inventory:
- Gourmeal, in-venue food ordering for events and food trucks (US)
- financial-newsletter publisher (US)
- cruise and escorted-tour retailer (US)
- fitness marketplace (US)
- education-services marketplace (Australia)
- legal-tech contract exhibits from SEC filings (US)
- point of sale for regulated retail (US)
- consumer and merchant e-wallet (Singapore)
- car-rental comparison and booking (Australia)
- hotel and travel booking for the Saudi market
- online travel retailer (Australia)
- project management run from email

The "SPORTS Ecommerce" project SHALL NOT appear.

#### Scenario: Visitor views all work
- **WHEN** a visitor opens the Work section with no filter applied
- **THEN** 12 projects are shown and none of them is "SPORTS Ecommerce"

### Requirement: Flagship projects
Gourmeal (the engineer's current engagement), car rental, regulated-retail point of sale and the tour catalogue SHALL be presented as flagships, in that order, with Gourmeal first. They SHALL appear before the other projects, in a larger layout that shows their full story without any interaction. The remaining eight SHALL follow in reverse chronological order.

#### Scenario: Flagships first
- **WHEN** a visitor scrolls into the Work section with no filter applied
- **THEN** Gourmeal is the first project, followed by the other three flagship projects in the larger layout, then the other eight, newest first

### Requirement: Business-first project structure
Every project SHALL show, in plain language: an anonymous description of the business, its region, the period, the engineer's role, **the challenge**, **how I solved it**, and **the result**. The challenge, approach and result text SHALL make sense without any technology names.

#### Scenario: Reading a project
- **WHEN** a non-technical visitor reads any project
- **THEN** they can find the business, period, role, challenge, approach and result without needing to understand technology names

### Requirement: Problem-solving detail
Every project SHALL offer an "Inside the problem" list of 2–4 concrete problem→solution pairs taken from the inventory's feature entries for that engagement. Each pair states a specific difficulty and what was done about it. On non-flagship projects the list SHALL be collapsed by default and expandable with a keyboard-accessible control. On flagship projects it SHALL be visible by default.

#### Scenario: Expand problem detail
- **WHEN** a visitor activates "Inside the problem" on a non-flagship project, by mouse or keyboard
- **THEN** 2–4 problem→solution pairs are revealed, and activating it again hides them

#### Scenario: Flagship detail visible
- **WHEN** a visitor views a flagship project
- **THEN** its problem→solution pairs are visible without any interaction

### Requirement: Anonymized clients
Projects SHALL describe clients by business type and region only. The single exception is Gourmeal, the engineer's current engagement, which the engineer has chosen to name. No other client SHALL be named. Projects SHALL NOT show client names other than Gourmeal, client logos, client website links or product screenshots. Third-party supplier or partner brand names SHALL NOT appear either.

#### Scenario: No client identification
- **WHEN** the Work section's text, links and images are inspected
- **THEN** no client or supplier company name other than Gourmeal, and no client domain, logo or product screenshot, is present

### Requirement: Traceable figures only
Every number or measurable claim in a project SHALL appear in the shareable career inventory, with the same meaning. Figures the inventory marks as reported by the engineer SHALL keep a "(reported)" qualifier.

#### Scenario: Reported figure qualified
- **WHEN** a visitor reads the car-rental project
- **THEN** the 4M+ rentals figure is shown with "(reported)" and nothing larger is claimed

### Requirement: Technology as a secondary footnote
A project MAY end with one muted line of up to six technology names as slash-separated plain text. It SHALL come after the result and SHALL NOT use logos, icons or badges.

#### Scenario: Footnote hierarchy
- **WHEN** a project with a technology line is viewed
- **THEN** the technology line appears after the result, in smaller muted text, with six items or fewer

### Requirement: Responsive layout
Projects SHALL be readable at phone width (about 375px) in both themes without horizontal scrolling.

#### Scenario: Phone width
- **WHEN** the Work section is viewed at 375px wide
- **THEN** every project stacks into a single column and no horizontal scrolling occurs
