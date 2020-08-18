let initialState = {
  loading: false,

  cart: [],
  order: [],
  item: [],
  total: 0,
  error: null,
  authenticated: false,
  username: [],
  email: [],
};

function products(state = initialState, action) {
  var foundIndex = 0;
  var foundIndexCart = 0;
  var { item, cart, total } = state;
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        item: action.item,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: [],
      };
    case "ADD_TO_CART":
      foundIndex = item.findIndex((x) => x.id === action.itemToBeAdded);
      item[foundIndex]["quantity"] = 1;
      //item[foundIndex]["quantity"] = item[foundIndex]["quantity"];
      item[foundIndex]["product_id"] = item[foundIndex]["id"];
      cart.push(item[foundIndex]);
      total = total + item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total,
      };
    case "ADD":
      foundIndex = item.findIndex((x) => x.id === action.itemInc);
      item[foundIndex]["quantity"] = item[foundIndex]["quantity"] + 1;
      foundIndexCart = cart.findIndex((x) => x.id === action.itemInc);
      cart[foundIndexCart]["quantity"] = item[foundIndex]["quantity"];
      total = total + item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total,
      };
    case "SUBTRACT":
      foundIndex = item.findIndex((x) => x.id === action.itemDec);
      item[foundIndex]["quantity"] = item[foundIndex]["quantity"] - 1;
      if (item[foundIndex]["quantity"] === 0) {
        cart = cart.filter(function (obj) {
          return obj.id !== item[foundIndex].id;
        });
        delete item[foundIndex]["quantity"];
      } else {
        foundIndexCart = cart.findIndex((x) => x.id === action.itemDec);
        cart[foundIndexCart]["quantity"] = item[foundIndex]["quantity"];
      }
      total = total - item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total,
      };
    case "REMOVE_ITEM_FROM_CART":
      foundIndex = item.findIndex((x) => x.id === action.itemToRemove);

      cart = cart.filter(function (obj) {
        return obj.id !== item[foundIndex].id;
      });
      delete item[foundIndex]["quantity"];
      total = total - action.amount;

      return {
        ...state,
        item,
        cart,
        total,
      };
    // case "SIGNIN_USER":
    //   return { ...state, error: null, authenticated: false };

    case "SIGNIN_USER_SUCCESS":
      return {
        ...state,
        error: null,
        username: action.payload,
        authenticated: true,
      };
    case "Login_Error":
      return { ...state, error: action.payload };

    case "AUTH_ERROR":
      return { ...state, error: action.payload };

    case "ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.order,
      };
    case " ORDER_ERROR":
      return { ...state, error: action.payload };
    case "myorderSuccess":
      return {
        ...state,
        loading: false,
        order: action.order,
      };
    default:
      return state;
  }
}

export default products;
