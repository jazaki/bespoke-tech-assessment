import jsonData from './members_data.json'
const activityOptions = [
  {
    title: "Hiking",
    value: "hiking"
  },
  {
    title: "Running",
    value: "running"
  },
  {
    title: "Biking",
    value: "biking"
  }
];

const dataTableHeaders = [
  {
    title: "Member's Name",
    value: "name"
  },
  {
    title: "Member's Age",
    value: "Age"
  },
  {
    title: "Member's Rating",
    value: "rating"
  },
  {
    title: "Last Three Activities",
    value: "activities"
  }
]

const membersRandomizeData = jsonData.map((datum) => {
  const activities = ["hiking", "running", "biking"]
  let randomNum = Math.floor(Math.random() * (activities.length - 0 + 1) + 0)
  let acts = []
  for(let i = 0; i < randomNum; i++) {
    acts.push(activities[i])
  }
  return { ...datum, activities: acts }
})

export {
  activityOptions,
  dataTableHeaders,
  membersRandomizeData
}