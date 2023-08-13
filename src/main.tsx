import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error404 from './pages/error404/Error404.tsx';
import ReviewPage from './pages/review/ReviewPage.tsx';
import ExamPage from './pages/exam/ExampPage.tsx';
import CheckScorePage from './pages/check-score/CheckScore.tsx';
import Root from './components/layouts/RootLayout.tsx';
import HomePage from './pages/home/home.tsx';
import ReviewerPage from './pages/reviewer/ReviewerPage.tsx';
import { AnswerContextProvider } from './contexts/answer-context/AnswerContext.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "reviewer",
          children: [
            {
              path: ':reviewerId',
              children: [
                {
                  path: "",
                  element: <ReviewerPage />,
                },
                {
                  path: "review",
                  element: <ReviewPage />,
                },
                {
                    path: "exam",
                    children: [
                    {
                        path: "",
                        element: <ExamPage />,
                    },
                    {
                        path: "check-score",
                        element: <CheckScorePage />
                    }
                    ]
                }
                ]
            }
          ]
        },
      ]
  }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnswerContextProvider>
      <RouterProvider router={router}/>
    </AnswerContextProvider>
  </React.StrictMode>,
)
