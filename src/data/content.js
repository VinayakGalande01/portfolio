export const skills = [
  {
    name: "Python",
    subtitle: "Creative Computing",
    version: "v3.12",
    efficiency: "98.4%",
    compatibility: "High",
    deployment: "Cloud",
    runtime: "ASync",
    brief: "Leveraging Python for generative systems and data-driven design. Utilizing asynchronous patterns to power high-fidelity visual experiments and automated workflows.",
    tags: ["Generative_Systems", "Data_Visualization", "Automation", "Workflow_Design"],
    icon: "🐍",
  },
  {
    name: "PyTorch",
    subtitle: "Neural Aesthetics",
    version: "v2.3",
    efficiency: "96.1%",
    compatibility: "High",
    deployment: "GPU",
    runtime: "CUDA",
    brief: "Exploring the intersection of deep learning and visual art. Training custom models to generate unique aesthetic patterns and adaptive interfaces.",
    tags: ["Neural_Art", "Pattern_Recognition", "Latent_Spaces", "Optimization"],
    icon: "🔥",
  },
  {
    name: "React / JS",
    subtitle: "Interactive Systems",
    version: "v19.0",
    efficiency: "99.2%",
    compatibility: "High",
    deployment: "Vercel",
    runtime: "Client",
    brief: "Building fluid, highly responsive user experiences. Focusing on the technical execution of minimalist design principles and smooth micro-interactions.",
    tags: ["Minimalist_UI", "Motion_Design", "Component_Architecture", "State_Logic"],
    icon: "⚡",
  },
  {
    name: "GSAP / Framer",
    subtitle: "Motion Engineering",
    version: "v3.12",
    efficiency: "94.7%",
    compatibility: "High",
    deployment: "Browser",
    runtime: "Smooth",
    brief: "Orchestrating complex animation sequences that feel organic. Specializing in scroll-triggered narratives and liquid-smooth transitions.",
    tags: ["Scroll_Trigger", "Liquid_Motion", "Timeline_Control", "SVG_Animation"],
    icon: "🌀",
  },
  {
    name: "FastAPI",
    subtitle: "High-Performance APIs",
    version: "v0.111",
    efficiency: "99.8%",
    brief: "Developing ultra-fast, modern Python web frameworks for high-concurrency AI deployments and data services.",
    tags: ["Async_Backend", "Type_Safety", "RESTful", "Performance"],
    icon: "🚀"
  },
  {
    name: "LangChain",
    subtitle: "LLM Orchestration",
    version: "v0.2",
    efficiency: "95.5%",
    brief: "Building complex chains and agents to harness the power of Large Language Models for cognitive enterprise workflows.",
    tags: ["LLM_Ops", "Cognitive_Chains", "RAG", "Agentic_AI"],
    icon: "🦜"
  },
  {
    name: "LLMs / RAG",
    subtitle: "Cognitive Engine",
    version: "GPT-4 / Claude-3",
    efficiency: "97.2%",
    brief: "Implementing Retrieval-Augmented Generation architectures to ground conversational AI in proprietary data sources.",
    tags: ["Knowledge_Retrieval", "Context_Inject", "Prompt_Eng", "Vector_Search"],
    icon: "🧠"
  },
  {
    name: "Hugging Face",
    subtitle: "Model Deployment",
    version: "v4.41",
    efficiency: "96.8%",
    brief: "Fine-tuning and deploying state-of-the-art open-source models for specialized NLP and vision tasks.",
    tags: ["Open_Source", "Fine_Tuning", "Transformers", "Pipelines"],
    icon: "🤗"
  },
  {
    name: "FAISS / Vector DB",
    subtitle: "Semantic Recall",
    version: "v1.8",
    efficiency: "99.9%",
    brief: "Optimizing high-dimensional vector similarity search for millisecond retrieval in large-scale RAG systems.",
    tags: ["Vector_Search", "Sim_Search", "Embeddings", "Indexing"],
    icon: "🔍"
  },
  {
    name: "TensorFlow",
    subtitle: "Deep Learning",
    version: "v2.16",
    efficiency: "94.2%",
    brief: "Training robust neural network architectures for production-grade computer vision and predictive modeling.",
    tags: ["Keras", "Model_Optim", "TFLite", "Graph_Comp"],
    icon: "📊"
  },
  {
    name: "Scikit-learn",
    subtitle: "ML Frameworks",
    version: "v1.5",
    efficiency: "98.1%",
    brief: "Utilizing classical machine learning algorithms for efficient data classification, regression, and clustering.",
    tags: ["Statistical_Learning", "Preprocessing", "Evaluation", "Pipelines"],
    icon: "⚙️"
  },
  {
    name: "Pandas / NumPy",
    subtitle: "Data Science",
    version: "v2.2",
    efficiency: "100%",
    brief: "Processing massive datasets with vectorized operations for high-fidelity data analysis and feature engineering.",
    tags: ["Matrix_Ops", "Data_Wrangling", "Analysis", "ETL"],
    icon: "📈"
  },
  {
    name: "REST APIs",
    subtitle: "System Integration",
    version: "GraphQL / REST",
    efficiency: "99.5%",
    brief: "Architecting scalable integration layers between intelligent backends and modern frontend interfaces.",
    tags: ["API_Design", "Security", "Scalability", "Documentation"],
    icon: "🔗"
  }
];


