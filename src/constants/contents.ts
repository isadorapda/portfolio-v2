import { v4 as uuidv4 } from 'uuid'
import {
  SiTypescript as IconTS,
  SiTailwindcss as IconTailwind,
  SiStyledcomponents as IconStyledComp,
  SiGreensock as IconGSAP,
  SiReactrouter as IconRouter,
  SiWebpack as IconWbpack,
  SiVitest as IconVitest,
  SiNodedotjs as IconNode,
  SiPrisma as IconPrisma,
  SiDocker as IconDocker,
  SiNextdotjs as IconNext,
  SiPrismic as IconPrismic,
  SiSass as IconSass,
  SiStripe as IconStripe,
  SiFauna as IconFauna,
  SiChakraui as IconChakra,
  SiReactquery as IconReactquery,
  SiReact as IconReact,
  SiJavascript as IconJS,
  SiFastify as IconFastify,
  SiGit as IconGit,
  SiJest as IconJest,
  SiTestinglibrary as IconTestinglibrary,
  SiFigma as IconFigma,
} from 'react-icons/si'
import { RiVipDiamondFill as IconZod } from 'react-icons/ri'
import { TbBrandVite as IconVite } from 'react-icons/tb'
import { IconType } from 'react-icons'
import recipesProject from '../../public/projects/recipesWebApp.webp'
import weatherForecastProject from '../../public/projects/weatherForecast.webp'
import portfolio from '../../public/projects/portfolio.webp'
import reactNews from '../../public/projects/react-news.webp'
import petAdoption from '../../public/projects/adopt-pet.webp'
import pokemon from '../../public/projects/pokemon-app.webp'
import dashboard from '../../public/projects/dashboard.webp'
import dashboardUsers from '../../public/projects/dashboard-users.webp'
import dashboardAddUser from '../../public/projects/dashboard-add-user.webp'
import { StaticImageData } from 'next/image'
import { Variant } from '@/components/Skills/TechItem'

export const ABOUT_ME = {
  professionHeadline: `Full-stack developer`,
  firstParagraph: {
    heading: 'Who I am now and what I am enthusiast about',
    paragraphContent: `Over the past year, I have been actively involved in coding using technologies such as TypeScript, ReactJS, and more recently Node.js and Next.js. I am enthusiastic about the potential to leverage these technologies to build innovative applications that positively impact people’s lives and the opportunity to make meaningful impact through code. My passion for coding was ignited during my master’s dissertation while searching for ways to improve the statistical analysis. I became deeply interested in the code that powered the tests and calculations of the software that I was using.`,
  },
  secondParagraph: {
    heading: 'Who I was and why I changed',
    paragraphContent: `I hold a BSc degree in Dietetics and an MSc degree in Public Health. While I enjoyed helping others with their health and wellness goals, I found that the work didn't fully challenge me. I soon realised that pursuing additional courses to supplement the lack of challenges in my career as a dietitian was only a short-term solution. It was time for me to explore new avenues of helping people and making a difference. Whether it involves creating user-friendly applications, contributing to open-source projects, or using technology to address global challenges. I am ready to embark on this journey with enthusiasm and commitment.`,
  },
  contacts: {
    mobile: '+44 7306560444',
    emailAddress: 'isadorapda@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/isadorapda/',
  },
  personalInfos: [
    {
      label: 'Nationality',
      value: 'Brazilian/ Italian',
    },
    { label: 'Location', value: 'London' },
    { label: 'Pronouns', value: 'she/her' },
    { label: 'Interests', value: 'reading, yoga, board games' },
  ],
}
export interface Stack {
  name: string
  icon: IconType
}
export interface StackLevel extends Stack {
  level: Variant
}
export interface TechStackSkill {
  header: string
  tech: Array<StackLevel>
}

