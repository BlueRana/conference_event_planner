    import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2014/04/05/11/27/objects-315646_960_720.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/11/14/04/42/techland-1822630_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2018/11/18/15/25/microphone-3823406_1280.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/01/08/18/30/white-board-593370_1280.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://cdn.pixabay.com/photo/2021/11/01/18/27/billboard-6761325_1280.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },


  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;