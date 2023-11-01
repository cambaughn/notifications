import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    addNotifications: (state, action) => {
      // const newNotifications = action.payload.map(notification => {
      //   const timestamp = notification.timestamp;
      //   const dateHeader = getDateHeader(timestamp);
      //   const timeago = getTimeAgo(timestamp);

      //   // Add the new properties to the notification
      //   return {
      //     ...notification,
      //     dateHeader,
      //     timeago
      //   };
      // });

      // // Update the timeago property for notifications with dateHeader of Today, as these will be the only ones that need to be updated frequently to reflect the time since the notification was created
      // // The older ones will stay static for their day
      // // Potential bug: if the user leaves the app open from one day to the next, the timeago property will not be updated for the notifications from the previous day
      // // I.E. if the user is using the app from 11 
      // state.forEach(notification => {
      //   if (notification.dateHeader === "Today") {
      //     notification.timeago = getTimeAgo(notification.timestamp);
      //   }
      // });

      // Add the new notifications to the beginning of the array
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