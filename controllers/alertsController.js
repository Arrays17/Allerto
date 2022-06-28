import Firestore, { alertsDB } from "../database/firestore";
import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch';

const BACKGROUND_FETCH_TASK = 'background-fetch-alerts';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    const now = Date.now();
  
    console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
  
    // Be sure to return the successful result type!
    return BackgroundFetch.BackgroundFetchResult.NewData;
  });

export const registerBackgroundFetchAsync = async () => {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 60 * 10, // 10 minutes
      stopOnTerminate: false, // android only,
      startOnBoot: true, // android only
    });
}

export const unregisterBackgroundFetchAsync = async () => {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);

    console.log(status, isRegistered);

    return {
        status,
        isRegistered
    }
}