export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/ai-native-approach" },
  { label: "Capabilities", href: "/ai-native-capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const SITE = {
  name: "Buzzinga Co.",
  tagline: "AI-native design and development for businesses that move fast.",
  email: "hello@buzzinga.co",
  copyright: "© 2025 Buzzinga Co. All Rights Reserved",
} as const;

export const CLIENT_LOGOS = [
  {
    src: "/buzzinga-assets/images/logos/logo-frame-36777.svg",
    alt: "Client logo",
    width: 166,
    height: 35,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-frame-840.svg",
    alt: "Client logo",
    width: 100,
    height: 34,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-group.svg",
    alt: "Client logo",
    width: 173,
    height: 41,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-dutch0x.svg",
    alt: "DUTCH0x",
    width: 187,
    height: 43,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-group-36641.svg",
    alt: "Client logo",
    width: 222,
    height: 28,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-respire.svg",
    alt: "Respire",
    width: 122,
    height: 43,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-stockalgos.svg",
    alt: "StockAlgos",
    width: 234,
    height: 44,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-svg739.svg",
    alt: "Client logo",
    width: 107,
    height: 57,
  },
  {
    src: "/buzzinga-assets/images/logos/jabfab.png",
    alt: "JabFab",
    width: 138,
    height: 50,
  },
  {
    src: "/buzzinga-assets/images/logos/logo-black.svg",
    alt: "Client logo",
    width: 159,
    height: 33,
  },
  {
    src: "/buzzinga-assets/images/logos/generent.png",
    alt: "GeneRent",
    width: 173,
    height: 50,
  },
] as const;

export const CAPABILITIES = [
  {
    title: "Launch Your Big Idea",
    service: "MVP Development",
    summary:
      "Quickly validate a new product concept & gather real user feedback without overspending.",
    description:
      "A focused Minimum Viable Product designed to test core hypotheses and gather crucial feedback.",
    icon: "/buzzinga-assets/images/icons/capabilities/launch.svg",
  },
  {
    title: "Integrate Intelligence",
    service: "AI Feature Implementation",
    summary: "Seamless integration of AI/ML capabilities into your applications.",
    description:
      "Make your software smarter - leverage data for predictions, automate tasks, or create personalized user experiences.",
    icon: "/buzzinga-assets/images/icons/capabilities/integrate-intelligence.svg",
  },
  {
    title: "Assisting Ongoing Work",
    service: "Ongoing Maintenance",
    summary:
      "Ensure your critical applications remain stable, performant, and receive timely updates.",
    description:
      "Reliable upkeep: proactive monitoring, maintenance, bug fixing, and feature enhancements.",
    icon: "/buzzinga-assets/images/icons/capabilities/ongoing-work.svg",
  },
  {
    title: "Modernize Your Technology",
    service: "App Modernization",
    summary:
      "Overcome limitations of outdated software - improve speed, scalability, and user experience.",
    description: "A revitalized, modern application built on a robust foundation.",
    icon: "/buzzinga-assets/images/icons/capabilities/modernize.svg",
  },
] as const;

