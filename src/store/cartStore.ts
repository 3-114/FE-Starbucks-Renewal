import { create } from 'zustand';

interface ItemState {
  checked: boolean;
  removed: boolean;
}

interface CartStore {
  itemStates: Record<string, ItemState>;
  isAllChecked: () => boolean;
  initialize: (
    items: { uuid: string; checked: boolean; removed: boolean }[]
  ) => void;
  setChecked: (uuid: string, checked: boolean) => void;
  setRemoved: (uuid: string, removed: boolean) => void;
  setAllRemoved: (removed: boolean) => void;
  toggleAll: (checked: boolean) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  itemStates: {},
  initialize: (items) =>
    set(() => {
      const newState: Record<string, ItemState> = {};
      items.forEach(({ uuid, checked, removed }) => {
        newState[uuid] = { checked, removed };
      });
      return { itemStates: newState };
    }),
  isAllChecked: () => Object.values(get().itemStates).every((v) => v.checked),
  setChecked: (uuid, checked) =>
    set((state) => ({
      itemStates: {
        ...state.itemStates,
        [uuid]: { ...state.itemStates[uuid], checked },
      },
    })),
  setRemoved: (uuid, removed) =>
    set((state) => ({
      itemStates: {
        ...state.itemStates,
        [uuid]: { ...state.itemStates[uuid], removed },
      },
    })),
  toggleAll: (checked: boolean) =>
    set((state) => {
      const updated = Object.fromEntries(
        Object.entries(state.itemStates).map(([uuid, item]) => [
          uuid,
          { ...item, checked },
        ])
      );
      return { itemStates: updated };
    }),
  setAllRemoved: (removed: boolean) =>
    set((state) => {
      const updated = Object.fromEntries(
        Object.entries(state.itemStates).map(([uuid, item]) => [
          uuid,
          { ...item, removed },
        ])
      );
      return { itemStates: updated };
    }),
}));
