## Purpose

Lets visitors narrow the portfolio to the kind of business problem they care about, such as payments or legacy systems, instead of scanning every project.

## ADDED Requirements

### Requirement: Problem-type filter
Above the projects, the page SHALL offer a single-select filter with "All" plus these problem types: "Payments & money", "Bookings & travel", "Retail & point of sale", "Marketplaces", "Modernizing legacy systems", "Security & reliability" and "Workflow & automation". Each project SHALL be tagged with one or more of these types, and every type SHALL match at least one project. "All" SHALL be selected when the page loads.

#### Scenario: Default state
- **WHEN** the page loads
- **THEN** "All" is selected and all 12 projects are shown

#### Scenario: Filtering
- **WHEN** a visitor selects "Payments & money"
- **THEN** only projects tagged with that type are shown, and the flagship-first order is kept among them

#### Scenario: Back to all
- **WHEN** a visitor selects "All" after filtering
- **THEN** all 12 projects are shown again

### Requirement: Filter feedback and accessibility
Each filter option SHALL show how many projects it matches. The selected option SHALL be exposed to assistive technology as pressed or selected, and the options SHALL be operable by keyboard. When the selection changes, the number of projects shown SHALL be announced politely to screen readers.

#### Scenario: Keyboard use
- **WHEN** a keyboard user tabs to a filter option and presses Enter or Space
- **THEN** the filter applies, the option reports its pressed state, and the new result count is announced

### Requirement: Works without script
If script fails to run, the page SHALL still show all 12 projects.

#### Scenario: No JavaScript
- **WHEN** the page is rendered without client-side script
- **THEN** all 12 projects are present in the HTML
