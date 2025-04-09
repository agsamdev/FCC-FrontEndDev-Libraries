export interface DisplayState {
    time: number;
    timeType: "Session" | "Break";
    timerRunning: boolean;
  }
  
export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds}`;
}