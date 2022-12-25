export interface customInputInfo {
  type: "text" | "password" | "email";
  value: string | number;
  onChange: Function;
  onBlur?: Function;
  placeholder?: string;
}

export interface customButtonInfo {
  children: string;
  size?: "small" | "medium" | "large";
  onClick: Function;
}

export interface userInfo {
  id?: string;
  token?: string;
  refreshToken?: string;
}
