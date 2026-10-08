import type { CaseStudy } from './types.ts'

export const physicianUtilization: CaseStudy = {
  id: 'physician-utilization',

  category: 'ORTHOPEDIC CLINICS',

  title: 'Understanding Physician Utilization',

  description:
    'An orthopedic clinic network wanted better visibility into how physicians were utilizing their available appointment time. I worked to understand the different factors that contributed to physician utilization, define how utilization should be measured, and design an analytical experience that could help users identify why utilization was low—not just where it was low.',

  heroImage:
    '/images/physician-utilization.jpg',

  sections: [
    {
      type: 'text',
      id: 'the-problem',
      title: 'The Problem',
      navigationLabel: 'The Problem',
      paragraphs: [
        'The organization wanted to better understand physician utilization across its clinics.',

        'At first, utilization appeared to be a relatively straightforward metric: compare the amount of time a physician was seeing patients with the amount of time available.',

        'However, the more we explored the scheduling process, the more complicated the question became.',

        'A low utilization number could have several different causes: appointment time may not have been scheduled, scheduled appointments may not have occurred as planned, time may have been blocked for non-clinical activities, or available clinical time may not have been fully utilized.',

        'A single utilization metric could identify that something was happening, but it could not necessarily explain why.'
      ]
    },

    {
      type: 'text',
      id: 'understanding-scheduling-process',
      title: 'Understanding the Scheduling Process',
      navigationLabel: 'Discovery',
      paragraphs: [
        'Before defining the metric, we needed to understand how physician time was actually structured.',

        'This included exploring total available time, clinical availability, non-clinical blocks, scheduled appointments, actual appointment duration, and different appointment types.',

        'This revealed that utilization could not be understood as a single comparison.',

        'The utilization analysis identified three separate gaps that could contribute to low overall utilization.'
      ],
      bullets: [
        'Available Time → Available Clinical Time',
        'Available Clinical Time → Scheduled Appointment Time',
        'Scheduled Appointment Time → Actual Appointment Time'
      ]
    },

    {
      type: 'image',
      id: 'utilization-process',
      title: 'Understanding Clinical Capacity',
      navigationLabel: 'Process',
      image:
        '/images/case-studies/orthopedic/utilization-driver-process-flow.svg',
      alt: 'Process flow showing the operational drivers of physician utilization'
    },

    {
      type: 'steps',
      id: 'utilization-gaps',
      title: 'Breaking Utilization Into Gaps',
      navigationLabel: 'Metric Definition',
      steps: [
        {
          title: 'Available Time → Available Clinical Time',
          description:
            'Some time may be unavailable for appointments because it is reserved for non-clinical activities.'
        },
        {
          title: 'Available Clinical Time → Scheduled Appointment Time',
          description:
            'Available appointment time may not be fully scheduled.'
        },
        {
          title: 'Scheduled Appointment Time → Actual Appointment Time',
          description:
            'Scheduled appointments may not result in the expected amount of actual appointment time.'
        }
      ]
    },

    {
      type: 'image',
      id: 'utilization-framework',
      title: 'Defining Utilization',
      navigationLabel: 'Framework',
      image:
        '/images/case-studies/orthopedic/utilization-gaps-and-metrics-framework.svg',
      alt: 'Framework showing the components contributing to physician utilization'
    },

    {
      type: 'text',
      id: 'supporting-metrics',
      title: 'Moving Beyond a Single Number',
      navigationLabel: 'Metrics',
      paragraphs: [
        'Rather than simply showing a single utilization percentage, the analytical experience needed to help users understand why utilization was at that level.',

        'We broke utilization into the components contributing to the final metric and designed the analysis to surface where gaps were occurring.',

        'This created a more diagnostic view of utilization.'
      ],
      bullets: [
        'Total available time',
        'Available clinical time',
        'Non-clinical blocks',
        'Scheduled appointment duration',
        'Actual appointment duration',
        'Different appointment types'
      ]
    },

    {
      type: 'questions',
      id: 'investigation-questions',
      title: 'Designing Around the Questions Users Needed to Answer',
      navigationLabel: 'Investigation',
      questions: [
        {
          question: 'What is our overall utilization?',
          description:
            'Understand overall utilization and compare it to budget, targets, or the previous year.'
        },
        {
          question: 'How does utilization compare across the organization?',
          description:
            'Investigate utilization by practice, physician, and operating room.'
        },
        {
          question: 'How do blocks affect utilization?',
          description:
            'Investigate utilization excluding blocks, overall utilization, block duration, and block duration by provider.'
        },
        {
          question: 'How accurate is the schedule?',
          description:
            'Compare actual appointment duration with scheduled appointment duration.'
        },
        {
          question: 'Where is available clinical capacity going unused?',
          description:
            'Investigate gaps between available clinical time and scheduled appointment time.'
        },
        {
          question: 'What does utilization look like moving forward?',
          description:
            'Use current scheduled appointments to investigate expected future utilization.'
        }
      ]
    },

    {
      type: 'steps',
      id: 'analytical-experience',
      title: 'From Metrics to Investigation',
      navigationLabel: 'Solution',
      steps: [
        {
          title: 'Identify',
          description:
            'Identify physicians or clinics with low utilization.'
        },
        {
          title: 'Break Down',
          description:
            'Determine which component of utilization is contributing to the gap.'
        },
        {
          title: 'Compare',
          description:
            'Compare the physician or clinic with others.'
        },
        {
          title: 'Investigate',
          description:
            'Explore scheduling patterns and operational factors contributing to utilization.'
        }
      ]
    },

    {
      type: 'image',
      id: 'overall-utilization-design',
      title: 'The Analytical Experience',
      navigationLabel: 'Solution Design',
      image:
        '/images/case-studies/orthopedic/utilization-overall-design.png',
      alt: 'Overall design of the physician utilization analytical experience'
    },

    {
      type: 'text',
      id: 'moving-from-metrics',
      title: 'Moving From Metrics to Investigation',
      paragraphs: [
        'The solution was designed so users could move from a high-level metric into the information behind it.',

        'Users could begin with an overall view of utilization and then explore performance across different levels of the organization.',

        'The experience supported analysis by practice, physician, operating room, block, and time period.',

        'Related metrics provided context for understanding what was driving the overall utilization result.'
      ],
      bullets: [
        'Identify low overall utilization',
        'Compare performance across practices or physicians',
        'Determine whether blocked time was contributing',
        'Investigate unused clinical capacity',
        'Review schedule accuracy',
        'Examine cancellations or no-shows',
        'Explore how current scheduling could affect utilization moving forward'
      ]
    },

    {
      type: 'text',
      id: 'impact',
      title: 'Creating a More Useful View of Utilization',
      navigationLabel: 'Impact',
      paragraphs: [
        'The project resulted in an analytical framework and solution designed around the operational questions behind utilization.',

        'The work connected business and stakeholder questions, clinical capacity, scheduling processes, appointment data, utilization metrics, operational drivers, and analytical design.',

        'Rather than treating utilization as a single KPI, the solution helped create a more structured way to understand the factors contributing to unused capacity.',

        'The work was designed to help users move from identifying a utilization problem to investigating the operational factors behind it.'
      ]
    },

    {
      type: 'text',
      id: 'reflection',
      title: 'What Surprised Me?',
      navigationLabel: 'Reflection',
      paragraphs: [
        'One of the most interesting parts of the project was realizing how much complexity existed behind a metric that initially seemed straightforward.',

        'At the beginning, utilization appeared to be a simple calculation. However, as we worked through the different durations involved, it became clear that two organizations could report the same utilization percentage while experiencing very different operational problems.',

        'Low utilization could result from non-clinical blocks, unused clinical capacity, cancellations, no-shows, schedule inaccuracies, or patient demand.',

        'The percentage alone could not explain the problem. Understanding the relationships between the different metrics was necessary to make the data useful.'
      ],
      bullets: [
        'Breaking down a broad business question into more specific analytical questions',
        'Understanding the different operational factors behind utilization',
        'Working through how the different duration metrics related to one another',
        'Identifying the gaps that could contribute to low utilization',
        'Translating a complex analytical framework into something users could investigate'
      ]
    }
  ]
}

export default physicianUtilization;