// DOM SELECTIONS
let headerLogo = document.querySelector('#header_logo')
let headerName = document.querySelector('#header_name')
let securityCultureStatus = document.querySelector('#security_culture_status')

let cultureActivity = document.querySelector('#culture_activity')
let riskActivity = document.querySelector('#risk_activity')
let securityCultureActivity = document.querySelector(
  '#security_culture_activity'
)
let individualLederboardContainer = document.querySelector(
  '#individual_lederboard_container'
)
let teamLederboardContainer = document.querySelector(
  '#team_lederboard_container'
)

//Dummy Data:
const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    about:
      'Sarah is a marketer with a passion for storytelling and brand development.',
    cultureScore: 40,
    riskScore: 60,
    teamId: 1,
    avatar: 'https://i.ibb.co/x73pmSC/avatar-3.jpg',
    securityCultureTimeline: [
      [1675789891412, 5],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
  {
    id: 2,
    name: 'John Doe',
    about:
      'John is a software engineer with expertise in cloud computing and blockchain technology.',
    cultureScore: 50,
    riskScore: 30,
    teamId: 2,
    avatar: 'https://i.ibb.co/ZzG4FSJ/avatar-4.jpg',
    securityCultureTimeline: [
      [1675789891412, 10],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 30],
      [1676135491412, 50],
      [1676221891412, 20],
      [1676308291412, 35],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 100],
    ],
  },
  {
    id: 3,
    name: 'Jessica Smith',
    about:
      'Jessica is a data scientist with a strong background in machine learning and big data analysis.',
    cultureScore: 60,
    riskScore: 25,
    teamId: 3,
    avatar: 'https://i.ibb.co/27DfRN8/avatar-5.jpg',
    securityCultureTimeline: [
      [1675789891412, 5],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
  {
    id: 4,
    name: 'Michael Brown',
    about:
      'Michael is a creative director with a portfolio of award-winning advertising campaigns.',
    cultureScore: 70,
    riskScore: 20,
    teamId: 4,
    avatar: 'https://i.ibb.co/WKVXsGY/avatar-6.jpg',
    securityCultureTimeline: [
      [1675789891412, 10],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 30],
      [1676135491412, 50],
      [1676221891412, 20],
      [1676308291412, 35],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 100],
    ],
  },
  {
    id: 5,
    name: 'Emily Davis',
    about:
      'Emily is a financial analyst with a focus on investment strategy and portfolio management.',
    cultureScore: 80,
    riskScore: 15,
    teamId: 5,
    avatar: 'https://i.ibb.co/SPQrJ4n/avatar-7.jpg',
    securityCultureTimeline: [
      [1675789891412, 5],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
  {
    id: 6,
    name: 'David Lee',
    about:
      'David is a web developer with extensive experience in full-stack development and UX design.',
    cultureScore: 90,
    riskScore: 15,
    teamId: 1,
    avatar: 'https://i.ibb.co/d2x2hXh/avatar-8.jpg',
    securityCultureTimeline: [
      [1675789891412, 20],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
  {
    id: 7,
    name: 'Elizabeth Turner',
    about:
      'Elizabeth is a project manager with a proven track record of delivering complex projects on time and under budget.',
    cultureScore: 100,
    riskScore: 10,
    teamId: 2,
    avatar: 'https://i.ibb.co/JK9rq3z/avatar-11.jpg',
    securityCultureTimeline: [
      [1675789891412, 30],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
  {
    id: 8,
    name: 'Andrew Garcia',
    about:
      'Andrew is a digital marketing expert with a focus on SEO, PPC, and social media advertising.',
    cultureScore: 50,
    riskScore: 30,
    teamId: 3,
    avatar: 'https://i.ibb.co/P4pZX5y/avatar-12.jpg',
    securityCultureTimeline: [
      [1675789891412, 30],
      [1675876291412, 20],
      [1675962691412, 10],
      [1676049091412, 40],
      [1676135491412, 5],
      [1676221891412, 20],
      [1676308291412, 40],
      [1676394691412, 60],
      [1676481091412, 30],
      [1676567491412, 20],
    ],
  },
]

const teams = [
  { id: 1, name: 'Design' },
  { id: 2, name: 'Development' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Data Entry' },
  { id: 5, name: 'Quality Assurence' },
]

let selectedUser = users[0]

// FETCH TEAM LEDERBOARD DATA AND ITERATE
const fetchTeamData = function (data) {
  try {
    // const response = await fetch(`http://api.com`)
    //const data = await response.json()

    if (data.length) {
      let list = ''
      data.forEach((item) => {
        list += `
          <li>
          <a
            class="group flex space-x-4 items-center rounded p-2 tracking-wide outline-none transition-all hover:bg-primary/10 hover:text-primary dark:hover:bg-accent-light/15 dark:hover:text-accent-light text-primary ${
              selectedUser.teamId === item.id &&
              'bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light'
            }"
            href="#"
          >
            <p
              class="px-3 py-2 rounded-full text-xs bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              ${item.id}
            </p>
            <p
            class="tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
          ${item.name}
          </p>

          </a>
        </li>
          `
      })
      teamLederboardContainer.innerHTML = list
    }
  } catch (error) {
    console.log({ error })
  }
}

// RADIAL CHART CONFIGURATION CRETOR UTILITY FUNCTION
function makeRadialChart(value) {
  return {
    series: [value],
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '100%',
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }
}

// LINE CHART CONFIGURATION CRETOR UTILITY FUNCTION
function makeLineChart(values) {
  return {
    chart: {
      type: 'line',
      height: 300,
      foreColor: '#999',
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Total Views',
        data: values,
      },
    ],
    markers: {
      size: 0,
      strokeColor: '#fff',
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        offsetX: 14,
        offsetY: -5,
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  }
}

// Update ui Handler
function updateUi(user) {
  headerName.innerHTML = user.name
  headerLogo.src = user.avatar
  securityCultureStatus.src = user.avatar

  // Iterate Team Data
  fetchTeamData(teams)

  // Chart Render
  cultureActivity.innerHTML = ''
  riskActivity.innerHTML = ''
  securityCultureActivity.innerHTML = ''

  let culture = new ApexCharts(
    cultureActivity,
    makeRadialChart(user.cultureScore)
  )
  let risk = new ApexCharts(riskActivity, makeRadialChart(user.riskScore))

  let securityCulture = new ApexCharts(
    securityCultureActivity,
    makeLineChart(user.securityCultureTimeline)
  )
  securityCulture.render()
  risk.render()
  culture.render()
}
updateUi(selectedUser)

// Individual Data On Change Selection Handler
const selectionHandler = (userID) => {
  selectedUser = users.find((user) => user.id === userID)
  // Update UI
  updateUi(selectedUser)
}

// FETCH INDIVIDUAL LEDERBOARD DATA AND ITERATE
const fetchIndividualData = function (data) {
  try {
    // const response = await fetch(`http://api.com`)
    //const data = await response.json()

    if (data.length) {
      data.forEach((user) => {
        let li = document.createElement('li')
        li.innerHTML = `<a
        class="group flex space-x-4 items-center rounded p-2 tracking-wide outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary dark:hover:bg-accent-light/15 dark:hover:text-accent-light dark:focus:bg-accent-light/15 dark:focus:text-accent-light text-primary"
        href="#"
      >
      <img class='h-10 w-10 rounded-full' src="${user.avatar}" alt="${
          user.name
        }"/>
        <div>
          <p
            class="tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
          ${user.name}
          </p>
          <p class="text-xs">${user.about.split(' ').slice(0, 5).join(' ')}</p>
        </div>
      </a>`
        li.onclick = () => selectionHandler(user.id)
        individualLederboardContainer.appendChild(li)
      })
    }
  } catch (error) {
    console.log({ error })
  }
}
fetchIndividualData(users)
