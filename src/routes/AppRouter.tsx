import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewBlogPosts from '../views/BlogPosts/ViewBlogPosts';

const AppRouter: React.FC = () => (
    <Routes>
        <Route path="/" element={<ViewBlogPosts />} />

        {/* <Route exact path={StatusPage.Unauthorized} component={Unauthorized401} />
      <Route exact path={StatusPage.NotFound} component={NotFound404} />
      <Route exact path={StatusPage.Error} component={Error500} />
      <Route exact path="/home" component={HomeDomain} />
      <SecureRoute path="/configurations" component={ConfigurationsDomain} allowedScopes={['read:rom_configurations']} />
      <SecureRoute path="/route-rules" component={RouteRulesDomain} allowedScopes={['read:rom_route_rules']} />
      <Route exact path="/" render={() => <Navigate to="/home" />} />
      <Route render={() => <Navigate to={StatusPage.NotFound} />} /> */}
    </Routes>
);

export default AppRouter;
