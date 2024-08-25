import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2014/08/26/21/59/projector-428664_1280.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },

    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/04/40/accessories-1867368_1280.jpg",
      name: "Speakers",
      cost: 35,
      quantity: 0,
    },

    {
      img: "https://cdn.pixabay.com/photo/2017/08/06/15/44/microphone-2593567_1280.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },

    {
      img: "https://cdn.pixabay.com/photo/2023/12/04/14/58/table-8429665_1280.jpg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "https://cdn.pixabay.com/photo/2017/08/02/07/55/directory-2570250_1280.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item)
      {
        item.quantity++;
      }
      
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item)
      {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