export const projects = [
  {
    id: "insightflow",
    name: "InsightFlow",
    desc: "Advanced data visualization architecture for real-time neural sentiment analysis.",
    tech: ["Data Viz", "AI Analytics", "React", "D3.js"],
    category: "RESEARCH",
    image: "/mockups/insightflow.png",
    client: "NeuroMetrics Lab",
    year: "2024",
    link: "https://insightflow.ai",
    overview: "InsightFlow was designed to bridge the gap between complex neural data and actionable laboratory insights. The system processes thousands of concurrent data streams to visualize emotional resonance in real-time.",
    challenges: "The primary technical hurdle was the latency involved in rendering high-density vector graphs without dropped frames during peak neural activity spikes.",
    solutions: "We implemented a custom WebGL-based rendering engine that offloads graph calculations to the GPU, maintaining a steady 60FPS even under extreme load."
  },
  {
    id: "strategix-ai",
    name: "Strategix AI",
    desc: "Predictive accounts planning and strategic resource allocation engine.",
    tech: ["ML", "Optimization", "Python", "FastAPI"],
    category: "ENTERPRISE",
    image: "/mockups/strategix.png",
    client: "Apex Global",
    year: "2023",
    link: "https://strategix.industries",
    overview: "Strategix AI serves as the cognitive backbone for enterprise resource planning. It utilizes predictive modelling to forecast market shifts and recommend optimal pivot strategies.",
    challenges: "Integrating legacy ERP data with modern transformer models required a robust ETL pipeline that could handle inconsistent data formats across global branches.",
    solutions: "We developed an adaptive semantic layer that automatically maps disparate data schemas to a unified tensor format, ensuring 98% accuracy in trend prediction."
  },
  {
    id: "dojocore",
    name: "Dojocore",
    desc: "Infrastructure layer for scalable decentralized compute and model training.",
    tech: ["DevOps", "Web3", "Docker", "Go"],
    category: "SYSTEMS",
    image: "/mockups/dojocore.png",
    client: "DeCentra Network",
    year: "2024",
    link: "https://dojocore.io",
    overview: "Dojocore provides the foundational compute power needed for the next generation of decentralized AI applications. It abstracts complex hardware orchestration into a single, fluid API.",
    challenges: "Coordinating workload distribution across a heterogeneous network of peer nodes while maintaining zero-knowledge proof of computation.",
    solutions: "A proprietary shard-based scheduling algorithm was implemented, coupled with optimistic verification protocols to ensure high throughput and security."
  },
  {
    id: "stealth-ai",
    name: "Stealth AI",
    desc: "Privacy-first localized LLM deployment for secure laboratory environments.",
    tech: ["LLM", "Security", "Ollama", "PyTorch"],
    category: "CYBER",
    image: "/mockups/stealth.png",
    client: "Obsidian Defense",
    year: "2025",
    link: "https://stealth-sys.internal",
    overview: "Stealth AI is an air-gapped intelligence solution designed for high-security environments where data leakage is not an option. It brings modern LLM capabilities to isolated hardware.",
    challenges: "Optimizing multi-billion parameter models to run efficiently on edge hardware with limited VRAM without compromising inference quality.",
    solutions: "We utilized advanced 4-bit quantization and selective layer offloading techniques to shrink the model footprint by 70% while maintaining performance benchmarks."
  },
];

export const services = [
  {
    id: "01",
    title: "AI Strategy & Automation",
    desc: "Optimizing workflows through custom neural architectures and automated data pipelines."
  },
  {
    id: "02",
    title: "Product Design",
    desc: "High-fidelity mobile and web interfaces predicated on minimalist principles."
  },
  {
    id: "03",
    title: "Web Experiences",
    desc: "Engaging, motion-rich digital narratives that drive conversion and brand depth."
  },
  {
    id: "04",
    title: "Brand Identity",
    desc: "Strategic visual systems for forward-thinking technology companies."
  }
];

export const testimonials = [
  {
    quote: "Vinayak's ability to translate complex AI concepts into fluid visual experiences is unparalleled.",
    author: "Alex Rivers",
    role: "CEO, NexaSystems"
  },
  {
    quote: "The attention to detail in the motion systems and overall UX significantly improved our product metrics.",
    author: "Sarah Chen",
    role: "Product Lead, Fluxo"
  },
  {
    quote: "A true creative engineer. The technical depth combined with design intuition is exactly what we needed.",
    author: "James Holt",
    role: "Founder, Aris Lab"
  },
  {
    quote: "The final deliverable exceeded all expectations. Strategic, bold, and technically flawless.",
    author: "Elena Vance",
    role: "Design Director, Zenith"
  }
];

export const contacts = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "GitHub",
    link: "https://github.com/yourusername",
  },
  {
    name: "Email",
    link: "mailto:vinayakpgalande90@gmail.com",
  },
];