export const techStackSkills: Array<TechStackSkill> = [
  {
    header: 'Languages',
    tech: [
      {
        name: 'TypeScript',
        icon: IconTS,
        level: Variant.A,
      },
      {
        name: 'JavaScript',
        icon: IconJS,
        level: Variant.B,
      },
    ],
  },
  {
    header: 'Frontend Frameworks and Libraries',
    tech: [
      {
        name: 'React.js',
        icon: IconReact,
        level: Variant.A,
      },
      {
        name: 'Styled-components',
        icon: IconStyledComp,
        level: Variant.A,
      },
      {
        name: 'Tailwind',
        icon: IconTailwind,
        level: Variant.A,
      },
      {
        name: 'Next.js',
        icon: IconNext,
        level: Variant.C,
      },
      {
        name: 'Chakra ui',
        icon: IconChakra,
        level: Variant.D,
      },
      {
        name: 'React Query',
        icon: IconReactquery,
        level: Variant.D,
      },
      {
        name: 'React Testing Library',
        icon: IconTestinglibrary,
        level: Variant.E,
      },
    ],
  },

  {
    header: 'Backend Frameworks and Libraries',
    tech: [
      {
        name: 'Node.js',
        icon: IconNode,
        level: Variant.C,
      },
      {
        name: 'Prisma',
        icon: IconPrisma,
        level: Variant.C,
      },
      {
        name: 'Fastify',
        icon: IconFastify,
        level: Variant.C,
      },
    ],
  },

  {
    header: 'Others',
    tech: [
      {
        name: 'Zod',
        icon: IconZod,
        level: Variant.A,
      },
      {
        name: 'Git',
        icon: IconGit,
        level: Variant.A,
      },
      {
        name: 'Sass',
        icon: IconSass,
        level: Variant.A,
      },
      {
        name: 'Webpack',
        icon: IconWbpack,
        level: Variant.B,
      },

      {
        name: 'Vitest',
        icon: IconVitest,
        level: Variant.B,
      },
      {
        name: 'Figma',
        icon: IconFigma,
        level: Variant.C,
      },
      {
        name: 'Jest',
        icon: IconJest,
        level: Variant.E,
      },
    ],
  },
]
export interface Project {
  id: string
  title: string
  description: string
  skills: string
  stack: Array<Stack>
  image: StaticImageData
  images?: Array<StaticImageData>
  linkGithub: string
  url?: string
}

export const SELECTED_PROJECTS: Array<Project> = [
  {
    id: uuidv4(),
    title: 'Find a Pet - Still Developing',
    description: `A full-stack web app to connect pet seekers with organisations offereng pets for adoption. Organisations can create an account to register their pets for adoption. Pet seekers can search for pets based on their location, pet type, gender, size, and other filters. Users can also access each pet's detailed information and connect to the organisation via WhatsApp to make enquires about the pet.`,
    skills:
      'Pagination, Node.js, Prisma, Fastify, Zod, Docker, React, React Custom Hooks, React Context, TypeScript, Manipulating data, Github Actions, UI/UX, e2e test, unit test, integration test',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },
      {
        name: 'Tailwind',
        icon: IconTailwind,
      },

      {
        name: 'Vitest',
        icon: IconVitest,
      },
      {
        name: 'Node.js',
        icon: IconNode,
      },
      {
        name: 'Prisma',
        icon: IconPrisma,
      },
      {
        name: 'Docker',
        icon: IconDocker,
      },
      {
        name: 'Fastify',
        icon: IconFastify,
      },
    ],
    image: petAdoption,
    linkGithub: 'https://github.com/isadorapda/pet-adoption-api',
  },
  {
    id: uuidv4(),
    title: 'React News',
    description: `A web app with news about React. Users can easily log in using their GitHub accounts and authenticated through Next Auth. The application includes a subscription feature, integrating with Stripe, granting subscribers access to in-depth articles. Non-subscribes can still access content previews. This can improve SEO, since search engines crawl and index content previews. The application utilises Fauna as its database, while Prismic serves as the CMS for the creation and delivery of contents.`,
    skills:
      'Next.js (App folder), TypeScript, Zod, Stripe, FaunaDB, NextAuth, CMS (Prismic), Sass',
    stack: [
      {
        name: 'Next.js',
        icon: IconNext,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'Sass',
        icon: IconSass,
      },

      {
        name: 'Prismic',
        icon: IconPrismic,
      },
      {
        name: 'Stripe',
        icon: IconStripe,
      },
      {
        name: 'Fauna',
        icon: IconFauna,
      },
    ],
    image: reactNews,
    linkGithub: 'https://github.com/isadorapda/react-news-next-app',
  },
  {
    id: uuidv4(),
    title: 'Food Recipes',
    description: `Allows users to search for, view, and save recipes. The application includes a database of recipes that can be searched by ingredients, meal type, dietary restrictions, and other parameters. Users can add missing ingredients to a grocery lists. `,
    skills:
      'React, TypeScript, Tailwind, Vercel, Handling asynchronous requests from public API, React Custom Hooks, Responsive design, React Context, React Router',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },
      {
        name: 'React Router',
        icon: IconRouter,
      },
      {
        name: 'Tailwind',
        icon: IconTailwind,
      },
    ],

    image: recipesProject,
    linkGithub: 'https://github.com/isadorapda/recipes-web-project',
    url: 'https://recipes-web-project.vercel.app/',
  },
]

