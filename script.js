const allMatchesContainer = document.getElementById("all-matches");
const addMatchButton = document.getElementById("add-match");
const resetButton = document.getElementById("reset");

// match div
const getMatchDiv = (id, matchNo) => {
  return `<div id="match-${id}" class="match">
        <div class="wrapper">
          <button id="delete-${id}" class="lws-delete">
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match ${matchNo}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm">
            <h4>Increment</h4>
            <input
              id="increment-${id}"
              type="number"
              name="increment"
              class="lws-increment"
            />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input
              id="decrement-${id}"
              type="number"
              name="decrement"
              class="lws-decrement"
            />
          </form>
        </div>
        <div class="numbers">
          <h2 id="score-${id}" class="lws-singleResult"></h2>
        </div>
      </div>`;
};

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_MATCH = "addNewMatch";
const RESET_SCORE = "resetScore";
const DELETE_MATCH = "deleteMatch";

// action creators
const increment = (score, id) => {
  return {
    type: INCREMENT,
    payload: { score, id },
  };
};
const decrement = (score, id) => {
  return {
    type: DECREMENT,
    payload: { score, id },
  };
};

const addMatch = () => {
  return {
    type: ADD_MATCH,
    // payload: match,
  };
};

const deleteMatch = (id) => {
  return {
    type: DELETE_MATCH,
    payload: { id },
  };
};

const resetScores = () => {
  return {
    type: RESET_SCORE,
  };
};

// initial state
const initialState = {
  matches: [
    {
      id: 1,
      score: 0,
    },
  ],
};

// Create Reducer Function
const scoreReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      matches: state.matches.map((match) =>
        match.id === action.payload.id
          ? { ...match, score: match.score + action.payload.score }
          : { ...match }
      ),
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      matches: state.matches.map((match) =>
        match.id === action.payload.id
          ? { ...match, score: match.score - action.payload.score }
          : { ...match }
      ),
    };
  } else if (action.type === ADD_MATCH) {
    return {
      ...state,
      matches: [
        ...state.matches,
        {
          id: state.matches.length + 1,
          score: 0,
        },
      ],
    };
  } else if (action.type === DELETE_MATCH) {
    return {
      ...state,
      matches: state.matches.filter((match) => match.id !== action.payload.id),
    };
  } else if (action.type === RESET_SCORE) {
    return {
      ...state,
      matches: state.matches.map((match) => ({
        ...match,
        score: 0,
      })),
    };
  } else {
    return state;
  }
};

// Create Store
const store = Redux.createStore(scoreReducer);

const render = () => {
  const state = store.getState();
  const numMatches = state.matches.length;
  state?.matches.forEach((match, i) => {
    if (!document.getElementById(`match-div-${i}`)) {
      const matchDiv = document.createElement("div");
      matchDiv.setAttribute("id", `match-div-${i}`);
      matchDiv.setAttribute("class", `match-div`);
      matchDiv.innerHTML = getMatchDiv(match.id, i + 1);

      allMatchesContainer.append(matchDiv);

      const incrementInput = document.getElementById(`increment-${match.id}`);
      const decrementInput = document.getElementById(`decrement-${match.id}`);
      //   const deleteButton = document.getElementById(`delete-${match.id}`);

      incrementInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const score = parseInt(incrementInput.value);
          store.dispatch(increment(score, match.id));
          incrementInput.value = "";
        }
      });

      decrementInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const score = parseInt(decrementInput.value);
          const currentScore = store
            .getState()
            .matches.find((match) => match.id === match.id).score;

          if (score > currentScore) {
            store.dispatch(decrement(currentScore, match.id));
            decrementInput.value = "";
          } else {
            store.dispatch(decrement(score, match.id));
            decrementInput.value = "";
          }
        }
      });

      const deleteButton = document
        .getElementById(`match-${match.id}`)
        .querySelector(".lws-delete");

      deleteButton.addEventListener("click", () => {
        store.dispatch(deleteMatch(match.id));
        const deletedDiv = document.getElementById(`match-div-${i}`);
        allMatchesContainer.removeChild(deletedDiv);
      });
    }
    const score = document.getElementById(`score-${match.id}`);
    score.innerHTML = match.score;
  });
};

// update UI initially
render();

addMatchButton.addEventListener("click", () => {
  store.dispatch(addMatch());
});

resetButton.addEventListener("click", () => {
  store.dispatch(resetScores());
});

store.subscribe(render);
