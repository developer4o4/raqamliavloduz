import { uiStore } from '@/data/ui-store'
import { useStore } from '@tanstack/react-store'
import React from 'react'
import { Dialog, DialogContent } from './ui/dialog'

export default function DialogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const dialogs = useStore(uiStore, (state) => state.dialogs)

  const activeDialog = dialogs.length > 0 ? dialogs[0] : null

  const closeDialog = () => {
    uiStore.setState((s) => ({
      ...s,
      dialogs: s.dialogs.slice(1),
    }))
  }

  return (
    <>
      {children}

      {activeDialog && (
        <Dialog open onOpenChange={(open) => !open && closeDialog()}>
          <DialogContent>{activeDialog.component}</DialogContent>
        </Dialog>
      )}
    </>
  )
}
