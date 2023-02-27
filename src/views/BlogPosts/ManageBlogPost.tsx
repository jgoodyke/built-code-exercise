import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IManageBlogPostRouteParams {
    id?: string;
}

const ManageBlogPost: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    const user = 'jgoodyke';
    const isEdit = params.id !== undefined;

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    return <>Create, edit, or delete blog post</>;
};

export default ManageBlogPost;
