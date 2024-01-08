export default interface IRepos {
    id: number,
    name: string,
    languages?: string[],
    description?: string,
    created_at: Date,
    pushed_at: Date,
    html_url: string
}