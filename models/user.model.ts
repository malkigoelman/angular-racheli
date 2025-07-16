export interface User {
    userName: string,
    password: string,
    email: string,
    id?: number
}

export interface UserToken extends User {
    token: string
}

export interface Customer {
    userName: string,
    password: string,
    email: string,
    phoneNumber: string,
    yearsOfSeniority: number,
    IsActive: boolean,
    role: number

}