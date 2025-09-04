"use client"

export const TOAST_LIMIT = 1
export const TOAST_REMOVE_DELAY = 1000000

export type ToastVariant = "default" | "destructive"

export interface ToasterToast {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
  onDismiss?: () => void
  action?: {
    label: string
    onClick: () => void
  }
}

export type ToastAction =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string }

export interface ToastState {
  toasts: ToasterToast[]
}

export type Toast = Omit<ToasterToast, "id">

export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
