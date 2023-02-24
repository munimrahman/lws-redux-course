const allMatchesContainer = document.getElementById("all-matches");
const addMatchButton = document.getElementById("add-match");
const resetButton = document.getElementById("reset");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_MATCH = "addNewMatch";
const RESET_SCORE = "resetScore";

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

// create reducer function
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

// create Store
const store = Redux.createStore(scoreReducer);

const render = () => {
  const state = store.getState();

  state?.matches.forEach((match, i) => {
    if (!document.getElementById(`match-div-${i}`)) {
      const matchDiv = document.createElement("div");
      matchDiv.setAttribute("id", `match-div-${i}`);

      matchDiv.innerHTML = `<div id="match-${match.id}" class="match">
      <div class="wrapper">
        <button id="delete-${match.id}" class="lws-delete">
          <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${i + 1}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm">
          <h4>Increment</h4>
          <input
            id="increment-${match.id}"
            type="number"
            name="increment"
            class="lws-increment"
          />
        </form>
        <form class="decrementForm">
          <h4>Decrement</h4>
          <input
            id="decrement-${match.id}"
            type="number"
            name="decrement"
            class="lws-decrement"
          />
        </form>
      </div>
      <div class="numbers">
        <h2 id="score-${match.id}" class="lws-singleResult"></h2>
      </div>
    </div>`;

      allMatchesContainer.append(matchDiv);

      const incrementInput = document.getElementById(`increment-${match.id}`);
      const decrementInput = document.getElementById(`decrement-${match.id}`);

      incrementInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const score = parseInt(incrementInput.value) || 0;
          store.dispatch(increment(score, match.id));
          incrementInput.value = "";
        }
      });

      decrementInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const score = parseInt(decrementInput.value) || 0;
          const currentScore = store
            .getState()
            .matches.find((m) => m.id === match.id).score;

          if (score >= currentScore) {
            store.dispatch(decrement(currentScore, match.id));
            decrementInput.value = "";
          } else {
            store.dispatch(decrement(score, match.id));
            decrementInput.value = "";
          }
        }
      });
    }

    // update total score
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
