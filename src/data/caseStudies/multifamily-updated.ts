import type { CaseStudy } from './types'

export const multifamily: CaseStudy = {
  id: 'multifamily-business-value-discovery',
  category: 'MULTIFAMILY PROPERTY MANAGEMENT',
  title: 'Business Value Discovery',
  description:
    'Using Business Value Discovery to connect business drivers, data, and analytics solutions.',
  heroImage: '/images/case-studies/multifamily/short-value-driver-map.svg',
  sections: [
    {
      type: 'text',
      id: 'the-challenge',
      title: 'The Challenge',
      navigationLabel: 'The Challenge',
      paragraphs: [
        'A multifamily property management company wanted to better understand where data and analytics could create business value.',
        'The challenge was not simply deciding what dashboards to build. We first needed to understand how the business worked, what drove financial performance, and where better information could support decisions.',
      ],
    },
    {
      type: 'text',
      id: 'discovery',
      title: 'Starting With the Business',
      navigationLabel: 'Discovery',
      paragraphs: [
        'I helped facilitate and contribute to a Business Value Discovery process, a methodology I helped develop at Axis Group. We worked with stakeholders to understand business goals, processes, challenges, decisions, existing information, and opportunities for improvement.',
        'The goal was to move from broad business problems toward specific analytics opportunities rather than starting with a predefined solution.',
      ],
    },
    {
      type: 'steps',
      id: 'bvd-framework',
      title: 'From Business Problem to Analytics Opportunity',
      navigationLabel: 'BVD Framework',
      steps: [
        {
          title: 'Business Problem',
          description: 'What challenge is the organization experiencing?',
        },
        {
          title: 'People & Decisions',
          description: 'Who is affected, and what decisions or actions are involved?',
        },
        {
          title: 'Information Needs',
          description: 'What information would help support those decisions?',
        },
        {
          title: 'Analytics Opportunity',
          description: 'Where could analytics provide meaningful support?',
        },
        {
          title: 'Data & Requirements',
          description: 'What data is needed to support the opportunity?',
        },
      ],
    },
    {
      type: 'image',
      id: 'value-driver-map',
      title: 'Mapping the Drivers of Business Value',
      navigationLabel: 'Value Driver Map',
      image: '/images/case-studies/multifamily/value-driver-map.svg',
      alt: 'Value driver map showing how Net Operating Income connects to revenue, expenses, occupancy, leasing, rental rate, and other operational drivers.',
    },
    {
      type: 'text',
      id: 'value-driver-mapping',
      title: 'From Business Drivers to Opportunities',
      navigationLabel: 'Value Drivers',
      paragraphs: [
        'For the multifamily business, we used Net Operating Income as a starting point and mapped the operational drivers underneath it.',
        'This created a way to move from a high-level financial outcome to more specific business questions. For example, Occupancy could be decomposed into New Leases, Renewals, and other drivers; New Leases could then be explored through Prospect Generation, Prospect Conversion, and Time to Lease.',
        'Each branch created a potential opportunity to investigate: Where is performance changing? What is driving the change? And where could better information help someone take action?',
      ],
    },
    {
      type: 'text',
      id: 'from-opportunity-to-data',
      title: 'Connecting Opportunities to Data',
      navigationLabel: 'Data & Requirements',
      paragraphs: [
        'Once an opportunity was identified, I worked to connect the business question to the information required to answer it.',
        'For leasing and occupancy, this included data such as properties and units, prospects, visits, new leases, move-ins and move-outs, historical performance, budgets, forecasts, and targets.',
        'This step grounded the opportunities in the available data and helped define what the analytical solution needed to provide.',
      ],
      bullets: [
        'Properties & units',
        'Prospects & visits',
        'New leases & move-ins',
        'Move-outs & availability',
        'Budget, forecast & prior-year performance',
        'Targets and thresholds',
      ],
    },
    {
      type: 'text',
      id: 'occupancy-opportunity',
      title: 'Use Case: Understanding Occupancy & Exposure',
      navigationLabel: 'Occupancy & Exposure',
      paragraphs: [
        'The Occupancy branch led to an opportunity to understand not just current occupancy, but where future occupancy risk was emerging.',
        'I designed an Occupancy & Exposure solution that combines current performance with expected move-ins and move-outs, projections, budget comparisons, and property-level detail.',
        'The experience helps users move from “What is our occupancy?” to “Where are we likely to have an occupancy problem, and what is driving it?”',
      ],
    },
    {
      type: 'image',
      id: 'occupancy-exposure',
      title: 'Occupancy & Exposure',
      navigationLabel: 'Occupancy Solution',
      image: '/images/case-studies/multifamily/occupancy-exposure.png',
      alt: 'Analytics solution for understanding occupancy and exposure across a multifamily property portfolio.',
    },
    {
      type: 'text',
      id: 'leasing-opportunity',
      title: 'Use Case: Improving Leasing Funnel Efficiency',
      navigationLabel: 'Leasing Funnel',
      paragraphs: [
        'The New Leases branch led to a second opportunity: understanding how prospects move through the leasing funnel and where conversion is being lost.',
        'I designed a Leasing Funnel Efficiency solution connecting Prospects → Visits → New Leases and measuring conversion at each stage.',
        'This makes it possible to distinguish between different problems: generating too few prospects, failing to convert prospects into visits, or failing to convert visits into leases.',
      ],
    },
    {
      type: 'image',
      id: 'leasing-funnel-efficiency',
      title: 'Leasing Funnel Efficiency',
      navigationLabel: 'Leasing Solution',
      image: '/images/case-studies/multifamily/leasing-funnel-efficiency.png',
      alt: 'Analytics solution showing prospect, visit, and new lease funnel performance and conversion rates.',
    },
    {
      type: 'text',
      id: 'outcome',
      title: 'From Business Value to Analytics',
      navigationLabel: 'Outcome',
      paragraphs: [
        'The BVD process created a traceable path from a broad business objective to a specific analytics solution:',
        'Business outcome → value driver → business question → analytics opportunity → data requirements → solution design.',
        'Rather than starting with a dashboard request, the work started with understanding what the business was trying to influence and then designing analytics around the decisions that could support it.',
      ],
      bullets: [
        'A structured view of business drivers',
        'More specific, actionable analytics opportunities',
        'Clearer connections between opportunities and data',
        'Solution concepts grounded in business decisions',
      ],
    },
    {
      type: 'text',
      id: 'reflection',
      title: 'Reflection',
      navigationLabel: 'Reflection',
      paragraphs: [
        'What I enjoyed most about this project was the process of taking an unfamiliar business, understanding how its pieces fit together, and gradually turning an ambiguous problem into something concrete.',
        'The value driver map became an important bridge between business strategy and analytics design. It helped shift the conversation from “What should we build?” to “What is the business trying to influence, what information would help, and what solution would support that decision?”',
      ],
    },
  ],
}

export default multifamily
