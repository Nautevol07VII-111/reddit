import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SubredditPage from "./pages/SubredditPage";
import SubmitPage from "./pages/SubmitPage";
import PostPage from "./pages/PostPage";
import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

function App() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  
  return ( 
    <div className="min-h-screen bg-background text-foreground">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="r/:subredditName" element={<SubredditPage/>}/>
        <Route path="r/:subredditName/submit" element={<SubmitPage/>}/>
        <Route path="u/:username" element={<ProfilePage />}/>
        <Route path="post/:postId" element={<PostPage />}/>
        <Route path="*" element={<Navigate to="/"  replace/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

<h1 className="text-2xl font-bold p-4">
  Reddit-Clone
</h1>
</div>
  );
}

export default App;
