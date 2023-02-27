import HttpClient from '../clients/HTTPClient';
import BlogPost from '../models/BlogPosts/BlogPost';

class BlogPostsService {
    private static _baseUrl = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts';

    public get = async (user: string): Promise<BlogPost[]> => {
        const url = `${BlogPostsService._baseUrl}/${user}`;

        try {
            const res = await HttpClient.get<{ response: BlogPost[] }>(url);
            return res.response;
        } catch {
            throw Error;
        }
    };

    public getById = async (user: string, id: string): Promise<BlogPost> => {
        const url = `${BlogPostsService._baseUrl}/${user}/${id}`;

        try {
            const res = await HttpClient.get<{ response: BlogPost }>(url);
            return res.response;
        } catch {
            throw Error;
        }
    };

    public create = async (user: string, post: Partial<BlogPost>) => {
        const url = `${BlogPostsService._baseUrl}/${user}`;

        try {
            const res = await HttpClient.post<{ response: BlogPost }>(url, post);
            return res.response;
        } catch {
            throw Error;
        }
    };

    public update = async (user: string, post: BlogPost) => {
        const url = `${BlogPostsService._baseUrl}/${user}/${post.id}`;

        const res = await HttpClient.put<{ response: BlogPost }>(url, post);
        return res.response;
    };

    public deleteById = async (user: string, id: string) => {
        const url = `${BlogPostsService._baseUrl}/${user}/${id}`;

        return await HttpClient.delete(url);
    };

    public deleteAll = async (user: string) => {
        const url = `${BlogPostsService._baseUrl}/${user}`;

        return await HttpClient.delete(url);
    };
}

export default new BlogPostsService();
