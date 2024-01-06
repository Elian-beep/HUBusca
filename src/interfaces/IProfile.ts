export default interface IProfile {
    id: number,
    photo: string,
    name: string,
    login: string,
    location?: string,
    followers?: number,
    public_repos?: number
}