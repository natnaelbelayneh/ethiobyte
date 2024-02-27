import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'EthioByte',
  title: "Hi there! We're EthioByte",
  description:
    "Empowering Ethiopia's Digital Revolution: Unleash the Potential of Your Business with EthioByte's Innovative Software Solutions. Drive Growth, Accelerate Innovation, and Achieve Unprecedented Success.",
  resumeLink:
    '',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://www.ethiobyte.com',
  linkedin: 'https://www.linkedin.com/in/ethiobyte',
  github: 'https://github.com/ethiobyte',
  instagram: 'https://www.instagram.com/ethiobytesoftwaresolution',
  facebook: 'https://www.facebook.com/ethiobyte',
  twitter: 'https://twitter.com/ethiobyte',
};

export const skillsSection: SkillsSectionType = {
  title: 'What We do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  // {
  //   schoolName: 'De University',
  //   subHeader: 'Master of Science in Computer Science',
  //   duration: 'September 2017 - April 2019',
  //   desc: 'Participated in the research of XXX and published 3 papers.',
  //   grade: 'Grade A',
  //   descBullets: [
  //     'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   ],
  // },
];

export const experience: ExperienceType[] = [
  {
    role: '',
    company: 'WEB & MOBILE APP DEVELOPMENT',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: '',
    desc: 'RESPONSIVE WEB AND MOBILE APPLICATIONS COMPATABLE WITH ALL DEVICES',
  },
  {
    role: '',
    company: 'IT CONSULTING',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: '',
    desc: 'ADVICE AND GUADANCE TO ANY KIND OF SOFTWARE PRODUCTS FOR ALL SECTORS',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: '',
    company: 'SEO-SERVICES',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: '',
    desc: 'SCORE HIGH RANKING SITES WITH PERFECTLY CURATED CONTENTS AND SEO CUSTOMIZED SITES',
  },
  {
    role: '',
    company: 'UI/UX DESIGN',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: '',
    desc: 'BEAUTIFULLY DESIGNED AND EFFICIENTLY STRATEGIEZED SYSTEMS AND APPLICATIONS',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ethiobyte - Software Development Company Ethiopia',
  description:
    'Ethiobyte is a leading software development company in Ethiopia, offering custom software solutions, IT services, web development, mobile app development, and software consulting services. Contact us for software outsourcing, enterprise software solutions, and software project management in Ethiopia.',
  author: 'Ethiobyte',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://www.ethiobyte.com/',
  keywords: [
  'software development company Ethiopia',
  'custom software solutions Ethiopia',
  'IT services Ethiopia, web development Ethiopia',
  'mobile app development Ethiopia',
  'software consulting services Ethiopia',
  'software outsourcing Ethiopia',
  'enterprise software solutions Ethiopia',
  'software project management Ethiopia',
  'IT solutions company Ethiopia',
  'software engineering Ethiopia',
  'software programming Ethiopia',
  'Ethio software developers',
  'technology solutions provider Ethiopia',
  ],
};
