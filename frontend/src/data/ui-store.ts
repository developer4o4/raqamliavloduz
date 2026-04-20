import { Store } from '@tanstack/store'

export const uiStore = new Store<UiStore>({
  isAsideOpen: true,
  dialogs: [],
})
