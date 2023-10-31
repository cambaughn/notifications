import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    addNotifications: (state, action) => {
      state.unshift(...action.payload)
    },
    updateNotification: (state, action) => {
      let notification = state.find(notification => notification.id === action.payload.id);
      Object.assign(notification, action.payload.update);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNotifications, updateNotification } = notificationSlice.actions;

export default notificationSlice.reducer