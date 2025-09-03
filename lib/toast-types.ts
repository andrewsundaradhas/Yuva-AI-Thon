"use client"

import * as React from "react"

export type ToastActionElement = React.ReactElement<{
  altText: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}>

export type ToastVariant = "default" | "destructive" | null

export type ToastProps = {
  id: string;
  variant?: ToastVariant;
  className?: string;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
}

export type ToasterToast = ToastProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

export const toastVariants = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

export type ToastType = keyof typeof toastVariants

export type ToastAction = {
  type: ToastType;
  toast?: Partial<ToasterToast>;
  toastId?: string;
}

export interface ToastState {
  toasts: ToasterToast[]
}

export type Toast = Omit<ToasterToast, 'id'>
