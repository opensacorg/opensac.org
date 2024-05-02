(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{4545:function(e,t,n){Promise.resolve().then(n.bind(n,7333)),Promise.resolve().then(n.t.bind(n,4983,23))},1848:function(e,t,n){"use strict";n.d(t,{x:function(){return fetchGithubProjectData},v:function(){return fetchGithubSingleProject}});let a="opensac.org";var r=n(7371);let fetchGithubProjectData=async e=>{let t=await Promise.all(e.map(fetchGithubSingleProject));return t.filter(e=>null!==e)},fetchGithubSingleProject=async e=>{let t=mapGhData(e),n=await fetchMetaFile(t.full_name);return n?{...t,meta:n}:null},mapGhData=e=>({id:e.id,homepage:e.homepage,name:e.name,full_name:e.full_name,html_url:e.html_url,api_url:e.url,created_at:e.created_at,updated_at:e.updated_at}),fetchMetaFile=async e=>{console.dir("".concat(e,"/").concat(a)),console.dir(s),"".concat("code4sac","/").concat(a);let t=await fetch("https://raw.githubusercontent.com/".concat(e,"/main/").concat("meta.yml"));if(404===t.status)return null;if(!t.ok)throw Error("Error fetching meta file: ".concat(t.text()));let n=await t.text();return r.Qc(n)},s=r.Qc("\ntitle: OpenSac.org\nproject_type: website\nproject_status: active\ndescription: The Open Sacramento website serves as a hub for technologists, developers, and civic-minded individuals to collaborate, access resources, and engage in projects aimed at enhancing civic innovation in the Sacramento area and beyond through technology\ncomments: This is a great project for new members to get used to working one issues and tasks. It is one of the more approachable projects.\ncommunications: Slack\nchannels: #proj-opensacorg\nimage_url: opensac.jpg\nproject_partner: Dan Fey\nproject_lead: Brianda Hernandez\ntechnical_lead: Nate Bass\nlead_designer: Help Needed\ntags: html,css,javascript,react,github,figma\ncontributing:\n  designer:\n    difficulty: easy\n    technologies: Figma\n    ways_to_contribute: improve existing designs, design new pages\n  developer:\n    difficulty: easy\n    frontend: html,css,javascript,react\n    backend: n/a\n    technologies: To be announced\n    version_control: Github\n    repo: /opensac\n    ways_to_contribute: Bug fixing, testing, maintenance; see issues on github\n  project_manager:\n    difficulty: easy\n    technologies: github, slack\n    ways_to_contribute: organize and create issues & milestones, work with team members to stay and track and remove roadblocks\nroadmap:\n  research:\n    time_range: July 1, 2023 - August 31, 2023\n  design:\n    time_range: September 1, 2023 - October 5, 2023\n  development:\n    time_range: October 6, 2023 - April 1, 2023\n  deployment:\n    time_range: April 2, 2023 - April 9, 2023\n  launch:\n    time_range: April 10, 2023 - April 24, 2023\n  objective: This is the opportunity where you can put any valuable information about our project's current progress or goals.\n  comments: This is the opportunity where you can put any valuable information about the project. This helps in keeping everyone well-informed about our project's status and future plans. Please take a moment to review where the project stands, including what has been accomplished and what's in progress. Our project goals and deadlines are clearly defined to ensure we stay on track.\n  outcome: This is the opportunity where you can put the expected outcome of the project.\nresources:\n  documentation:\n  tutorials:\n  meeting_times: Scheduled for Wednesdays at 6:30 PM and listed on Meetup.\n  office_hours: Saturdays at 3:00 PM (Posted on Slack)\nscreenshots:\n  - opensac.jpg\n")},7333:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionType:function(){return d},default:function(){return Projects}});var a=n(7437);function ProjectCard(e){let{sectionType:t,projectTitle:n,projectText:r,imgUrl:s,pageUrl:c,githubUrl:i,tags:o,lastUpdatedTimestamp:l}=e;return(0,a.jsxs)("section",{className:"project-card-container",children:[(0,a.jsxs)("div",{className:"project-card-img-container",children:[(0,a.jsx)("div",{className:"project-card-img-status",children:"Active"}),(0,a.jsx)("img",{className:"project-card-img",src:s})]}),(0,a.jsx)("ul",{className:"project-card-tags",children:o.map(e=>(0,a.jsx)("div",{className:"project-card-tag",children:e}))}),(0,a.jsx)("h2",{className:"project-card-heading",children:n}),(0,a.jsx)("div",{className:"project-card-description-container",children:(0,a.jsx)("p",{className:"project-card-description",children:r})}),(0,a.jsxs)("div",{className:"project-card-last-updated",children:["Last Updated: ",l.format("ddd MMM D, H:mma")]}),(0,a.jsxs)("div",{className:"project-card-buttons-container",children:[(0,a.jsx)("a",{className:"project-card-button-dark",href:c,children:"Learn More"}),(0,a.jsx)("a",{className:"project-card-button-light",href:i,children:"Source Code"})]})]})}let r=n(2067),getWednesday=e=>{let t=e?r().month()+1:r().month(),n=r().year();12===t&&(t=0,n+=1);let a=e?1:r().date(),s=r().year(n).month(t).daysInMonth(),c=[];for(let e=a;e<=s;e++){let a=r().year(n).month(t).date(e);3===a.day()&&c.push(a.date())}return(c.pop(),0===c.length)?getWednesday(1):r().year(n).month(t).date(c[0]).format("dddd, MMMM D, YYYY")};function ProjectsSectionStart(e){let{sectionType:t}=e;return(0,a.jsxs)("section",{className:"projects-section-".concat(t),children:[(0,a.jsxs)("div",{className:"projects-section-text-container",children:[(0,a.jsxs)("div",{className:"projects-section-".concat(t,"-container projects-section-heading-underline"),children:[(0,a.jsx)("h1",{className:"projects-heading-section",children:"PROJECTS"}),(0,a.jsx)("h2",{className:"projects-heading-section-sub",children:"Building a Better Community"})]}),(0,a.jsx)("div",{className:"projects-section-".concat(t,"-container"),children:(0,a.jsx)("p",{className:"projects-section-paragraph",children:"Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and passionate individuals to make a lasting impact on our community through innovative solutions."})})]}),(0,a.jsx)("div",{className:"meeting-card-container",children:(0,a.jsxs)("div",{className:"meeting-card",children:[(0,a.jsx)("div",{className:"meeting-card-section",children:(0,a.jsx)("span",{className:"meeting-card-heading",children:"Keep an eye on our Meetup calendar for upcoming events."})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:"meeting-card-list-item-text",children:getWednesday()})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:"meeting-card-list-item-text",children:"6:30pm PST"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:"meeting-card-list-item-text",children:"Community Action Night (Virtual)"})})]})}),(0,a.jsx)("div",{className:"meeting-card-section",children:(0,a.jsxs)("a",{className:"meeting-card-link",href:"https://www.meetup.com/code4sac/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to Meetup.",children:[(0,a.jsx)("span",{children:"Go to meetup"}),(0,a.jsx)("img",{src:"./img/meeting-card/arrow-right.svg",alt:"Arrow right."})]})})]})})]})}var projectSearch=()=>(0,a.jsx)("div",{className:"project-search-section",children:(0,a.jsxs)("form",{className:"project-search-form",action:"",children:[(0,a.jsxs)("div",{className:"form-row project-search-row",children:[(0,a.jsx)("input",{className:"project-search",type:"search",placeholder:"Search"}),(0,a.jsx)("img",{src:"/img/form-element/search.svg",alt:"Search icon."})]}),(0,a.jsxs)("div",{className:"select-container",children:[(0,a.jsxs)("div",{className:"form-row",children:[(0,a.jsx)("label",{htmlFor:"filter",children:"Filter"}),(0,a.jsx)("select",{name:"filter",id:"filter",defaultValue:"all",children:(0,a.jsx)("option",{selected:!0,value:"all",children:"All"})})]}),(0,a.jsxs)("div",{className:"form-row",children:[(0,a.jsx)("label",{htmlFor:"sort-by",children:"Sort By"}),(0,a.jsx)("select",{name:"sort-by",id:"sort-by",children:(0,a.jsx)("option",{selected:!0,value:"most-recent",children:"Most Recent"})})]})]})]})}),s=n(42),c=n(2067),i=n.n(c),o=n(2853),l=n(1848);let d={light:"light",dark:"dark"},fetcher=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(s.w).then(l.x)};function Projects(e){let{githubOwner:t}=e,{data:n,error:r,isLoading:s}=(0,o.ZP)("https://api.github.com/orgs/".concat(t,"/repos?per_page=20&sort=updated&direction=desc"),fetcher,{shouldRetryOnError:!1});return r?(0,a.jsx)("div",{children:"failed to load"}):s?(0,a.jsx)("div",{children:"loading..."}):(console.dir(n),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"projects-main",children:[(0,a.jsx)(ProjectsSectionStart,{sectionType:d.light}),(0,a.jsx)(projectSearch,{}),(0,a.jsx)("div",{className:"project-cards-container",children:n.map(e=>(0,a.jsx)(ProjectCard,{sectionType:d.light,projectTitle:e.meta.title,projectText:e.meta.description,imgUrl:"https://raw.githubusercontent.com/".concat(e.full_name,"/main/").concat(e.meta.screenshots[0]),pageUrl:"/projects/".concat(e.name),githubUrl:e.html_url,tags:e.meta.tags.split(","),lastUpdatedTimestamp:i()(e.updated_at)}))})]})}))}},42:function(e,t,n){"use strict";n.d(t,{w:function(){return jsonResponse}});let jsonResponse=e=>e.json()},4983:function(){}},function(e){e.O(0,[990,647,971,472,744],function(){return e(e.s=4545)}),_N_E=e.O()}]);