export const OTHER_PROJECTS: Array<Project> = [
  {
    id: uuidv4(),
    title: 'Portfolio v1',
    description: `An old version of my portfolio. This web application is a modern, responsive and visually appealing website to showcase my front-end skills.`,
    skills:
      'React, React Custom Hooks, React Context, TS, Vercel, Styled-components, GreenSock, Webpack, UI/UX, Responsive design, Figma, Time management/ project planning',
    stack: [
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },

      {
        name: 'Styled-components',
        icon: IconStyledComp,
      },
      {
        name: 'GreenSock',
        icon: IconGSAP,
      },
      {
        name: 'Webpack',
        icon: IconWbpack,
      },
    ],

    image: portfolio,
    linkGithub: 'https://github.com/isadorapda/',
    url: '#homepage',
  },
  {
    id: uuidv4(),
    title: 'Dashboard sample',
    description: ``,
    skills:
      'Next.js, React Query, TS, Chakra ui, UI/UX, Responsive design, Figma, Mirage db, Apex Charts',
    stack: [
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'Next.js',
        icon: IconNext,
      },

      {
        name: 'Chakra ui',
        icon: IconChakra,
      },
      {
        name: 'React Query',
        icon: IconReactquery,
      },
      {
        name: 'Webpack',
        icon: IconWbpack,
      },
    ],
    image: dashboard,
    images: [dashboard, dashboardUsers, dashboardAddUser],
    linkGithub: 'https://github.com/isadorapda/dashboard-next-app',
  },
  {
    id: uuidv4(),
    title: 'Weather Forecast',
    description: `A responsive web application which allows users to access current and future weather information for a selected location. User-friendly interface with image elements to make it easy to understand the weather forecast.`,
    skills:
      'React, TypeScript, Github, Vercel, Handling asynchronous requests from public API, Manipulating data, React Context, Responsive design',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },

      {
        name: 'Styled-components',
        icon: IconStyledComp,
      },
    ],

    image: weatherForecastProject,
    linkGithub: 'https://github.com/isadorapda/weather-forecast-react-app',
    url: 'https://weather-forecast-react-app.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Pokemon',
    description: `With this app, users can browse through an extensive list of Pokemons, capture them, and store them in their Pokedex. The app features a user-friendly design with pagination to make browsing through the list of Pokemons a breeze. Users can easily navigate through the pages and search for their favorite Pokemon. Users can also access each Pokemon's detailed information. This includes its name, type, abilities, stats, and evolution details.`,
    skills:
      'Pagination, React, React Custom Hooks, React Context, TS, Handling asynchronous requests from public API, Manipulating data, TailwindCSS, GreenSock, Vite, Github Actions, UI/UX, Responsive design, Figma',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },

      {
        name: 'Tailwind',
        icon: IconTailwind,
      },
    ],

    image: pokemon,
    linkGithub: 'https://github.com/isadorapda/pokemon-web-app',
    // url: 'https://weather-forecast-react-app.vercel.app/',
  },
]
