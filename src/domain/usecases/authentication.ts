import { AccountModel } from "../model/account-model";

interface AuthenticationParams  {
    email: string;
    password: string;
}

export interface Authentication {
    auth(props: AuthenticationParams): Promise<AccountModel>
}