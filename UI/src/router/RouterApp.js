import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "../components/VideoList";
import LandingPage from "../components/LandingPage";
import VideoDetail from "../components/VideoDetail";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage>
              <VideoList />
            </LandingPage>
          }
        />

        <Route
          path="/:videoid"
          element={
            <LandingPage>
              <VideoDetail />
            </LandingPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
