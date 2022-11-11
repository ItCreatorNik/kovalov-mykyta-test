import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JobDetails } from "./components/jobs/jobDetails/JobDetails";
import { Home } from "./pages/home/Home";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/job-details/:id" element={<JobDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