export const PROJECTS = [
  {
    client: "MeLiSA",
    title: "Enabling efficient medical simulation support services",
    href: "/project-echohealthcare",
    image: "/buzzinga-assets/images/projects/melisa.png",
    className: "bg-[#ECECEC] text-[#262D30]",
  },
  {
    client: "911Switch",
    title: "In an emergency be seen, first response lighting solutions",
    href: "/project-911swtich",
    image: "/buzzinga-assets/images/projects/911switch.png",
    className: "bg-[#BE0000] text-white",
  },
  {
    client: "JabFab",
    title: "Real-Time and Reflective Experience Optimization Platform",
    href: "/project-jabfab",
    image: "/buzzinga-assets/images/projects/jabfab.png",
    className: "bg-[#004CA8] text-white",
  },
  {
    client: "Predictr",
    title: "Skill-Based Stock Prediction Platform for Traders and Learners",
    href: "/project-predictr",
    image: "/buzzinga-assets/images/projects/predictr.png",
    className: "bg-[#242328] text-white",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Services are exceptional. They brought immense value through understanding what we do and seeing what needs to be done. I've worked with countless people and Buzzinga is most likely the best. Intelligent. Competent. Exceptional human.",
    name: "Trevor Burgeron",
    company: "WozJobs Inc",
  },
  {
    quote:
      "I cannot praise Buzzinga enough for their exceptional consultation on our app dashboard building. Their work ethics are outstanding, with attention to detail and a user-centric approach. They delivered on time, and the quality exceeded expectations. Working with them was a breeze.",
    name: "Punit Kumar",
    company: "Zigzek",
  },
  {
    quote: "Buzzinga has a solid design experience. Will hire again, enjoyed working them.",
    name: "Matt",
    company: "Sparrow InterActive",
  },
  {
    quote:
      "Working with Buzzinga was a delight. I was looking for someone who delivers designs and works as a creative partner. Buzzinga demonstrated this from the start. I worked with them on different ideas and found a strong ownership mindset. Communication was open, and they were flexible. Buzzinga is the team to trust.",
    name: "Shraddha Sonawane",
    company: "Serial Entrepreneur",
  },
  {
    quote:
      "Buzzinga did a great job updating our SaaS interface. They deep dived into the software to understand it first, which gave them great insight. As a result, they built tailored wireframes that were always on point. Recommended 100%!",
    name: "Artias Bogush",
    company: "Qwoach LLC",
  },
  {
    quote:
      "There's good design and then there's good understanding. Buzzinga has both. They help build the product while finding the most elegant way for users to experience it. Beautiful and design-first.",
    name: "Nicholus Parnebey",
    company: "Jabfab Inc",
  },
  {
    quote:
      "One of the best teams I've worked with. Buzzinga is excellent at visualising your idea and turning it into a working product. This is a rare skill. Will be using the team again.",
    name: "Max Oyeston",
    company: "Loyal IOM",
  },
  {
    quote:
      "Buzzinga built us a fully immersive, private user dashboard. The task required an in-depth understanding of complex backend processes and how to present them simply. He made it possible to search, organize, track, and transfer digital assets in an intuitive way.",
    name: "EthPilot",
    company: "DUTCH0x",
  },
  {
    quote:
      "Worked with Buzzinga on our product design. Truly impressed by their grasp of our brand and attention to detail. Designs are beautiful and user-centric. Highly responsive and proactive. Highly recommend.",
    name: "Arne Wolfewicz",
    company: "Narratic Labs",
  },
  {
    quote:
      "Buzzinga is aesthetic, innovative, and deeply thoughtful in their approach. The design and theme finalization process was smooth and impactful. They don't just create graphics-they help build your brand. Even post-delivery, they're attentive and committed. Great work!",
    name: "Dhaumil Parmar",
    company: "Redicine Medsol",
  },
] as const;

export const WHY_CLIENTS_STAY = [
  {
    title: "100% Reliable",
    description: "You will always know what to expect and what not to.",
    icon: "/buzzinga-assets/images/icons/why-clients/reliable.svg",
  },
  {
    title: "Quick Turnaround",
    description: "with clear communication in this more digital and less physical world.",
    icon: "/buzzinga-assets/images/icons/why-clients/quick-turnaround.svg",
  },
  {
    title: "5 Stars for Ease",
    description: "Easy to work with is an underrated skill but our clients can vouch for that.",
    icon: "/buzzinga-assets/images/icons/why-clients/stars-ease.svg",
  },
  {
    title: "Our Dream",
    description: "We help our clients to fulfil their dreams, that's what we want to do for life.",
    icon: "/buzzinga-assets/images/icons/why-clients/dream.svg",
  },
] as const;
