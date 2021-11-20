import Notification from '../../Util/Notification';

export default (store:any) => (next:any) => (action:any) => {
  console.log(store)
  debugger
    switch(action.type) {
      case 'APP_IS_ONLINE':
      case 'APP_IS_OFFLINE': {
        Notification.show({
            title: 'Connection status:',
            body: action.isOnline ? 'Online' : 'Offline'
          });
      }
    }

    next(action);
  }
