import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewBlogPosts from '../views/BlogPosts/ViewBlogPosts';

const AppRouter: React.FC = () => (
    <Routes>
        <Route path="/" element={<ViewBlogPosts />} />
    </Routes>
);

export default AppRouter;
