// Every project and figure here comes from the shareable career inventory.
// Clients stay anonymous, except Gourmeal (the current engagement), which the
// owner chose to name. Figures the inventory marks as reported keep "(reported)".

export const problemTypes = [
  "Payments & money",
  "Bookings & travel",
  "Retail & point of sale",
  "Marketplaces",
  "Modernizing legacy systems",
  "Security & reliability",
  "Workflow & automation",
] as const;

export type ProblemType = (typeof problemTypes)[number];

export type ProjectId =
  | "gourmeal"
  | "car-rental"
  | "retail-pos"
  | "tour-catalogue"
  | "newsletter-platform"
  | "fitness-marketplace"
  | "education-marketplace"
  | "legal-search"
  | "ewallet"
  | "hotel-booking"
  | "travel-store"
  | "email-tasks";

export type Project = {
  id: ProjectId;
  business: string;
  region: string;
  period: string;
  role: string;
  flagship?: boolean;
  label?: string;
  types: ProblemType[];
  challenge: string;
  approach: string;
  result: string;
  inside: { problem: string; solution: string }[];
  tech?: string[];
};

export type Principle = {
  title: string;
  explanation: string;
  example: string;
  projectId: ProjectId;
};

// Flagships first (Gourmeal, car rental, point of sale, tour catalogue), then newest first.
export const projects: Project[] = [
  {
    id: "gourmeal",
    business: "Gourmeal: food ordering from your seat at events and food trucks",
    region: "United States",
    period: "May 2026 – present",
    role: "Lead engineer, team of 4–5",
    flagship: true,
    label: "Current · Flagship",
    types: ["Payments & money", "Retail & point of sale", "Security & reliability"],
    challenge:
      "Fans order from their seats and vendors print tickets in the truck. Prices were partly decided by the phone app, where they could be tampered with, and the order services had never had a security review.",
    approach:
      "Moved all pricing and payment onto the server. Wrote the first security review of the order services and fixed what it found.",
    result:
      "8 security findings identified. The critical, high and medium ones were fixed within three days. The platform is in its pilot stage.",
    inside: [
      {
        problem: "The app decided prices",
        solution: "Every order priced from the vendor's menu, with a full breakdown before paying",
      },
      {
        problem: "Rates differ by event and vendor",
        solution:
          "Commission, tax and service charge settable per event, vendor or platform, with the most specific rate winning",
      },
      {
        problem: "Print jobs must not be lost or printed twice",
        solution: "A print queue that printers poll, with stale locks recovered",
      },
      {
        problem: "Password guessing on the vendor console",
        solution: "Sign-in locked for 5 minutes after 5 failed attempts",
      },
    ],
    tech: ["Laravel", "Go", "Stripe", "AWS"],
  },
  {
    id: "car-rental",
    business: "Car-rental comparison and booking across 10+ suppliers",
    region: "Australia",
    period: "Mar 2015 – Apr 2020",
    role: "Senior backend developer, one of the two largest contributors",
    flagship: true,
    types: ["Bookings & travel", "Payments & money", "Modernizing legacy systems"],
    challenge:
      "Travellers compare and book cars across many rental companies, each with its own system and rules. Airline and airport partners wanted their own branded sites on the same engine.",
    approach:
      "Put every supplier behind one booking flow for search, book, change and cancel, so the site and its partner sites never deal with supplier differences. Helped replace the old booking engine while existing bookings kept working.",
    result: "4M+ rentals across 5 countries, with sub-second responses (reported).",
    inside: [
      {
        problem: "Every rental company has its own rules for extras, mileage, driver age and error codes",
        solution: "Vehicle data normalized into one shape, and supplier errors turned into clear messages",
      },
      {
        problem:
          "A booking touches the supplier, the payment and the confirmation, and prices can change between search and booking",
        solution: "Bookings created in stages, with the customer protected from price rises",
      },
      {
        problem: "The old engine couldn't be switched off in one go",
        solution:
          "Historical bookings imported, and a few features routed to the old engine until their replacements were ready",
      },
      {
        problem: "Staff needed to hear about problems quickly",
        solution: "Alerts for price changes, incomplete bookings and automatic cancellations",
      },
    ],
    tech: ["Laravel", "AngularJS", "Stripe"],
  },
  {
    id: "retail-pos",
    business: "Point of sale, delivery and inventory for licensed retailers",
    region: "United States",
    period: "Aug 2021 – Apr 2023",
    role: "Lead engineer, team of 2–3",
    flagship: true,
    types: ["Retail & point of sale", "Security & reliability"],
    challenge:
      "Regulated retailers had to run in-store sales, delivery and online orders while reporting every regulated sale to the state's track-and-trace system.",
    approach:
      "One order engine for the till, delivery, pickup and the online store, with state compliance reporting built into the moment a sale completes. Built the public product website and self-service onboarding from the first commit.",
    result:
      "A wholesale product was spun off from the platform, and it kept pace as the company expanded into more US states. Top backend contributor, also involved in hiring.",
    inside: [
      {
        problem: "Every regulated sale must be reported exactly once, only for tracked items",
        solution: "Each completed sale reported automatically, with untracked items skipped",
      },
      {
        problem: "Sales aren't allowed outside business and restricted hours",
        solution: "Sales blocked outside those hours, with an exception for untracked goods",
      },
      {
        problem: "Orders come from four channels with different discounts, taxes and fees",
        solution: "One order engine that applies the right rules per channel",
      },
      {
        problem: "New retailers needed to get started without calling sales",
        solution: "Demo booking, sign-up and onboarding that follows each state's rules",
      },
    ],
  },
  {
    id: "tour-catalogue",
    business: "One catalogue for seven tour operators",
    region: "United States",
    period: "Oct 2023 – Sep 2025",
    role: "Proposed and designed the architecture; #1 contributor to the API",
    flagship: true,
    types: ["Bookings & travel", "Modernizing legacy systems", "Security & reliability"],
    challenge:
      "Seven tour operators publish tours, departures and prices in their own formats and on their own schedules. Customers need one consistent page, and the old admin site put the public site at risk with every change.",
    approach:
      "One tour format fed by a separate reader for each operator, refreshed automatically every day. Admin work moved to a new API, and a new public website was started on top of it.",
    result:
      "Tour and search pages became several times faster (reported), and adding an operator now means adding one reader.",
    inside: [
      {
        problem: "Daily updates could leave the site half-updated",
        solution: "Data backed up, loaded into temporary tables, then swapped in at once",
      },
      {
        problem: "Rebuilding search would show customers empty results",
        solution: "The new index built in a copy and renamed into place",
      },
      {
        problem: "Failed background jobs went unnoticed until content went stale",
        solution: "Alerts on every failure, and when nothing has completed for four hours",
      },
      {
        problem: "Bots and password guessing hit the site",
        solution: "IPs blocked after 3 failed logins in 5 minutes, with search-engine crawlers still allowed",
      },
    ],
    tech: ["Laravel", "Next.js", "Redis"],
  },
  {
    id: "newsletter-platform",
    business: "A financial-newsletter publisher's own email platform",
    region: "United States",
    period: "Jan 2026 – Apr 2026",
    role: "Senior full-stack engineer, top contributor in the period",
    types: ["Modernizing legacy systems", "Security & reliability", "Workflow & automation"],
    challenge:
      "Editors built research reports by hand in several formats. Management had no single view of performance, and the platform was old standalone scripts with security holes and manual deploys.",
    approach:
      "Built a report generator and a performance dashboard, and moved legacy screens into a structured layer one module at a time.",
    result:
      "Each report is produced as a web page, a PDF and an interactive flipbook from one saved setup. Critical security holes were fixed, and staging now deploys on every push.",
    inside: [
      {
        problem: "Reports were made by hand for each campaign",
        solution: "All three formats generated at once, including on a schedule",
      },
      {
        problem: "No single view of email and ad performance",
        solution: "A nine-tab dashboard covering earnings per subscriber, per click and per offer",
      },
      {
        problem: "Old scripts were risky to change",
        solution: "Screens moved into the new structure one module at a time",
      },
    ],
  },
  {
    id: "fitness-marketplace",
    business: "A marketplace connecting gyms, trainers and clients",
    region: "United States",
    period: "Aug 2023 – Oct 2023",
    role: "Senior full-stack engineer",
    types: ["Marketplaces", "Payments & money", "Workflow & automation"],
    challenge:
      "Gyms, trainers and clients each needed their own view, bookings needed approval, and the team deployed by hand.",
    approach:
      "Dashboards for each role, booking approval and an automatic order flow, plus sign-up flows for web and mobile.",
    result:
      "Tests and deploys now run automatically, with a team message after each deploy and automatically numbered mobile builds.",
    inside: [
      {
        problem: "Each role signs up differently on web and mobile",
        solution: "Separate flows for trainers, gyms and clients",
      },
      { problem: "Earnings were hard to see", solution: "Total and last-30-day earnings on each dashboard" },
      { problem: "Manual deploys", solution: "An automated test-and-deploy pipeline" },
    ],
  },
  {
    id: "education-marketplace",
    business: "A marketplace for education consultants",
    region: "Australia",
    period: "Sep 2023 – Oct 2023",
    role: "Led the restructuring",
    types: ["Marketplaces", "Modernizing legacy systems"],
    challenge:
      "A codebase inherited from another team mixed admin and public code, used inconsistent names and had no data layer.",
    approach:
      "Split admin and public modules, added a proper data layer, renamed core concepts to match the business, and migrated the existing data.",
    result: "A cleaner codebase the business could keep building on, with new home and job-posting pages.",
    inside: [
      {
        problem: "Names didn't match the business",
        solution: "“Freelancer” became “Expert” and “Seminar” became “Training” across code and data",
      },
      {
        problem: "Data didn't fit the new structure",
        solution: "Migrations and seeders, with skills merged into one table",
      },
    ],
  },
  {
    id: "legal-search",
    business: "Searchable contract examples for lawyers, drawn from SEC filings",
    region: "United States",
    period: "Mar 2022 – Apr 2025",
    role: "Sole engineer",
    types: ["Modernizing legacy systems", "Payments & money"],
    challenge:
      "Lawyers needed real contract examples, buried in decades of public filings where every form is laid out differently.",
    approach:
      "Chose the approach and built the whole product: automatic collection and classification of filings, full-text search, alerts and paid subscriptions, replacing the old site.",
    result: "Indexed between 100,000 and 1 million contract exhibits (reported).",
    inside: [
      {
        problem: "Exhibits are hidden inside filings of many types",
        solution: "Filings parsed and each exhibit classified by number and keywords",
      },
      {
        problem: "Lawyers search by clause wording and need to narrow results",
        solution: "Full-text search with filters for company, industry, size, law firm and exhibit type",
      },
      {
        problem: "Users want to know about new matches",
        solution: "Saved searches that email new exhibits immediately, daily or weekly",
      },
    ],
  },
  {
    id: "ewallet",
    business: "An e-wallet for consumers and merchants, plus a marketplace",
    region: "Singapore",
    period: "Jun 2020 – Jul 2021",
    role: "Main contributor",
    types: ["Payments & money", "Security & reliability", "Marketplaces"],
    challenge:
      "Customers send money, pay merchants by QR code and withdraw to banks across several currencies. A transfer must never be applied twice.",
    approach:
      "Built money movement, top-ups, withdrawals and identity checks, and most of the marketplace seller portal, where sellers are paid through the wallet.",
    result: "Fixed a double-spend race found by a penetration test and closed the wallet's authorization gaps.",
    inside: [
      {
        problem: "Simultaneous requests could change a balance twice",
        solution: "Each transfer made all-or-nothing and rejected early if checks fail",
      },
      {
        problem: "Fees, commission and rewards must be right",
        solution: "All of them calculated before any money moves",
      },
      {
        problem: "Reports slowed down payments",
        solution: "Reads moved to separate read-only database connections",
      },
    ],
    tech: ["CakePHP", "MySQL", "Redis", "AWS"],
  },
  {
    id: "hotel-booking",
    business: "Online hotel booking and front desk for the Saudi market",
    region: "Saudi Arabia",
    period: "Apr 2014 – Apr 2015",
    role: "Senior software engineer (on-site, Dhaka)",
    types: ["Bookings & travel"],
    challenge:
      "Hotels and motels were booked by phone and email. Owners wanted every property listed in one place with fully online booking.",
    approach:
      "Learned a new framework for the project, then built property listings with online booking, the mobile booking API, notifications and the front-desk screens.",
    result:
      "Guests book online in Arabic or English, and front-desk staff check in, move rooms and take payments in one system.",
    inside: [
      {
        problem: "Guests needed updates without calling",
        solution: "SMS and bilingual email for cancellations and date changes",
      },
      {
        problem: "Front-desk staff juggle check-ins, room moves and payments",
        solution: "One check-in form, a room-transfer flow with charge adjustment, and reports by role",
      },
    ],
  },
  {
    id: "travel-store",
    business: "A multi-product online travel store",
    region: "Australia",
    period: "Jul 2013 – Feb 2015",
    role: "Software developer (part-time, remote)",
    types: ["Bookings & travel", "Modernizing legacy systems"],
    challenge:
      "The store was built for desktop while phone and tablet traffic grew, and cruises couldn't be sold alongside flights and hotels.",
    approach:
      "Rebuilt every product module's pages with responsive layouts, and made cruises a bookable itinerary item.",
    result:
      "Every product's pages were rebuilt for phones and tablets, and cruises appeared in itineraries, emails and PDFs.",
    inside: [
      { problem: "Sign-up friction hurt registrations", solution: "Sign-in with three social providers" },
      { problem: "Staff needed to manage destination videos", solution: "A video library with admin screens" },
    ],
  },
  {
    id: "email-tasks",
    business: "Project management that runs from email",
    region: "Bangladesh",
    period: "Jan 2012 – Apr 2014",
    role: "Senior software engineer (on-site, Dhaka)",
    types: ["Workflow & automation"],
    challenge:
      "Teams ran projects through email, so decisions and action items lived in inboxes and nobody could see a project's true state.",
    approach:
      "Mapped the workflow with the teams, then built the parsing that turns relevant emails into tracked tasks, and the reply loop.",
    result: "Teams could run a project from email alone or from the tool, with nothing lost in between (reported).",
    inside: [
      {
        problem: "Work fell between email and the project tool",
        solution: "Every relevant email becomes a task automatically",
      },
      {
        problem: "People live in their inbox",
        solution: "Specially formatted emails and replies update tasks without opening the tool",
      },
    ],
  },
];

export const principles: Principle[] = [
  {
    title: "Don't let the app set the price",
    explanation: "The server decides what a customer pays. The phone app only displays it.",
    example: "Gourmeal: every order priced from the vendor's menu.",
    projectId: "gourmeal",
  },
  {
    title: "Never show customers half-finished data",
    explanation: "Load new data to the side and swap it in at once.",
    example: "Daily updates from seven tour operators.",
    projectId: "tour-catalogue",
  },
  {
    title: "Money moves all-or-nothing",
    explanation: "A transfer either completes fully or not at all.",
    example: "The e-wallet double-spend fix.",
    projectId: "ewallet",
  },
  {
    title: "Hide the mess behind one clean door",
    explanation: "Many suppliers, one simple way to book.",
    example: "10+ rental companies behind one booking flow.",
    projectId: "car-rental",
  },
  {
    title: "Replace old systems without stopping the business",
    explanation: "Move one piece at a time and keep the old path working until the new one is ready.",
    example: "The newsletter platform's module-by-module move.",
    projectId: "newsletter-platform",
  },
  {
    title: "Hear about problems before customers do",
    explanation: "Alert on failures, and on silence.",
    example: "Alerts when no background job has finished for four hours.",
    projectId: "tour-catalogue",
  },
];
