import uuid from "uuid";
import { DELETE_MANGA,ADD_MANGA,EDIT_MANGA } from "../action/type";

const initialState = [
  {
    id: uuid(),
    Title: "Shingeki No Kyojin V1",
    Price: "40$",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: uuid(),
    Title: "Promise neverland V1",
    Price: "25$",
    img: "https://images-na.ssl-images-amazon.com/images/I/81GIb6GMhRL.jpg"
  },
  {
    id: uuid(),
    Title: "Death Note V1",
    Price: "30$",
    img: "http://kitabal.az/img/books/995367.jpg"
  },
  {
    id: uuid(),
    Title: "Shingeki No Kyojin V1",
    Price: "40$",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: uuid(),
    Title: "Promise neverland V1",
    Price: "25$",
    img: "https://images-na.ssl-images-amazon.com/images/I/81GIb6GMhRL.jpg"
  },
  {
    id: uuid(),
    Title: "Death Note V1",
    Price: "30$",
    img: "http://kitabal.az/img/books/995367.jpg"
  },
  {
    id: uuid(),
    Title: "Shingeki No Kyojin V1",
    Price: "40$",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: uuid(),
    Title: "Promise neverland V1",
    Price: "25$",
    img: "https://images-na.ssl-images-amazon.com/images/I/81GIb6GMhRL.jpg"
  },
  {
    id: uuid(),
    Title: "Death Note V1",
    Price: "30$",
    img: "http://kitabal.az/img/books/995367.jpg"
  },
  {
    id: uuid(),
    Title: "Shingeki No Kyojin V1",
    Price: "40$",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: uuid(),
    Title: "Promise neverland V1",
    Price: "25$",
    img: "https://images-na.ssl-images-amazon.com/images/I/81GIb6GMhRL.jpg"
  },
  {
    id: uuid(),
    Title: "Death Note V1",
    Price: "30$",
    img: "http://kitabal.az/img/books/995367.jpg"
  },

];

const mangaReducers = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_MANGA:
      return state.filter(product => product.id !== action.id)
      ;
      
      case ADD_MANGA:
        return [
          ...state,
          action.newManga
        ]
        ;
        case EDIT_MANGA:
          return state.map(product =>product.id === action.editedManga.id ?action.editedManga : product)

    default:
      return state;
  }
};

export default mangaReducers;
