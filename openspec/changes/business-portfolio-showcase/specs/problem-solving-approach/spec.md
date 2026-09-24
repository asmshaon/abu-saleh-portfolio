## Purpose

Shows how the engineer thinks about problems, through a small set of working principles, each proven by a real example from the portfolio.

## ADDED Requirements

### Requirement: Approach section
After the projects, the page SHALL include an "Approach" section, reachable from the navigation, with four to six working principles. Each principle SHALL have a short plain-language title, one or two sentences explaining it, and a concrete example drawn from one of the portfolio projects.

#### Scenario: Reading the approach
- **WHEN** a visitor opens the Approach section
- **THEN** they see four to six principles, each with a title, an explanation and an example naming which project it comes from

### Requirement: Examples link to their project
Each principle's example SHALL link to the project it comes from. Activating the link SHALL scroll to that project and reset the filter to "All", so the project is visible.

#### Scenario: Jump from principle to project
- **WHEN** a visitor has filtered to "Marketplaces" and then activates the example link on a principle drawn from the car-rental project
- **THEN** the filter resets to "All" and the page scrolls to the car-rental project

### Requirement: No unsupported claims
Principle examples SHALL describe only work recorded in the shareable inventory. They SHALL NOT name technologies in the title or explanation, and SHALL NOT mention AI.

#### Scenario: Plain-language principles
- **WHEN** the principle titles and explanations are read
- **THEN** they contain no language, framework or tool names and no mention of AI
