export const initialState = {
  basket: [],
  user: null,
};

// selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// We are adding an action type to the switch case, we call it “ADD_TO_BASKET”
// We set the state, we update the basket, but here we use the spread operator (…) so that previous state is not lost. And that’s how we add items to the basket array in our state in reducer.
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        //   splice removes the element in the array
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }

      case "SET_USER":
        return {
          ...state,
          user: action.user,
        }

    default:
      return state;
  }
};

export default reducer;

// The reducer is a place where you declare all the application level states which can be used later by the application.
// In initialState, we declare the states we are going to use. In this case, basket and user. We would cover them in future sections.
// The actual reducer function takes in a state and action. The state and action is provided so that the reducer can perform operations on the state.
// We export the reducer.
