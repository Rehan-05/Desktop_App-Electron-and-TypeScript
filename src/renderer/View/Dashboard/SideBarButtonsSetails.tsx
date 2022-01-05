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
    to: '/overview',
    label: 'Overview',
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
