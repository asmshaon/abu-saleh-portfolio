## Purpose

Gives the portfolio the same calm black, white and ash identity as the main landing site, light by default with a dark alternative, so both sites read as one brand.

## ADDED Requirements

### Requirement: Monochrome palette
All site UI SHALL use only black, white and neutral (unsaturated) ash greys. This covers backgrounds, text, borders, buttons, links, icons, focus rings, filter controls, the scroll progress bar and the scrollbar. The page SHALL NOT use chromatic accent colors, colored gradients or glow effects.

#### Scenario: No chromatic UI color
- **WHEN** the rendered page's computed text, background, border and fill colors are inspected in either theme
- **THEN** every color is a neutral grey, black or white

### Requirement: Light theme by default, dark available
A first-time visitor with no stored theme preference SHALL see the light theme. The theme toggle SHALL switch between light and dark, and the choice SHALL persist across reloads.

#### Scenario: First visit
- **WHEN** a visitor with no stored theme preference opens the page
- **THEN** the page renders in the light theme

#### Scenario: Toggle persists
- **WHEN** the visitor switches to dark and reloads
- **THEN** the page renders in the dark theme

### Requirement: Every section supports both themes
Every section SHALL follow the active theme, except the footer, which MAY stay black in both themes as a closing band.

#### Scenario: Light theme sections
- **WHEN** the light theme is active and the visitor scrolls from the hero to the call-to-action band
- **THEN** each of those sections renders with a white or light-ash background and dark text

### Requirement: Legible contrast
Body and muted metadata text SHALL have a contrast ratio of at least 4.5:1 against its background in both themes, and large headings at least 3:1. Purely decorative separators are exempt.

#### Scenario: Muted text contrast
- **WHEN** muted text such as periods, roles and footnotes is measured in either theme
- **THEN** its contrast ratio against its background is at least 4.5:1

### Requirement: Shared typography with the main site
Headings SHALL use the same serif display face as the main landing site (Newsreader), and body text the same sans-serif (Inter).

#### Scenario: Heading font
- **WHEN** a section heading's computed font family is inspected
- **THEN** it resolves to Newsreader
