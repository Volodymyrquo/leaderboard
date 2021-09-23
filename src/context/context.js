import React, { useReducer, createContext } from 'react'
import contextReducer, { initialState } from './contextReducer.js'
import { getLeaders } from '../api/api.js'

export const Context = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  const setLeadersList = (leaders) =>
    dispatch({
      type: 'SET_LEADERS',
      payload: leaders,
    })

  const addLeadersToList = (leaders) =>
    dispatch({
      type: 'ADD_LEADERS',
      payload: leaders,
    })
  const setUserInfo = (userInfo) =>
    dispatch({
      type: 'SET_USER_INFO',
      payload: userInfo,
    })

  const getLeadersList = async () => {
    const { data } = await getLeaders()
    setLeadersList(data)
  }
  const getMoreLeaders = async () => {
    const { data } = await getLeaders()
    addLeadersToList(data)
  }

  const getUserInfo = async () => {
    const { informer } = await getLeaders()
    setUserInfo(informer)
  }

  const { leadersList } = state
  const { reward, rank, grow_this_month } = state.userInfo
  return (
    <Context.Provider
      value={{
        getLeadersList,
        getMoreLeaders,
        leadersList,
        getUserInfo,
        reward,
        rank,
        grow_this_month,
      }}>
      {children}
    </Context.Provider>
  )
}
