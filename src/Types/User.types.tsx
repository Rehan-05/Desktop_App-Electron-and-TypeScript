export interface IFormInput {
  email?: string;
  password?: string;
  userName?: string;
  name?: string;
  phone?: string;
  company?: string;
  profilePic?: string;
  rememberme?: number;
  role?:string;
}


export interface OrgIFormInput {
    organizationName?: string;
    description?: string;
    owner?: string;
    logo?: string;
    address?: string;
}


export interface auth{
  user: any;
  isChecking: boolean;
  login: {
      isChecking: boolean;
      error: any;
  },
  register: {
      isChecking: boolean;
      error: any;
  }
}


export interface AUTH{
  auth: auth
}
