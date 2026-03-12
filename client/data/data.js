export const stackLayerCategories = [
  // ─────────────────────────────────────────────────────────────
  // IDEATION
  // ─────────────────────────────────────────────────────────────
  {
    category: "Ideation",
    description: "Shaping ideas. Brainstorming, outlining, early concepts.",
    tools: [
      {
        name: "ChatGPT",
        tier: "Premium",
        tags: ["Brainstorming", "Writing"],
        filter: ["Script Writing"],
        logo: { bg: "#10a37f", color: "#fff", initials: "GP" },
        description:
          "OpenAI's conversational AI for ideation, outlines, and early concept development across any topic.",
        detailedDesc:
          "ChatGPT is OpenAI's flagship conversational AI, built on the GPT-5 model family. It enables individuals and teams to brainstorm, outline, research, and draft content through natural language interaction. From quick idea generation to deep research sessions and multi-step reasoning, ChatGPT adapts to virtually any creative or analytical workflow.",
        bestFor:
          "Individuals, content creators, researchers, and teams who need a versatile AI assistant for open-ended brainstorming and ideation.",
        stage: "Ideation Stage",
        strengths: [
          "Exceptionally versatile across all ideation use cases",
          "GPT-5 offers state-of-the-art reasoning and creativity",
          "Massive plugin and GPT ecosystem for extended functionality",
        ],
        limitations: [
          "Usage caps on free and Plus tiers during high traffic",
          "Requires clear prompting to get consistently structured outputs",
          "Memory and context can be inconsistent across long sessions",
        ],
        alternatives: [
          { name: "Claude", tagline: "Long-context reasoning AI" },
          { name: "Perplexity AI", tagline: "Research-focused AI with live web" },
          { name: "Google Gemini", tagline: "Google's multimodal AI assistant" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, Android, API",
          communitySize: "700M+ weekly users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["GPT-5 with limits", "Basic image gen", "Limited browsing"],
            cta: "Start for Free",
          },
          {
            plan: "Plus",
            price: "$20",
            period: "/mo",
            popular: true,
            features: ["Expanded GPT-5 access", "DALL·E image gen", "Deep Research", "Sora preview"],
            cta: "Go Plus",
          },
          {
            plan: "Pro",
            price: "$200",
            period: "/mo",
            features: ["Unlimited all models", "o1 Pro mode", "Priority access", "Unlimited voice"],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://chatgpt.com",
      },
      {
        name: "Claude",
        tier: "Premium",
        tags: ["Brainstorming", "Writing"],
        filter: ["Script Writing"],
        logo: { bg: "#d97757", color: "#fff", initials: "CL" },
        description:
          "Anthropic's AI assistant for long-form brainstorming, structured outlines, and nuanced creative ideation.",
        detailedDesc:
          "Claude is Anthropic's safety-focused AI assistant, renowned for its ability to handle extremely long documents, nuanced reasoning, and thoughtful creative writing. Its 200K context window makes it ideal for reviewing large research papers, generating detailed outlines, and iterating on complex ideas across extended sessions.",
        bestFor:
          "Writers, researchers, and teams who need deep contextual understanding, careful reasoning, and long-document handling in their ideation process.",
        stage: "Ideation Stage",
        strengths: [
          "200K token context window — handles entire books",
          "Nuanced, careful reasoning with fewer hallucinations",
          "Excellent at structured outlines and long-form brainstorming",
        ],
        limitations: [
          "No real-time web search on base plans",
          "Image generation not natively supported",
          "Slightly more conservative than competitors on edge-case requests",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "OpenAI's versatile AI assistant" },
          { name: "Perplexity AI", tagline: "AI with live web research" },
          { name: "Notion AI", tagline: "AI inside your workspace" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web, iOS, Android, API",
          communitySize: "50M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Claude Sonnet access", "Limited messages/day", "File uploads"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$20",
            period: "/mo",
            popular: true,
            features: ["5x more usage", "Claude Opus access", "Priority during peak", "Projects"],
            cta: "Go Pro",
          },
          {
            plan: "Team",
            price: "$30",
            period: "/user/mo",
            features: ["Higher usage limits", "Admin console", "SSO", "Shared projects"],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://claude.ai",
      },
      {
        name: "Perplexity AI",
        tier: "Premium",
        tags: ["Research", "Ideation"],
        filter: ["Script Writing"],
        logo: { bg: "#1a1a2e", color: "#00d4aa", initials: "PX" },
        description:
          "AI-powered research assistant for exploring, validating, and expanding on early concepts with live web data.",
        detailedDesc:
          "Perplexity AI is an AI-powered answer engine that combines large language models with real-time web search to deliver cited, accurate research. It is particularly powerful in the ideation phase for validating assumptions, exploring trends, and generating well-sourced concept briefs — all in a conversational format.",
        bestFor:
          "Researchers, strategists, and early-stage thinkers who need live, cited information to validate and expand on initial ideas.",
        stage: "Ideation Stage",
        strengths: [
          "Real-time web search with cited sources",
          "Excellent for fact-checking and validating early concepts",
          "Clean, focused interface with Follow-up question suggestions",
        ],
        limitations: [
          "Less suited for long-form content creation",
          "Pro search queries are capped on free tier",
          "Less creative depth compared to Claude or ChatGPT for brainstorming",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "Versatile AI with browsing" },
          { name: "Google Gemini", tagline: "Google's AI with Search integration" },
          { name: "Elicit", tagline: "Academic research AI" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, Android, API",
          communitySize: "15M+ monthly users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Unlimited quick searches", "5 Pro searches/day", "GPT-4o & Claude access"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$20",
            period: "/mo",
            popular: true,
            features: ["Unlimited Pro searches", "File upload & analysis", "API access", "Advanced models"],
            cta: "Go Pro",
          },
          {
            plan: "Max",
            price: "$200",
            period: "/mo",
            features: ["Highest model access", "Unlimited Research mode", "Early feature access", "Create files & apps"],
            cta: "Go Max",
          },
        ],
        visitUrl: "https://perplexity.ai",
      },
      {
        name: "Notion AI",
        tier: "Premium",
        tags: ["Brainstorming", "Outlining"],
        filter: ["Script Writing"],
        logo: { bg: "#000000", color: "#ffffff", initials: "NO" },
        description:
          "AI writing and brainstorming embedded directly into Notion docs, wikis, and project pages.",
        detailedDesc:
          "Notion AI integrates GPT-4 and Claude directly into the Notion workspace, enabling teams to brainstorm, draft, summarize, and organize ideas without switching apps. Its contextual awareness of your existing pages and databases makes it uniquely powerful for teams that already use Notion as their central knowledge hub.",
        bestFor:
          "Teams already using Notion who want AI assistance embedded directly into their documents, wikis, and project management workflows.",
        stage: "Ideation Stage",
        strengths: [
          "AI understands your existing workspace context",
          "No app-switching — brainstorm and write in one place",
          "Supports multi-model access (GPT-4 + Claude) on Business tier",
        ],
        limitations: [
          "Requires Notion subscription — not standalone",
          "AI features limited to 20 responses on Free/Plus tiers",
          "Less powerful for complex reasoning than dedicated AI tools",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "Standalone AI assistant" },
          { name: "ClickUp Brain", tagline: "AI inside project management" },
          { name: "Mem AI", tagline: "AI-organized note-taking" },
        ],
        quickInfo: {
          founded: "2016",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "100M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["20 AI responses trial", "Unlimited pages", "Basic blocks"],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$12",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited file uploads", "30-day history", "AI add-on available ($10)"],
            cta: "Get Plus",
          },
          {
            plan: "Business",
            price: "$20",
            period: "/user/mo",
            features: ["Full AI included", "GPT-4 + Claude access", "SAML SSO", "Private spaces"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://notion.so",
      },
      {
        name: "Miro AI",
        tier: "Premium",
        tags: ["Collaboration", "Mind Mapping"],
        filter: [],
        logo: { bg: "#ffdd00", color: "#050038", initials: "MI" },
        description:
          "AI-powered collaborative whiteboard for visual brainstorming, diagrams, and team ideation sessions.",
        detailedDesc:
          "Miro is the world's leading collaborative whiteboard platform, trusted by 90M+ users. Its AI layer adds intelligent clustering, diagram generation, sticky note summarization, and Sidekick AI collaborators that help teams move from raw ideas to structured plans faster. The infinite canvas is particularly well-suited for visual thinkers and distributed teams.",
        bestFor:
          "Product, design, and cross-functional teams who prefer visual, spatial brainstorming with real-time or async collaboration.",
        stage: "Ideation Stage",
        strengths: [
          "Industry-leading visual collaboration canvas",
          "AI clusters, summarizes, and structures sticky notes automatically",
          "160+ integrations including Jira, Slack, Figma, and Zoom",
        ],
        limitations: [
          "Free plan limited to 3 editable boards",
          "AI credits are limited and don't roll over monthly",
          "Can feel overwhelming for simple brainstorming tasks",
        ],
        alternatives: [
          { name: "FigJam AI", tagline: "Figma's design-focused whiteboard" },
          { name: "Mural", tagline: "Facilitation-focused collaboration" },
          { name: "Lucidchart", tagline: "Diagramming-first platform" },
        ],
        quickInfo: {
          founded: "2011",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "90M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["3 editable boards", "10 AI credits/month", "5,000+ templates"],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$8",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited boards", "25 AI credits/member", "Private boards", "Board history"],
            cta: "Get Starter",
          },
          {
            plan: "Business",
            price: "$20",
            period: "/user/mo",
            features: ["SSO", "Guest editing", "50 AI credits", "Jira/Asana sync", "AI Workflows"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://miro.com",
      },
      {
        name: "MindMeister",
        tier: "Premium",
        tags: ["Mind Mapping", "Outlining"],
        filter: [],
        logo: { bg: "#ff6b35", color: "#fff", initials: "MM" },
        description:
          "Online mind mapping tool with AI idea suggestions, automated formatting, and real-time collaboration.",
        detailedDesc:
          "MindMeister is one of the most established online mind mapping tools, used by over 20 million people globally. Its AI features generate idea suggestions, auto-format maps, and help structure complex topics into visual hierarchies. With real-time multi-user editing and seamless integration with MeisterTask, it bridges ideation and execution.",
        bestFor:
          "Students, educators, and teams who need a structured, visually clean mind mapping tool with AI-powered idea expansion and collaboration.",
        stage: "Ideation Stage",
        strengths: [
          "Intuitive drag-and-drop mind mapping interface",
          "AI generates related ideas and subtopics automatically",
          "Real-time multi-user collaboration with commenting",
        ],
        limitations: [
          "Free plan limited to 3 mind maps",
          "Less powerful than whiteboard tools for freeform brainstorming",
          "Export options limited on lower tiers",
        ],
        alternatives: [
          { name: "XMind AI", tagline: "Feature-rich mind mapping with AI" },
          { name: "Miro AI", tagline: "Full visual collaboration platform" },
          { name: "Coggle", tagline: "Simple collaborative mind maps" },
        ],
        quickInfo: {
          founded: "2007",
          platform: "Web, iOS, Android",
          communitySize: "20M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["3 mind maps", "Basic AI features", "Real-time collaboration"],
            cta: "Start Free",
          },
          {
            plan: "Personal",
            price: "$6.49",
            period: "/mo",
            popular: true,
            features: ["Unlimited maps", "AI idea generation", "All export formats", "Themes"],
            cta: "Get Personal",
          },
          {
            plan: "Business",
            price: "$12.49",
            period: "/user/mo",
            features: ["Team management", "Group sharing", "Priority support", "Admin dashboard"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://mindmeister.com",
      },
      {
        name: "XMind AI",
        tier: "Premium",
        tags: ["Mind Mapping", "Brainstorming"],
        filter: [],
        logo: { bg: "#ff4757", color: "#fff", initials: "XM" },
        description:
          "Full-featured mind mapping tool with an AI Copilot that generates maps from a single topic prompt.",
        detailedDesc:
          "XMind is a premium mind mapping application for desktop and web, now enhanced with an AI Copilot that generates entire mind maps from a single text prompt. It supports multiple diagram formats — mind maps, fishbone diagrams, timelines, matrices — and is popular among professionals for strategic planning, project scoping, and knowledge organization.",
        bestFor:
          "Professionals and solo creators who need rich diagramming capabilities with AI map generation for strategic planning and knowledge organization.",
        stage: "Ideation Stage",
        strengths: [
          "AI Copilot generates complete maps from a prompt instantly",
          "Supports 10+ diagram structures beyond standard mind maps",
          "Polished desktop app with offline access",
        ],
        limitations: [
          "Pro features require a subscription; free tier is limited",
          "Less focused on real-time team collaboration than Miro",
          "Mobile app less powerful than the desktop version",
        ],
        alternatives: [
          { name: "MindMeister", tagline: "Web-first mind mapping" },
          { name: "Miro AI", tagline: "Collaborative whiteboard platform" },
          { name: "Ayoa", tagline: "Mind mapping with task management" },
        ],
        quickInfo: {
          founded: "2006",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Basic maps", "Limited AI credits", "Export to image"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$9.99",
            period: "/mo",
            popular: true,
            features: ["Unlimited AI Copilot", "All diagram types", "Cloud sync", "Priority support"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$14.99",
            period: "/user/mo",
            features: ["Team workspaces", "Admin controls", "SSO", "Advanced export"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://xmind.app",
      },
      {
        name: "Ayoa",
        tier: "Premium",
        tags: ["Mind Mapping", "Task Management"],
        filter: [],
        logo: { bg: "#7c3aed", color: "#fff", initials: "AY" },
        description:
          "Combines AI-powered mind mapping with task management; ideal for creative professionals and teams.",
        detailedDesc:
          "Ayoa uniquely bridges the gap between ideation and execution by combining AI-powered mind maps with Gantt-style task boards and agile workflows. Developed by the creator of iMindMap, it uses a distinctive organic radial map style that mirrors natural thinking patterns, and AI features help expand topics, suggest subtopics, and prioritize tasks.",
        bestFor:
          "Creative professionals and project-oriented teams who need to move seamlessly from brainstorming to task management within one tool.",
        stage: "Ideation Stage",
        strengths: [
          "Unique organic mind map style that mirrors natural thinking",
          "Combines mind maps, whiteboards, and Gantt task boards",
          "AI suggests related concepts and helps expand map branches",
        ],
        limitations: [
          "Interface can feel busy compared to simpler mind map tools",
          "Task management not as powerful as dedicated PM tools",
          "Free tier quite restricted",
        ],
        alternatives: [
          { name: "MindMeister", tagline: "Clean online mind mapping" },
          { name: "ClickUp Brain", tagline: "AI inside full project management" },
          { name: "Taskade", tagline: "AI workspaces with mind maps" },
        ],
        quickInfo: {
          founded: "2019",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Limited boards", "Basic mind maps", "3 task boards"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$13",
            period: "/mo",
            popular: true,
            features: ["Unlimited maps", "AI features", "Gantt boards", "Integrations"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$20",
            period: "/user/mo",
            features: ["Team management", "Advanced permissions", "Priority support", "Analytics"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://ayoa.com",
      },
      {
        name: "FigJam AI",
        tier: "Premium",
        tags: ["Collaboration", "Whiteboard"],
        filter: [],
        logo: { bg: "#f24e1e", color: "#fff", initials: "FJ" },
        description:
          "Figma's collaborative whiteboard with AI sticky note sorting, template generation, and team ideation tools.",
        detailedDesc:
          "FigJam is Figma's collaborative online whiteboard, purpose-built for team brainstorming, design critiques, retrospectives, and planning sessions. Its AI features sort sticky notes, generate templates from prompts, summarize boards, and help teams extract key insights from messy brainstorm sessions — all within the familiar Figma ecosystem.",
        bestFor:
          "Design and product teams already in the Figma ecosystem who need a seamless whiteboarding tool for workshops, retrospectives, and collaborative ideation.",
        stage: "Ideation Stage",
        strengths: [
          "Deep integration with Figma design files",
          "AI sorts, clusters, and summarizes sticky note sessions",
          "Fun, accessible interface with emoji reactions and music",
        ],
        limitations: [
          "Best value only for existing Figma users",
          "Less powerful for large-scale structured diagramming",
          "AI features still maturing vs. Miro's AI depth",
        ],
        alternatives: [
          { name: "Miro AI", tagline: "More powerful standalone whiteboard" },
          { name: "Mural", tagline: "Facilitation-first workspace" },
          { name: "Lucidchart", tagline: "Structured diagramming platform" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web, iOS, Android",
          communitySize: "4M+ teams",
        },
        pricing: [
          {
            plan: "Starter",
            price: "$0",
            period: "forever",
            features: ["3 FigJam files", "Unlimited viewers", "Basic AI features"],
            cta: "Start Free",
          },
          {
            plan: "Figma Professional",
            price: "$15",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited FigJam files", "Full AI features", "Team libraries", "Branching"],
            cta: "Get Professional",
          },
          {
            plan: "Organization",
            price: "$45",
            period: "/user/mo",
            features: ["SSO", "Advanced analytics", "Centralized admin", "Private plugins"],
            cta: "Get Organization",
          },
        ],
        visitUrl: "https://figma.com/figjam",
      },
      {
        name: "ClickUp Brain",
        tier: "Premium",
        tags: ["Brainstorming", "Project Planning"],
        filter: ["Script Writing"],
        logo: { bg: "#7b68ee", color: "#fff", initials: "CU" },
        description:
          "AI assistant inside ClickUp that connects tasks, docs, and mind maps for structured ideation and planning.",
        detailedDesc:
          "ClickUp Brain is an AI-powered neural network built into the ClickUp project management platform. It connects your tasks, documents, people, and knowledge into a unified AI layer that can answer questions about your projects, generate content, summarize updates, and build mind maps — all with awareness of your entire workspace context.",
        bestFor:
          "Teams that use ClickUp for project management and want an AI assistant that understands and references their actual work, tasks, and documents.",
        stage: "Ideation Stage",
        strengths: [
          "Contextually aware of your ClickUp tasks, docs, and goals",
          "AI writes, summarizes, and answers from your workspace data",
          "Combines ideation with immediate task creation and assignment",
        ],
        limitations: [
          "Requires ClickUp subscription — not available standalone",
          "AI Brain adds $7/user/mo on top of base plan",
          "Learning curve for new ClickUp users",
        ],
        alternatives: [
          { name: "Notion AI", tagline: "AI inside docs and wikis" },
          { name: "Taskade", tagline: "Lightweight AI project workspace" },
          { name: "Asana AI", tagline: "AI in task management" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "10M+ teams",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["100MB storage", "Basic views", "No Brain access"],
            cta: "Start Free",
          },
          {
            plan: "Unlimited + Brain",
            price: "$12",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited storage", "ClickUp Brain AI", "All views", "Integrations"],
            cta: "Get Unlimited",
          },
          {
            plan: "Business + Brain",
            price: "$26",
            period: "/user/mo",
            features: ["Google SSO", "Advanced automation", "Time tracking", "Goals & portfolios"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://clickup.com",
      },
      {
        name: "Mapify (Chatmind)",
        tier: "Premium",
        tags: ["Mind Mapping", "Summarization"],
        filter: [],
        logo: { bg: "#0ea5e9", color: "#fff", initials: "MP" },
        description:
          "AI mind map generator that summarizes any content — URLs, PDFs, videos — into structured visual maps.",
        detailedDesc:
          "Mapify (formerly Chatmind) is an AI tool that instantly converts any source of content — URLs, PDFs, YouTube videos, text — into structured, visual mind maps. It's particularly useful during research-heavy ideation phases where you need to rapidly synthesize multiple sources into organized knowledge structures.",
        bestFor:
          "Researchers, students, and knowledge workers who want to quickly transform articles, papers, and videos into structured visual maps for ideation.",
        stage: "Ideation Stage",
        strengths: [
          "Converts URLs, PDFs, and videos into mind maps instantly",
          "AI-generated maps are logically structured and well-labeled",
          "Excellent for rapid synthesis of research sources",
        ],
        limitations: [
          "Limited free credits per month",
          "Output quality depends heavily on source content quality",
          "Less suitable for freeform creative brainstorming",
        ],
        alternatives: [
          { name: "Wordtune Read", tagline: "AI document summarizer" },
          { name: "Elicit", tagline: "Academic research AI" },
          { name: "Napkin AI", tagline: "Text to visual diagrams" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web",
          communitySize: "500K+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["5 AI maps/month", "Basic export", "URL summarization"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$9.90",
            period: "/mo",
            popular: true,
            features: ["Unlimited maps", "PDF & video support", "Advanced export", "Priority processing"],
            cta: "Go Pro",
          },
          {
            plan: "Team",
            price: "$19.90",
            period: "/user/mo",
            features: ["Shared workspaces", "Team management", "API access", "Custom branding"],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://mapify.so",
      },
      {
        name: "Boardmix",
        tier: "Premium",
        tags: ["Whiteboard", "Collaboration"],
        filter: [],
        logo: { bg: "#6366f1", color: "#fff", initials: "BM" },
        description:
          "Online whiteboard with AI brainstorming tools, real-time collaboration, commenting, and voting features.",
        detailedDesc:
          "Boardmix is an AI-enhanced online whiteboard platform for collaborative visual work. It combines a flexible infinite canvas with AI generation tools, real-time multi-user editing, sticky note voting, and a library of structured workshop templates — making it a strong competitor to Miro for teams looking for a more affordable collaborative workspace.",
        bestFor:
          "Remote and hybrid teams who need an affordable, AI-enhanced whiteboard for workshops, retrospectives, and collaborative brainstorming sessions.",
        stage: "Ideation Stage",
        strengths: [
          "Generous free tier compared to competitors",
          "AI generates diagrams and structures from text prompts",
          "Built-in voting, timer, and comment features for workshops",
        ],
        limitations: [
          "Smaller integration ecosystem than Miro or FigJam",
          "Less polished than category leaders",
          "AI features still developing",
        ],
        alternatives: [
          { name: "Miro AI", tagline: "Leading visual collaboration tool" },
          { name: "FigJam AI", tagline: "Figma's collaborative whiteboard" },
          { name: "Mural", tagline: "Facilitation-focused workspace" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, Android",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Unlimited boards", "Basic AI features", "Real-time collaboration"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$8.99",
            period: "/mo",
            popular: true,
            features: ["Advanced AI", "Custom templates", "Unlimited export", "Priority support"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$15",
            period: "/user/mo",
            features: ["Team workspaces", "Admin controls", "SSO", "Usage analytics"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://boardmix.com",
      },
      {
        name: "Lucidchart",
        tier: "Premium",
        tags: ["Diagramming", "Collaboration"],
        filter: [],
        logo: { bg: "#f97316", color: "#fff", initials: "LC" },
        description:
          "Intelligent diagramming platform with AI suggestions for layouts, flowcharts, and organizational ideas.",
        detailedDesc:
          "Lucidchart is a leading cloud-based diagramming application used by over 70 million users globally. Its AI capabilities include auto-layout generation, shape suggestions, and data-linked diagram creation. It's the go-to tool for teams who need to visually map out systems, workflows, org charts, and processes during the ideation and planning phase.",
        bestFor:
          "Engineers, analysts, and business teams who need structured, data-driven diagrams — flowcharts, org charts, network maps — to visualize ideas and systems.",
        stage: "Ideation Stage",
        strengths: [
          "70M+ users — industry-standard diagramming tool",
          "AI auto-generates and refines diagram layouts",
          "Deep integrations with Google Workspace, Microsoft, Atlassian",
        ],
        limitations: [
          "Less suited for freeform brainstorming vs. whiteboard tools",
          "Free plan limited to 3 documents",
          "Can be complex for non-technical users",
        ],
        alternatives: [
          { name: "Miro AI", tagline: "Visual collaboration and diagramming" },
          { name: "Whimsical", tagline: "Lightweight flowcharts and maps" },
          { name: "FigJam AI", tagline: "Design-focused whiteboard" },
        ],
        quickInfo: {
          founded: "2010",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "70M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["3 documents", "Basic shapes", "100 templates"],
            cta: "Start Free",
          },
          {
            plan: "Individual",
            price: "$9",
            period: "/mo",
            popular: true,
            features: ["Unlimited documents", "Advanced shapes", "AI features", "All export types"],
            cta: "Get Individual",
          },
          {
            plan: "Team",
            price: "$9",
            period: "/user/mo",
            features: ["Team sharing", "Advanced integrations", "Admin panel", "Version history"],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://lucidchart.com",
      },
      {
        name: "Mural",
        tier: "Premium",
        tags: ["Collaboration", "Whiteboard"],
        filter: [],
        logo: { bg: "#ff3366", color: "#fff", initials: "MU" },
        description:
          "Digital workspace for visual collaboration with AI-powered facilitation tools for brainstorming workshops.",
        detailedDesc:
          "Mural is a digital workspace for visual collaboration, built with a strong focus on facilitation and structured workshop experiences. Its AI tools include Intelligent Canvas (auto-organizes content), AI-powered summarization, and a rich library of facilitated workshop templates — making it particularly powerful for design thinking, sprint planning, and team alignment sessions.",
        bestFor:
          "Workshop facilitators, consultants, and product teams who need structured, facilitation-heavy brainstorming experiences with distributed teams.",
        stage: "Ideation Stage",
        strengths: [
          "Best-in-class facilitation features (timer, voting, guided tours)",
          "AI organizes, summarizes, and synthesizes workshop output",
          "Extensive library of facilitation methods and frameworks",
        ],
        limitations: [
          "Pricing higher than some competitors for similar features",
          "Free tier limited to 3 murals",
          "Some users prefer Miro's UI depth for non-workshop use",
        ],
        alternatives: [
          { name: "Miro AI", tagline: "More powerful for daily collaboration" },
          { name: "FigJam AI", tagline: "Lighter design-team whiteboard" },
          { name: "Boardmix", tagline: "More affordable alternative" },
        ],
        quickInfo: {
          founded: "2011",
          platform: "Web, iOS, Android",
          communitySize: "95M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["3 murals", "Unlimited members", "Basic AI features"],
            cta: "Start Free",
          },
          {
            plan: "Team+",
            price: "$17.99",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited murals", "AI Facilitation", "Private workspaces", "Integrations"],
            cta: "Get Team+",
          },
          {
            plan: "Business",
            price: "$27.99",
            period: "/user/mo",
            features: ["SSO", "Advanced admin", "SCIM", "Guest access"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://mural.co",
      },
      {
        name: "Google Gemini",
        tier: "Premium",
        tags: ["Brainstorming", "Research"],
        filter: ["Script Writing"],
        logo: { bg: "#4285f4", color: "#fff", initials: "GG" },
        description:
          "Google's multimodal AI for exploring concepts, generating outlines, and researching ideas with web access.",
        detailedDesc:
          "Google Gemini is Google's flagship AI assistant, powered by the Gemini 2.0 model family. It's deeply integrated with Google Search, Workspace, and YouTube, giving it unique capabilities for research-driven ideation. Gemini Advanced unlocks Deep Research — an agentic feature that generates comprehensive multi-source research reports from a single prompt.",
        bestFor:
          "Google Workspace users and researchers who want AI-powered brainstorming and research with seamless integration into Google Docs, Drive, and Search.",
        stage: "Ideation Stage",
        strengths: [
          "Deep integration with Google Search and Workspace",
          "Deep Research generates multi-page research reports automatically",
          "Multimodal — handles text, images, audio, and video",
        ],
        limitations: [
          "Best features require Google One AI Premium subscription",
          "Less creative depth than Claude for nuanced writing",
          "Privacy concerns for users sensitive to Google data practices",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "OpenAI's versatile AI assistant" },
          { name: "Perplexity AI", tagline: "Research-first AI with citations" },
          { name: "Claude", tagline: "Long-context reasoning AI" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web, iOS, Android, Google Workspace",
          communitySize: "350M+ monthly users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Gemini 2.0 Flash", "Google integration", "Basic image generation"],
            cta: "Start Free",
          },
          {
            plan: "Google One AI Premium",
            price: "$19.99",
            period: "/mo",
            popular: true,
            features: ["Gemini 2.0 Ultra", "Deep Research", "Workspace integration", "NotebookLM+"],
            cta: "Get Premium",
          },
          {
            plan: "Workspace Business",
            price: "$30",
            period: "/user/mo",
            features: ["Gemini for Workspace", "AI in Docs/Gmail/Slides", "Admin controls", "Enterprise security"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://gemini.google.com",
      },
      {
        name: "Taskade",
        tier: "Premium",
        tags: ["Project Planning", "AI Agents"],
        filter: ["Script Writing"],
        logo: { bg: "#6c63ff", color: "#fff", initials: "TD" },
        description:
          "AI-powered workspace combining to-do lists, mind maps, flowcharts, and chat for collaborative ideation.",
        detailedDesc:
          "Taskade is an AI-first collaborative workspace that unifies task lists, mind maps, flowcharts, wikis, and team chat into a single platform. Its AI Agents can autonomously research topics, generate project plans, build mind maps, and execute multi-step workflows — making it one of the most agentic ideation tools available for small teams.",
        bestFor:
          "Small teams and solopreneurs who want an all-in-one AI workspace that handles both ideation and project management without juggling multiple apps.",
        stage: "Ideation Stage",
        strengths: [
          "AI Agents autonomously research and build project plans",
          "All-in-one: tasks, mind maps, docs, and chat in one app",
          "Generous free tier with solid AI features",
        ],
        limitations: [
          "Less powerful for enterprise-scale project management",
          "AI agents can be inconsistent on complex multi-step tasks",
          "Smaller template library than Notion or ClickUp",
        ],
        alternatives: [
          { name: "Notion AI", tagline: "AI in a flexible workspace" },
          { name: "ClickUp Brain", tagline: "AI in full project management" },
          { name: "Miro AI", tagline: "Visual collaboration platform" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["5 workspaces", "1,000 AI credits/mo", "All view types"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$19",
            period: "/mo",
            popular: true,
            features: ["Unlimited workspaces", "Unlimited AI credits", "Custom AI agents", "Automation"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$49",
            period: "/mo",
            features: ["10 users included", "Custom branding", "API access", "Priority support"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://taskade.com",
      },
      {
        name: "Napkin AI",
        tier: "Premium",
        tags: ["Visual Thinking", "Diagramming"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#18181b", color: "#facc15", initials: "NA" },
        description:
          "Turns your text and ideas into visual diagrams, charts, and infographics instantly with AI.",
        detailedDesc:
          "Napkin AI is a visual thinking tool that transforms written text and ideas into professional diagrams, flowcharts, and infographics automatically. It's designed for business communicators, consultants, and presenters who need to quickly convert written thoughts into visually compelling slides and reports without any design skill.",
        bestFor:
          "Business communicators, consultants, and presenters who need to quickly turn written ideas into professional visual diagrams and infographics.",
        stage: "Ideation Stage",
        strengths: [
          "Instant text-to-diagram conversion with no design skills needed",
          "Generates multiple visual interpretations to choose from",
          "Clean, professional output ready for presentations",
        ],
        limitations: [
          "Limited customization depth compared to dedicated design tools",
          "Less suitable for complex technical diagrams",
          "Free tier has usage limits",
        ],
        alternatives: [
          { name: "Lucidchart", tagline: "Structured diagramming platform" },
          { name: "Canva AI", tagline: "Full design platform with AI" },
          { name: "Tome", tagline: "AI presentation builder" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web",
          communitySize: "500K+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Limited visuals/mo", "All diagram types", "Basic export"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$16",
            period: "/mo",
            popular: true,
            features: ["Unlimited visuals", "Brand customization", "All export formats", "Priority generation"],
            cta: "Go Pro",
          },
          {
            plan: "Team",
            price: "$30",
            period: "/user/mo",
            features: ["Shared brand kit", "Team workspaces", "Admin controls", "API access"],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://napkin.ai",
      },
      {
        name: "Elicit",
        tier: "Premium",
        tags: ["Research", "Literature Review"],
        filter: [],
        logo: { bg: "#1e3a5f", color: "#60a5fa", initials: "EL" },
        description:
          "AI research assistant that finds and summarizes academic papers to fuel informed idea generation.",
        detailedDesc:
          "Elicit is an AI research assistant specifically designed for literature review and academic research. It searches over 200 million papers, extracts key findings, summarizes methodologies, and organizes research into structured tables — dramatically speeding up the evidence-gathering phase of idea development and hypothesis generation.",
        bestFor:
          "Researchers, academics, scientists, and evidence-based decision makers who need to quickly survey and synthesize academic literature for ideation.",
        stage: "Ideation Stage",
        strengths: [
          "Searches 200M+ academic papers with AI summarization",
          "Extracts specific data points from papers into structured tables",
          "Dramatically speeds up literature review and evidence synthesis",
        ],
        limitations: [
          "Limited to academic/research content — not for general brainstorming",
          "Free tier limited to 12 papers per search",
          "Requires familiarity with academic research workflows",
        ],
        alternatives: [
          { name: "Perplexity AI", tagline: "General AI research with web search" },
          { name: "Consensus", tagline: "AI-powered academic search engine" },
          { name: "Wordtune Read", tagline: "AI document summarizer" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web",
          communitySize: "2M+ researchers",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["12 papers/search", "Basic summaries", "CSV export"],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$10",
            period: "/mo",
            popular: true,
            features: ["Unlimited papers", "Detailed extraction", "Priority processing", "Team sharing"],
            cta: "Go Plus",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: ["Bulk processing", "API access", "Custom integrations", "Dedicated support"],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://elicit.com",
      },
      {
        name: "Obsidian",
        tier: "Premium",
        tags: ["Note-Taking", "Knowledge Graph"],
        filter: [],
        logo: { bg: "#7c3aed", color: "#e9d5ff", initials: "OB" },
        description:
          "Local-first note-taking app with AI plugins for building interconnected knowledge graphs and idea webs.",
        detailedDesc:
          "Obsidian is a powerful knowledge management tool that stores notes locally as plain Markdown files and visualizes their connections as an interactive knowledge graph. With the Copilot and Smart Connections community plugins, users can query their entire knowledge base using AI, surfacing relevant notes, making hidden connections, and accelerating serendipitous ideation.",
        bestFor:
          "Knowledge workers, writers, and researchers who want full data ownership and powerful AI-assisted knowledge graph building for long-term idea development.",
        stage: "Ideation Stage",
        strengths: [
          "Local-first storage — full data ownership and privacy",
          "Powerful backlinks create an interconnected knowledge web",
          "Extensive plugin ecosystem including AI integrations",
        ],
        limitations: [
          "Steep learning curve for new users",
          "Real-time collaboration limited compared to cloud-first tools",
          "AI features require third-party plugins and API keys",
        ],
        alternatives: [
          { name: "Notion AI", tagline: "Cloud-based workspace with AI" },
          { name: "Roam Research", tagline: "Networked thought note-taking" },
          { name: "Logseq", tagline: "Open-source outliner with AI" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, iOS, Android, Mac, Windows, Linux",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Personal (Free)",
            price: "$0",
            period: "forever",
            features: ["Unlimited notes", "Local storage", "Community plugins", "Knowledge graph"],
            cta: "Download Free",
          },
          {
            plan: "Catalyst",
            price: "$25",
            period: "one-time",
            popular: false,
            features: ["Insider builds", "Supporter badge", "Early access features"],
            cta: "Get Catalyst",
          },
          {
            plan: "Sync + Publish",
            price: "$16",
            period: "/mo",
            popular: true,
            features: ["End-to-end encrypted sync", "Version history", "Public note publishing"],
            cta: "Get Sync",
          },
        ],
        visitUrl: "https://obsidian.md",
      },
      {
        name: "Otter.ai",
        tier: "Premium",
        tags: ["Transcription", "Meeting Notes"],
        filter: ["Script Writing"],
        logo: { bg: "#0f766e", color: "#fff", initials: "OT" },
        description:
          "AI transcription tool that captures and summarizes meeting conversations for later ideation and review.",
        detailedDesc:
          "Otter.ai is an AI meeting assistant that automatically records, transcribes, and summarizes spoken conversations in real time. It integrates with Zoom, Teams, and Google Meet to capture brainstorming sessions, interviews, and workshops, then extracts action items and key themes — turning spoken ideation into searchable, organized text.",
        bestFor:
          "Teams who brainstorm verbally in meetings and want AI to automatically capture, transcribe, and summarize conversations for post-session review and action.",
        stage: "Ideation Stage",
        strengths: [
          "Real-time transcription with 90%+ accuracy",
          "AI automatically extracts action items and summaries",
          "Integrates directly with Zoom, Teams, and Google Meet",
        ],
        limitations: [
          "Free tier limited to 300 minutes/month",
          "Accuracy drops with heavy accents or crosstalk",
          "Not suitable for ideation tasks beyond transcription",
        ],
        alternatives: [
          { name: "Fireflies.ai", tagline: "AI meeting recorder with CRM sync" },
          { name: "Fathom", tagline: "Free AI meeting note-taker" },
          { name: "Notion AI", tagline: "AI workspace for organizing notes" },
        ],
        quickInfo: {
          founded: "2016",
          platform: "Web, iOS, Android",
          communitySize: "20M+ users",
        },
        pricing: [
          {
            plan: "Basic",
            price: "$0",
            period: "forever",
            features: ["300 min/month", "30 min/conversation", "3 AI summaries/month"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$16.99",
            period: "/mo",
            popular: true,
            features: ["1,200 min/month", "90 min/conversation", "Unlimited AI summaries"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$30",
            period: "/user/mo",
            features: ["6,000 min/user", "Admin controls", "Salesforce sync", "Priority support"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://otter.ai",
      },
      {
        name: "Fireflies.ai",
        tier: "Premium",
        tags: ["Transcription", "Meetings"],
        filter: ["Script Writing"],
        logo: { bg: "#7c3aed", color: "#fbbf24", initials: "FF" },
        description:
          "AI meeting recorder that transcribes, summarizes, and extracts action items from brainstorming sessions.",
        detailedDesc:
          "Fireflies.ai is an AI meeting notetaker that joins your video calls, transcribes conversations in 69+ languages, generates summaries, extracts action items, and syncs notes to CRM tools like Salesforce and HubSpot. Its AI search lets you find specific moments across hundreds of past meetings, making it a powerful institutional memory tool.",
        bestFor:
          "Sales teams, distributed teams, and project managers who need automated meeting documentation with CRM integration and searchable conversation archives.",
        stage: "Ideation Stage",
        strengths: [
          "Transcribes in 69+ languages with high accuracy",
          "Auto-syncs meeting notes to Salesforce, HubSpot, Slack",
          "AI search finds specific moments across all past meetings",
        ],
        limitations: [
          "Free tier limited to 800 minutes of storage",
          "Bot joining calls can feel intrusive to some participants",
          "Summary quality can vary for complex technical conversations",
        ],
        alternatives: [
          { name: "Otter.ai", tagline: "AI transcription and meeting notes" },
          { name: "Fathom", tagline: "Free AI meeting note-taker" },
          { name: "Gong", tagline: "Revenue intelligence platform" },
        ],
        quickInfo: {
          founded: "2019",
          platform: "Web, iOS, Android, Chrome Extension",
          communitySize: "300K+ companies",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["800 min storage", "AI summaries", "3 AI apps/month"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$18",
            period: "/seat/mo",
            popular: true,
            features: ["8,000 min storage", "Unlimited AI summaries", "CRM integrations"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$29",
            period: "/seat/mo",
            features: ["Unlimited storage", "Video recording", "Conversation intelligence", "Custom vocabulary"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://fireflies.ai",
      },
      {
        name: "Whimsical",
        tier: "Premium",
        tags: ["Wireframing", "Mind Mapping"],
        filter: [],
        logo: { bg: "#ec4899", color: "#fff", initials: "WH" },
        description:
          "Collaborative design tool combining mind maps, flowcharts, wireframes, and sticky notes in one canvas.",
        detailedDesc:
          "Whimsical is a beautifully designed collaborative workspace that unifies mind maps, flowcharts, wireframes, and sticky note boards in one clean interface. Its AI features generate flowcharts and mind maps from text descriptions, making it an excellent tool for product teams and designers who want to rapidly visualize ideas and user flows during early-stage ideation.",
        bestFor:
          "Product designers, UX researchers, and product managers who need to rapidly sketch user flows, wireframes, and concept maps in a clean, distraction-free environment.",
        stage: "Ideation Stage",
        strengths: [
          "Beautifully clean interface — minimal learning curve",
          "AI generates flowcharts and mind maps from text prompts",
          "Unified tool for wireframes, flows, maps, and brainstorming",
        ],
        limitations: [
          "Less powerful for large-scale collaborative workshops",
          "Free tier limited to 3 files per board type",
          "Fewer integrations than Miro or Lucidchart",
        ],
        alternatives: [
          { name: "Miro AI", tagline: "Full-featured visual collaboration" },
          { name: "FigJam AI", tagline: "Design-team focused whiteboard" },
          { name: "Lucidchart", tagline: "Structured diagramming platform" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web",
          communitySize: "3M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Starter workspace", "Limited files", "Basic AI features"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$10",
            period: "/user/mo",
            popular: true,
            features: ["Unlimited files", "AI generation", "Version history", "All exports"],
            cta: "Go Pro",
          },
          {
            plan: "Org",
            price: "$20",
            period: "/user/mo",
            features: ["SSO", "Admin controls", "Priority support", "Custom templates"],
            cta: "Get Org",
          },
        ],
        visitUrl: "https://whimsical.com",
      },
      {
        name: "Poe",
        tier: "Premium",
        tags: ["Multi-Model", "Brainstorming"],
        filter: ["Script Writing"],
        logo: { bg: "#6366f1", color: "#fff", initials: "PO" },
        description:
          "Quora's platform aggregating multiple AI models (Claude, GPT, Gemini) for diverse ideation perspectives.",
        detailedDesc:
          "Poe is Quora's AI platform that gives access to 20+ leading AI models — including Claude, GPT-4, Gemini, and Llama — in a single interface. For ideation, it's uniquely powerful because you can run the same brainstorming prompt across multiple models simultaneously and compare their outputs, giving you diverse creative perspectives and reducing single-model bias.",
        bestFor:
          "Power users and researchers who want to compare outputs from multiple AI models simultaneously for richer, less biased ideation and brainstorming.",
        stage: "Ideation Stage",
        strengths: [
          "Access 20+ AI models in one interface",
          "Compare responses from different models side-by-side",
          "Build custom AI bots with specific personas and instructions",
        ],
        limitations: [
          "Message limits on free tier for premium models",
          "Not specialized for any particular workflow",
          "Can be overwhelming without a clear preferred model",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "OpenAI's direct AI platform" },
          { name: "Claude", tagline: "Anthropic's reasoning AI" },
          { name: "Perplexity AI", tagline: "Research-focused AI assistant" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, Android",
          communitySize: "5M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Limited messages/day", "Basic model access", "Custom bot creation"],
            cta: "Start Free",
          },
          {
            plan: "Subscriber",
            price: "$19.99",
            period: "/mo",
            popular: true,
            features: ["Unlimited messages", "All premium models", "Priority access", "Advanced bot tools"],
            cta: "Subscribe",
          },
          {
            plan: "Annual",
            price: "$16.67",
            period: "/mo (billed annually)",
            features: ["Everything in monthly", "2 months free", "All features"],
            cta: "Get Annual",
          },
        ],
        visitUrl: "https://poe.com",
      },
      {
        name: "Microsoft Copilot",
        tier: "Premium",
        tags: ["Brainstorming", "Productivity"],
        filter: ["Script Writing"],
        logo: { bg: "#0078d4", color: "#fff", initials: "MC" },
        description:
          "Microsoft's AI assistant integrated across Office apps for brainstorming, drafts, and concept expansion.",
        detailedDesc:
          "Microsoft Copilot is Microsoft's AI assistant built on GPT-4 and integrated throughout the Microsoft 365 ecosystem — Word, Excel, PowerPoint, Teams, and Outlook. For ideation, it can brainstorm inside documents, generate PowerPoint presentations from prompts, summarize long Teams conversations, and help expand on initial concepts directly within your workflow.",
        bestFor:
          "Microsoft 365 users and enterprise teams who want AI-powered brainstorming and content generation embedded directly in Word, Teams, and PowerPoint.",
        stage: "Ideation Stage",
        strengths: [
          "Deep integration with Word, Excel, PowerPoint, Teams, Outlook",
          "Context-aware of your documents, emails, and meeting history",
          "Enterprise-grade security and compliance built-in",
        ],
        limitations: [
          "Best features require Microsoft 365 Copilot license at $30/user/mo",
          "Less creative depth than Claude or ChatGPT for pure ideation",
          "Requires existing Microsoft 365 subscription",
        ],
        alternatives: [
          { name: "ChatGPT", tagline: "Standalone AI for any workflow" },
          { name: "Notion AI", tagline: "AI embedded in flexible workspace" },
          { name: "Google Gemini", tagline: "Google Workspace AI integration" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web, iOS, Android, Windows, Microsoft 365",
          communitySize: "100M+ daily active users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["GPT-4 access", "Image generation", "Web browsing", "Basic features"],
            cta: "Start Free",
          },
          {
            plan: "Copilot Pro",
            price: "$20",
            period: "/mo",
            popular: true,
            features: ["Priority GPT-4", "Microsoft 365 AI", "Designer premium", "Copilot GPT builder"],
            cta: "Get Pro",
          },
          {
            plan: "Microsoft 365 Copilot",
            price: "$30",
            period: "/user/mo",
            features: ["Full Office AI", "Teams Copilot", "Word/Excel/PowerPoint AI", "Business Chat"],
            cta: "Get M365 Copilot",
          },
        ],
        visitUrl: "https://copilot.microsoft.com",
      },
      {
        name: "Logseq",
        tier: "Free",
        tags: ["Note-Taking", "Open Source"],
        filter: [],
        logo: { bg: "#1a1a2e", color: "#818cf8", initials: "LS" },
        description:
          "Open-source knowledge base and outliner with AI features for linking and structuring connected ideas.",
        detailedDesc:
          "Logseq is an open-source, local-first knowledge management tool that uses a block-based outliner to create interconnected notes with bidirectional links. Its AI plugin (powered by OpenAI) enables smart note summarization, question answering over your entire knowledge base, and automated tagging — making it ideal for privacy-conscious users who want AI-powered networked thought.",
        bestFor:
          "Privacy-focused researchers, developers, and academics who want an open-source, local-first networked note-taking system with AI capabilities.",
        stage: "Ideation Stage",
        strengths: [
          "Fully open-source with local-first storage",
          "Powerful block-based bidirectional linking",
          "Strong developer community with many AI plugins",
        ],
        limitations: [
          "Steeper learning curve than mainstream note tools",
          "Real-time collaboration not yet native",
          "Mobile apps less polished than desktop",
        ],
        alternatives: [
          { name: "Obsidian", tagline: "Local-first knowledge graph" },
          { name: "Roam Research", tagline: "Networked thought pioneer" },
          { name: "Notion AI", tagline: "Cloud workspace with AI" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, iOS, Android, Mac, Windows, Linux",
          communitySize: "500K+ users",
        },
        pricing: [
          {
            plan: "Free (Open Source)",
            price: "$0",
            period: "forever",
            features: ["Full feature set", "Local storage", "Plugin ecosystem", "Community support"],
            cta: "Download Free",
          },
          {
            plan: "Cloud Sync (Coming)",
            price: "TBD",
            period: "",
            features: ["Encrypted cloud sync", "Version history", "Multi-device"],
            cta: "Join Waitlist",
          },
        ],
        visitUrl: "https://logseq.com",
      },
      {
        name: "Mem AI",
        tier: "Premium",
        tags: ["Note-Taking", "AI Search"],
        filter: [],
        logo: { bg: "#0f172a", color: "#38bdf8", initials: "MA" },
        description:
          "AI-first note-taking app that automatically organizes your notes and resurfaces relevant ideas on demand.",
        detailedDesc:
          "Mem is an AI-first note-taking app that automatically organizes your notes without folders or manual tagging. Its AI (powered by GPT-4) continuously learns from your notes and surfaces relevant content when you need it, writes new notes in your style, and answers questions from your personal knowledge base — acting as an AI second brain.",
        bestFor:
          "Busy professionals and knowledge workers who want a zero-maintenance notes system where AI handles all organization and resurfacing of relevant ideas.",
        stage: "Ideation Stage",
        strengths: [
          "Automatic note organization with no manual tagging needed",
          "AI surfaces related notes contextually during writing",
          "Chat with your notes in natural language",
        ],
        limitations: [
          "Smaller ecosystem than Notion or Obsidian",
          "Pricier than comparable note tools",
          "Works best with large existing note collections",
        ],
        alternatives: [
          { name: "Notion AI", tagline: "Full workspace with AI" },
          { name: "Obsidian", tagline: "Local-first knowledge graph" },
          { name: "Reflect", tagline: "AI networked notebook" },
        ],
        quickInfo: {
          founded: "2019",
          platform: "Web, iOS, Mac",
          communitySize: "100K+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Unlimited notes", "Basic AI features", "Quick capture"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$14.99",
            period: "/mo",
            popular: true,
            features: ["AI note organization", "Chat with notes", "Smart search", "Integrations"],
            cta: "Go Pro",
          },
          {
            plan: "Teams",
            price: "$24.99",
            period: "/user/mo",
            features: ["Shared spaces", "Team AI search", "Admin dashboard", "Priority support"],
            cta: "Get Teams",
          },
        ],
        visitUrl: "https://mem.ai",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CREATION
  // ─────────────────────────────────────────────────────────────
  {
    category: "Creation",
    description: "Where ideas get real. Produce visuals, scripts, outputs.",
    tools: [
      {
        name: "Runway Gen-3",
        tier: "Premium",
        tags: ["AI Video", "Generative"],
        filter: ["Video Editing"],
        logo: { bg: "#0a0a0a", color: "#00e5ff", initials: "RW" },
        description:
          "Multi-modal AI for generating cinematic video from text and image prompts, used by professional creatives.",
        detailedDesc:
          "Runway Gen-3 Alpha is the latest generation of Runway's flagship video synthesis model, delivering state-of-the-art text-to-video and image-to-video generation with cinematic quality. Used by professional filmmakers, VFX artists, and creative studios, it produces highly realistic motion with fine-grained control over camera movement, style, and timing.",
        bestFor:
          "Professional video creators, filmmakers, and VFX artists who need cinematic-quality AI video generation with advanced camera and motion controls.",
        stage: "Creation Stage",
        strengths: [
          "Cinematic-quality video output with realistic motion",
          "Advanced camera control: pan, zoom, orbit, handheld",
          "Consistent character appearance across multiple shots",
        ],
        limitations: [
          "Credit-based pricing can get expensive at scale",
          "Maximum 10-second clips on standard generation",
          "Complex for absolute beginners to master",
        ],
        alternatives: [
          { name: "Sora", tagline: "OpenAI's text-to-video model" },
          { name: "Kling AI", tagline: "Realistic AI video generator" },
          { name: "Pika Labs", tagline: "Accessible AI video creation" },
        ],
        quickInfo: {
          founded: "2018",
          platform: "Web, iOS",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Basic",
            price: "$0",
            period: "forever",
            features: ["125 credits one-time", "720p generation", "Watermarked output"],
            cta: "Start for Free",
          },
          {
            plan: "Standard",
            price: "$15",
            period: "/mo",
            popular: false,
            features: ["625 credits/month", "4K upscaling", "Remove watermark", "Gen-3 access"],
            cta: "Get Standard",
          },
          {
            plan: "Pro",
            price: "$35",
            period: "/mo",
            popular: true,
            features: ["2,250 credits/month", "Priority generation", "All Gen-3 features", "Commercial license"],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://runwayml.com",
      },
      {
        name: "Jasper",
        tier: "Free Trial",
        tags: ["Copywriting", "Marketing"],
        filter: ["Script Writing"],
        logo: { bg: "#4f46e5", color: "#fff", initials: "JS" },
        description:
          "Enterprise AI writing platform for creating on-brand marketing copy, blog posts, and ad content at scale.",
        detailedDesc:
          "Jasper is an enterprise-grade AI writing platform designed for marketing teams. It learns your brand voice, tone, and guidelines to produce consistently on-brand content across blog posts, ads, email, social media, and product descriptions. With 50+ templates, a Campaigns feature, and integrations with Surfer SEO, it's built for high-volume content operations.",
        bestFor:
          "Marketing teams and content operations that need to produce large volumes of on-brand, SEO-optimized content consistently with AI assistance.",
        stage: "Creation Stage",
        strengths: [
          "Brand Voice training produces highly on-brand content",
          "50+ templates covering every marketing content type",
          "Integrated SEO optimization with Surfer SEO",
        ],
        limitations: [
          "Higher price point than competitors like Copy.ai or Writesonic",
          "Requires upfront brand training investment for best results",
          "Less effective for technical or highly specialized content",
        ],
        alternatives: [
          { name: "Copy.ai", tagline: "Affordable AI marketing writer" },
          { name: "Writesonic", tagline: "SEO-focused AI content writer" },
          { name: "ChatGPT", tagline: "Flexible general-purpose AI" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web, Chrome Extension",
          communitySize: "100K+ businesses",
        },
        pricing: [
          {
            plan: "Creator",
            price: "$49",
            period: "/mo",
            features: ["1 seat", "50+ templates", "Browser extension", "1 Brand Voice"],
            cta: "Start Trial",
          },
          {
            plan: "Pro",
            price: "$69",
            period: "/mo",
            popular: true,
            features: ["5 seats", "Unlimited Brand Voices", "3 Campaigns", "Jasper Art"],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "Custom",
            period: "",
            features: ["Custom seats", "SSO", "API access", "Dedicated support"],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://jasper.ai",
      },
      {
        name: "Midjourney",
        tier: "Paid Only",
        tags: ["AI Image", "Generative"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#000", color: "#fff", initials: "MJ" },
        description:
          "Generate stunning, highly artistic visuals from text descriptions using advanced neural image synthesis.",
        detailedDesc:
          "Midjourney is the gold standard for AI art generation, renowned for producing the most aesthetically stunning and artistically sophisticated images of any AI image tool. Operating primarily via Discord, it excels at painterly, photographic, and fantastical imagery with a level of compositional quality and style coherence that consistently outperforms competitors.",
        bestFor:
          "Artists, creative directors, game designers, and marketing teams who need exceptionally beautiful, artistically sophisticated AI-generated imagery.",
        stage: "Creation Stage",
        strengths: [
          "Produces the most artistically stunning images in the category",
          "Exceptional style coherence and compositional quality",
          "Active community with shared prompts and techniques",
        ],
        limitations: [
          "No free tier — paid subscription required",
          "Primary interface is Discord, which is non-intuitive for beginners",
          "Less precise for photorealistic accuracy vs. Flux or DALL·E",
        ],
        alternatives: [
          { name: "DALL·E 3", tagline: "OpenAI's photorealistic image gen" },
          { name: "Stable Diffusion", tagline: "Open-source image generation" },
          { name: "Adobe Firefly", tagline: "Commercial-safe AI imagery" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, Discord",
          communitySize: "20M+ users",
        },
        pricing: [
          {
            plan: "Basic",
            price: "$10",
            period: "/mo",
            features: ["200 images/month", "3 fast hours", "General commercial terms"],
            cta: "Get Basic",
          },
          {
            plan: "Standard",
            price: "$30",
            period: "/mo",
            popular: true,
            features: ["Unlimited relaxed gen", "15 fast hours", "Stealth mode available"],
            cta: "Get Standard",
          },
          {
            plan: "Pro",
            price: "$60",
            period: "/mo",
            features: ["30 fast hours", "Stealth mode included", "12 concurrent jobs"],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://midjourney.com",
      },
      {
        name: "ElevenLabs",
        tier: "Premium",
        tags: ["AI Voice", "Audio"],
        filter: ["AI Voiceover"],
        logo: { bg: "#111", color: "#f5c518", initials: "EL" },
        description:
          "Ultra-realistic AI text-to-speech and voice cloning in 30+ languages with contextually aware intonation.",
        detailedDesc:
          "ElevenLabs is the industry leader in AI voice generation, offering the most natural-sounding text-to-speech, voice cloning from 30-second samples, and a library of 3,000+ AI voices in 32 languages. Its contextually aware intonation system produces speech that sounds genuinely human, making it the go-to tool for audiobooks, podcasts, game characters, and video narration.",
        bestFor:
          "Content creators, audiobook publishers, game developers, and video producers who need the most realistic AI voiceovers and voice cloning available.",
        stage: "Creation Stage",
        strengths: [
          "Industry's most realistic text-to-speech quality",
          "Voice cloning from just 30 seconds of audio",
          "3,000+ pre-built voices in 32 languages",
        ],
        limitations: [
          "Free tier limited to 10,000 characters/month",
          "Voice cloning quality varies with audio sample quality",
          "Higher tiers needed for commercial voice cloning rights",
        ],
        alternatives: [
          { name: "Murf AI", tagline: "Professional AI voiceover studio" },
          { name: "Lovo AI", tagline: "AI voice generation platform" },
          { name: "Descript", tagline: "Video + voice editing combined" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, API",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["10K characters/mo", "3 custom voices", "Access to all voices"],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$5",
            period: "/mo",
            popular: false,
            features: ["30K characters/mo", "10 custom voices", "Commercial license"],
            cta: "Get Starter",
          },
          {
            plan: "Creator",
            price: "$22",
            period: "/mo",
            popular: true,
            features: ["100K characters/mo", "30 custom voices", "Voice cloning", "Priority support"],
            cta: "Get Creator",
          },
        ],
        visitUrl: "https://elevenlabs.io",
      },
      {
        name: "Captions.ai",
        tier: "Premium",
        tags: ["Mobile", "Short-form Video"],
        filter: ["Video Editing", "AI Voiceover"],
        logo: { bg: "#5b21b6", color: "#fff", initials: "CA" },
        description:
          "AI-powered studio for short-form video. Auto-adds captions, fixes eye contact, generates B-roll.",
        detailedDesc:
          "Captions is an AI video creation studio built specifically for short-form content creators. Its standout features include automatic eye contact correction (making it appear you're looking at the camera even when reading a script), AI-generated captions with 28 customizable styles, B-roll generation, background removal, and a built-in teleprompter — all optimized for mobile creation.",
        bestFor:
          "Social media creators, influencers, and businesses creating short-form content for TikTok, Instagram Reels, and YouTube Shorts who need to look professional effortlessly.",
        stage: "Creation Stage",
        strengths: [
          "Eye contact correction is a unique, high-impact differentiator",
          "Professional-grade captions in 28 styles, 28 languages",
          "All-in-one mobile creation: script, record, edit, caption",
        ],
        limitations: [
          "Primarily mobile-first — desktop experience less developed",
          "Free tier has usage limits and watermarks",
          "Best for short-form content; less suitable for long-form video",
        ],
        alternatives: [
          { name: "CapCut AI", tagline: "Full-featured mobile video editor" },
          { name: "Submagic", tagline: "AI captions for short-form video" },
          { name: "Veed.io", tagline: "Browser-based AI video editor" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "iOS, Android, Web",
          communitySize: "4M+ creators",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["Watermarked exports", "Basic captions", "10 videos/month"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$19.99",
            period: "/mo",
            popular: true,
            features: ["Unlimited videos", "No watermark", "Eye contact AI", "B-roll generation"],
            cta: "Go Pro",
          },
          {
            plan: "Unlimited",
            price: "$49.99",
            period: "/mo",
            features: ["All Pro features", "Priority processing", "Team collaboration", "API access"],
            cta: "Get Unlimited",
          },
        ],
        visitUrl: "https://captions.ai",
      },
      {
        name: "DALL·E 3",
        tier: "Premium",
        tags: ["AI Image", "Generative"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#10a37f", color: "#fff", initials: "DL" },
        description:
          "OpenAI's image generation model inside ChatGPT for creating detailed, photorealistic visuals from prompts.",
        detailedDesc:
          "DALL·E 3 is OpenAI's most advanced image generation model, natively integrated into ChatGPT Plus. It excels at following complex, nuanced text prompts with high accuracy, producing photorealistic and stylized images. Unlike Midjourney, it can accurately render text within images and seamlessly refine results through conversational follow-up prompts.",
        bestFor:
          "ChatGPT users, marketers, and creators who want accessible, high-quality image generation with accurate prompt following and easy iterative refinement via conversation.",
        stage: "Creation Stage",
        strengths: [
          "Superior prompt adherence — follows complex instructions accurately",
          "Can render readable text within images",
          "Seamless conversational refinement through ChatGPT",
        ],
        limitations: [
          "Limited usage on ChatGPT Plus tier",
          "Less artistically expressive than Midjourney",
          "No outpainting or fine-tuning options for advanced users",
        ],
        alternatives: [
          { name: "Midjourney", tagline: "Most artistically stunning AI images" },
          { name: "Adobe Firefly", tagline: "Commercial-safe image generation" },
          { name: "Flux", tagline: "Photorealistic image generation" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web (via ChatGPT), API",
          communitySize: "100M+ ChatGPT users",
        },
        pricing: [
          {
            plan: "Via ChatGPT Free",
            price: "$0",
            period: "",
            features: ["Limited generations", "Standard quality", "Slow generation"],
            cta: "Try Free",
          },
          {
            plan: "Via ChatGPT Plus",
            price: "$20",
            period: "/mo",
            popular: true,
            features: ["50 images/day", "High quality", "Conversational refinement"],
            cta: "Get Plus",
          },
          {
            plan: "API",
            price: "$0.040",
            period: "/image (1024x1024)",
            features: ["Full API access", "HD quality option", "Bulk generation"],
            cta: "Get API Access",
          },
        ],
        visitUrl: "https://openai.com/dall-e-3",
      },
      {
        name: "Adobe Firefly",
        tier: "Premium",
        tags: ["AI Image", "Design"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#ff0000", color: "#fff", initials: "AF" },
        description:
          "Adobe's commercial-safe generative AI for images, text effects, and creative assets inside Creative Cloud.",
        detailedDesc:
          "Adobe Firefly is Adobe's family of creative AI models, trained exclusively on licensed content, stock images, and public domain works — making it the only major AI image generator that is commercially safe for professional use. Integrated throughout Photoshop, Illustrator, and Adobe Express, it enables generative fill, text-to-image, and vector generation within professional creative workflows.",
        bestFor:
          "Professional designers, agencies, and enterprise creative teams who need commercially safe AI-generated imagery that integrates with existing Adobe Creative Cloud workflows.",
        stage: "Creation Stage",
        strengths: [
          "Only major AI image tool that is commercially safe for enterprise use",
          "Deep integration with Photoshop, Illustrator, and Premiere",
          "Trained on licensed content — no copyright infringement risk",
        ],
        limitations: [
          "Requires Creative Cloud subscription for full power",
          "Less photorealistic than Flux or Midjourney for creative art",
          "Free tier has limited generation credits",
        ],
        alternatives: [
          { name: "Midjourney", tagline: "Most artistically stunning imagery" },
          { name: "DALL·E 3", tagline: "OpenAI's accurate image generator" },
          { name: "Canva AI", tagline: "Design platform with AI images" },
        ],
        quickInfo: {
          founded: "2023",
          platform: "Web, Photoshop, Illustrator, Premiere",
          communitySize: "30M+ Creative Cloud users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["25 generative credits/mo", "Firefly web app", "Basic text effects"],
            cta: "Start Free",
          },
          {
            plan: "Firefly Premium",
            price: "$9.99",
            period: "/mo",
            popular: true,
            features: ["100 generative credits/mo", "All Firefly models", "Commercial license"],
            cta: "Get Premium",
          },
          {
            plan: "Creative Cloud All Apps",
            price: "$60",
            period: "/mo",
            features: ["All CC apps", "1,000 generative credits", "Full commercial rights", "Adobe Stock"],
            cta: "Get All Apps",
          },
        ],
        visitUrl: "https://firefly.adobe.com",
      },
      {
        name: "Canva AI",
        tier: "Premium",
        tags: ["Design", "Templates"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#00c4cc", color: "#fff", initials: "CV" },
        description:
          "Canva's suite of AI tools: Magic Write, text-to-image, AI video (Veo 3), and AI design generation.",
        detailedDesc:
          "Canva has embedded AI across its entire design platform, offering Magic Write for copy generation, Magic Media for text-to-image and text-to-video (powered by Google Veo 3), Magic Edit for image manipulation, Magic Resize for multi-format adaptation, and AI-powered presentation generation — all within its beginner-friendly drag-and-drop interface used by 200M+ people.",
        bestFor:
          "Non-designers, marketers, small businesses, and content creators who need to produce professional-quality visual content quickly using an accessible, template-rich platform.",
        stage: "Creation Stage",
        strengths: [
          "200M+ users — the most accessible design platform",
          "AI features cover copy, images, video, and design generation",
          "Huge library of 100M+ templates and brand kit tools",
        ],
        limitations: [
          "Pro AI features require Canva Pro subscription",
          "Less creative control than professional tools like Photoshop",
          "AI generation quality lower than dedicated image tools",
        ],
        alternatives: [
          { name: "Adobe Express AI", tagline: "Adobe's beginner-friendly design tool" },
          { name: "Figma", tagline: "Professional UI design platform" },
          { name: "Adobe Firefly", tagline: "Commercial-safe AI imagery" },
        ],
        quickInfo: {
          founded: "2013",
          platform: "Web, iOS, Android, Mac, Windows",
          communitySize: "200M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["250,000+ templates", "5GB storage", "Limited AI features"],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$15",
            period: "/mo",
            popular: true,
            features: ["Full AI suite", "100GB storage", "Brand Kit", "Background remover"],
            cta: "Get Pro",
          },
          {
            plan: "Teams",
            price: "$10",
            period: "/user/mo",
            features: ["Everything in Pro", "Team workspaces", "Admin controls", "SSO"],
            cta: "Get Teams",
          },
        ],
        visitUrl: "https://canva.com",
      },
      {
        name: "Descript",
        tier: "Premium",
        tags: ["Podcast", "Video Editing"],
        filter: ["Video Editing", "AI Voiceover", "Script Writing"],
        logo: { bg: "#7c3aed", color: "#fff", initials: "DS" },
        description:
          "Edit video and audio by editing the transcript. Includes AI voice cloning, overdubbing, and screen recording.",
        detailedDesc:
          "Descript is a revolutionary video and podcast editing platform where you edit media by editing its text transcript — delete a word from the transcript and it's removed from the video. Its Overdub feature creates an AI voice clone that can speak new words as if you recorded them, while AI Underlord automatically handles filler word removal, background noise suppression, and clip generation.",
        bestFor:
          "Podcasters, YouTubers, educators, and video creators who want to dramatically speed up editing by working with text transcripts rather than traditional timeline-based editing.",
        stage: "Creation Stage",
        strengths: [
          "Edit video by editing text — revolutionary workflow",
          "Overdub voice cloning replaces misspoken words perfectly",
          "AI removes filler words, silence, and background noise automatically",
        ],
        limitations: [
          "Not ideal for complex multi-camera film editing",
          "Free tier limited to 1 hour of transcription",
          "Voice cloning requires 10+ minutes of sample audio",
        ],
        alternatives: [
          { name: "CapCut AI", tagline: "Full-featured mobile video editor" },
          { name: "Veed.io", tagline: "Browser-based AI video editor" },
          { name: "ElevenLabs", tagline: "Best-in-class AI voice cloning" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, Mac, Windows",
          communitySize: "5M+ creators",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["1 hr transcription/mo", "Watermarked export", "Basic editing"],
            cta: "Start Free",
          },
          {
            plan: "Hobbyist",
            price: "$24",
            period: "/mo",
            popular: false,
            features: ["10 hrs transcription/mo", "No watermark", "Overdub included"],
            cta: "Get Hobbyist",
          },
          {
            plan: "Creator",
            price: "$40",
            period: "/mo",
            popular: true,
            features: ["30 hrs transcription", "Screen recording", "Multi-track", "AI Green Screen"],
            cta: "Get Creator",
          },
        ],
        visitUrl: "https://descript.com",
      },
      {
        name: "Sora",
        tier: "Premium",
        tags: ["AI Video", "Generative"],
        filter: ["Video Editing"],
        logo: { bg: "#10a37f", color: "#fff", initials: "SO" },
        description:
          "OpenAI's text-to-video model for generating cinematic, high-quality video scenes up to 60 seconds.",
        detailedDesc:
          "Sora is OpenAI's text-to-video and image-to-video model, capable of generating photorealistic video up to 60 seconds long with consistent characters, accurate physical simulation, and cinematic camera work. Available to ChatGPT Plus and Pro subscribers, it represents a major leap in AI video quality and is particularly strong for creative directors and storytellers.",
        bestFor:
          "Creative directors, filmmakers, and content creators who need high-quality, cinematic AI video generation with strong character consistency and physical realism.",
        stage: "Creation Stage",
        strengths: [
          "Exceptional physical simulation — objects move realistically",
          "Maintains character and scene consistency across long clips",
          "Up to 60-second generation — longest in class",
        ],
        limitations: [
          "Requires ChatGPT Plus ($20/mo) or Pro ($200/mo)",
          "Limited generations on Plus tier",
          "Still struggles with complex physics and text rendering",
        ],
        alternatives: [
          { name: "Runway Gen-3", tagline: "Professional AI video studio" },
          { name: "Kling AI", tagline: "Long-form AI video generation" },
          { name: "Luma Dream Machine", tagline: "Fast, realistic AI video" },
        ],
        quickInfo: {
          founded: "2024",
          platform: "Web (via ChatGPT)",
          communitySize: "ChatGPT users (700M+)",
        },
        pricing: [
          {
            plan: "ChatGPT Plus",
            price: "$20",
            period: "/mo",
            popular: false,
            features: ["Limited Sora generations", "720p output", "Standard queue"],
            cta: "Get Plus",
          },
          {
            plan: "ChatGPT Pro",
            price: "$200",
            period: "/mo",
            popular: true,
            features: ["Unlimited Sora 1 access", "1080p output", "Priority generation", "Downloads"],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://sora.com",
      },
      {
        name: "HeyGen",
        tier: "Premium",
        tags: ["AI Video", "Avatars"],
        filter: ["AI Voiceover", "Video Editing"],
        logo: { bg: "#2563eb", color: "#fff", initials: "HG" },
        description:
          "Generate polished videos with realistic AI avatars, voice cloning, and multilingual dubbing from text.",
        detailedDesc:
          "HeyGen is the leading AI video platform for creating presenter-style videos with photorealistic avatars and natural voice synthesis. Its standout feature is Video Translation, which can dub any video into 40+ languages while syncing lip movements to the translated audio — enabling global content distribution without re-recording. Used extensively for corporate training, marketing, and social content.",
        bestFor:
          "Businesses, marketers, and e-learning creators who need professional spokesperson videos, multilingual content, and personalized video campaigns without cameras or studios.",
        stage: "Creation Stage",
        strengths: [
          "Best-in-class video translation with lip-sync in 40+ languages",
          "Photorealistic custom avatar creation from a short video",
          "Instant Personalized Video for sales outreach at scale",
        ],
        limitations: [
          "Free tier limited to 1 minute of video per month",
          "Avatar quality depends on source video quality",
          "Less suitable for highly creative or cinematic video",
        ],
        alternatives: [
          { name: "Synthesia", tagline: "Enterprise AI avatar video" },
          { name: "D-ID", tagline: "Talking avatar from photos" },
          { name: "Runway Gen-3", tagline: "Cinematic AI video generation" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, API",
          communitySize: "500K+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["1 credit/month", "Watermarked output", "3 AI avatars"],
            cta: "Start Free",
          },
          {
            plan: "Creator",
            price: "$29",
            period: "/mo",
            popular: true,
            features: ["15 credits/month", "No watermark", "Video translation", "Custom avatar"],
            cta: "Get Creator",
          },
          {
            plan: "Business",
            price: "$89",
            period: "/mo",
            features: ["30 credits/month", "Priority rendering", "API access", "Team seats"],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://heygen.com",
      },
      {
        name: "Synthesia",
        tier: "Paid Only",
        tags: ["AI Video", "Avatars"],
        filter: ["AI Voiceover", "Video Editing"],
        logo: { bg: "#0ea5e9", color: "#fff", initials: "SY" },
        description:
          "Create professional AI presenter videos in 140+ languages with 230+ realistic avatars — no camera needed.",
        detailedDesc:
          "Synthesia is the enterprise-standard platform for AI avatar video production. Used by 50,000+ companies including Zoom, Nike, and Amazon, it enables teams to create professional training videos, product demos, and internal communications in 140+ languages with 230+ pre-built or custom AI presenters — completely eliminating the need for cameras, studios, or actors.",
        bestFor:
          "Enterprise L&D teams, corporate communications, and agencies that need to produce high volumes of professional presenter videos in multiple languages at scale.",
        stage: "Creation Stage",
        strengths: [
          "230+ pre-built photorealistic avatars in 140+ languages",
          "Slide-based editor makes video creation approachable for non-editors",
          "Enterprise-grade compliance: SOC 2, GDPR, WCAG 2.1 AA",
        ],
        limitations: [
          "No free tier — paid plans start at $29/mo",
          "Video length limits on lower tiers",
          "Less suitable for creative/cinematic storytelling",
        ],
        alternatives: [
          { name: "HeyGen", tagline: "AI avatar video with dubbing" },
          { name: "D-ID", tagline: "Talking avatar from photos" },
          { name: "Runway Gen-3", tagline: "Creative AI video generation" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web",
          communitySize: "50K+ companies",
        },
        pricing: [
          {
            plan: "Starter",
            price: "$29",
            period: "/mo",
            features: ["120 min video/year", "90+ avatars", "Basic templates"],
            cta: "Get Starter",
          },
          {
            plan: "Creator",
            price: "$89",
            period: "/mo",
            popular: true,
            features: ["Unlimited video", "160+ avatars", "Custom avatar", "1080p export"],
            cta: "Get Creator",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: ["SSO/SAML", "Custom avatars", "API access", "Dedicated CSM"],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://synthesia.io",
      },
      {
        name: "Luma Dream Machine",
        tier: "Premium",
        tags: ["AI Video", "Generative"],
        filter: ["Video Editing"],
        logo: { bg: "#18181b", color: "#a78bfa", initials: "LM" },
        description:
          "Luma Labs' fast text-to-video and image-to-video model producing realistic, physics-grounded footage.",
        detailedDesc:
          "Luma Dream Machine is Luma Labs' AI video generation model, known for its exceptionally fast generation speeds and high physical realism. It excels particularly at image-to-video animation, bringing still images to life with natural motion. Its latest models support keyframe control, allowing precise management of video start and end frames.",
        bestFor:
          "Creators and marketers who need fast, high-quality AI video generation — particularly for animating product photos, concepts, and creative stills.",
        stage: "Creation Stage",
        strengths: [
          "Some of the fastest generation speeds in the category",
          "Excellent physical realism — objects and people move naturally",
          "Keyframe control for precise start/end frame management",
        ],
        limitations: [
          "Free tier limited to 30 generations/month",
          "Maximum clip length shorter than competitors",
          "Less fine-grained camera control than Runway Gen-3",
        ],
        alternatives: [
          { name: "Runway Gen-3", tagline: "Professional AI video studio" },
          { name: "Kling AI", tagline: "Long-form realistic AI video" },
          { name: "Pika Labs", tagline: "Accessible AI video creation" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, API",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["30 generations/month", "Watermarked", "Standard quality"],
            cta: "Start Free",
          },
          {
            plan: "Standard",
            price: "$29.99",
            period: "/mo",
            popular: true,
            features: ["120 generations/month", "No watermark", "Full quality", "Priority"],
            cta: "Get Standard",
          },
          {
            plan: "Pro",
            price: "$99.99",
            period: "/mo",
            features: ["400 generations/month", "Maximum quality", "API access", "Commercial license"],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://lumalabs.ai",
      },
      {
        name: "Stable Diffusion",
        tier: "Free",
        tags: ["AI Image", "Open Source"],
        filter: ["Thumbnail Design"],
        logo: { bg: "#1e293b", color: "#818cf8", initials: "SD" },
        description:
          "Open-source image generation model for creating high-quality visuals locally, via API, or through UIs like Automatic1111.",
        detailedDesc:
          "Stable Diffusion is the foundational open-source AI image generation model developed by Stability AI. It can run locally on consumer GPUs, giving users total control over generation with no usage limits or API costs. Via interfaces like Automatic1111 and ComfyUI, and platforms like Civitai's thousands of community models, it offers the deepest customization of any image generation tool.",
        bestFor:
          "Developers, advanced creators, and privacy-focused users who want unlimited, customizable AI image generation with full control over models, fine-tuning, and workflows.",
        stage: "Creation Stage",
        strengths: [
          "Fully open source — run locally with no per-image costs",
          "Massive model ecosystem via Civitai (100K+ community models)",
          "Deepest customization: LoRAs, ControlNet, inpainting, workflows",
        ],
        limitations: [
          "Requires powerful GPU and technical setup for local use",
          "Steep learning curve vs. managed platforms",
          "Default outputs less polished than Midjourney without fine-tuning",
        ],
        alternatives: [
          { name: "Midjourney", tagline: "Easiest path to stunning AI art" },
          { name: "Flux", tagline: "Next-gen open-source image model" },
          { name: "Adobe Firefly", tagline: "Commercial-safe AI imagery" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Local, Web (via Hugging Face, Civitai), API",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Open Source (Local)",
            price: "$0",
            period: "forever",
            features: ["Unlimited generation", "Full model access", "Complete customization"],
            cta: "Download Free",
          },
          {
            plan: "Stability AI API",
            price: "$0.002",
            period: "/image",
            popular: true,
            features: ["No setup required", "Latest SD models", "JSON API access"],
            cta: "Get API Access",
          },
        ],
        visitUrl: "https://stability.ai",
      },
      {
        name: "CapCut AI",
        tier: "Premium",
        tags: ["Video Editing", "Mobile"],
        filter: ["Video Editing"],
        logo: { bg: "#000", color: "#fff", initials: "CC" },
        description:
          "ByteDance's mobile and desktop editor with AI auto-captions, text-to-video, background removal, and templates.",
        detailedDesc:
          "CapCut is ByteDance's free video editing app, now one of the most popular creator tools in the world with 300M+ monthly active users. Its AI features include auto-captions in 30+ languages, AI background removal, smart cutout, text-to-video generation, style transfer, and an ever-growing template library — all available for free on mobile and desktop.",
        bestFor:
          "Content creators, social media managers, and beginners who want powerful, free AI-assisted video editing for TikTok, Reels, and YouTube Shorts.",
        stage: "Creation Stage",
        strengths: [
          "Completely free with no watermarks on mobile exports",
          "Auto-captions available in 30+ languages",
          "Massive template library with trending social formats",
        ],
        limitations: [
          "ByteDance ownership raises data privacy concerns in some markets",
          "Desktop version less mature than mobile",
          "Advanced AI features require CapCut Pro",
        ],
        alternatives: [
          { name: "Captions.ai", tagline: "AI captions + eye contact fix" },
          { name: "Veed.io", tagline: "Browser-based AI video editor" },
          { name: "Descript", tagline: "Edit video by editing text" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "iOS, Android, Web, Mac, Windows",
          communitySize: "300M+ monthly users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "Unlimited editing",
              "Auto-captions",
              "Background removal",
              "Templates",
            ],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$9.99",
            period: "/mo",
            popular: true,
            features: [
              "AI-generated video",
              "More AI effects",
              "No watermark on all exports",
              "Cloud storage",
            ],
            cta: "Go Pro",
          },
          {
            plan: "Business",
            price: "$19.99",
            period: "/user/mo",
            features: [
              "Team workspace",
              "Brand kit",
              "Advanced AI tools",
              "Priority support",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://capcut.com",
      },
      {
        name: "Suno AI",
        tier: "Premium",
        tags: ["Music Generation", "Audio"],
        filter: ["Music & Audio"],
        logo: { bg: "#18181b", color: "#a3e635", initials: "SN" },
        description:
          "AI music generator that creates full songs with vocals, instruments, and lyrics from a text prompt.",
        detailedDesc:
          "Suno is the leading AI music generation platform, capable of creating complete, professional-sounding songs with vocals, instrumentation, and lyrics from a simple text description. Specify a genre, mood, and theme and Suno produces a finished track in seconds — across every genre from pop and hip-hop to classical and jazz.",
        bestFor:
          "Content creators, indie musicians, marketers, and game developers who need custom, royalty-free music created from text prompts with no music production skills required.",
        stage: "Creation Stage",
        strengths: [
          "Generates complete songs with vocals and lyrics from one prompt",
          "Covers virtually every musical genre convincingly",
          "Extremely fast generation — full tracks in under 30 seconds",
        ],
        limitations: [
          "Commercial use requires paid subscription",
          "Limited control over specific musical elements (BPM, key, instruments)",
          "Stems/individual tracks not yet exportable",
        ],
        alternatives: [
          { name: "Udio", tagline: "AI music with fine-grained control" },
          { name: "Beatoven.ai", tagline: "Royalty-free background music AI" },
          { name: "ElevenLabs Sound Effects", tagline: "AI audio generation" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web, iOS, Android",
          communitySize: "12M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "50 credits/day",
              "Non-commercial use",
              "Standard quality",
            ],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$8",
            period: "/mo",
            popular: true,
            features: [
              "2,500 credits/month",
              "Commercial license",
              "Priority generation",
              "No watermark",
            ],
            cta: "Go Pro",
          },
          {
            plan: "Premier",
            price: "$24",
            period: "/mo",
            features: [
              "10,000 credits/month",
              "Full commercial rights",
              "Higher audio quality",
              "Offline listening",
            ],
            cta: "Get Premier",
          },
        ],
        visitUrl: "https://suno.com",
      },
      {
        name: "Copy.ai",
        tier: "Premium",
        tags: ["Copywriting", "Marketing"],
        filter: ["Script Writing"],
        logo: { bg: "#6d28d9", color: "#fff", initials: "CP" },
        description:
          "AI writing workflows for generating marketing copy, product descriptions, emails, and social captions at scale.",
        detailedDesc:
          "Copy.ai has evolved from a simple AI copywriting tool to a full GTM (Go-to-Market) AI platform for sales and marketing teams. Its Workflow feature enables teams to automate multi-step content operations — from research and writing to formatting and distribution — making it particularly powerful for teams generating high volumes of marketing assets and sales sequences.",
        bestFor:
          "Sales and marketing teams who need to automate content generation workflows at scale — from outbound sequences to product descriptions and social campaigns.",
        stage: "Creation Stage",
        strengths: [
          "GTM Workflows automate complex multi-step content pipelines",
          "90+ pre-built workflow templates for sales and marketing",
          "Strong multi-language support across content types",
        ],
        limitations: [
          "Free tier limited to 2,000 words/month",
          "Workflow feature requires higher-tier plans",
          "Less focused on creative writing than Jasper or Writesonic",
        ],
        alternatives: [
          { name: "Jasper", tagline: "Enterprise brand-voice AI writer" },
          { name: "Writesonic", tagline: "SEO-focused AI content platform" },
          { name: "ChatGPT", tagline: "Flexible general AI writer" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, Chrome Extension, API",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "2,000 words/month",
              "90+ copywriting tools",
              "25 languages",
            ],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$49",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited words",
              "5 workflows",
              "Chat feature",
              "Priority support",
            ],
            cta: "Get Starter",
          },
          {
            plan: "Advanced",
            price: "$249",
            period: "/mo",
            features: [
              "Unlimited workflows",
              "API access",
              "Custom integrations",
              "3 team seats",
            ],
            cta: "Get Advanced",
          },
        ],
        visitUrl: "https://copy.ai",
      },
      {
        name: "Writesonic",
        tier: "Premium",
        tags: ["Blog Writing", "SEO"],
        filter: ["Script Writing"],
        logo: { bg: "#0f172a", color: "#38bdf8", initials: "WS" },
        description:
          "AI writer for generating SEO-optimized blog posts, landing pages, and marketing content with web research.",
        detailedDesc:
          "Writesonic is an AI writing platform with a strong focus on SEO content creation. Its standout Chatsonic feature gives ChatGPT-style conversation with live web access, while its Article Writer produces long-form, Surfer SEO-optimized blog posts from keywords. With 100+ templates and Botsonic for custom AI chatbot building, it's a comprehensive content marketing toolkit.",
        bestFor:
          "Bloggers, SEO agencies, and digital marketers who need to produce large volumes of well-researched, SEO-optimized long-form content efficiently.",
        stage: "Creation Stage",
        strengths: [
          "Article Writer produces SEO-optimized long-form posts from keywords",
          "Chatsonic accesses live web data for up-to-date content",
          "Botsonic enables custom AI chatbot creation without coding",
        ],
        limitations: [
          "Output quality can be inconsistent on lower-effort prompts",
          "Free tier very limited — 25 credits/month",
          "Long-form article generation can be slow",
        ],
        alternatives: [
          { name: "Jasper", tagline: "Brand-voice enterprise AI writer" },
          { name: "Surfer SEO", tagline: "SEO content optimization" },
          { name: "Copy.ai", tagline: "GTM workflow automation" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, Chrome Extension, API",
          communitySize: "5M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "25 generations/mo",
              "Chatsonic access",
              "Basic templates",
            ],
            cta: "Start Free",
          },
          {
            plan: "Individual",
            price: "$20",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited GPT-3.5",
              "100 GPT-4 credits",
              "SEO mode",
              "100+ templates",
            ],
            cta: "Get Individual",
          },
          {
            plan: "Business",
            price: "$99",
            period: "/mo",
            features: [
              "Unlimited all models",
              "Priority support",
              "API access",
              "5 team seats",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://writesonic.com",
      },
      {
        name: "InVideo AI",
        tier: "Premium",
        tags: ["AI Video", "Templates"],
        filter: ["Video Editing"],
        logo: { bg: "#7c3aed", color: "#fff", initials: "IV" },
        description:
          "Text-to-video platform with thousands of templates, AI script generation, and automated video editing.",
        detailedDesc:
          "InVideo AI is a comprehensive text-to-video platform that converts scripts, blog posts, and prompts into full video productions. Simply describe the video you want in plain text and InVideo's AI creates a complete video with footage, voiceover, music, captions, and transitions. With 5,000+ templates and a massive stock media library, it's designed to make professional video accessible to everyone.",
        bestFor:
          "Marketers, educators, and content creators who want to produce professional-quality videos from written content with minimal video editing experience.",
        stage: "Creation Stage",
        strengths: [
          "Natural language video creation — describe what you want",
          "5,000+ templates for every industry and use case",
          "Built-in stock library of 16M+ media assets",
        ],
        limitations: [
          "Exports on free tier are watermarked",
          "AI voiceover quality varies across accents",
          "Less suitable for highly personalized or custom creative work",
        ],
        alternatives: [
          { name: "Pictory", tagline: "Blog-to-video automation" },
          { name: "Lumen5", tagline: "Content repurposing to video" },
          { name: "HeyGen", tagline: "AI avatar video creation" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web",
          communitySize: "7M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "40 exports/month",
              "Watermarked",
              "4 iStock media/month",
            ],
            cta: "Start Free",
          },
          {
            plan: "Business",
            price: "$30",
            period: "/mo",
            popular: true,
            features: [
              "60 exports/month",
              "No watermark",
              "40 iStock media/month",
              "Premium templates",
            ],
            cta: "Get Business",
          },
          {
            plan: "Unlimited",
            price: "$60",
            period: "/mo",
            features: [
              "Unlimited exports",
              "Unlimited iStock",
              "Team access",
              "Custom branding",
            ],
            cta: "Get Unlimited",
          },
        ],
        visitUrl: "https://invideo.io",
      },
      {
        name: "Opus Clip",
        tier: "Premium",
        tags: ["Short-form Video", "Repurposing"],
        filter: ["Video Editing"],
        logo: { bg: "#09090b", color: "#f472b6", initials: "OP" },
        description:
          "AI clips long-form videos into viral short-form content for TikTok, Reels, and YouTube Shorts.",
        detailedDesc:
          "Opus Clip uses AI to automatically identify the most engaging moments in long-form video content — podcasts, webinars, interviews, YouTube videos — and clips them into viral-ready short-form videos. It adds dynamic captions, reformats for vertical aspect ratios, scores each clip's virality potential, and can auto-post to multiple platforms simultaneously.",
        bestFor:
          "Podcasters, YouTubers, coaches, and marketers who want to maximize content reach by automatically repurposing long-form video into multiple short-form clips for social media.",
        stage: "Creation Stage",
        strengths: [
          "AI virality scoring ranks clips by engagement potential",
          "Auto-captions, reframing, and aspect ratio conversion included",
          "Can process an hour of video into clips in minutes",
        ],
        limitations: [
          "Free tier limited to 60 minutes of video processing/month",
          "Clip selection quality varies with content type",
          "Less suitable for content that doesn't translate to short-form",
        ],
        alternatives: [
          { name: "Repurpose.io", tagline: "Multi-platform content repurposing" },
          { name: "Submagic", tagline: "AI captions for short-form video" },
          { name: "Descript", tagline: "Full video editing platform" },
        ],
        quickInfo: {
          founded: "2022",
          platform: "Web",
          communitySize: "1M+ creators",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "60 min processing/mo",
              "Watermarked clips",
              "Auto captions",
            ],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$19",
            period: "/mo",
            popular: true,
            features: [
              "150 min processing/mo",
              "No watermark",
              "Virality score",
              "B-roll",
            ],
            cta: "Get Starter",
          },
          {
            plan: "Pro",
            price: "$49",
            period: "/mo",
            features: [
              "Unlimited processing",
              "Auto-posting",
              "AI clipping customization",
              "Analytics",
            ],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://opus.pro",
      },
      {
        name: "Veed.io",
        tier: "Premium",
        tags: ["Video Editing", "Captions"],
        filter: ["Video Editing", "AI Voiceover"],
        logo: { bg: "#111827", color: "#34d399", initials: "VD" },
        description:
          "Browser-based video editor with AI captions, eye contact correction, avatars, and background removal.",
        detailedDesc:
          "Veed.io is a fully browser-based video editing platform with a comprehensive suite of AI tools. It generates automatic captions in 100+ languages, corrects eye contact, removes backgrounds, adds AI avatars as presenters, reduces background noise, and enables screen recording — all without downloading software. It's particularly popular for professional-quality social and corporate video.",
        bestFor:
          "Content creators, marketers, and educators who need a powerful, browser-based video editor with comprehensive AI features without needing to install software.",
        stage: "Creation Stage",
        strengths: [
          "Fully browser-based — no software installation required",
          "AI captions in 100+ languages with 95%+ accuracy",
          "AI eye contact correction and background removal built-in",
        ],
        limitations: [
          "Free tier exports with watermarks",
          "Slower rendering than desktop-based editors",
          "Advanced features require Pro subscription",
        ],
        alternatives: [
          { name: "CapCut AI", tagline: "Free mobile and desktop editor" },
          { name: "Descript", tagline: "Edit video by editing transcript" },
          { name: "Captions.ai", tagline: "Mobile-first short-form editor" },
        ],
        quickInfo: {
          founded: "2018",
          platform: "Web",
          communitySize: "6M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "Watermarked exports",
              "Auto-captions (30 min/mo)",
              "720p export",
            ],
            cta: "Start Free",
          },
          {
            plan: "Basic",
            price: "$25",
            period: "/mo",
            popular: true,
            features: [
              "No watermark",
              "Auto-captions (5 hrs/mo)",
              "1080p export",
              "Background removal",
            ],
            cta: "Get Basic",
          },
          {
            plan: "Pro",
            price: "$38",
            period: "/mo",
            features: [
              "Unlimited captions",
              "AI avatars",
              "Eye contact AI",
              "4K export",
              "Brand kit",
            ],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://veed.io",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // OPTIMIZATION
  // ─────────────────────────────────────────────────────────────
  {
    category: "Optimization",
    description: "Refine and improve. Quality and performance focus.",
    tools: [
      {
        name: "Surfer SEO",
        tier: "Paid Only",
        tags: ["SEO", "Content Scoring"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#0ea5e9", color: "#fff", initials: "SS" },
        description:
          "Real-time content scoring and NLP-based optimization against top-ranking competitors. Gold standard for content SEO.",
        detailedDesc:
          "Surfer SEO is the industry gold standard for content optimization, used by agencies and in-house teams alike. It analyzes the top 20 SERP competitors for any keyword and generates NLP-based content guidelines — target word count, semantic keywords, heading structure — while scoring your content in real time as you write. Its Content Editor integrates directly with Google Docs and WordPress.",
        bestFor:
          "SEO agencies, content marketers, and writers who need data-driven content optimization guidelines to consistently rank on the first page of Google.",
        stage: "Optimization Stage",
        strengths: [
          "Industry-leading NLP content scoring against real SERP competitors",
          "Real-time content score updates as you write",
          "Native integration with Google Docs and WordPress",
        ],
        limitations: [
          "Higher price point than many competitors",
          "Can over-optimize content if followed too rigidly",
          "Best results require understanding SEO fundamentals",
        ],
        alternatives: [
          { name: "Clearscope", tagline: "NLP content relevance platform" },
          { name: "Frase", tagline: "SEO briefs and content optimization" },
          { name: "NeuronWriter", tagline: "Affordable NLP content optimization" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, Google Docs, WordPress",
          communitySize: "150K+ users",
        },
        pricing: [
          {
            plan: "Essential",
            price: "$99",
            period: "/mo",
            features: [
              "30 articles",
              "Unlimited audits",
              "Keyword research",
              "Content Editor",
            ],
            cta: "Get Essential",
          },
          {
            plan: "Scale",
            price: "$219",
            period: "/mo",
            popular: true,
            features: [
              "100 articles",
              "AI writing",
              "Surfer AI",
              "All features",
            ],
            cta: "Get Scale",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "Custom articles",
              "White-label reports",
              "API access",
              "Dedicated support",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://surferseo.com",
      },
      {
        name: "Grammarly",
        tier: "Premium",
        tags: ["Writing", "Grammar"],
        filter: ["Script Writing"],
        logo: { bg: "#15c39a", color: "#fff", initials: "GR" },
        description:
          "AI writing assistant for grammar, clarity, tone, style, and plagiarism checking across any platform.",
        detailedDesc:
          "Grammarly is the world's most widely used AI writing assistant, deployed across 500,000+ organizations. Beyond grammar and spelling, its AI analyzes writing for clarity, engagement, delivery, and tone — providing context-aware suggestions for every piece of content. GrammarlyGO (generative AI feature) can rewrite, generate, and adjust the formality of text based on your goals.",
        bestFor:
          "Everyone — from students to enterprise teams — who wants to improve writing quality, consistency, and professionalism across emails, documents, and social content.",
        stage: "Optimization Stage",
        strengths: [
          "Works everywhere — browser, Word, Google Docs, Outlook, Slack",
          "Tone and delivery analysis beyond basic grammar",
          "GrammarlyGO for AI rewriting and content generation",
        ],
        limitations: [
          "Premium required for full style and clarity suggestions",
          "Can be overly prescriptive and change creative voice",
          "Plagiarism checker less accurate than dedicated tools",
        ],
        alternatives: [
          { name: "ProWritingAid", tagline: "Deep writing style analysis" },
          { name: "Wordtune", tagline: "AI sentence rewriting" },
          { name: "Hemingway Editor", tagline: "Readability-focused editing" },
        ],
        quickInfo: {
          founded: "2009",
          platform: "Web, Chrome, Mac, Windows, iOS, Android",
          communitySize: "30M+ daily users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "Grammar checks",
              "Spelling correction",
              "Basic tone detection",
            ],
            cta: "Start Free",
          },
          {
            plan: "Premium",
            price: "$30",
            period: "/mo",
            popular: true,
            features: [
              "Full style suggestions",
              "Clarity rewrites",
              "GrammarlyGO",
              "Plagiarism checker",
            ],
            cta: "Get Premium",
          },
          {
            plan: "Business",
            price: "$25",
            period: "/user/mo",
            features: [
              "Team style guides",
              "Admin console",
              "Analytics dashboard",
              "Priority support",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://grammarly.com",
      },
      {
        name: "Semrush Writing Assistant",
        tier: "Premium",
        tags: ["SEO", "Writing"],
        filter: ["SEO & Analytics", "Script Writing"],
        logo: { bg: "#ff642d", color: "#fff", initials: "SM" },
        description:
          "Real-time SEO writing feedback on readability, tone, originality, and keyword use inside Google Docs or WordPress.",
        detailedDesc:
          "The Semrush SEO Writing Assistant is a content optimization plugin for Google Docs and WordPress that provides real-time recommendations on SEO, readability, originality, and tone while you write. It scores your content against top-ranking pages for your target keyword and provides specific suggestions to close the gap — all within your existing writing workflow.",
        bestFor:
          "Content writers and SEO teams who want lightweight, real-time SEO writing guidance embedded directly in Google Docs or WordPress without switching platforms.",
        stage: "Optimization Stage",
        strengths: [
          "Real-time SEO scoring inside Google Docs and WordPress",
          "Combines SEO, readability, originality, and tone in one score",
          "Included in Semrush plans — no additional cost for subscribers",
        ],
        limitations: [
          "Requires Semrush subscription for full features",
          "Less depth than dedicated tools like Surfer SEO",
          "Recommendation quality depends on keyword competitiveness",
        ],
        alternatives: [
          { name: "Surfer SEO", tagline: "Best-in-class content optimization" },
          { name: "Frase", tagline: "SEO briefs and content scoring" },
          { name: "Clearscope", tagline: "NLP content relevance platform" },
        ],
        quickInfo: {
          founded: "2008",
          platform: "Web, Google Docs, WordPress",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free (Limited)",
            price: "$0",
            period: "",
            features: [
              "3 docs/month",
              "Basic SEO scoring",
              "Readability check",
            ],
            cta: "Try Free",
          },
          {
            plan: "Pro",
            price: "$139.95",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited docs",
              "Full SWA access",
              "All Semrush tools",
              "5 projects",
            ],
            cta: "Get Pro",
          },
          {
            plan: "Guru",
            price: "$249.95",
            period: "/mo",
            features: [
              "Unlimited projects",
              "Content marketing toolkit",
              "Historical data",
              "Multi-location tracking",
            ],
            cta: "Get Guru",
          },
        ],
        visitUrl: "https://semrush.com",
      },
      {
        name: "Clearscope",
        tier: "Paid Only",
        tags: ["SEO", "Content Relevance"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#1e293b", color: "#38bdf8", initials: "CS" },
        description:
          "Content optimization platform using NLP to ensure keyword relevance, topical coverage, and search intent alignment.",
        detailedDesc:
          "Clearscope is a premium content intelligence platform used by leading content teams at companies like HubSpot, Adobe, and Shopify. It uses NLP-powered content grading to ensure every piece of content achieves high relevance scores against search intent, with seamless Google Docs integration, content inventory management, and keyword discovery tools.",
        bestFor:
          "Enterprise content teams and SEO agencies that prioritize topical authority and content quality over keyword density, and need robust content inventory management.",
        stage: "Optimization Stage",
        strengths: [
          "Used by HubSpot, Adobe, Shopify — enterprise proven",
          "NLP-based relevance grading from F to A++",
          "Content inventory to track and re-optimize existing pages",
        ],
        limitations: [
          "Highest price point in the content optimization category",
          "Less AI writing assistance than Surfer SEO or Frase",
          "Minimum $199/month — out of reach for individuals",
        ],
        alternatives: [
          { name: "Surfer SEO", tagline: "Best balance of price and features" },
          { name: "MarketMuse", tagline: "Topic authority and content planning" },
          { name: "Frase", tagline: "AI writing + content optimization" },
        ],
        quickInfo: {
          founded: "2018",
          platform: "Web, Google Docs",
          communitySize: "10K+ enterprise teams",
        },
        pricing: [
          {
            plan: "Essentials",
            price: "$199",
            period: "/mo",
            features: [
              "20 content reports/mo",
              "Google Docs addon",
              "Keyword discovery",
            ],
            cta: "Get Essentials",
          },
          {
            plan: "Business",
            price: "$599",
            period: "/mo",
            popular: true,
            features: [
              "100 content reports/mo",
              "Unlimited users",
              "Content inventory",
              "Priority support",
            ],
            cta: "Get Business",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: ["Custom reports", "API access", "SSO", "Dedicated CSM"],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://clearscope.io",
      },
      {
        name: "Wordtune",
        tier: "Premium",
        tags: ["Writing", "Rewriting"],
        filter: ["Script Writing"],
        logo: { bg: "#4f46e5", color: "#fff", initials: "WT" },
        description:
          "AI writing companion that rephrases, shortens, and expands sentences to improve tone and clarity in real time.",
        detailedDesc:
          "Wordtune is an AI writing tool that specializes in sentence-level rewriting, offering multiple rephrase options for any selected text in different tones — formal, casual, shorten, expand. Its Spices feature inserts jokes, analogies, counterarguments, and statistics to enrich content. Available as a Chrome extension, it works across Gmail, Google Docs, LinkedIn, and any text field.",
        bestFor:
          "Writers, marketers, and non-native English speakers who want real-time sentence-level AI rewriting options to improve clarity, tone, and impact.",
        stage: "Optimization Stage",
        strengths: [
          "Multiple rephrase options preserve meaning while improving style",
          "Spices feature adds humor, analogies, and data points to text",
          "Works everywhere via Chrome extension",
        ],
        limitations: [
          "Free tier limited to 10 rewrites/day",
          "Less comprehensive than Grammarly for full document review",
          "Primarily a sentence-level tool — not for structural editing",
        ],
        alternatives: [
          { name: "Grammarly", tagline: "Full writing assistant platform" },
          { name: "QuillBot", tagline: "AI paraphrasing and summarization" },
          { name: "ProWritingAid", tagline: "Deep style analysis" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, Chrome Extension, iOS, Android",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "10 rewrites/day",
              "Basic rephrase modes",
              "Chrome extension",
            ],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$13.99",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited rewrites",
              "All tone modes",
              "Spices feature",
              "30 AI prompts/day",
            ],
            cta: "Get Plus",
          },
          {
            plan: "Unlimited",
            price: "$19.99",
            period: "/mo",
            features: [
              "Unlimited everything",
              "GPT-4 rewrites",
              "Priority support",
              "Advanced features",
            ],
            cta: "Get Unlimited",
          },
        ],
        visitUrl: "https://wordtune.com",
      },
      {
        name: "Frase",
        tier: "Premium",
        tags: ["SEO", "Content Briefs"],
        filter: ["SEO & Analytics", "Script Writing"],
        logo: { bg: "#7c3aed", color: "#fff", initials: "FR" },
        description:
          "Agentic SEO platform that researches SERPs, writes briefs, and optimizes content for Google and AI search.",
        detailedDesc:
          "Frase is an AI-powered SEO content platform that automates the research, briefing, writing, and optimization stages of content creation. It analyzes top SERP results for any keyword to generate comprehensive content briefs, then scores your article's optimization in real time. Its AI writer is also deeply integrated into the workflow for generating first drafts based on SERP research.",
        bestFor:
          "Content marketers and SEO writers who want an all-in-one platform to research, brief, write, and optimize SEO content without switching between multiple tools.",
        stage: "Optimization Stage",
        strengths: [
          "End-to-end: research, brief, write, and optimize in one platform",
          "SERP analysis auto-populates content briefs with key topics",
          "More affordable than Surfer SEO with comparable core features",
        ],
        limitations: [
          "AI writing quality less polished than dedicated writing tools",
          "Limited to 4 articles/month on Solo plan",
          "Keyword tracking not included",
        ],
        alternatives: [
          { name: "Surfer SEO", tagline: "Industry-standard content optimization" },
          { name: "MarketMuse", tagline: "Topic authority and briefs" },
          { name: "Clearscope", tagline: "NLP content relevance scoring" },
        ],
        quickInfo: {
          founded: "2018",
          platform: "Web, Google Docs",
          communitySize: "30K+ users",
        },
        pricing: [
          {
            plan: "Solo",
            price: "$45",
            period: "/mo",
            features: [
              "4 articles/month",
              "SEO add-on available",
              "Content optimizer",
            ],
            cta: "Get Solo",
          },
          {
            plan: "Basic",
            price: "$115",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited articles",
              "AI writer included",
              "SERP analysis",
              "Content score",
            ],
            cta: "Get Basic",
          },
          {
            plan: "Team",
            price: "$230",
            period: "/mo",
            features: [
              "3 user seats",
              "Unlimited articles",
              "All features",
              "Priority support",
            ],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://frase.io",
      },
      {
        name: "QuillBot",
        tier: "Premium",
        tags: ["Paraphrasing", "Summarization"],
        filter: ["Script Writing"],
        logo: { bg: "#16a34a", color: "#fff", initials: "QB" },
        description:
          "AI paraphrasing, summarizing, and grammar tool popular for rewriting content in multiple style modes.",
        detailedDesc:
          "QuillBot is one of the most popular AI rewriting tools globally, with 35M+ users. It offers 8 paraphrasing modes (Standard, Fluency, Formal, Simple, Creative, Academic, and more), a powerful Summarizer for long documents, Grammar Checker, Plagiarism Checker, and a Citation Generator — making it particularly popular in academic and content marketing contexts.",
        bestFor:
          "Students, academics, content writers, and ESL learners who need quick, accurate paraphrasing and summarization across multiple style modes for different content purposes.",
        stage: "Optimization Stage",
        strengths: [
          "8 paraphrasing modes cover academic, creative, and formal needs",
          "Summarizer handles books, articles, and PDFs accurately",
          "Free tier is genuinely useful — 125 words per paraphrase",
        ],
        limitations: [
          "Paraphrasing quality can sacrifice nuance for smooth flow",
          "Plagiarism checker less accurate than Turnitin or Copyscape",
          "Free tier limited to 125 words per input",
        ],
        alternatives: [
          { name: "Wordtune", tagline: "Sentence-level AI rewriting" },
          { name: "Grammarly", tagline: "Full writing assistant" },
          { name: "Hemingway Editor", tagline: "Readability-focused editing" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, Chrome Extension, Mac, Windows",
          communitySize: "35M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "125 words/paraphrase",
              "3 synonyms/word",
              "Standard mode only",
            ],
            cta: "Start Free",
          },
          {
            plan: "Premium",
            price: "$19.95",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited words",
              "8 paraphrasing modes",
              "Plagiarism checker",
              "Summarizer",
            ],
            cta: "Get Premium",
          },
          {
            plan: "Teams",
            price: "$15.95",
            period: "/user/mo",
            features: [
              "Team management",
              "Usage analytics",
              "Priority support",
              "All Premium features",
            ],
            cta: "Get Teams",
          },
        ],
        visitUrl: "https://quillbot.com",
      },
      {
        name: "MarketMuse",
        tier: "Premium",
        tags: ["SEO", "Content Strategy"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#0f172a", color: "#f59e0b", initials: "MM" },
        description:
          "AI content intelligence for building topical authority with automated content briefs and gap analysis.",
        detailedDesc:
          "MarketMuse is an AI-powered content intelligence platform that helps brands build topical authority. It analyzes your entire site against competitors to identify content gaps, score page authority, and generate research-backed content briefs. Its personalized difficulty scores tell you which keywords are realistically achievable given your domain's current authority level.",
        bestFor:
          "Enterprise SEO teams and content strategists who need to build comprehensive content roadmaps based on topical authority gaps and competitive intelligence.",
        stage: "Optimization Stage",
        strengths: [
          "Personalized difficulty score based on your specific domain authority",
          "Full site content inventory with gap analysis",
          "AI-generated briefs based on deep competitive research",
        ],
        limitations: [
          "Higher price point — not suitable for individual bloggers",
          "Free tier limited to 10 queries/month",
          "Learning curve for new users unfamiliar with content strategy",
        ],
        alternatives: [
          { name: "Surfer SEO", tagline: "Real-time content optimization" },
          { name: "Clearscope", tagline: "NLP content relevance scoring" },
          { name: "Frase", tagline: "Research, brief, write, optimize" },
        ],
        quickInfo: {
          founded: "2015",
          platform: "Web",
          communitySize: "10K+ enterprise users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "10 queries/month",
              "Basic content scores",
              "Limited briefs",
            ],
            cta: "Start Free",
          },
          {
            plan: "Standard",
            price: "$149",
            period: "/mo",
            popular: true,
            features: [
              "100 queries/month",
              "AI briefs",
              "Site inventory",
              "Content strategy",
            ],
            cta: "Get Standard",
          },
          {
            plan: "Team",
            price: "$399",
            period: "/mo",
            features: [
              "Unlimited queries",
              "All features",
              "Multiple seats",
              "API access",
            ],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://marketmuse.com",
      },
      {
        name: "Hotjar AI",
        tier: "Premium",
        tags: ["UX", "Conversion"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#fd3a5c", color: "#fff", initials: "HJ" },
        description:
          "AI-powered heatmaps, session recordings, and feedback summaries that surface UX friction points automatically.",
        detailedDesc:
          "Hotjar is the leading user behavior analytics platform, now enhanced with AI features that automatically summarize session recordings, identify trends in open-ended survey responses, and surface the most significant UX friction points. Its AI Summary feature condenses hundreds of user feedback responses into actionable insights, dramatically reducing analysis time.",
        bestFor:
          "UX designers, product managers, and CRO specialists who need to understand user behavior on their website and identify friction points that hurt conversion rates.",
        stage: "Optimization Stage",
        strengths: [
          "Heatmaps, recordings, surveys, and feedback in one platform",
          "AI summaries turn hundreds of responses into key insights",
          "Easy to implement — single script tag setup",
        ],
        limitations: [
          "Free tier limited to 35 daily sessions",
          "No A/B testing — pairs best with dedicated CRO tools",
          "AI features still maturing vs. FullStory or Contentsquare",
        ],
        alternatives: [
          { name: "Microsoft Clarity", tagline: "Free heatmaps and session replay" },
          { name: "FullStory", tagline: "Deep digital experience analytics" },
          { name: "Crazyegg", tagline: "Heatmaps and scroll maps" },
        ],
        quickInfo: {
          founded: "2014",
          platform: "Web",
          communitySize: "1.3M+ websites",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["35 daily sessions", "Heatmaps", "Basic surveys"],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$32",
            period: "/mo",
            popular: true,
            features: [
              "100 daily sessions",
              "AI summaries",
              "All recordings",
              "Funnel analysis",
            ],
            cta: "Get Plus",
          },
          {
            plan: "Business",
            price: "$80",
            period: "/mo",
            features: [
              "500 daily sessions",
              "All AI features",
              "Frustration signals",
              "Priority support",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://hotjar.com",
      },
      {
        name: "Hemingway Editor",
        tier: "Premium",
        tags: ["Writing", "Readability"],
        filter: ["Script Writing"],
        logo: { bg: "#f59e0b", color: "#1c1917", initials: "HW" },
        description:
          "Highlights dense, passive voice, and complex sentences and forces cleaner, bolder, more readable prose.",
        detailedDesc:
          "The Hemingway Editor is a focused writing tool that analyzes text for readability, highlighting complex sentences in yellow, very complex sentences in red, passive voice in green, unnecessary adverbs in blue, and simpler word alternatives in purple. Its AI writing assistant (powered by GPT-4) can generate and rewrite text directly in the editor, maintaining the tool's philosophy of bold, direct writing.",
        bestFor:
          "Writers, journalists, bloggers, and anyone who wants to produce cleaner, more direct, and more readable prose — especially for digital and mobile audiences.",
        stage: "Optimization Stage",
        strengths: [
          "Instantly visualizes all readability issues with color coding",
          "Assigns reading level grade — targets Grade 9 or lower for digital",
          "AI writing assistant generates content in bold, clear style",
        ],
        limitations: [
          "No grammar or spelling checking beyond readability",
          "Can produce overly simplistic suggestions for nuanced writing",
          "No integrations — desktop app and web only",
        ],
        alternatives: [
          { name: "Grammarly", tagline: "Comprehensive writing assistant" },
          { name: "ProWritingAid", tagline: "Deep style and grammar analysis" },
          { name: "Wordtune", tagline: "AI sentence rewriting" },
        ],
        quickInfo: {
          founded: "2013",
          platform: "Web, Mac, Windows",
          communitySize: "3M+ users",
        },
        pricing: [
          {
            plan: "Web (Free)",
            price: "$0",
            period: "forever",
            features: [
              "Readability analysis",
              "Grade level scoring",
              "Color-coded highlights",
            ],
            cta: "Use Free Online",
          },
          {
            plan: "Desktop App",
            price: "$19.99",
            period: "one-time",
            popular: true,
            features: [
              "Offline use",
              "Export to Word/PDF",
              "Publish to WordPress",
              "No ads",
            ],
            cta: "Buy Desktop App",
          },
        ],
        visitUrl: "https://hemingwayapp.com",
      },
      {
        name: "ProWritingAid",
        tier: "Premium",
        tags: ["Writing", "Editing"],
        filter: ["Script Writing"],
        logo: { bg: "#1e3a5f", color: "#fff", initials: "PW" },
        description:
          "Deep grammar and style checker with 20+ AI-powered writing reports for books, scripts, and long-form content.",
        detailedDesc:
          "ProWritingAid is a comprehensive writing improvement tool with 20+ specialized writing reports — covering grammar, style, readability, sentence variety, clichés, repeated phrases, dialogue, pacing, and more. Integrated with Scrivener, Word, Google Docs, and Chrome, it's particularly powerful for fiction writers, academics, and long-form content creators who need thorough manuscript review.",
        bestFor:
          "Novelists, academic writers, and long-form content creators who need the most comprehensive writing analysis available, covering style, structure, and craft beyond simple grammar.",
        stage: "Optimization Stage",
        strengths: [
          "20+ specialized reports cover every aspect of writing craft",
          "Scrivener integration ideal for long-form fiction writers",
          "Lifetime license available — better value than subscription for heavy users",
        ],
        limitations: [
          "Overwhelming for casual users who only need basic grammar",
          "Interface less polished than Grammarly",
          "Real-time suggestions slower than competitors",
        ],
        alternatives: [
          { name: "Grammarly", tagline: "Simpler, more accessible writing AI" },
          { name: "Hemingway Editor", tagline: "Readability-focused editing" },
          { name: "Wordtune", tagline: "AI sentence rewriting" },
        ],
        quickInfo: {
          founded: "2012",
          platform: "Web, Mac, Windows, Chrome, Scrivener",
          communitySize: "2M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["500 words/check", "Basic grammar", "Limited reports"],
            cta: "Start Free",
          },
          {
            plan: "Premium",
            price: "$30",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited words",
              "20+ reports",
              "Plagiarism checker",
              "All integrations",
            ],
            cta: "Get Premium",
          },
          {
            plan: "Lifetime",
            price: "$399",
            period: "one-time",
            features: [
              "All Premium features forever",
              "All future updates",
              "Best value for writers",
            ],
            cta: "Get Lifetime",
          },
        ],
        visitUrl: "https://prowritingaid.com",
      },
      {
        name: "NitroPack",
        tier: "Premium",
        tags: ["Performance", "Web Speed"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#7c3aed", color: "#fff", initials: "NP" },
        description:
          "AI-driven page speed optimization for Core Web Vitals, caching, and CDN delivery improvements.",
        detailedDesc:
          "NitroPack is an all-in-one website performance optimization service that automatically improves Core Web Vitals scores through intelligent caching, image optimization, code minification, and CDN delivery. With one plugin installation, it handles the full stack of web performance optimizations that would otherwise require multiple separate tools and developer expertise.",
        bestFor:
          "WordPress site owners, e-commerce managers, and agencies who want to dramatically improve page speed and Core Web Vitals scores without deep technical web performance knowledge.",
        stage: "Optimization Stage",
        strengths: [
          "One-click implementation — no developer required",
          "Consistently achieves 90+ Google PageSpeed scores",
          "Global CDN with 200+ server locations included",
        ],
        limitations: [
          "Can conflict with complex custom WordPress themes",
          "Free tier limited to 5,000 page views/month",
          "Pricing scales steeply with traffic",
        ],
        alternatives: [
          { name: "Cloudflare", tagline: "CDN and security platform" },
          { name: "WP Rocket", tagline: "Popular WordPress caching plugin" },
          { name: "GTmetrix", tagline: "Performance testing and diagnostics" },
        ],
        quickInfo: {
          founded: "2018",
          platform: "Web, WordPress, Shopify, OpenCart",
          communitySize: "200K+ websites",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "5,000 page views/mo",
              "Basic optimization",
              "CDN included",
            ],
            cta: "Start Free",
          },
          {
            plan: "Small",
            price: "$21",
            period: "/mo",
            popular: true,
            features: [
              "50K page views/mo",
              "Advanced optimization",
              "Global CDN",
              "Image optimization",
            ],
            cta: "Get Small",
          },
          {
            plan: "Medium",
            price: "$51",
            period: "/mo",
            features: [
              "200K page views/mo",
              "Priority CDN",
              "Dedicated support",
              "White-label",
            ],
            cta: "Get Medium",
          },
        ],
        visitUrl: "https://nitropack.io",
      },
      {
        name: "Optimizely",
        tier: "Paid Only",
        tags: ["A/B Testing", "Personalization"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#0066cc", color: "#fff", initials: "OZ" },
        description:
          "Enterprise experimentation and personalization platform with AI-driven audience targeting and test analysis.",
        detailedDesc:
          "Optimizely is the enterprise-grade experimentation platform, used by Netflix, IBM, and eBay, that enables teams to run A/B tests, multivariate tests, and feature flags across web, mobile, and server-side applications. Its AI-powered Stats Engine provides real-time statistical significance calculations and personalization recommendations based on behavioral data.",
        bestFor:
          "Enterprise product and marketing teams that run high-frequency experimentation programs and need sophisticated targeting, personalization, and statistical rigor at scale.",
        stage: "Optimization Stage",
        strengths: [
          "Enterprise-proven platform used by Netflix and IBM",
          "Stats Engine provides real-time significance calculations",
          "Handles web, mobile, server-side, and feature flag experiments",
        ],
        limitations: [
          "No public pricing — enterprise sales process required",
          "Overkill and expensive for smaller teams",
          "Implementation requires significant developer involvement",
        ],
        alternatives: [
          { name: "VWO", tagline: "Accessible A/B testing platform" },
          { name: "Unbounce Smart Traffic", tagline: "AI-powered landing page optimization" },
          { name: "Google Optimize (GA4)", tagline: "Free A/B testing for GA4 users" },
        ],
        quickInfo: {
          founded: "2010",
          platform: "Web, iOS, Android, API",
          communitySize: "10,000+ enterprise clients",
        },
        pricing: [
          {
            plan: "Starter",
            price: "Custom",
            period: "",
            features: ["Web A/B testing", "Basic targeting", "Stats Engine"],
            cta: "Contact Sales",
          },
          {
            plan: "Professional",
            price: "Custom",
            period: "",
            popular: true,
            features: [
              "Multivariate testing",
              "Personalization",
              "Feature flags",
              "Multi-page experiments",
            ],
            cta: "Contact Sales",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "Full platform",
              "Advanced AI targeting",
              "Custom integrations",
              "Dedicated CSM",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://optimizely.com",
      },
      {
        name: "Ahrefs AI Content Helper",
        tier: "Paid Only",
        tags: ["SEO", "Content Gaps"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#ff6b35", color: "#fff", initials: "AH" },
        description:
          "Analyzes top-ranking competitors to flag topic gaps and improve content depth without keyword over-stuffing.",
        detailedDesc:
          "Ahrefs is the most trusted comprehensive SEO suite, used by millions of SEO professionals. Its AI Content Helper analyzes top-ranking pages for any keyword to identify topical gaps, missing entities, and coverage weaknesses in your content — without resorting to keyword stuffing. Integrated with Ahrefs' industry-leading backlink database and keyword research tools.",
        bestFor:
          "SEO professionals, agencies, and enterprise teams who need the industry's most trusted backlink and keyword data combined with AI content gap analysis.",
        stage: "Optimization Stage",
        strengths: [
          "Industry's largest and most accurate backlink index",
          "AI Content Helper identifies semantic gaps without over-optimization",
          "Comprehensive suite: site audit, rank tracker, keyword explorer, content gap",
        ],
        limitations: [
          "Starting price of $99/month with limited crawls",
          "AI content features not as deep as dedicated tools like Surfer",
          "No free tier — only a 7-day trial",
        ],
        alternatives: [
          { name: "Surfer SEO", tagline: "Dedicated content optimization" },
          { name: "Semrush", tagline: "All-in-one SEO and marketing suite" },
          { name: "Moz Pro", tagline: "Trusted SEO analytics platform" },
        ],
        quickInfo: {
          founded: "2011",
          platform: "Web, API",
          communitySize: "3M+ users",
        },
        pricing: [
          {
            plan: "Lite",
            price: "$129",
            period: "/mo",
            features: [
              "5 projects",
              "6 months history",
              "AI content helper",
              "Site audit",
            ],
            cta: "Get Lite",
          },
          {
            plan: "Standard",
            price: "$249",
            period: "/mo",
            popular: true,
            features: [
              "20 projects",
              "2 years history",
              "All features",
              "Content explorer",
            ],
            cta: "Get Standard",
          },
          {
            plan: "Advanced",
            price: "$449",
            period: "/mo",
            features: [
              "Unlimited projects",
              "Full data history",
              "API access",
              "Advanced reports",
            ],
            cta: "Get Advanced",
          },
        ],
        visitUrl: "https://ahrefs.com",
      },
      {
        name: "VWO",
        tier: "Paid Only",
        tags: ["A/B Testing", "CRO"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#f97316", color: "#fff", initials: "VW" },
        description:
          "AI-assisted A/B testing and conversion rate optimization platform for landing pages and funnels.",
        detailedDesc:
          "VWO (Visual Website Optimizer) is a full-featured conversion rate optimization platform that combines A/B testing, multivariate testing, split URL testing, heatmaps, session recordings, and personalization in one suite. Its AI-powered SmartStats engine provides continuous Bayesian testing, while its visual editor allows non-developers to run tests without writing code.",
        bestFor:
          "Marketing teams, CRO specialists, and e-commerce businesses who want an accessible, all-in-one testing and personalization platform that doesn't require heavy developer resources.",
        stage: "Optimization Stage",
        strengths: [
          "Visual editor enables non-developers to set up tests without code",
          "All-in-one: testing, heatmaps, recordings, personalization",
          "SmartStats Bayesian engine reduces false positives",
        ],
        limitations: [
          "Pricing not publicly listed — requires sales contact",
          "Can be slow to load the testing framework on some sites",
          "Advanced personalization requires higher-tier plans",
        ],
        alternatives: [
          { name: "Optimizely", tagline: "Enterprise experimentation platform" },
          { name: "Unbounce Smart Traffic", tagline: "AI-powered landing page optimization" },
          { name: "Hotjar AI", tagline: "UX analytics and feedback" },
        ],
        quickInfo: {
          founded: "2010",
          platform: "Web, iOS, Android",
          communitySize: "5,000+ businesses",
        },
        pricing: [
          {
            plan: "Growth",
            price: "$357",
            period: "/mo",
            features: [
              "A/B testing",
              "Visual editor",
              "Heatmaps",
              "Up to 50K sessions/mo",
            ],
            cta: "Get Growth",
          },
          {
            plan: "Pro",
            price: "Custom",
            period: "",
            popular: true,
            features: [
              "Multivariate testing",
              "Personalization",
              "Advanced reporting",
              "Priority support",
            ],
            cta: "Contact Sales",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "Full platform",
              "API access",
              "Custom integrations",
              "Dedicated CSM",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://vwo.com",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // DISTRIBUTION
  // ─────────────────────────────────────────────────────────────
  {
    category: "Distribution",
    description: "Share your work. Publish across all major platforms.",
    tools: [
      {
        name: "Buffer",
        tier: "Premium",
        tags: ["Social Media", "Scheduling"],
        filter: ["Social Media"],
        logo: { bg: "#168eea", color: "#fff", initials: "BF" },
        description:
          "Social media scheduling with AI caption writing, optimal time suggestions, and analytics across all major platforms.",
        detailedDesc:
          "Buffer is one of the most trusted social media management platforms, used by 140,000+ businesses. Its AI Assistant generates platform-optimized captions, rephrases content for different audiences, and suggests optimal posting times based on your audience's engagement patterns. Clean, simple interface makes it ideal for small teams and creators who need reliable scheduling without complexity.",
        bestFor:
          "Small businesses, content creators, and marketing teams who want an affordable, clean, and reliable social media scheduling tool with AI caption assistance.",
        stage: "Distribution Stage",
        strengths: [
          "Extremely clean, intuitive interface — minimal learning curve",
          "AI Assistant generates and rephrases captions for all platforms",
          "Transparent, affordable pricing with a generous free tier",
        ],
        limitations: [
          "Engagement/listening features less comprehensive than Hootsuite",
          "Free tier limited to 3 channels and 10 scheduled posts",
          "No advanced workflow approval features for agencies",
        ],
        alternatives: [
          { name: "Hootsuite", tagline: "Enterprise social management" },
          { name: "Later", tagline: "Visual-first Instagram scheduler" },
          { name: "SocialBee", tagline: "Category-based AI scheduling" },
        ],
        quickInfo: {
          founded: "2010",
          platform: "Web, iOS, Android, Chrome",
          communitySize: "140K+ businesses",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "3 channels",
              "10 scheduled posts/channel",
              "AI Assistant",
            ],
            cta: "Start Free",
          },
          {
            plan: "Essentials",
            price: "$6",
            period: "/channel/mo",
            popular: true,
            features: [
              "1 channel",
              "Unlimited scheduled posts",
              "Analytics",
              "AI Assistant",
            ],
            cta: "Get Essentials",
          },
          {
            plan: "Team",
            price: "$12",
            period: "/channel/mo",
            features: [
              "Unlimited channels",
              "Team collaboration",
              "Approval workflows",
              "Priority support",
            ],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://buffer.com",
      },
      {
        name: "Hootsuite",
        tier: "Paid Only",
        tags: ["Social Media", "Enterprise"],
        filter: ["Social Media"],
        logo: { bg: "#000", color: "#1db954", initials: "HS" },
        description:
          "Enterprise social media management with OwlyWriter AI for captions, bulk scheduling, and cross-platform analytics.",
        detailedDesc:
          "Hootsuite is the world's most widely used social media management platform, used by 800+ Fortune 1000 companies. OwlyWriter AI generates captions and content ideas tailored to each platform, while bulk scheduling, team collaboration workflows, social listening, and enterprise-grade analytics make it the comprehensive solution for large marketing teams managing multiple brands.",
        bestFor:
          "Enterprise marketing teams, agencies, and large organizations that need comprehensive social media management with advanced analytics, listening, and team workflows.",
        stage: "Distribution Stage",
        strengths: [
          "Most comprehensive enterprise feature set in the category",
          "OwlyWriter AI generates platform-specific captions at scale",
          "Advanced social listening and brand monitoring included",
        ],
        limitations: [
          "No free tier — starts at $99/month",
          "Interface can feel dated compared to newer competitors",
          "Pricing increases sharply with more users and features",
        ],
        alternatives: [
          { name: "Sprout Social", tagline: "Premium social management platform" },
          { name: "Buffer", tagline: "Simpler, more affordable scheduling" },
          { name: "Agorapulse", tagline: "Agency-focused social management" },
        ],
        quickInfo: {
          founded: "2008",
          platform: "Web, iOS, Android",
          communitySize: "200K+ organizations",
        },
        pricing: [
          {
            plan: "Professional",
            price: "$99",
            period: "/mo",
            features: [
              "1 user",
              "10 social accounts",
              "Unlimited scheduling",
              "AI captions",
            ],
            cta: "Get Professional",
          },
          {
            plan: "Team",
            price: "$249",
            period: "/mo",
            popular: true,
            features: [
              "3 users",
              "20 social accounts",
              "Team collaboration",
              "Analytics",
            ],
            cta: "Get Team",
          },
          {
            plan: "Business",
            price: "$739",
            period: "/mo",
            features: [
              "5 users",
              "35 social accounts",
              "Advanced analytics",
              "Social listening",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://hootsuite.com",
      },
      {
        name: "Later",
        tier: "Premium",
        tags: ["Visual Planning", "Instagram"],
        filter: ["Social Media"],
        logo: { bg: "#2dd4bf", color: "#fff", initials: "LT" },
        description:
          "Visual social media scheduler with drag-and-drop calendar, Link in Bio, and AI caption suggestions.",
        detailedDesc:
          "Later is the leading visual social media marketing platform, built with a strong focus on Instagram, TikTok, and Pinterest. Its drag-and-drop visual content calendar lets teams plan feeds visually before publishing. AI-powered caption suggestions, Best Time to Post recommendations, and Linkin.bio (a link-in-bio landing page builder) make it the go-to tool for visual-first brands.",
        bestFor:
          "Visual-first brands, e-commerce businesses, and content creators who prioritize Instagram, TikTok, and Pinterest and want a visual content calendar with AI caption assistance.",
        stage: "Distribution Stage",
        strengths: [
          "Best visual content calendar in the category — see your feed before posting",
          "Linkin.bio builds a shoppable link-in-bio page",
          "AI caption suggestions optimized for visual platform algorithms",
        ],
        limitations: [
          "Free tier limited to 10 posts/month per platform",
          "Less comprehensive for LinkedIn and Twitter management",
          "Analytics less detailed than Sprout Social or Hootsuite",
        ],
        alternatives: [
          { name: "Buffer", tagline: "Simple cross-platform scheduling" },
          { name: "SocialBee", tagline: "AI-powered content strategy tool" },
          { name: "Tailwind", tagline: "Pinterest and Instagram specialist" },
        ],
        quickInfo: {
          founded: "2014",
          platform: "Web, iOS, Android",
          communitySize: "7M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "10 posts/profile/month",
              "1 social set",
              "AI captions (3/mo)",
            ],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$25",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited posts",
              "1 social set",
              "Unlimited AI captions",
              "Analytics",
            ],
            cta: "Get Starter",
          },
          {
            plan: "Growth",
            price: "$45",
            period: "/mo",
            features: [
              "3 social sets",
              "3 users",
              "Linkin.bio Pro",
              "Best time to post",
            ],
            cta: "Get Growth",
          },
        ],
        visitUrl: "https://later.com",
      },
      {
        name: "Mailchimp",
        tier: "Premium",
        tags: ["Email Marketing", "Automation"],
        filter: ["Email & Newsletter"],
        logo: { bg: "#ffe01b", color: "#241c15", initials: "MC" },
        description:
          "Email marketing platform with AI-generated subject lines, send-time optimization, and audience segmentation.",
        detailedDesc:
          "Mailchimp is the world's most popular email marketing platform, used by 12M+ businesses. Its AI features include Subject Line Helper (generates and scores subject line options), Send Time Optimization (predicts the best time to send to each subscriber), Content Optimizer (benchmarks email content against industry data), and Smart Recommendations for product recommendations in e-commerce emails.",
        bestFor:
          "Small to mid-size businesses, e-commerce stores, and creators who need an accessible, full-featured email marketing platform with powerful AI automation and segmentation.",
        stage: "Distribution Stage",
        strengths: [
          "12M+ users — most widely adopted email platform globally",
          "Send Time Optimization predicts optimal delivery per subscriber",
          "Powerful e-commerce integrations with Shopify, WooCommerce",
        ],
        limitations: [
          "Free tier limited to 1,000 contacts and 500 sends/month",
          "Pricing scales steeply with list size",
          "Automation less powerful than Klaviyo for complex e-commerce flows",
        ],
        alternatives: [
          { name: "Klaviyo", tagline: "AI-powered e-commerce email marketing" },
          { name: "ConvertKit", tagline: "Creator-focused email platform" },
          { name: "Beehiiv", tagline: "Newsletter platform for creators" },
        ],
        quickInfo: {
          founded: "2001",
          platform: "Web, iOS, Android",
          communitySize: "12M+ businesses",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "1,000 contacts",
              "500 sends/month",
              "Basic templates",
              "AI subject lines",
            ],
            cta: "Start Free",
          },
          {
            plan: "Essentials",
            price: "$13",
            period: "/mo",
            popular: true,
            features: [
              "500 contacts",
              "Unlimited emails",
              "A/B testing",
              "Custom templates",
            ],
            cta: "Get Essentials",
          },
          {
            plan: "Standard",
            price: "$20",
            period: "/mo",
            features: [
              "500 contacts",
              "Advanced AI features",
              "Send time optimization",
              "Retargeting ads",
            ],
            cta: "Get Standard",
          },
        ],
        visitUrl: "https://mailchimp.com",
      },
      {
        name: "SocialBee",
        tier: "Paid Only",
        tags: ["Social Media", "AI Copilot"],
        filter: ["Social Media"],
        logo: { bg: "#fbbf24", color: "#1c1917", initials: "SB" },
        description:
          "Category-based scheduler with an AI Copilot that generates full social media strategies, schedules, and captions.",
        detailedDesc:
          "SocialBee is a category-based social media scheduling platform with a powerful AI Copilot that generates complete content strategies — audience personas, content pillars, post ideas, and captions — from a single business description prompt. Its category-based queue system ensures a balanced content mix is always scheduled, making it ideal for consistent brand presence.",
        bestFor:
          "Entrepreneurs, agencies, and small marketing teams who want an AI to generate their entire social media strategy and content calendar with minimal manual effort.",
        stage: "Distribution Stage",
        strengths: [
          "AI Copilot generates full strategies, personas, and content calendars",
          "Category-based queuing ensures balanced content mix automatically",
          "Content recycling extends the lifespan of evergreen posts",
        ],
        limitations: [
          "No free tier — starts at $29/month",
          "Less visual calendar interface than Later",
          "Analytics less comprehensive than Sprout Social",
        ],
        alternatives: [
          { name: "Buffer", tagline: "Simpler, more affordable scheduling" },
          { name: "Later", tagline: "Visual-first content scheduler" },
          { name: "Hootsuite", tagline: "Enterprise social management" },
        ],
        quickInfo: {
          founded: "2016",
          platform: "Web, iOS, Android",
          communitySize: "30K+ users",
        },
        pricing: [
          {
            plan: "Bootstrap",
            price: "$29",
            period: "/mo",
            features: [
              "5 profiles",
              "AI Copilot",
              "10 workspaces",
              "2,000 posts/profile",
            ],
            cta: "Get Bootstrap",
          },
          {
            plan: "Accelerate",
            price: "$49",
            period: "/mo",
            popular: true,
            features: [
              "10 profiles",
              "AI Copilot Pro",
              "50 workspaces",
              "Analytics",
            ],
            cta: "Get Accelerate",
          },
          {
            plan: "Pro",
            price: "$99",
            period: "/mo",
            features: [
              "25 profiles",
              "Agency features",
              "Client workspaces",
              "White-label",
            ],
            cta: "Get Pro",
          },
        ],
        visitUrl: "https://socialbee.com",
      },
      {
        name: "Klaviyo",
        tier: "Premium",
        tags: ["Email", "E-commerce"],
        filter: ["Email & Newsletter"],
        logo: { bg: "#09090b", color: "#22c55e", initials: "KL" },
        description:
          "AI-powered email and SMS marketing platform for e-commerce with predictive segmentation and flow automation.",
        detailedDesc:
          "Klaviyo is the premier email and SMS marketing platform for e-commerce brands, used by 150,000+ businesses including brands like Gym Shark and Huckberry. Its AI features include predictive analytics for customer lifetime value, churn risk, and next order date — enabling hyper-personalized campaigns. Deep integrations with Shopify, WooCommerce, and Magento make it the default choice for serious e-commerce marketers.",
        bestFor:
          "E-commerce brands and DTC businesses that want the most powerful AI-driven email and SMS marketing with predictive segmentation and deep Shopify integration.",
        stage: "Distribution Stage",
        strengths: [
          "Predictive analytics forecasts LTV, churn risk, and next purchase",
          "150,000+ brand customers — e-commerce standard",
          "Deep two-way Shopify integration with real-time sync",
        ],
        limitations: [
          "Pricing scales quickly with list size — expensive for large databases",
          "Steeper learning curve than Mailchimp for non-technical marketers",
          "Primarily designed for e-commerce — less suitable for B2B",
        ],
        alternatives: [
          { name: "Mailchimp", tagline: "Accessible email for all businesses" },
          { name: "ConvertKit", tagline: "Creator-focused email platform" },
          { name: "Omnisend", tagline: "E-commerce email and SMS" },
        ],
        quickInfo: {
          founded: "2012",
          platform: "Web, API",
          communitySize: "150K+ businesses",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "250 contacts",
              "500 email sends/month",
              "150 SMS credits",
            ],
            cta: "Start Free",
          },
          {
            plan: "Email",
            price: "$45",
            period: "/mo",
            popular: true,
            features: [
              "1,001-1,500 contacts",
              "Unlimited sends",
              "Flows & automations",
              "AI segmentation",
            ],
            cta: "Get Email",
          },
          {
            plan: "Email + SMS",
            price: "$60",
            period: "/mo",
            features: [
              "All Email features",
              "1,250 SMS/month",
              "Predictive analytics",
              "2-way SMS",
            ],
            cta: "Get Email + SMS",
          },
        ],
        visitUrl: "https://klaviyo.com",
      },
      {
        name: "Zapier",
        tier: "Premium",
        tags: ["Automation", "Integrations"],
        filter: ["Automation"],
        logo: { bg: "#ff4a00", color: "#fff", initials: "ZP" },
        description:
          "No-code automation platform connecting 7,000+ apps for automatic content distribution and publishing workflows.",
        detailedDesc:
          "Zapier is the leading no-code automation platform, connecting 7,000+ apps with AI-powered workflow builders. For content distribution, it enables automatic cross-platform publishing — publish a blog post and trigger automatic social media posts, email newsletters, Slack notifications, and CRM updates. Its AI feature (Copilot) can build complex multi-step Zaps from a plain language description.",
        bestFor:
          "Non-technical marketers and operations teams who want to automate content distribution workflows across multiple platforms without writing code.",
        stage: "Distribution Stage",
        strengths: [
          "7,000+ app integrations — broadest ecosystem",
          "AI Copilot builds Zaps from plain language descriptions",
          "Reliable, enterprise-grade automation with 99.9% uptime",
        ],
        limitations: [
          "Free tier limited to 5 Zaps and 100 tasks/month",
          "Task-based pricing can get expensive at scale",
          "Multi-step Zaps and advanced logic require paid plan",
        ],
        alternatives: [
          { name: "Make (Integromat)", tagline: "Visual automation for complex workflows" },
          { name: "n8n", tagline: "Open-source workflow automation" },
          { name: "Buffer", tagline: "Dedicated social scheduling" },
        ],
        quickInfo: {
          founded: "2011",
          platform: "Web, API",
          communitySize: "5M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: ["5 Zaps", "100 tasks/month", "Single-step Zaps"],
            cta: "Start Free",
          },
          {
            plan: "Professional",
            price: "$29.99",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited Zaps",
              "2,000 tasks/month",
              "Multi-step Zaps",
              "AI Copilot",
            ],
            cta: "Get Professional",
          },
          {
            plan: "Team",
            price: "$103.50",
            period: "/mo",
            features: [
              "25,000 tasks/month",
              "Shared workspace",
              "Premier support",
              "Custom logic",
            ],
            cta: "Get Team",
          },
        ],
        visitUrl: "https://zapier.com",
      },
      {
        name: "Beehiiv",
        tier: "Premium",
        tags: ["Newsletter", "Publishing"],
        filter: ["Email & Newsletter"],
        logo: { bg: "#f59e0b", color: "#1c1917", initials: "BH" },
        description:
          "AI-powered newsletter platform with built-in growth tools, monetization, and audience analytics.",
        detailedDesc:
          "Beehiiv is the fastest-growing newsletter platform, purpose-built for serious newsletter creators. Founded by ex-Morning Brew team members, it offers AI writing tools, a referral program for viral growth, paid subscriptions, ad network access, website hosting, and deep audience analytics — all in one platform without transaction fees on paid newsletters.",
        bestFor:
          "Newsletter creators, media companies, and content publishers who want to build, grow, and monetize a newsletter audience with best-in-class growth and monetization tools.",
        stage: "Distribution Stage",
        strengths: [
          "Built-in referral program drives viral newsletter growth",
          "No transaction fees on paid subscriptions",
          "Ad network connects newsletters with premium advertisers",
        ],
        limitations: [
          "Free tier limited to 2,500 subscribers",
          "Less marketing automation than Klaviyo or Mailchimp",
          "Newer platform — smaller integration ecosystem",
        ],
        alternatives: [
          { name: "Substack", tagline: "Creator-friendly newsletter platform" },
          { name: "ConvertKit", tagline: "Creator email and automation" },
          { name: "Mailchimp", tagline: "Full-featured email marketing" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web",
          communitySize: "1M+ newsletter creators",
        },
        pricing: [
          {
            plan: "Launch",
            price: "$0",
            period: "forever",
            features: [
              "2,500 subscribers",
              "Unlimited sends",
              "Basic analytics",
              "AI writing (limited)",
            ],
            cta: "Start Free",
          },
          {
            plan: "Grow",
            price: "$49",
            period: "/mo",
            popular: true,
            features: [
              "Up to 100K subscribers",
              "AI writing",
              "Referral program",
              "Custom domains",
            ],
            cta: "Get Grow",
          },
          {
            plan: "Scale",
            price: "$99",
            period: "/mo",
            features: [
              "Unlimited subscribers",
              "Boost (paid acquisition)",
              "Ad network",
              "Priority support",
            ],
            cta: "Get Scale",
          },
        ],
        visitUrl: "https://beehiiv.com",
      },
      {
        name: "ConvertKit",
        tier: "Premium",
        tags: ["Email", "Creators"],
        filter: ["Email & Newsletter"],
        logo: { bg: "#fb6970", color: "#fff", initials: "CK" },
        description:
          "Creator-focused email platform with AI writing tools, automations, and subscriber tagging for newsletters.",
        detailedDesc:
          "ConvertKit (recently rebranded as Kit) is the email marketing platform of choice for professional content creators, bloggers, and online educators. It offers a clean visual automation builder, powerful subscriber tagging and segmentation, a Creator Network for cross-promotion, and AI writing tools for email composition — all designed for the creator economy.",
        bestFor:
          "Bloggers, online educators, course creators, and content creators who want a clean, creator-focused email platform with powerful automations and subscriber management.",
        stage: "Distribution Stage",
        strengths: [
          "Best segmentation and tagging for content creators",
          "Creator Network enables cross-promotion between newsletters",
          "Visual automation builder with powerful conditional logic",
        ],
        limitations: [
          "Free tier limited to 10,000 subscribers (recently expanded)",
          "Less powerful for e-commerce compared to Klaviyo",
          "Design customization more limited than Mailchimp",
        ],
        alternatives: [
          { name: "Beehiiv", tagline: "Newsletter-first platform" },
          { name: "Mailchimp", tagline: "Full email marketing platform" },
          { name: "Substack", tagline: "Simple creator newsletter" },
        ],
        quickInfo: {
          founded: "2013",
          platform: "Web, iOS, Android",
          communitySize: "600K+ creators",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "10,000 subscribers",
              "Unlimited sends",
              "Basic automations",
              "Creator Network",
            ],
            cta: "Start Free",
          },
          {
            plan: "Creator",
            price: "$25",
            period: "/mo",
            popular: true,
            features: [
              "Unlimited subscribers",
              "Advanced automations",
              "Paid newsletters",
              "AI writing",
            ],
            cta: "Get Creator",
          },
          {
            plan: "Creator Pro",
            price: "$50",
            period: "/mo",
            features: [
              "Newsletter referral system",
              "Advanced segmentation",
              "Priority support",
              "Custom reporting",
            ],
            cta: "Get Creator Pro",
          },
        ],
        visitUrl: "https://convertkit.com",
      },
      {
        name: "Sprout Social",
        tier: "Paid Only",
        tags: ["Social Media", "Enterprise"],
        filter: ["Social Media"],
        logo: { bg: "#59cb59", color: "#fff", initials: "SP" },
        description:
          "Enterprise social media platform with AI sentiment analysis, scheduling, listening, and detailed analytics.",
        detailedDesc:
          "Sprout Social is a premium enterprise social media management platform used by 34,000+ brands including Grubhub and Edelman. Its AI-powered features include Sentiment Analysis on social listening data, AI Assist for content generation, Optimal Send Times based on audience data, and a Smart Inbox that prioritizes the most important messages using machine learning.",
        bestFor:
          "Enterprise marketing teams and agencies that need a comprehensive, premium social media platform with deep analytics, listening, and collaborative workflow management.",
        stage: "Distribution Stage",
        strengths: [
          "Premium AI sentiment analysis and social listening",
          "Smart Inbox uses ML to prioritize high-value messages",
          "Most comprehensive analytics reporting in the category",
        ],
        limitations: [
          "Most expensive platform in the category — starts at $249/mo",
          "No free tier",
          "Overkill for small teams or individual creators",
        ],
        alternatives: [
          { name: "Hootsuite", tagline: "Enterprise social management alternative" },
          { name: "Agorapulse", tagline: "Agency-focused social management" },
          { name: "Buffer", tagline: "Simpler, affordable alternative" },
        ],
        quickInfo: {
          founded: "2010",
          platform: "Web, iOS, Android",
          communitySize: "34K+ brands",
        },
        pricing: [
          {
            plan: "Standard",
            price: "$249",
            period: "/seat/mo",
            features: [
              "5 social profiles",
              "Unlimited posts",
              "AI Assist",
              "Standard analytics",
            ],
            cta: "Get Standard",
          },
          {
            plan: "Professional",
            price: "$399",
            period: "/seat/mo",
            popular: true,
            features: [
              "Unlimited profiles",
              "Competitor analysis",
              "Automated rules",
              "Advanced analytics",
            ],
            cta: "Get Professional",
          },
          {
            plan: "Advanced",
            price: "$499",
            period: "/seat/mo",
            features: [
              "Listening tools",
              "Sentiment analysis",
              "Saved replies",
              "Premium support",
            ],
            cta: "Get Advanced",
          },
        ],
        visitUrl: "https://sproutsocial.com",
      },
      {
        name: "Repurpose.io",
        tier: "Paid Only",
        tags: ["Repurposing", "Automation"],
        filter: ["Automation", "Video Editing"],
        logo: { bg: "#7c3aed", color: "#fff", initials: "RP" },
        description:
          "Automatically repurposes podcast, video, and blog content into publish-ready posts for multiple platforms.",
        detailedDesc:
          "Repurpose.io is a content automation platform that automatically converts long-form content into platform-ready formats for distribution. Connect your podcast, YouTube channel, or blog and Repurpose.io automatically creates audiograms, video clips, blog summaries, and social posts — publishing them to TikTok, Instagram, Facebook, LinkedIn, Twitter, and YouTube Shorts without any manual work.",
        bestFor:
          "Podcasters, YouTubers, and content creators who want to automatically maximize their content's reach by repurposing it for every major platform without manual editing.",
        stage: "Distribution Stage",
        strengths: [
          "Fully automated — set up once and runs continuously",
          "Handles audio, video, and text repurposing end-to-end",
          "Direct auto-publishing to TikTok, YouTube Shorts, and Reels",
        ],
        limitations: [
          "Output quality requires some customization for best results",
          "No free tier — starts at $12.42/month",
          "Less creative control than tools like Opus Clip",
        ],
        alternatives: [
          { name: "Opus Clip", tagline: "AI virality-scored clip creation" },
          { name: "Descript", tagline: "Full video editing platform" },
          { name: "Zapier", tagline: "Custom automation workflows" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web",
          communitySize: "50K+ content creators",
        },
        pricing: [
          {
            plan: "Podcaster",
            price: "$12.42",
            period: "/mo",
            features: [
              "1 podcast workflow",
              "All destination apps",
              "Auto-captions",
            ],
            cta: "Get Podcaster",
          },
          {
            plan: "Video",
            price: "$12.42",
            period: "/mo",
            popular: true,
            features: [
              "1 video workflow",
              "YouTube/TikTok/Reels",
              "Auto-captions",
            ],
            cta: "Get Video",
          },
          {
            plan: "All-Access",
            price: "$24.17",
            period: "/mo",
            features: [
              "5 workflows",
              "All content types",
              "Priority support",
              "Advanced templates",
            ],
            cta: "Get All-Access",
          },
        ],
        visitUrl: "https://repurpose.io",
      },
      {
        name: "Taplio",
        tier: "Paid Only",
        tags: ["LinkedIn", "Personal Brand"],
        filter: ["Social Media"],
        logo: { bg: "#0a66c2", color: "#fff", initials: "TP" },
        description:
          "AI-powered LinkedIn growth tool for scheduling posts, generating viral content, and tracking profile analytics.",
        detailedDesc:
          "Taplio is the leading AI tool specifically built for LinkedIn growth. It generates post ideas and drafts based on trending LinkedIn content, helps build a 30-day content calendar, enables one-click engagement with targeted accounts, and provides detailed analytics on impressions, engagement rate, and follower growth — making it the go-to tool for LinkedIn thought leaders.",
        bestFor:
          "Professionals, entrepreneurs, and executives who want to build a strong LinkedIn personal brand and grow their audience with consistent, AI-assisted content.",
        stage: "Distribution Stage",
        strengths: [
          "LinkedIn-native AI trained on viral LinkedIn content formats",
          "30-day content calendar generation from a single prompt",
          "Built-in engagement tool to interact with target accounts",
        ],
        limitations: [
          "LinkedIn only — no other platform support",
          "Starts at $65/month — expensive for personal use",
          "AI posts require editing to maintain authentic voice",
        ],
        alternatives: [
          { name: "Tweet Hunter", tagline: "Twitter/X growth and scheduling" },
          { name: "Buffer", tagline: "Multi-platform social scheduling" },
          { name: "Hootsuite", tagline: "Enterprise social management" },
        ],
        quickInfo: {
          founded: "2021",
          platform: "Web, Chrome Extension",
          communitySize: "10K+ users",
        },
        pricing: [
          {
            plan: "Standard",
            price: "$65",
            period: "/mo",
            features: [
              "AI post generation",
              "30-day calendar",
              "Scheduling",
              "Basic analytics",
            ],
            cta: "Get Standard",
          },
          {
            plan: "Pro",
            price: "$199",
            period: "/mo",
            popular: true,
            features: [
              "CRM features",
              "Lead tracking",
              "Viral post database",
              "Engagement automation",
            ],
            cta: "Go Pro",
          },
        ],
        visitUrl: "https://taplio.com",
      },
      {
        name: "Substack",
        tier: "Premium",
        tags: ["Newsletter", "Publishing"],
        filter: ["Email & Newsletter"],
        logo: { bg: "#ff6719", color: "#fff", initials: "SK" },
        description:
          "Publishing platform for newsletters and podcasts with built-in subscriber management and monetization.",
        detailedDesc:
          "Substack is the pioneering creator publishing platform that enables writers, journalists, and podcasters to publish newsletters and podcasts directly to subscribers. With built-in paid subscription management, Substack handles everything from hosting and payment processing to subscriber management — taking 10% of paid subscription revenue in exchange for the complete free infrastructure.",
        bestFor:
          "Writers, journalists, and independent content creators who want the simplest path to launching a paid newsletter without technical setup or upfront costs.",
        stage: "Distribution Stage",
        strengths: [
          "Zero upfront cost — Substack only earns when you earn",
          "Massive built-in discovery network of 35M+ readers",
          "Handles payments, hosting, and subscriber management",
        ],
        limitations: [
          "10% revenue cut is steep at scale vs. Beehiiv or ConvertKit",
          "Limited design customization compared to other platforms",
          "Less powerful analytics and segmentation tools",
        ],
        alternatives: [
          { name: "Beehiiv", tagline: "Zero-fee newsletter with growth tools" },
          { name: "ConvertKit", tagline: "Creator email with advanced automation" },
          { name: "Ghost", tagline: "Open-source publishing platform" },
        ],
        quickInfo: {
          founded: "2017",
          platform: "Web, iOS, Android",
          communitySize: "35M+ readers",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "Unlimited free subscribers",
              "Unlimited sends",
              "Podcast hosting",
              "Comments",
            ],
            cta: "Start Publishing",
          },
          {
            plan: "Paid Subscriptions",
            price: "10%",
            period: "revenue share",
            popular: true,
            features: [
              "Accept paid subs",
              "Stripe integration",
              "Subscriber management",
              "Analytics",
            ],
            cta: "Enable Paid",
          },
        ],
        visitUrl: "https://substack.com",
      },
    ],
  },

    // ─────────────────────────────────────────────────────────────
  // ANALYSIS
  // ─────────────────────────────────────────────────────────────

  {
    category: "Analysis",
    description: "Measure and learn. Performance metrics and insights.",
    tools: [
      {
        name: "Google Analytics 4",
        tier: "Free",
        tags: ["Web Analytics", "Behavioral"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#e37400", color: "#fff", initials: "GA" },
        description:
          "Google's AI-powered event-based analytics platform for tracking user behavior, conversions, and acquisition.",
        detailedDesc:
          "Google Analytics 4 (GA4) is Google's latest generation analytics platform, rebuilt around an event-based data model that tracks user behavior across websites and apps. Its AI-powered features include Predictive Metrics (purchase probability, churn probability), Anomaly Detection that automatically flags unusual traffic patterns, and conversational analytics via Google's AI integration — all for free.",
        bestFor:
          "Every website owner and digital marketer who needs reliable, free web analytics with AI-powered insights, conversion tracking, and Google Ads integration.",
        stage: "Analysis Stage",
        strengths: [
          "Completely free with enterprise-grade capabilities",
          "Seamless Google Ads and Search Console integration",
          "AI anomaly detection and predictive audience segments",
        ],
        limitations: [
          "Steep learning curve vs. UA — new event-based model",
          "Data sampling on high-traffic free accounts",
          "Data retention limited to 14 months on free tier",
        ],
        alternatives: [
          { name: "Mixpanel", tagline: "Product analytics focused platform" },
          { name: "Amplitude", tagline: "Behavioral analytics for products" },
          { name: "Usermaven", tagline: "Privacy-first analytics alternative" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, iOS, Android SDK, API",
          communitySize: "50M+ websites",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "Unlimited hits",
              "AI insights",
              "Predictive audiences",
              "14-month retention",
            ],
            cta: "Get GA4 Free",
          },
          {
            plan: "GA4 360",
            price: "Custom",
            period: "",
            features: [
              "SLA guarantee",
              "Unlimited data retention",
              "Unsampled reports",
              "BigQuery export",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://analytics.google.com",
      },
      {
        name: "Hotjar",
        tier: "Premium",
        tags: ["UX", "Heatmaps"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#fd3a5c", color: "#fff", initials: "HJ" },
        description:
          "AI-powered heatmaps, session recordings, and qualitative feedback tools to understand user behavior on-site.",
        detailedDesc:
          "Hotjar is the leading user behavior analytics platform that shows you what users do on your site through heatmaps, scroll maps, click maps, and session recordings. Its AI capabilities summarize session recordings automatically, identify friction patterns, and generate insights from open-ended survey responses — translating large volumes of qualitative data into actionable recommendations.",
        bestFor:
          "UX designers, product managers, and CRO specialists who need to understand the 'why' behind user behavior on their website through visual behavioral data.",
        stage: "Analysis Stage",
        strengths: [
          "Best-in-class heatmap visualization of user behavior",
          "AI summaries reduce analysis time from hours to minutes",
          "Combines quantitative (heatmaps) and qualitative (surveys) data",
        ],
        limitations: [
          "Free tier capped at 35 daily sessions",
          "Session recording storage limits on all tiers",
          "AI analysis features maturing vs. dedicated analytics tools",
        ],
        alternatives: [
          { name: "Microsoft Clarity", tagline: "Free heatmaps and session replay" },
          { name: "FullStory", tagline: "Deep digital experience intelligence" },
          { name: "Crazyegg Analytics", tagline: "Heatmaps and scroll maps" },
        ],
        quickInfo: {
          founded: "2014",
          platform: "Web",
          communitySize: "1.3M+ websites",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "35 daily sessions",
              "Heatmaps",
              "Recordings",
              "Basic surveys",
            ],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$32",
            period: "/mo",
            popular: true,
            features: [
              "100 daily sessions",
              "AI summaries",
              "Funnel analysis",
              "Events",
            ],
            cta: "Get Plus",
          },
          {
            plan: "Business",
            price: "$80",
            period: "/mo",
            features: [
              "500 daily sessions",
              "All AI insights",
              "Frustration signals",
              "API access",
            ],
            cta: "Get Business",
          },
        ],
        visitUrl: "https://hotjar.com",
      },
      {
        name: "Microsoft Clarity",
        tier: "Free",
        tags: ["Heatmaps", "Session Replay"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#0078d4", color: "#fff", initials: "CL" },
        description:
          "Free session recording and heatmap tool by Microsoft with AI insights into rage clicks and dead zones.",
        detailedDesc:
          "Microsoft Clarity is a completely free behavioral analytics tool that provides heatmaps, session recordings, and AI-generated insights with no usage limits, no sampling, and no cost. Its Copilot AI feature lets you ask natural language questions about your data — 'Why are users leaving this page?' — and generates instant analysis. Used by 100M+ websites globally.",
        bestFor:
          "Any website owner who wants completely free, unlimited heatmaps and session recordings with zero data sampling and AI-powered behavioral insights.",
        stage: "Analysis Stage",
        strengths: [
          "Completely free with no traffic limits or data sampling",
          "Copilot AI answers natural language questions about your data",
          "Automatic rage click and dead click detection",
        ],
        limitations: [
          "Data retained for only 13 months",
          "Less feature-rich than Hotjar for surveys and user feedback",
          "Privacy concerns for some users given Microsoft data practices",
        ],
        alternatives: [
          { name: "Hotjar", tagline: "Full UX analytics with feedback" },
          { name: "FullStory", tagline: "Enterprise digital experience analytics" },
          { name: "Crazyegg Analytics", tagline: "Heatmaps with A/B testing" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web",
          communitySize: "100M+ websites",
        },
        pricing: [
          {
            plan: "Free Forever",
            price: "$0",
            period: "forever",
            features: [
              "Unlimited sessions",
              "Heatmaps",
              "Session recordings",
              "AI Copilot",
              "No data sampling",
            ],
            cta: "Get Clarity Free",
          },
        ],
        visitUrl: "https://clarity.microsoft.com",
      },
      {
        name: "Mixpanel",
        tier: "Premium",
        tags: ["Product Analytics", "Events"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#7856ff", color: "#fff", initials: "MX" },
        description:
          "Event-based product analytics platform with AI-powered funnel analysis, cohort tracking, and user journey maps.",
        detailedDesc:
          "Mixpanel is the leading product analytics platform for SaaS and mobile app companies, used by Uber, Twitter, and Pinterest. It tracks every user interaction as a discrete event, enabling deep funnel analysis, cohort retention charts, user journey mapping, and A/B test impact measurement. Its AI features generate natural language answers to product analytics questions.",
        bestFor:
          "Product teams, growth analysts, and SaaS companies who need granular, event-based product analytics to understand feature usage, retention, and conversion funnels.",
        stage: "Analysis Stage",
        strengths: [
          "Granular event-based tracking for deep product insight",
          "Cohort analysis reveals retention patterns by user segment",
          "AI answers natural language analytics questions in seconds",
        ],
        limitations: [
          "Requires developer implementation for full event tracking",
          "Free tier limited to 20M events/month",
          "Steeper learning curve than Google Analytics for non-analysts",
        ],
        alternatives: [
          { name: "Amplitude", tagline: "Behavioral analytics platform" },
          { name: "Heap", tagline: "Auto-capture product analytics" },
          { name: "PostHog", tagline: "Open-source product analytics" },
        ],
        quickInfo: {
          founded: "2009",
          platform: "Web, iOS, Android SDK, API",
          communitySize: "8,000+ companies",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "20M events/month",
              "Unlimited reports",
              "Unlimited seats",
              "90-day data history",
            ],
            cta: "Start Free",
          },
          {
            plan: "Growth",
            price: "$28",
            period: "/mo",
            popular: true,
            features: [
              "100M events/month",
              "1 year history",
              "Group analytics",
              "Advanced cohorts",
            ],
            cta: "Get Growth",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "Unlimited events",
              "5 years history",
              "SAML SSO",
              "Dedicated support",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://mixpanel.com",
      },
      {
        name: "Amplitude",
        tier: "Premium",
        tags: ["Product Analytics", "Behavioral"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#1c6ef3", color: "#fff", initials: "AM" },
        description:
          "Digital analytics platform with AI-driven behavioral analytics, predictive retention, and experimentation tools.",
        detailedDesc:
          "Amplitude is a comprehensive digital analytics platform that goes beyond event tracking to provide behavioral intelligence — predicting which users are likely to convert, churn, or expand based on their behavior patterns. Its AI features include predictive cohorts, anomaly detection, and a conversational analytics interface. Used by Atlassian, Lyft, and Ford.",
        bestFor:
          "Product and data teams at growth-stage and enterprise companies who need predictive behavioral analytics to improve retention, optimize funnels, and personalize experiences.",
        stage: "Analysis Stage",
        strengths: [
          "Predictive cohorts identify high-intent users before they convert",
          "Behavioral AI surfaces unexpected patterns in user journeys",
          "Session Replay now integrated — full picture of behavior",
        ],
        limitations: [
          "Free tier limited to 50K monthly tracked users",
          "More complex to implement than Google Analytics",
          "Pricing can escalate quickly with user volume",
        ],
        alternatives: [
          { name: "Mixpanel", tagline: "Event-based product analytics" },
          { name: "PostHog", tagline: "Open-source alternative" },
          { name: "Heap", tagline: "Auto-capture analytics" },
        ],
        quickInfo: {
          founded: "2012",
          platform: "Web, iOS, Android SDK, API",
          communitySize: "100K+ companies",
        },
        pricing: [
          {
            plan: "Starter",
            price: "$0",
            period: "forever",
            features: [
              "50K MTUs/month",
              "Core analytics",
              "Session replay",
              "Basic integrations",
            ],
            cta: "Start Free",
          },
          {
            plan: "Plus",
            price: "$61",
            period: "/mo",
            popular: true,
            features: [
              "1,000 MTUs included",
              "Advanced analytics",
              "Predictive cohorts",
              "Custom events",
            ],
            cta: "Get Plus",
          },
          {
            plan: "Growth",
            price: "Custom",
            period: "",
            features: [
              "Unlimited MTUs",
              "Full feature access",
              "SSO",
              "Dedicated support",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://amplitude.com",
      },
      {
        name: "Tableau",
        tier: "Paid Only",
        tags: ["Data Visualization", "BI"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#e97627", color: "#fff", initials: "TB" },
        description:
          "Business intelligence platform with Einstein AI for predictive analytics, NLP queries, and executive dashboards.",
        detailedDesc:
          "Tableau is the industry-leading data visualization and business intelligence platform, trusted by 86% of Fortune 500 companies. Its Einstein AI integration enables natural language queries ('Show me revenue by region this quarter'), AI-powered forecasting, automatic anomaly detection, and smart recommendations for the best visualization type for any dataset.",
        bestFor:
          "Enterprise data teams, analysts, and executives who need the most powerful, flexible data visualization and BI platform for creating and sharing complex interactive dashboards.",
        stage: "Analysis Stage",
        strengths: [
          "Unmatched data visualization flexibility and depth",
          "Einstein AI enables natural language data queries",
          "Connects to 100+ data sources simultaneously",
        ],
        limitations: [
          "High price point — starts at $75/user/month",
          "Significant learning curve for non-technical users",
          "Slower performance with very large datasets",
        ],
        alternatives: [
          { name: "Power BI", tagline: "Microsoft's more affordable BI tool" },
          { name: "Looker Studio", tagline: "Free Google data visualization" },
          { name: "ThoughtSpot", tagline: "Natural language analytics" },
        ],
        quickInfo: {
          founded: "2003",
          platform: "Web, Mac, Windows",
          communitySize: "1M+ users",
        },
        pricing: [
          {
            plan: "Tableau Viewer",
            price: "$15",
            period: "/user/mo",
            features: [
              "View dashboards",
              "Interact with reports",
              "Mobile access",
            ],
            cta: "Get Viewer",
          },
          {
            plan: "Tableau Explorer",
            price: "$42",
            period: "/user/mo",
            popular: true,
            features: [
              "Create and explore data",
              "Einstein AI",
              "All visualizations",
            ],
            cta: "Get Explorer",
          },
          {
            plan: "Tableau Creator",
            price: "$75",
            period: "/user/mo",
            features: [
              "Full authoring",
              "All data sources",
              "Tableau Prep",
              "Advanced analytics",
            ],
            cta: "Get Creator",
          },
        ],
        visitUrl: "https://tableau.com",
      },
      {
        name: "Power BI",
        tier: "Premium",
        tags: ["Data Visualization", "Microsoft"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#f2c811", color: "#1c1917", initials: "BI" },
        description:
          "Microsoft's analytics platform with Copilot AI for natural-language data queries, reports, and visualizations.",
        detailedDesc:
          "Power BI is Microsoft's business intelligence platform, deeply integrated with the Microsoft 365 and Azure ecosystem. Its Copilot AI allows users to generate reports, create DAX formulas, and build visualizations using natural language prompts. The combination of powerful features and lower price point than Tableau makes it the most widely adopted enterprise BI platform.",
        bestFor:
          "Microsoft 365 and Azure organizations who want enterprise-grade BI capabilities at a lower cost, with deep integration across Excel, Teams, and SharePoint.",
        stage: "Analysis Stage",
        strengths: [
          "Most cost-effective enterprise BI tool — 10x cheaper than Tableau",
          "Copilot generates reports and DAX formulas from natural language",
          "Deep Microsoft ecosystem integration (Excel, Teams, SharePoint)",
        ],
        limitations: [
          "Best value only within Microsoft ecosystem",
          "More limited visualization options than Tableau",
          "Mobile experience less polished than desktop",
        ],
        alternatives: [
          { name: "Tableau", tagline: "Most powerful data visualization" },
          { name: "Looker Studio", tagline: "Free Google-based dashboards" },
          { name: "Qlik Sense", tagline: "Associative AI analytics" },
        ],
        quickInfo: {
          founded: "2015",
          platform: "Web, iOS, Android, Windows",
          communitySize: "30M+ users",
        },
        pricing: [
          {
            plan: "Power BI Free",
            price: "$0",
            period: "forever",
            features: [
              "Personal use",
              "Desktop app",
              "Publish to web",
              "Basic features",
            ],
            cta: "Get Free",
          },
          {
            plan: "Power BI Pro",
            price: "$10",
            period: "/user/mo",
            popular: true,
            features: [
              "Share dashboards",
              "Collaboration",
              "All connectors",
              "Copilot AI",
            ],
            cta: "Get Pro",
          },
          {
            plan: "Power BI Premium",
            price: "$20",
            period: "/user/mo",
            features: [
              "Large dataset support",
              "Advanced AI",
              "Paginated reports",
              "Deployment pipelines",
            ],
            cta: "Get Premium",
          },
        ],
        visitUrl: "https://powerbi.microsoft.com",
      },
      {
        name: "Semrush Analytics",
        tier: "Premium",
        tags: ["SEO Analytics", "Competitor Research"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#ff6429", color: "#fff", initials: "SA" },
        description:
          "Tracks organic rankings, backlinks, content performance, and AI visibility with competitor comparison tools.",
        detailedDesc:
          "Semrush is the all-in-one digital marketing suite with the most comprehensive SEO analytics in the industry. Its analytics capabilities cover organic ranking tracking, backlink analysis, competitive gap identification, paid search intelligence, social media analytics, and a new AI Visibility feature that tracks how brands appear in AI-generated search results from ChatGPT, Gemini, and Perplexity.",
        bestFor:
          "SEO agencies, digital marketers, and enterprise marketing teams who need the most comprehensive competitive intelligence and SEO analytics platform available.",
        stage: "Analysis Stage",
        strengths: [
          "AI Visibility Tracking measures brand presence in AI search results",
          "Largest keyword database — 25.9B keywords across 140+ countries",
          "Comprehensive suite covering SEO, PPC, social, and content",
        ],
        limitations: [
          "Starting price of $139.95/month is high for individuals",
          "Data can lag real SERP changes by a few days",
          "Free tier limited to 10 queries/day",
        ],
        alternatives: [
          { name: "Ahrefs", tagline: "Best-in-class backlink analysis" },
          { name: "Moz Pro", tagline: "Accessible SEO platform" },
          { name: "Google Search Console", tagline: "Free first-party search data" },
        ],
        quickInfo: {
          founded: "2008",
          platform: "Web, API",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "10 analytics reports/day",
              "Basic keyword data",
              "Limited features",
            ],
            cta: "Start Free",
          },
          {
            plan: "Pro",
            price: "$139.95",
            period: "/mo",
            popular: true,
            features: [
              "5 projects",
              "500 keywords tracked",
              "AI Visibility",
              "All core tools",
            ],
            cta: "Get Pro",
          },
          {
            plan: "Guru",
            price: "$249.95",
            period: "/mo",
            features: [
              "15 projects",
              "1,500 keywords",
              "Content Marketing Toolkit",
              "Historical data",
            ],
            cta: "Get Guru",
          },
        ],
        visitUrl: "https://semrush.com",
      },
      {
        name: "Brandwatch",
        tier: "Paid Only",
        tags: ["Social Listening", "Consumer Intelligence"],
        filter: ["SEO & Analytics", "Social Media"],
        logo: { bg: "#0b1f42", color: "#00c4b3", initials: "BW" },
        description:
          "AI-powered social listening platform that monitors brand mentions, trends, and consumer sentiment at scale.",
        detailedDesc:
          "Brandwatch is the world's largest consumer intelligence platform, providing AI-powered social listening and analytics across 1.7 trillion historical posts and 100M+ new sources daily. Its Iris AI synthesizes vast amounts of unstructured social data into clear insights about brand sentiment, emerging trends, competitive positioning, and crisis signals — trusted by brands including GSK, Walmart, and Unilever.",
        bestFor:
          "Enterprise brand managers, market researchers, and PR teams who need comprehensive, AI-powered social listening and consumer intelligence at global scale.",
        stage: "Analysis Stage",
        strengths: [
          "Largest historical data archive — 1.7T posts",
          "Iris AI synthesizes complex social data into clear insights",
          "Crisis detection and real-time brand health monitoring",
        ],
        limitations: [
          "Enterprise pricing not publicly listed — requires sales contact",
          "Significant investment — not for small businesses",
          "Setup and onboarding requires dedicated support",
        ],
        alternatives: [
          { name: "Mention", tagline: "Accessible brand monitoring" },
          { name: "Talkwalker", tagline: "Enterprise social analytics" },
          { name: "Sprout Social", tagline: "Social management with listening" },
        ],
        quickInfo: {
          founded: "2007",
          platform: "Web, API",
          communitySize: "7,500+ enterprise clients",
        },
        pricing: [
          {
            plan: "Consumer Research",
            price: "Custom",
            period: "",
            features: [
              "Full historical data",
              "Iris AI insights",
              "Custom dashboards",
            ],
            cta: "Contact Sales",
          },
          {
            plan: "Social Media Management",
            price: "Custom",
            period: "",
            popular: true,
            features: [
              "Publishing + listening",
              "Influencer tools",
              "AI sentiment",
              "Team collaboration",
            ],
            cta: "Contact Sales",
          },
          {
            plan: "Full Suite",
            price: "Custom",
            period: "",
            features: [
              "All platforms",
              "Dedicated CSM",
              "API access",
              "Custom integrations",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://brandwatch.com",
      },
      {
        name: "Looker Studio",
        tier: "Free",
        tags: ["Reporting", "Dashboards"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#4285f4", color: "#fff", initials: "LS" },
        description:
          "Google's free data visualization and reporting tool connecting GA4, ads, and third-party data sources.",
        detailedDesc:
          "Looker Studio (formerly Google Data Studio) is Google's free data visualization and business intelligence platform. It connects to 800+ data sources — including GA4, Google Ads, BigQuery, Sheets, and third-party platforms via partner connectors — and enables teams to build interactive, shareable dashboards with drag-and-drop editing. Completely free with no usage limits.",
        bestFor:
          "Marketing teams, agencies, and analysts who want to build professional, shareable data dashboards from Google products and third-party sources — completely free.",
        stage: "Analysis Stage",
        strengths: [
          "Completely free with no user or usage limits",
          "Native connection to all Google products (GA4, Ads, Search Console)",
          "800+ data source connectors including social and CRM platforms",
        ],
        limitations: [
          "Performance can be slow with large datasets",
          "Less powerful than Tableau for complex data modeling",
          "AI features less advanced than paid BI tools",
        ],
        alternatives: [
          { name: "Tableau", tagline: "Most powerful BI platform" },
          { name: "Power BI", tagline: "Microsoft's affordable BI tool" },
          { name: "Databox", tagline: "Automated marketing dashboards" },
        ],
        quickInfo: {
          founded: "2016",
          platform: "Web",
          communitySize: "10M+ users",
        },
        pricing: [
          {
            plan: "Free Forever",
            price: "$0",
            period: "forever",
            features: [
              "Unlimited reports",
              "Unlimited sharing",
              "800+ connectors",
              "No data limits",
            ],
            cta: "Get Looker Studio Free",
          },
          {
            plan: "Looker Studio Pro",
            price: "$9",
            period: "/user/mo",
            popular: true,
            features: [
              "Team workspaces",
              "SLA support",
              "Asset management",
              "Advanced sharing",
            ],
            cta: "Get Pro",
          },
        ],
        visitUrl: "https://lookerstudio.google.com",
      },
      {
        name: "PostHog",
        tier: "Premium",
        tags: ["Product Analytics", "Open Source"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#1d4ed8", color: "#fbbf24", initials: "PH" },
        description:
          "Open-source product analytics with session replay, feature flags, A/B testing, and AI insight generation.",
        detailedDesc:
          "PostHog is the all-in-one open-source product analytics platform that combines event analytics, session replay, feature flags, A/B testing, surveys, and SQL querying in a single self-hostable platform. Its AI-powered Max assistant answers product analytics questions in natural language and auto-generates insights from your data — making it a powerful Mixpanel/Amplitude alternative with full data ownership.",
        bestFor:
          "Engineering-led product teams and startups who want a comprehensive, self-hostable product analytics platform with full data ownership and no vendor lock-in.",
        stage: "Analysis Stage",
        strengths: [
          "Open source and self-hostable — complete data ownership",
          "All-in-one: analytics, replay, flags, A/B testing, and surveys",
          "Max AI answers natural language product analytics questions",
        ],
        limitations: [
          "Requires engineering resources for self-hosted setup",
          "Cloud free tier limited to 1M events/month",
          "Less polished UI than Mixpanel or Amplitude",
        ],
        alternatives: [
          { name: "Mixpanel", tagline: "Polished event analytics platform" },
          { name: "Amplitude", tagline: "Behavioral analytics" },
          { name: "Heap", tagline: "Auto-capture product analytics" },
        ],
        quickInfo: {
          founded: "2020",
          platform: "Web, iOS, Android SDK, Self-hosted",
          communitySize: "100K+ companies",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "1M events/month",
              "15K session replays/month",
              "Feature flags",
              "A/B testing",
            ],
            cta: "Start Free",
          },
          {
            plan: "Pay per use",
            price: "$0.00031",
            period: "/event above 1M",
            popular: true,
            features: [
              "Scales with usage",
              "All features included",
              "Priority support available",
            ],
            cta: "Get Started",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "SAML SSO",
              "Advanced permissions",
              "Dedicated support",
              "Custom contracts",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://posthog.com",
      },
      {
        name: "Google Search Console",
        tier: "Free",
        tags: ["SEO", "Search Performance"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#34a853", color: "#fff", initials: "SC" },
        description:
          "Google's free tool for monitoring search visibility, click-through rates, and indexing status of your pages.",
        detailedDesc:
          "Google Search Console (GSC) is Google's free webmaster tool that provides direct first-party data about how your site performs in Google Search. It shows which queries drive impressions and clicks, identifies indexing errors, mobile usability issues, Core Web Vitals performance, and structured data problems — making it an indispensable free tool for every website owner.",
        bestFor:
          "Every website owner, SEO professional, and digital marketer who needs free, first-party data directly from Google on how their site performs in search.",
        stage: "Analysis Stage",
        strengths: [
          "First-party data directly from Google — most accurate search data",
          "Completely free with no usage limits",
          "Core Web Vitals, indexing issues, and structured data reports",
        ],
        limitations: [
          "Data limited to Google Search only",
          "16-month data retention limit",
          "No competitor data or keyword research capabilities",
        ],
        alternatives: [
          { name: "Semrush Analytics", tagline: "Comprehensive SEO analytics" },
          { name: "Ahrefs Analytics", tagline: "Backlink and keyword data" },
          { name: "Moz Pro", tagline: "Accessible SEO platform" },
        ],
        quickInfo: {
          founded: "2006",
          platform: "Web, API",
          communitySize: "30M+ websites",
        },
        pricing: [
          {
            plan: "Free Forever",
            price: "$0",
            period: "forever",
            features: [
              "Search performance data",
              "Index coverage",
              "Core Web Vitals",
              "URL inspection tool",
            ],
            cta: "Get GSC Free",
          },
        ],
        visitUrl: "https://search.google.com/search-console",
      },
      {
        name: "Databox",
        tier: "Premium",
        tags: ["Dashboards", "KPI Tracking"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#03a9f4", color: "#fff", initials: "DB" },
        description:
          "Connects all marketing data into unified AI-powered dashboards with automated reporting and goal tracking.",
        detailedDesc:
          "Databox is a business analytics platform that pulls data from 100+ sources — Google Analytics, HubSpot, Salesforce, Facebook Ads, and more — into beautiful, automated dashboards accessible on any device. Its AI Alerts feature automatically notifies you when key metrics move unexpectedly, while its AI Scorecard provides daily performance summaries without manual reporting.",
        bestFor:
          "Marketing teams, agencies, and business owners who want to consolidate KPIs from all their tools into one automated, always-on dashboard without building custom data pipelines.",
        stage: "Analysis Stage",
        strengths: [
          "Pulls from 100+ data sources with easy no-code setup",
          "AI Alerts detect metric anomalies automatically",
          "Beautiful mobile-optimized dashboards with TV mode",
        ],
        limitations: [
          "Free tier limited to 3 data source connections",
          "Custom calculations require paid tier",
          "Less powerful for complex data transformations",
        ],
        alternatives: [
          { name: "Looker Studio", tagline: "Free Google-powered dashboards" },
          { name: "Klipfolio", tagline: "Real-time KPI dashboards" },
          { name: "DashThis", tagline: "Automated agency reporting" },
        ],
        quickInfo: {
          founded: "2014",
          platform: "Web, iOS, Android, Apple TV",
          communitySize: "25K+ businesses",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "3 data source connections",
              "3 dashboards",
              "5 users",
              "Daily data sync",
            ],
            cta: "Start Free",
          },
          {
            plan: "Starter",
            price: "$47",
            period: "/mo",
            popular: true,
            features: [
              "10 connections",
              "Unlimited dashboards",
              "Hourly sync",
              "AI Alerts",
            ],
            cta: "Get Starter",
          },
          {
            plan: "Professional",
            price: "$135",
            period: "/mo",
            features: [
              "Unlimited connections",
              "Unlimited users",
              "White-label",
              "API access",
            ],
            cta: "Get Professional",
          },
        ],
        visitUrl: "https://databox.com",
      },
      {
        name: "Ahrefs Analytics",
        tier: "Paid Only",
        tags: ["SEO", "Backlinks"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#ff6b35", color: "#fff", initials: "AA" },
        description:
          "Comprehensive SEO analytics for tracking keyword rankings, backlink growth, and organic traffic changes.",
        detailedDesc:
          "Ahrefs is widely considered the most accurate and comprehensive SEO analytics platform, trusted by hundreds of thousands of SEO professionals globally. Its Rank Tracker provides accurate daily keyword position tracking, Site Explorer delivers the industry's most thorough backlink analysis, and Content Explorer surfaces high-performing content opportunities across 15B+ indexed pages.",
        bestFor:
          "SEO agencies, in-house SEO teams, and serious digital marketers who need the most accurate backlink data and keyword tracking for competitive SEO campaigns.",
        stage: "Analysis Stage",
        strengths: [
          "Industry's most accurate and comprehensive backlink index",
          "Site Audit identifies critical technical SEO issues",
          "Content Explorer surfaces top-performing content in any niche",
        ],
        limitations: [
          "No free tier — starts at $129/month",
          "Crawl limits on lower-tier plans can restrict large site audits",
          "Less comprehensive for PPC analytics vs. Semrush",
        ],
        alternatives: [
          { name: "Semrush Analytics", tagline: "Comprehensive digital marketing suite" },
          { name: "Moz Pro", tagline: "Accessible SEO analytics" },
          { name: "Google Search Console", tagline: "Free first-party Google data" },
        ],
        quickInfo: {
          founded: "2011",
          platform: "Web, API",
          communitySize: "3M+ users",
        },
        pricing: [
          {
            plan: "Lite",
            price: "$129",
            period: "/mo",
            features: [
              "5 projects",
              "6 months data history",
              "750 tracked keywords",
              "Site audit",
            ],
            cta: "Get Lite",
          },
          {
            plan: "Standard",
            price: "$249",
            period: "/mo",
            popular: true,
            features: [
              "20 projects",
              "2 years history",
              "2,000 keywords",
              "Content explorer",
            ],
            cta: "Get Standard",
          },
          {
            plan: "Advanced",
            price: "$449",
            period: "/mo",
            features: [
              "Unlimited projects",
              "Full history",
              "5,000 keywords",
              "API access",
            ],
            cta: "Get Advanced",
          },
        ],
        visitUrl: "https://ahrefs.com",
      },
      {
        name: "FullStory",
        tier: "Paid Only",
        tags: ["Session Replay", "UX Analytics"],
        filter: ["SEO & Analytics"],
        logo: { bg: "#111827", color: "#a78bfa", initials: "FS" },
        description:
          "Digital experience intelligence platform using AI to auto-surface frustration signals and conversion blockers.",
        detailedDesc:
          "FullStory is a digital experience intelligence platform that automatically captures every user interaction — without manual tagging — and uses AI to surface the most impactful friction points, rage click patterns, and conversion blockers. Its DX Data layer powers retroactive analytics, allowing teams to answer new questions about past behavior using data already captured.",
        bestFor:
          "Enterprise product, UX, and CRO teams who need the most comprehensive, automatically-captured behavioral data platform with powerful AI-driven insight generation.",
        stage: "Analysis Stage",
        strengths: [
          "Auto-captures all interactions — no manual event tagging needed",
          "Retroactive analytics — answer new questions about past data",
          "AI automatically surfaces the highest-impact friction points",
        ],
        limitations: [
          "Enterprise pricing with no public rates",
          "High data volume requires enterprise infrastructure",
          "More complex to configure than Hotjar",
        ],
        alternatives: [
          { name: "Hotjar", tagline: "Accessible UX analytics" },
          { name: "Microsoft Clarity", tagline: "Free behavioral analytics" },
          { name: "Contentsquare", tagline: "Digital experience analytics" },
        ],
        quickInfo: {
          founded: "2014",
          platform: "Web, iOS, Android",
          communitySize: "3,500+ enterprises",
        },
        pricing: [
          {
            plan: "Free",
            price: "$0",
            period: "forever",
            features: [
              "1,000 sessions/month",
              "Session replay",
              "Basic analytics",
              "1 month data retention",
            ],
            cta: "Start Free",
          },
          {
            plan: "Business",
            price: "Custom",
            period: "",
            popular: true,
            features: [
              "Custom sessions",
              "DX Data",
              "AI signals",
              "Advanced integrations",
            ],
            cta: "Contact Sales",
          },
          {
            plan: "Enterprise",
            price: "Custom",
            period: "",
            features: [
              "Unlimited scale",
              "Advanced AI",
              "SAML SSO",
              "Dedicated CSM",
            ],
            cta: "Contact Sales",
          },
        ],
        visitUrl: "https://fullstory.com",
      },
      {
        name: "Supermetrics",
        tier: "Paid Only",
        tags: ["Data Pipelines", "Reporting"],
        filter: ["SEO & Analytics", "Automation"],
        logo: { bg: "#ff4f64", color: "#fff", initials: "SM" },
        description:
          "Pulls marketing data from 100+ platforms into Google Sheets, Looker Studio, BigQuery, and BI tools automatically.",
        detailedDesc:
          "Supermetrics is the leading marketing data pipeline tool, used by 750,000+ marketers at companies like Uber and Airbnb. It automatically pulls data from 100+ marketing platforms — Google Ads, Facebook, LinkedIn, TikTok, Salesforce — into destinations like Google Sheets, Looker Studio, BigQuery, Snowflake, and Power BI, eliminating manual data exports and enabling unified marketing analysis.",
        bestFor:
          "Marketing analysts, agencies, and data teams who need to centralize data from 100+ marketing platforms into their preferred reporting or BI tools without building custom pipelines.",
        stage: "Analysis Stage",
        strengths: [
          "750,000+ users — the most trusted marketing data pipeline",
          "100+ source connectors covering all major ad and analytics platforms",
          "Automatic daily data refresh eliminates manual reporting",
        ],
        limitations: [
          "Destination-based pricing model can get expensive",
          "No built-in visualization — data must go to a separate BI tool",
          "Setup requires understanding of data destinations",
        ],
        alternatives: [
          { name: "Funnel.io", tagline: "Marketing data warehouse platform" },
          { name: "Databox", tagline: "Built-in dashboards with data connectors" },
          { name: "Looker Studio", tagline: "Free visualization with native connectors" },
        ],
        quickInfo: {
          founded: "2013",
          platform: "Web",
          communitySize: "750K+ marketers",
        },
        pricing: [
          {
            plan: "Essential (Sheets)",
            price: "$29",
            period: "/mo",
            features: [
              "1 source",
              "Google Sheets only",
              "Daily refresh",
              "Unlimited rows",
            ],
            cta: "Get Essential",
          },
          {
            plan: "Core (Sheets)",
            price: "$99",
            period: "/mo",
            popular: true,
            features: [
              "3 sources",
              "Google Sheets + Looker Studio",
              "Hourly refresh",
            ],
            cta: "Get Core",
          },
          {
            plan: "Super (All destinations)",
            price: "$349",
            period: "/mo",
            features: [
              "All sources",
              "All destinations",
              "BigQuery export",
              "Priority support",
            ],
            cta: "Get Super",
          },
        ],
        visitUrl: "https://supermetrics.com",
      },
    ],
  },
];
