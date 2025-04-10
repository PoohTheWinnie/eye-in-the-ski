"use client";

import { useContext, useState, useEffect } from 'react';
import AuthContext from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
import Sidebar from './components/Sidebar';

const Home = () => {
  // const { logout } = useContext(AuthContext);
  // const [workouts, setWorkouts] = useState([]);
  // const [routines, setRoutines] = useState([]);
  // const [workoutName, setWorkoutName] = useState('');
  // const [workoutDescription, setWorkoutDescription] = useState('');
  // const [routineName, setRoutineName] = useState('');
  // const [routineDescription, setRoutineDescription] = useState('');
  // const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  // useEffect(() => {
  //   const fetchWorkoutsAndRoutines = async () => {
  //     try {
  //       const token = localStorage.getItem('token'); 
  //       const [workoutsResponse, routinesResponse] = await Promise.all([
  //         axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/py/workouts/workouts`, {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }),
  //         axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/py/routines`, {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }),
  //       ]);

  //       setWorkouts(workoutsResponse.data);
  //       setRoutines(routinesResponse.data);
  //     } catch (error) {
  //       console.error('Failed to fetch data:', error);
  //     }
  //   };

  //   fetchWorkoutsAndRoutines();
  // }, []);

  // const handleCreateWorkout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/py/workouts`, {
  //       name: workoutName,
  //       description: workoutDescription,
  //     });
  //     setWorkouts([...workouts, response.data]);
  //     setWorkoutName('');
  //     setWorkoutDescription('');
  //   } catch (error) {
  //     console.error('Failed to create workout:', error);
  //   }
  // };

  // const handleCreateRoutine = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/py/routines`, {
  //       name: routineName,
  //       description: routineDescription,
  //       workouts: selectedWorkouts,
  //     });
  //     setRoutineName('');
  //     setRoutineDescription('');
  //     setSelectedWorkouts([]);
  //   } catch (error) {
  //     console.error('Failed to create routine:', error);
  //   }
  // };

  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Name</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Date of Birth</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Role</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Salary</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">John Doe</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">24/05/1995</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">Web Developer</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">$120,000</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Jane Doe</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">04/11/1980</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">Web Designer</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">$100,000</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Gary Barlow</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">24/05/1995</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">Singer</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">$20,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li
                className="block size-8 rounded-sm border-blue-600 bg-blue-600 text-center leading-8 text-white"
              >
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Home;