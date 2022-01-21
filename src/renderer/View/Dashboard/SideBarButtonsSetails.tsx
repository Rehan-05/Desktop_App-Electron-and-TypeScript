export const sideBarButtons=[
  {

            title:"Home",
            font:"AntDesign",
            iconName:"home",
            to:"/"
  },
  {

    title:"My Task",
    font:"FontAwesome",
    iconName:"tasks",
    to:"/mytask"
},
{

  title:"Reporting",
  font:"Entypo",
  iconName:"line-graph",
  to:"/reporting",
},
{

  title:"Inbox",
  font:"AntDesign",
  iconName:"message1",
  to:"/inbox"
},
{

  title:"Goals",
  font:"Entypo",
  iconName:"bar-graph",
  to:"/goals",
  seprator:true
},
{

  title:"Account",
  font:"MaterialCommunityIcons",
  iconName:"account-outline",
  to:"/account",

},
{

  title:"Invite Teammates",
  font:"AntDesign",
  iconName:"addusergroup",
  to:"/invites",

},
{

  title:"Settings",
  font:"AntDesign",
  iconName:"setting",
  to:"/setting",

},
{

  title:"Help",
  font:"Ionicons",
  iconName:"ios-help-circle-outline",
  to:"/help",
}
]


export const options1= [
  {
      value: 'Edit Project Detail',
      label: 'Edit Project Detail',
      hidden: false,
      icon: {
        name:'addusergroup',
        color:'#000',
        size:20,
        font:"AntDesign"
      },
      options: [
          {
              value: 'Sample-Sub-Menu',
              label: 'Sample-Sub-Menu',
              hidden: false,
              icon: {
                name:'addusergroup',
                color:'#000',
                size:20,
                font:"AntDesign"
              },
              options: [
                  {
                      value: 'Sub-Menu-Option-1',
                      label: 'Sub-Menu-Option-1',
                      hidden: false,
                      icon:  {
                        name:'addusergroup',
                        color:'#000',
                        size:20,
                        font:"AntDesign"
                      },
                  },
                  {
                      value: 'Sub-Menu-Option-2',
                      label: 'Sub-Menu-Option-2',
                      hidden: false,
                      icon: {
                        name:'addusergroup',
                        color:'#000',
                        size:20,
                        font:"AntDesign"
                      },
                  },
              ],
          },
      ]
  }
]
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Icon from "react-web-vector-icons";



export const option = {
  placeholder: (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Project Actions</Tooltip>}
    >
      <div>
        <Icon
          name="down"
          font="AntDesign"
          color="rgb(175, 173, 173)"
          size={18}
          style={{ height: 12, width: 20 }}
        />
      </div>
    </OverlayTrigger>
  ),
  options: [
    {
      value: 'Edit Project Detail',
      label: 'Edit Project Detail',
      hidden: false,
      icon: {
        name: 'edit-2',
        color: '#000',
        size: 20,
        font: 'Feather',
      },
    },
    {
      value: 'Duplicate',
      label: 'Duplicate',
      hidden: false,
      icon: {
        name: 'content-duplicate',
        color: '#000',
        size: 20,
        font: 'MaterialCommunityIcons',
      },
    },
    {
      value: 'Delete',
      label: 'Delete Project',
      hidden: false,
      labelStyle: { color: 'red' },
      icon: {
        name: 'delete',
        color: 'red',
        size: 20,
        font: 'AntDesign',
      },
    },
  ],
};
export const links = [
  {
    to: '/documentation',
    label: 'Documentation',
  },
  {
    to: '/list',
    label: 'List',
  },
  {
    to: '/board',
    label: 'Board',
  },
  {
    to: '/timeLine',
    label: 'Timeline',
  },
  {
    to: '/calender',
    label: 'Clander',
  },
];



export const projects=[
  {
    id:1,
    projectTitle:"Project 1",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  },
  {
    id:2,
    projectTitle:"Project 2",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  },
  {
    id:3,
    projectTitle:"Project 2",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  },
  {
    id:4,
    projectTitle:"Project 4",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  },
  {
    id:5,
    projectTitle:"Project 5",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  }
  ,
  {
    id:6,
    projectTitle:"Project 6",
    projectDescription:"Project description",
    pIconName:"bars",
    pIconBackgroundColor:"#90ae1a",
  }
]

export const ProjectCollabrator=[
  {
    id:1,
    name:"John Doe",
    image:"https://via.placeholder.com/150x150",
    role:"Project Manager",
    status:"Active",

    email:"email@example.com",
    description:"Description description"

  },
  {
    id:2,
    name:"John Doe",
    image:"https://via.placeholder.com/150x150",
    role:"Project Manager",
    status:"Active",

    email:"email@example.com",
    description:"Description description"

  },
  {
    id:3,
    name:"John Doe",
    image:"https://via.placeholder.com/150x150",
    role:"Project Manager",
    status:"Active",

    email:"email@example.com",
    description:"Description description"

  },
  {
    id:4,
    name:"John Doe",
    image:"https://via.placeholder.com/150x150",
    role:"Project Manager",
    status:"Active",

    email:"email@example.com",
    description:"Description description"

  },
  {
    id:5,
    name:"John Doe",
    image:"https://via.placeholder.com/150x150",
    role:"Project Manager",
    status:"Active",

    email:"email@example.com",
    description:"Description description"

  },
]
