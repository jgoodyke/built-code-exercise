import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';
import BlogPost from '../../models/BlogPosts/BlogPost';
import CreateBlogPostRequest from '../../models/BlogPosts/CreateBlogPostRequest';
import UpdateBlogPostRequest from '../../models/BlogPosts/UpdateBlogPostRequest';
import BlogPostsService from '../../services/BlogPostsService';

const useBlogPosts = (user: string, options?: UseQueryOptions<BlogPost[] | undefined, Error, BlogPost[] | undefined>) => {
    const queryKey = ['blog-posts', user];

    return useQuery<BlogPost[] | undefined, Error, BlogPost[] | undefined>(queryKey, () => BlogPostsService.get(user), {
        onSuccess: (response) => {
            console.log(response);
        },
        onError: () => {
            toast.error('Failed to load blog posts');
        },
        ...options
    });
};

const useBlogPostById = (user: string, id: string, options?: UseQueryOptions<BlogPost | undefined, Error, BlogPost | undefined>) => {
    const queryKey = ['blog-posts', user, id];

    return useQuery<BlogPost | undefined, Error, BlogPost | undefined>(queryKey, () => BlogPostsService.getById(user, id), {
        onError: () => {
            toast.error('Failed to load blog post');
        },
        ...options
    });
};

const useCreateBlogPost = () => {
    return useMutation((request: CreateBlogPostRequest) => BlogPostsService.create(request.user, request.blogPost), {
        onSuccess: () => {
            toast.success('Blog post saved successfully!');
        },
        onError: () => {
            toast.error('Failed to save blog post.');
        }
    });
};

const useUpdateBlogPost = () => {
    return useMutation((request: UpdateBlogPostRequest) => BlogPostsService.update(request.user, request.blogPost), {
        onSuccess: (response, input) => {
            toast.success('Blog post saved.');
        },
        onError: () => {
            toast.error('Failed to update blog post.');
        }
    });
};

const useDeleteBlogPostById = () => {
    return useMutation((request: { user: string; id: string }) => BlogPostsService.deleteById(request.user, request.id), {
        onSuccess: (response, input) => {
            toast.success('Blog post deleted');
        },
        onError: () => {
            toast.error('Failed to delete blog post');
        }
    });
};

const useDeleteAllBlogPostsForUser = () => {
    return useMutation((user: string) => BlogPostsService.deleteAll(user), {
        onSuccess: (response, input) => {
            toast.success(`All blog posts deleted`);
        },
        onError: () => {
            toast.error('Failed to delete blog posts');
        }
    });
};

export { useBlogPosts, useBlogPostById, useCreateBlogPost, useUpdateBlogPost, useDeleteBlogPostById, useDeleteAllBlogPostsForUser };
