import type { CaseStudy } from "./types.ts"

const inventoryLoss: CaseStudy = {
  id: "inventory-loss",

  category: "MOVIE THEATER CONCESSIONS",

  title: "Investigating Inventory Loss",

  description:
    "Understanding how inventory moves through the theater and identifying opportunities to improve loss prevention.",

  heroImage: "/images/inventory-loss.jpg",

  sections: [
    {
      type: "text",
      id: "summary",
      title: "The Challenge",
      navigationLabel: "Challenge",
      paragraphs: [
        "A national movie theater company needed better visibility into inventory loss across its concession and restaurant operations.",
        "I worked with the Loss Prevention team to understand how inventory moved through the business, develop a method for identifying meaningful discrepancies, and design an analytical experience that helped users investigate where and why loss was occurring.",
      ],
    },

    {
      type: "text",
      id: "the-problem",
      title: "The Problem",
      navigationLabel: "Problem",
      paragraphs: [
        "Inventory was tracked across hundreds of theaters, but largely manual processes made it difficult for the Loss Prevention team to see where products were going or identify potential sources of loss.",
        "The team needed a way to bring together purchase data, sales transactions, and inventory counts to identify meaningful discrepancies and determine where deeper investigation was warranted.",
      ],
      bullets: [
        "Monitor inventory across locations",
        "Compare performance between theaters",
        "Identify potential sources of inventory loss",
        "Determine which products or locations warranted investigation",
      ],
    },

    {
      type: "text",
      id: "business-process",
      title: "Understanding the Business Process",
      navigationLabel: "Business Process",
      paragraphs: [
        "Before defining what inventory loss meant in the data, I worked with the Loss Prevention team to understand how inventory actually moved through a theater.",
        "The process connected forecasting, ordering, receiving, sales and consumption, waste, transfers, and inventory counts. Each of these activities could affect the inventory values we ultimately needed to analyze.",
      ],
    },

    {
      type: "image",
      id: "business-process-diagram",
      image:
        "/images/case-studies/movie-theater/movie-theater-business-process.svg",
      alt: "Movie theater inventory business process",
    },

    {
      type: "text",
      id: "analytical-method",
      title: "Developing the Analytical Method",
      navigationLabel: "Analytical Method",
      paragraphs: [
        "As we worked through the inventory process and available data, it became clear that different types of inventory required different analytical approaches.",
        "We developed separate methods for sellable and non-sellable products, based on how each moved through and was monitored within the business.",
      ],
    },

    {
      type: "text",
      id: "sellable-products",
      title: "Sellable Products",
      paragraphs: [
        "For sellable products, we compared expected inventory against actual inventory, accounting for the movements that affected inventory levels.",
        "These discrepancies could then be translated into measures such as lost sales or lost cost of goods.",
      ],
    },

    {
      type: "text",
      id: "non-sellable-products",
      title: "Non-Sellable Products",
      paragraphs: [
        "Non-sellable products required a different approach. Instead of comparing expected and actual inventory, we focused on ordering behavior and comparisons with relevant peer groups.",
        "This helped identify locations whose ordering patterns differed meaningfully from comparable theaters.",
      ],
    },

    {
      type: "image",
      id: "analytical-method-diagram",
      image:
        "/images/case-studies/movie-theater/movie-theater-analytical-method.svg",
      alt: "Analytical method for different inventory types",
    },

    {
      type: "text",
      id: "analytical-logic",
      title: "Working Through the Analytical Logic",
      navigationLabel: "Analytical Logic",
      paragraphs: [
        "With the analytical methods defined, I worked through the detailed logic needed to identify meaningful discrepancies and determine which issues warranted investigation.",
        "The analysis considered multiple sources of inventory movement and potential loss rather than treating every difference between inventory values as the same type of problem.",
      ],
    },

    {
      type: "image",
      id: "analytical-logic-diagram",
      image:
        "/images/case-studies/movie-theater/movie-theater-analytical-logic.svg",
      alt: "Analytical logic used to investigate inventory discrepancies",
    },

    {
      type: "questions",
      id: "investigation-questions",
      title: "Designing the Investigation",
      navigationLabel: "Investigation",
      questions: [
        {
          question: "How much loss are we seeing?",
          description:
            "Establish the overall scale of potential inventory loss.",
        },
        {
          question: "What's driving it?",
          description:
            "Understand which types of inventory or discrepancies are contributing.",
        },
        {
          question: "Where is it happening?",
          description:
            "Narrow the investigation to theaters, categories, and products.",
        },
        {
          question: "Why is it happening?",
          description:
            "Examine the underlying inventory values, calculations, and patterns.",
        },
      ],
    },

    {
      type: "text",
      id: "solution",
      title: "The Solution",
      navigationLabel: "Solution",
      paragraphs: [
        "The final analytical experience helped the Loss Prevention team move from identifying potential inventory issues to understanding what was happening, where it was happening, and what to investigate next.",
      ],
    },

    {
      type: "text",
      id: "overall-picture",
      title: "Start with the Overall Picture",
      paragraphs: [
        "Users could begin with a consolidated view of inventory performance across theaters, helping them identify where to look first.",
      ],
    },

    {
      type: "image",
      id: "overall-solution",
      image:
        "/images/case-studies/movie-theater/movie-theater-overall-solution.png",
      alt: "Overall inventory loss analytical solution",
    },

    {
      type: "text",
      id: "specific-locations",
      title: "Narrow Down to Specific Locations",
      paragraphs: [
        "From the overall view, users could filter to individual theaters and investigate locations with potentially unusual behavior.",
      ],
    },

    {
      type: "image",
      id: "location-filter",
      image:
        "/images/case-studies/movie-theater/movie-theater-filter1.png",
      alt: "Filtering inventory loss by theater location",
    },

    {
      type: "text",
      id: "specific-products",
      title: "Investigate Specific Products",
      paragraphs: [
        "Users could continue narrowing the analysis to specific product categories and products, using the analytical methods developed earlier to understand what was driving a discrepancy.",
      ],
    },

    {
      type: "image",
      id: "product-filter-1",
      image:
        "/images/case-studies/movie-theater/movie-theater-filter2.png",
      alt: "Filtering inventory loss by product category",
    },

    {
      type: "image",
      id: "product-filter-2",
      image:
        "/images/case-studies/movie-theater/movie-theater-filter3.png",
      alt: "Investigating inventory loss at the product level",
    },

    {
      type: "text",
      id: "reflection",
      title: "Reflection",
      navigationLabel: "Reflection",
      paragraphs: [
        "This project reinforced how important it is to understand the real-world process behind a dataset before trying to interpret it.",
        "What I found most interesting was learning how the theater's operations worked, connecting the people, processes, and data involved, and translating that complexity into analytical logic that could support investigation.",
      ],
    },
  ],
};

export default inventoryLoss;