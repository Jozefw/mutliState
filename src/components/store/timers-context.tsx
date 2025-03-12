import React, {type ReactNode,createContext} from 'react'

type SingleTimer = {
    name:string;
    duration: number;
}

type TimersState={
    isRunning: boolean;
    timers:SingleTimer[]
}

type TimersContextValue = TimersState & {
    addTimer:(timerData:SingleTimer)=>void,
    startTimers:()=>void,
    stopTimers:()=>void,
}

type TimersContextProviderProps ={
    children:ReactNode,
}
// context takes a value but null is good for now 
export const TimersContext = createContext<TimersContextValue | null>(null)

const contextObject: TimersContextValue ={
    addTimer:(timerData)=>{},
    startTimers:()=>{},
    stopTimers:()=>{},
    isRunning: false,
    timers:[]
}
// TCP manages the state 
export default function TimersContextProvider({children}:TimersContextProviderProps){
    return <TimersContext.Provider value={contextObject}>{children}</TimersContext.Provider>
}