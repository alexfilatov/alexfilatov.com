import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alex",
  lastName: "Filatov",
  name: `Alex Filatov`,
  role: "Founder & Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "alex@alexfilatov.com",
  location: "Europe/London",
  languages: ["English", "Ukrainian", "Russian", "Polish (beginner)", "Norwegian (learning)", "Spanish (learning)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on new projects and tech insights</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alexfilatov",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexfilatov",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Founder & Software Engineer`,
  description: `Founding engineer at Syft (acquired by Indeed). Building products that work and last.`,
  headline: <>Building products that work and last</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Gymbile</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current venture
        </Text>
      </Row>
    ),
    href: "/work/gymbile",
  },
  subline: (
    <>
      I'm Alex, founder & CEO at <Text as="span" size="xl" weight="strong">Gymbile</Text>. Ex-Syft founding engineer <br /> (acquired by Indeed). I build products with Elixir, Phoenix, and a startup mindset.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in London, UK`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Started building products long before startups were cool. Founding engineer at Syft,
        acquired by Indeed in 2019. Still obsessed with creating things that work and last.
        Now running Gymbile and building the future of fitness tech.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Gymbile",
        timeframe: "Aug 2025 - Present",
        role: "Founder & CEO",
        achievements: [
          <>
            Building an all-in-one platform connecting personal trainers with clients worldwide.
          </>,
          <>
            Live interactive sessions, flexible payments, and comprehensive client management tools.
          </>,
        ],
        images: [],
      },
      {
        company: "Indeed",
        timeframe: "Apr 2023 - Aug 2025",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Leading engineer for Flex Levels, a platform feature that adjusts user status tiers using EWMA-based points decay.
          </>,
          <>
            Mentoring junior engineers and promoting best practices in code quality and test strategy.
          </>,
          <>
            Collaborating cross-functionally with product and data teams to ensure business goals and technical excellence.
          </>,
        ],
        images: [],
      },
      {
        company: "Indeed Flex (Syft)",
        timeframe: "Jun 2017 - Apr 2023",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Joined as one of the first engineers, contributed to 20% of the codebase before acquisition.
          </>,
          <>
            Played a key role in scaling the platform through acquisition by Indeed in 2019.
          </>,
          <>
            Worked across architecture, product dev, process improvements, mentoring, and production firefighting.
          </>,
        ],
        images: [],
      },
      {
        company: "SHOPYBOT",
        timeframe: "Apr 2017 - Jan 2022",
        role: "Technical Founder",
        achievements: [
          <>
            Built a chatbot platform for online stores from scratch with Elixir/Phoenix backend.
          </>,
          <>
            Grew to over 1,300 customers through bootstrapped growth and product-led development.
          </>,
          <>
            Engineered WordPress plugins, WooCommerce integrations, and AWS infrastructure.
          </>,
        ],
        images: [],
      },
      {
        company: "CXRATE",
        timeframe: "Dec 2011 - Oct 2017",
        role: "Technical Founder",
        achievements: [
          <>
            Built one of the top local FX rate platforms in Ukraine for finding best currency exchange deals.
          </>,
          <>
            Won $60,000 from Facebook FbStart program for the service.
          </>,
          <>
            Developed backend, API, and oversaw iOS + Android mobile apps.
          </>,
        ],
        images: [],
      },
      {
        company: "Reach2Stars Inc.",
        timeframe: "Aug 2016 - Feb 2017",
        role: "Technical Co-Founder & CTO",
        achievements: [
          <>
            Built a platform connecting celebrities with fans while supporting charitable causes using Elixir and Phoenix.
          </>,
          <>
            Designed and implemented real-time all-pay auction feature.
          </>,
        ],
        images: [],
      },
      {
        company: "ipmedia AG",
        timeframe: "Jul 2010 - Oct 2017",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Developed adaptive video streaming platform (Internettv.ch, YoveoTV) with PHP5, Symfony, MySQL, RabbitMQ.
          </>,
          <>
            Built Samsung SmartTV app and robust video publishing infrastructure.
          </>,
        ],
        images: [],
      },
      {
        company: "Infopulse Ukraine",
        timeframe: "Apr 2007 - Oct 2009",
        role: "Director of Engineering - Web Development",
        achievements: [
          <>
            Led and managed a team of 10 developers across multiple web development projects.
          </>,
          <>
            Secured contracts with European and American customers including General Electric, Chevron, and Philips.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Lviv State University 'Lvivska Polytechnika'",
        description: <>Bachelor's degree in GIS (1995 - 1999)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Elixir & Phoenix",
        description: (
          <>Expert in building scalable, fault-tolerant applications with Elixir, Phoenix, and OTP. Author of open-source libraries including LiveKit SDK, BORSH serializer, and NEAR API.</>
        ),
        tags: [
          {
            name: "Elixir",
            icon: "elixir",
          },
          {
            name: "Phoenix",
            icon: "phoenix",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: (
          <>Extensive experience with AWS, Kubernetes, and building robust infrastructure for high-scale applications.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>Building complete products from backend APIs to frontend interfaces, mobile apps, and everything in between.</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Blockchain & Web3",
        description: (
          <>Experience with NEAR Protocol, blockchain DApps development, and binary serialization (BORSH).</>
        ),
        tags: [
          {
            name: "Blockchain",
            icon: "blockchain",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and startups...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Startups and projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
