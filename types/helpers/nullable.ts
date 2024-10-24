type UserInfo = {
    name: string
    lastname?: string
    birthdate: Date
}

type Nullable<T> = { [P in keyof T]: T[P] | null }
type UserNullable = Nullable<UserInfo>

const maybeUser: UserNullable = { name: null, birthdate: new Date() }
