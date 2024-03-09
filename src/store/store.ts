import { create } from "zustand";

interface AdminStore {
  isAdmin: boolean;
  setAdminTrue: () => void;
  setAdminFalse: () => void;
}

interface QuestionCounterStore {
  currentQuestion: number;
  maxCycles: number;
  incrementCurrentQuestion: () => void;
  setMaxCycles: (number: number) => void;
}
interface ClockStore {
  answerTime: number;
  waitTime: number;
}

export interface QuestionDashboardStore {
  currentScreen: "QuestionInScreen" | "QuestionScreen" | "LeaderBoard";
  setCurrentScreen: (
    screen: "QuestionInScreen" | "QuestionScreen" | "LeaderBoard"
  ) => void;
}

interface TeamInfo {
  teamNumber: number;
  setTeamNumber: (number: number) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  isAdmin: false,
  setAdminTrue: () => set((state) => ({ ...state, isAdmin: true })),
  setAdminFalse: () => set((state) => ({ ...state, isAdmin: false })),
}));

export const useClockStore = create<ClockStore>(() => ({
  answerTime: 10,
  waitTime: 5,
  resultTime: 5,
}));

export const useQuestionDashboardStore = create<QuestionDashboardStore>(
  (set) => ({
    currentScreen: "QuestionInScreen",
    setCurrentScreen: (screen) =>
      set((state) => ({ ...state, currentScreen: screen })),
  })
);

export const useQuestionCounterStore = create<QuestionCounterStore>((set) => ({
  maxCycles: 0,
  currentQuestion: 0,
  incrementCurrentQuestion: () =>
    set((state) => ({ ...state, currentQuestion: state.currentQuestion + 1 })),
  setMaxCycles: (number) => set((state) => ({ ...state, maxCycles: number })),
}));

export const useTeamStore = create<TeamInfo>((set) => ({
  teamNumber: 0,
  setTeamNumber: (number) => set((state) => ({ ...state, teamNumber: number })),
}));
