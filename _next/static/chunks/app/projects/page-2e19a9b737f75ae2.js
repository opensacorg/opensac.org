(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{2894:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});var n=a(5155),r=a(2115),s=a(4498);function c(e){let{isLoading:t,projectStatus:a,projectTitle:r,projectText:c,imgUrl:o,pageUrl:i,githubUrl:l,tags:d,lastUpdatedTimestamp:m}=e;return(0,n.jsxs)("section",{className:"project-card-container",children:[(0,n.jsxs)("div",{className:"project-card-img-container",children:[(0,n.jsx)("div",{className:"project-card-img-status ".concat(t&&"project-card-loading"),children:a}),t?(0,n.jsx)("div",{className:"project-card-img project-card-loading"}):(0,n.jsx)("img",{className:"project-card-img",src:o,alt:"Default project image"})]}),(0,n.jsx)("ul",{className:"project-card-tags",children:d.map((e,a)=>(0,n.jsx)("div",{className:"project-card-tag ".concat(t&&"project-card-loading"),children:e},r+e))}),(0,n.jsx)("h2",{className:"project-card-heading ".concat(t&&"project-card-loading"),children:r}),(0,n.jsx)("div",{className:"project-card-description-container",children:(0,n.jsx)("p",{className:"project-card-description ".concat(t&&"project-card-loading"),children:c})}),(0,n.jsxs)("div",{className:"project-card-last-updated ".concat(t&&"project-card-loading"),children:["Last Updated: ",m.format("ddd MMM D Y")]}),(0,n.jsxs)("div",{className:"project-card-buttons-container",children:[(0,n.jsx)(s.A,{className:"btn btn-blue ".concat(t&&"project-card-loading"),href:i,textContent:"Learn More"}),(0,n.jsx)(s.A,{className:"btn btn-alt-blue ".concat(t&&"project-card-loading"),href:l,textContent:"Source Code"})]})]})}var o=a(2940),i=a.n(o);let l=e=>{let{error:t,isLoading:a,projectsData:r,sectionType:s}=e;return a?(0,n.jsx)("div",{className:"project-cards-container",children:Array.from({length:3}).map((e,t)=>(0,n.jsx)(c,{isLoading:a,projectStatus:".",projectTitle:"Loading...",projectText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula.",tags:["loading"],lastUpdatedTimestamp:i()("2024-05-02T03:07:22Z")},t))}):t||0===r.length?(0,n.jsx)("div",{className:"project-cards-load-status-container",children:(0,n.jsx)("span",{className:"project-cards-load-status-text",children:t?"Failed to load...":"There are no projects that meet the search criteria..."})}):(0,n.jsx)("div",{className:"project-cards-container",children:r.map(e=>(0,n.jsx)(c,{sectionType:s,projectStatus:e.meta.project_status,projectTitle:e.meta.title,projectText:e.meta.description,imgUrl:"https://raw.githubusercontent.com/".concat(e.full_name,"/main/").concat(e.meta.screenshots[0]),pageUrl:"/projects/".concat(e.name,"/#project-section-start"),githubUrl:e.html_url,tags:e.meta.tags.split(","),lastUpdatedTimestamp:i()(e.updated_at)},i()(e.updated_at)))})},d=a(2940),m=e=>{let t=e?d().month()+1:d().month(),a=d().year();12===t&&(t=0,a+=1);let n=e?1:d().date(),r=d().year(a).month(t).daysInMonth(),s=[];for(let e=n;e<=r;e++){let n=d().year(a).month(t).date(e);3===n.day()&&s.push(n.date())}return(s.pop(),0===s.length)?m(1):d().year(a).month(t).date(s[0]).format("dddd, MMMM D, YYYY")};var p=a(6874),h=a.n(p);function u(e){let{sectionType:t}=e;return(0,n.jsxs)("section",{className:"projects-section-".concat(t),children:[(0,n.jsxs)("div",{className:"projects-section-text-container",children:[(0,n.jsxs)("div",{className:"projects-section-".concat(t,"-container heading-underline"),children:[(0,n.jsx)("h1",{className:"general-heading-section",children:"PROJECTS"}),(0,n.jsx)("h2",{className:"projects-heading-section-sub",children:"Building a Better Community"})]}),(0,n.jsx)("div",{className:"projects-section-".concat(t,"-container"),children:(0,n.jsx)("p",{className:"section-paragraph-small",children:"Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and passionate individuals to make a lasting impact on our community through innovative solutions."})})]}),(0,n.jsx)("div",{className:"meeting-card-container",children:(0,n.jsxs)("div",{className:"meeting-card",children:[(0,n.jsx)("div",{className:"meeting-card-section",children:(0,n.jsx)("span",{className:"meeting-card-heading",children:"Keep an eye on our Meetup calendar for upcoming events."})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:"meeting-card-list-item-text",children:m()})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:"meeting-card-list-item-text",children:"6:30pm PST"})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:"meeting-card-list-item-text",children:"Community Action Night (Virtual)"})})]})}),(0,n.jsx)("div",{className:"meeting-card-section",children:(0,n.jsxs)(h(),{className:"meeting-card-link",href:"https://www.meetup.com/code4sac/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to Meetup.",children:[(0,n.jsx)("span",{children:"Go to meetup"}),(0,n.jsx)("img",{src:"./img/meeting-card/arrow-right.svg",alt:"Arrow right."})]})})]})})]})}let j=e=>{let{data:t,setProjectsData:a}=e,r=e=>{let n=e.get("project-search").toLowerCase(),r=e.get("project-filter"),s=e.get("project-sort-by"),c=t;n&&(c=c.filter(e=>e.meta.title.toLowerCase().includes(n))),"all"!==r&&(c=c.filter(e=>e.meta.project_status===r)),a([...c=c.sort((e,t)=>new Date(t[s])-new Date(e[s]))])},s=e=>{r(new FormData(e.target.form))};return(0,n.jsx)("div",{className:"project-search-section",children:(0,n.jsxs)("form",{className:"project-search-form",action:r,children:[(0,n.jsxs)("div",{className:"form-row project-search-row",children:[(0,n.jsx)("input",{className:"projectSearch",name:"project-search",type:"search",placeholder:"Search",onChange:s}),(0,n.jsx)("img",{src:"/img/form-element/search.svg",alt:"Search icon."})]}),(0,n.jsxs)("div",{className:"select-container",children:[(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsx)("label",{htmlFor:"project-filter",children:"Filter"}),(0,n.jsxs)("select",{name:"project-filter",id:"project-filter",defaultValue:"all",onChange:s,children:[(0,n.jsx)("option",{value:"all",children:"All"}),(0,n.jsx)("option",{value:"active",children:"Active"})]})]}),(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsx)("label",{htmlFor:"project-sort-by",children:"Sort By"}),(0,n.jsxs)("select",{name:"project-sort-by",id:"project-sort-by",onChange:s,children:[(0,n.jsx)("option",{value:"created_at",children:"Most Recent"}),(0,n.jsx)("option",{value:"updated_at",children:"Last Updated"})]})]})]})]})})};var g=a(9586),x=a(6072),f=a(7778);let v={light:"light"},b=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch(...t).then(g.Y).then(f.$)};function y(e){let{githubOwner:t}=e,[a,s]=(0,r.useState)([]),{data:c,error:o,isLoading:i}=(0,x.Ay)("https://api.github.com/orgs/".concat(t,"/repos?per_page=20&sort=updated&direction=desc"),b,{shouldRetryOnError:!1});return(0,r.useEffect)(()=>{c&&s(c.sort((e,t)=>new Date(t.updated_at)-new Date(e.updated_at)))},[c]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"projects-main",children:[(0,n.jsx)(u,{sectionType:v.light}),(0,n.jsx)(j,{data:c,setProjectsData:s}),(0,n.jsx)(l,{error:o,isLoading:i,projectsData:a,sectionType:v.light})]})})}},3120:(e,t,a)=>{Promise.resolve().then(a.bind(a,2894))},4498:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(5155),r=a(6874),s=a.n(r);let c=e=>{let{className:t,href:a,target:r,onClick:c,textContent:o}=e;return a?(0,n.jsx)(s(),{className:t,href:a,target:r||"_self",children:o}):(0,n.jsx)("button",{className:t,onClick:c||null,children:o})}},7778:(e,t,a)=>{"use strict";a.d(t,{$:()=>s,t:()=>c});let n="opensac.org";var r=a(2384);let s=async e=>(await Promise.all(e.map(c))).filter(e=>null!==e),c=async e=>{let t=o(e),a=await i(t.full_name,t.default_branch);return a?{...t,meta:a}:null},o=e=>({id:e.id,homepage:e.homepage,name:e.name,full_name:e.full_name,default_branch:e.default_branch,html_url:e.html_url,api_url:e.url,created_at:e.created_at,updated_at:e.updated_at}),i=async(e,t)=>{console.dir("".concat(e,"/").concat(n)),console.dir(l),"".concat("opensacorg","/").concat(n);let a=await fetch("https://raw.githubusercontent.com/".concat(e,"/").concat(t,"/").concat("meta.yml"));if(404===a.status)return null;if(!a.ok)throw Error("Error fetching meta file: ".concat(await a.text()));let s=await a.text();return r.qg(s)},l=r.qg("\ntitle: OpenSac.org\nproject_type: website\nproject_status: active\ndescription: The Open Sacramento website serves as a hub for technologists, developers, and civic-minded individuals to collaborate, access resources, and engage in projects aimed at enhancing civic innovation in the Sacramento area and beyond through technology\ncomments: This is a great project for new members to get used to working one issues and tasks. It is one of the more approachable projects.\ncommunications: Slack\nchannels: #proj-opensacorg\nimage_url: opensac.jpg\nproject_partner: Dan Fey\nproject_lead: Brianda Hernandez\ntechnical_lead: Nate Bass\nlead_designer: Help Needed\ntags: html,css,javascript,react,github,figma\ncontributing:\n  designer:\n    difficulty: easy\n    technologies: Figma\n    ways_to_contribute: improve existing designs, design new pages\n  developer:\n    difficulty: easy\n    frontend: html,css,javascript,react\n    backend: n/a\n    technologies: To be announced\n    version_control: Github\n    repo: /opensac\n    ways_to_contribute: Bug fixing, testing, maintenance; see issues on github\n  project_manager:\n    difficulty: easy\n    technologies: github, slack\n    ways_to_contribute: organize and create issues & milestones, work with team members to stay and track and remove roadblocks\nroadmap:\n  research:\n    time_range: July 1, 2023 - August 31, 2023\n  design:\n    time_range: September 1, 2023 - October 5, 2023\n  development:\n    time_range: October 6, 2023 - April 1, 2023\n  deployment:\n    time_range: April 2, 2023 - April 9, 2023\n  launch:\n    time_range: April 10, 2023 - April 24, 2023\n  objective: This is the opportunity where you can put any valuable information about our project's current progress or goals.\n  comments: This is the opportunity where you can put any valuable information about the project. This helps in keeping everyone well-informed about our project's status and future plans. Please take a moment to review where the project stands, including what has been accomplished and what's in progress. Our project goals and deadlines are clearly defined to ensure we stay on track.\n  outcome: This is the opportunity where you can put the expected outcome of the project.\nresources:\n  documentation:\n  tutorials:\n  meeting_times: Scheduled for Wednesdays at 6:30 PM and listed on Meetup.\n  office_hours: Saturdays at 3:00 PM (Posted on Slack)\nscreenshots:\n  - opensac.jpg\n")},9586:(e,t,a)=>{"use strict";a.d(t,{Y:()=>n});let n=e=>e.json()}},e=>{var t=t=>e(e.s=t);e.O(0,[586,874,33,441,684,358],()=>t(3120)),_N_E=e.O()}]);