import React from "react";
import { Link } from "react-router-dom";

const SingleTask = () => {
  let id = 1;
  return (
    <>
      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">26</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Last over need 15 runs</h1>
          <span class="lws-task-badge color-scoreboard">Scoreboard</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img
              src="./images/avatars/ferdous.png"
              class="team-avater"
              alt=""
            />
            <p class="lws-task-assignedOn">Ferdous Hassan</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <Link to={`/edit-task/${id}`} class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
          <select class="lws-status">
            <option value="pending" selected>
              Pending
            </option>
            <option value="inProgress">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>

      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">28</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Disable the 'Add Flight' button</h1>
          <span class="lws-task-badge color-flight">Flight Booking</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="./images/avatars/salahuddin.png" class="team-avater" />
            <p class="lws-task-assignedOn">Md Salahuddin</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <button class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <select class="lws-status">
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="complete" selected>
              Completed
            </option>
          </select>
        </div>
      </div>

      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">26</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Add Counter</h1>
          <span class="lws-task-badge color-productCart">Product Cart</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="./images/avatars/sumit.png" class="team-avater" />
            <p class="lws-task-assignedOn">Sumit Saha</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <select class="lws-status">
            <option value="pending">Pending</option>
            <option value="inProgress selected">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>

      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">26</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Write a book</h1>
          <span class="lws-task-badge color-bookstore">Book Store</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="./images/avatars/ferdous.png" class="team-avater" />
            <p class="lws-task-assignedOn">Ferdous Hassan</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <select class="lws-status">
            <option value="pending" selected>
              Pending
            </option>
            <option value="inProgress">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>

      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">26</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Post blogs every day</h1>
          <span class="lws-task-badge color-blog">Blog Application</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="./images/avatars/sadh.png" class="team-avater" />
            <p class="lws-task-assignedOn">Sadh Hassan</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <select class="lws-status">
            <option value="pending" selected>
              Pending
            </option>
            <option value="inProgress">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>

      <div class="lws-task">
        <div class="flex items-center gap-2 text-slate">
          <h2 class="lws-date">26</h2>
          <h4 class="lws-month">March</h4>
        </div>

        <div class="lws-taskContainer">
          <h1 class="lws-task-title">Find 10 Jobs</h1>
          <span class="lws-task-badge color-jobFinder">Job Finder</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="./images/avatars/akash.png" class="team-avater" />
            <p class="lws-task-assignedOn">Akash Ahmed</p>
          </div>
          <button class="lws-delete">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button class="lws-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600 hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <select class="lws-status">
            <option value="pending" selected>
              Pending
            </option>
            <option value="inProgress">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SingleTask;
