import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export type Persistor<S = any> = (
  c: StateCreator<S>,
  o: PersistOptions<S>
) => StateCreator<S>;
