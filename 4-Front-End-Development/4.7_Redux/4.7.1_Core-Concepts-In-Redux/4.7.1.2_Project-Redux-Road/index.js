const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const roadReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + gather.payload.supplies,
        days: state.days + gather.payload.days,
      };
    }
    case "travel": {
      if (state.supplies - 20 * action.payload < 0) {
        return state;
      } else {
        // console.log(action.payload);
        return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload,
        };
      }
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - tippedWagon.payload.supplies,
        days: state.days + tippedWagon.payload.days,
      };
    }

    case "sell": {
      if (state.supplies < 20) {
        // return "Can't sell. low on supplies";
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies - sell.payload.supplies,
          cash: state.cash + sell.payload.cash,
        };
      }
    }

    case "buy": {
      if (state.cash < 15) {
        return "Can't buy. We're out of money";
      } else {
        return {
          ...state,
          supplies: state.supplies + buy.payload.supplies,
          cash: state.cash - buy.payload.cash,
        };
      }
    }

    case "theft": {
      return {
        ...state,
        cash: state.cash / 2,
      };
    }

    default: {
      return state;
    }
  }
};

const gather = {
  type: "gather",
  payload: {
    days: 1,
    supplies: 15,
  },
};

const travel = {
  type: "travel",
  payload: 1,
};

const tippedWagon = {
  type: "tippedWagon",
  payload: {
    supplies: 30,
    days: 1,
  },
};

const travelAgain = {
  type: "travel",
  payload: 3,
};

const sell = {
  type: "sell",
  payload: {
    supplies: 20,
    cash: 5,
  },
};

const buy = {
  type: "buy",
  payload: {
    supplies: 25,
    cash: 15,
  },
};

const theft = {
  type: "theft",
};

let wagon = roadReducer(undefined, {});
console.log(wagon);

wagon = roadReducer(wagon, travel);
console.log(wagon);

wagon = roadReducer(wagon, gather);
console.log(wagon);

wagon = roadReducer(wagon, tippedWagon);
console.log(wagon);

wagon = roadReducer(wagon, travelAgain);
console.log(wagon);

wagon = roadReducer(wagon, sell);
console.log(wagon);

wagon = roadReducer(wagon, buy);
console.log(wagon);

wagon = roadReducer(wagon, theft);
console.log(wagon);
