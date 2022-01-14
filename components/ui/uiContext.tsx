import { User } from '@components/common/ProfileLayout'
import { createContext, Dispatch, FC, useContext, useReducer } from 'react'
import { MutatorCallback } from 'swr'

interface State {
  authView: AUTH_VIEWS
  modalView: MODAL_VIEWS
  displayModal: boolean
  usernameToUnfollow: string
  mutate: MutatorCallback<User> | undefined
}

const initialState: State = {
  authView: 'LOGIN_VIEW',
  modalView: 'POST_VIEW',
  displayModal: false,
  usernameToUnfollow: '',
  mutate: undefined
}

type Action =
  | {
      type: 'SET_AUTH_VIEW'
      view: AUTH_VIEWS
    }
  | {
      type: 'SET_MODAL_VIEW'
      view: MODAL_VIEWS
    }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | {
      type: 'SET_USERNAME_TO_UNFOLLOW'
      usernameToUnfollow: string
      mutate: MutatorCallback<User>
    }

type AUTH_VIEWS = 'LOGIN_VIEW' | 'SIGNUP_VIEW'

type MODAL_VIEWS = 'POST_VIEW' | 'POST_OPTIONS_VIEW' | 'UNFOLLOW_USER_VIEW'

interface ContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const UIContext = createContext<ContextProps | undefined>(undefined)
UIContext.displayName = 'UIContext'

const UIReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_AUTH_VIEW':
      return {
        ...state,
        authView: action.view,
      }
    case 'SET_MODAL_VIEW':
      return {
        ...state,
        modalView: action.view,
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        displayModal: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: false,
      }
    case 'SET_USERNAME_TO_UNFOLLOW':
      return {
        ...state,
        usernameToUnfollow: action.usernameToUnfollow,
        mutate: action.mutate
      }
  }
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState)

  return <UIContext.Provider value={{ state, dispatch }}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
