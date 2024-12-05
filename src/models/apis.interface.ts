
export interface IApiMock {
    id:number ,
    name: string
    description: string
    image:string
    link: string
}

export type ApiShow = Omit <IApiMock, "id">