import { AccountModel } from "../model/account-model";

export type AuthenticationParams = {
    email: string;
    password: string;
}

export interface Authentication {
    auth(props: AuthenticationParams): Promise<AccountModel>
}