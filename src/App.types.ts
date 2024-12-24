export interface LoginInterface {
  password: string;
  phone: string;
  userType: string;
};

export interface UserInterface  {
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
  userType: string;
  isLoggedIn: boolean;
  loanStatus: "pending" | "approved" | "rejected" | "none";
  loanAmount : number;
}

export interface showForm {
  setShowForm: (value: boolean) => void;
}