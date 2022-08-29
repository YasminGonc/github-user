export class User {
    constructor(
        public readonly avatar_url: string,
        public readonly name: string,
        public readonly login: string,
        public readonly bio: string,
        public readonly repos: number,
        public readonly followers: number,
        public readonly following: number,
        public readonly location: string,
        public readonly link_url: string,
        public readonly twitter_url: string,
        public readonly company: string
    ) {}
}