import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Card, CardBody, CardFooter, CardTitle, Col, Row } from 'reactstrap';
import { useBlogPosts } from '../../hooks/BlogPosts/BlogPosts';
import BlogPost from '../../models/BlogPosts/BlogPost';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IViewBlogPostsProps {}

const ViewBlogPosts: React.FC<IViewBlogPostsProps> = () => {
    const navigate = useNavigate();
    const user = 'jgoodyke';

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    const blogPostsQuery = useBlogPosts(user, {
        onSuccess: (data) => {
            setBlogPosts(data ?? []);
        }
    });

    const isLoading = useMemo(() => blogPostsQuery.isLoading, [blogPostsQuery.isLoading]);

    return (
        <>
            {isLoading ? (
                <Alert color="info">Loading...</Alert>
            ) : (
                <>
                    <Row>
                        <Col md={4}>View Posts</Col>
                        <Col md={8}>
                            {blogPosts.map((post) => (
                                <Card color="light">
                                    <CardTitle>{post.title}</CardTitle>
                                    <CardBody>{post.text}</CardBody>
                                    <CardFooter>{post.timestamp}</CardFooter>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ViewBlogPosts;
