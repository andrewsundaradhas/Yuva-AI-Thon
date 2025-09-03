"use client"

import * as React from "react"
import {
  ToastActionElement,
  ToasterToast,
  ToastState,
  ToastAction,
  toastVariants,
  ToastType,
  Toast
} from "@/lib/toast-types"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type Action =
  | {
      type: typeof toastVariants.ADD_TOAST
      toast: ToasterToast
    }
  | {
      type: typeof toastVariants.UPDATE_TOAST
      toast: Partial<ToasterToast>
    }
  | {
      type: typeof toastVariants.DISMISS_TOAST
      toastId?: ToasterToast['id']
    }
  | {
      type: typeof toastVariants.REMOVE_TOAST
      toastId?: ToasterToast['id']
    }

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: toastVariants.REMOVE_TOAST,
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: ToastState, action: Action): ToastState => {
  switch (action.type) {
    case toastVariants.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case toastVariants.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast?.id ? { ...t, ...action.toast } : t
        ),
      }

    case toastVariants.DISMISS_TOAST: {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== toastId)
      }
    }
    case toastVariants.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: ToastState) => void> = []

let memoryState: ToastState = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: Partial<ToasterToast>) =>
    dispatch({
      type: toastVariants.UPDATE_TOAST,
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: toastVariants.DISMISS_TOAST, toastId: id })

  // Create the toast without the open state which isn't part of our type
  const toastData: ToasterToast = {
    ...props,
    id,
    onOpenChange: (open: boolean) => {
      if (!open) dismiss()
    },
  }

  dispatch({
    type: toastVariants.ADD_TOAST,
    toast: toastData,
  })

  return {
    id: id,
    dismiss,
    update: (props: Partial<ToasterToast>) =>
      dispatch({
        type: toastVariants.UPDATE_TOAST,
        toast: { ...props, id },
      }),
  }
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: toastVariants.DISMISS_TOAST, toastId }),
  }
}

export { useToast, toast }
