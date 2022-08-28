export class User {
    constructor(avatar_url, name, login, bio, repos, followers, following, location, link_url, twitter_url, company) {
        this.avatar_url = avatar_url;
        this.name = name;
        this.login = login;
        this.bio = bio;
        this.repos = repos;
        this.followers = followers;
        this.following = following;
        this.location = location;
        this.link_url = link_url;
        this.twitter_url = twitter_url;
        this.company = company;
    }
}
