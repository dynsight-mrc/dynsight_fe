export type ReadOrganizationOverviewDto = {
    name: string,
    reference: string,
    description: string,
    owner: string,
    numberOfBuildings:number,
    totalSurface:number,
    id: string,
    type: string,
    image?:string

}