/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import 'common-library/src/assets/scss/styles.scss'
import classNames from 'classnames'
import { people } from '../assets/helpers/people.js'
import gold from '../assets/images/leaderboard/gold.svg'
import silver from '../assets/images/leaderboard/silver.svg'
import bronze from '../assets/images/leaderboard/bronze.svg'
import star from '../assets/images/leaderboard/star.svg'
import user from '../assets/images/leaderboard/user.svg'
import users from '../assets/images/leaderboard/users.svg'
import dolar from '../assets/images/leaderboard/dolar.svg'
import LoaderInformation from './LoaderInformation.jsx'

const LeaderboardTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1)
  const [showUsers, setShowUsers] = useState(10)
  const [sortPeople, setSortCashback] = useState(
    [...people].sort((a, b) => {
      return +b.earnings - +a.earnings
    })
  )
  const [activeTab, setActiveTab] = useState('allTime')
  const indexOfLastUsers = currentPage * showUsers
  const indexOfFirstUsers = indexOfLastUsers - showUsers
  const currentUsers = sortPeople.slice(indexOfFirstUsers, indexOfLastUsers)

  const addPeople = () => {
    setShowUsers(sortPeople.length - showUsers + showUsers)
  }

  const isImg = (index) => {
    if (index + 1 === 1) {
      return gold
    }

    if (index + 1 === 2) {
      return silver
    }

    if (index + 1 === 3) {
      return bronze
    }

    if (index + 1 > 3 && index + 1 < 11) {
      return star
    }
  }

  const returnSub = (index) => {
    if (index + 1 === 1) {
      return 'st'
    } else if (index + 1 === 2) {
      return 'nd'
    } else if (index + 1 === 3) {
      return 'rd'
    } else {
      return 'th'
    }
  }

  return (
    <section className='referrals-page leaderboard-page'>
      <div className='leaderboard-page__block-table'>
        <div className='leaderboard-page__block-btn-scroll'>
          <div className='leaderboard-page__block-btn'>
            <button
              className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': activeTab === 'allTime',
              })}
              onClick={() => {
                setActiveTab('allTime')
              }}>
              All time
            </button>
            <button
              className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': activeTab === 'week',
              })}
              onClick={() => {
                setActiveTab('week')
              }}>
              This week
            </button>
            <button
              className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': activeTab === 'month',
              })}
              onClick={() => {
                setActiveTab('month')
              }}>
              This month
            </button>
            <button
              className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': activeTab === 'year',
              })}
              onClick={() => {
                setActiveTab('year')
              }}>
              This year
            </button>
          </div>
        </div>
        <div className='leaderboard-page__block-table-fixed'>
          <table className='leaderboard-page__block-table-fixed'>
            <thead>
              <tr className='leaderboard-page__table'>
                <th className='leaderboard-page__th'>Rank</th>
                <th className='leaderboard-page__th'>Username</th>
                <th className='leaderboard-page__th'>Invited users</th>
                <th className='leaderboard-page__th'>Total earnings</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index}>
                  <td className='leaderboard-page__td leaderboard-page__td-width'>
                    {index + 1}
                    <sup className='leaderboard-page__sup'>
                      {returnSub(index)}
                    </sup>
                    <img
                      className='leaderboard-page__td-img'
                      src={isImg(index)}
                      alt=''
                    />
                  </td>
                  <td className='leaderboard-page__td'>
                    <img
                      className='leaderboard-page__td-img-dolar'
                      src={user.img}
                      alt=''
                    />
                    {user.name}
                  </td>
                  <td className='leaderboard-page__td leaderboard-page__td-color'>
                    <img
                      className='leaderboard-page__th-user-icon'
                      src={users}
                      alt=''
                    />
                    {user.invited}
                  </td>
                  <td className='leaderboard-page__td'>
                    {' '}
                    <img
                      className='leaderboard-page__td-img-dolar'
                      src={user.dolar}
                      alt=''
                    />
                    {`$ ${user.earnings.toLocaleString('en-US')}`}
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr className='leaderboard-page__user'>
                <th className='leaderboard-page__th-user leaderboard-page__th-last'>
                  12 <sup className='leaderboard-page__sup'>th</sup>
                </th>
                <th className='leaderboard-page__th-user'>
                  <img
                    className='leaderboard-page__img-user'
                    src={user}
                    alt=''
                  />
                  <span className='leaderboard-page__img-user-text'>
                    Harriet Andersson
                  </span>
                </th>
                <th className='leaderboard-page__th-user'>
                  {' '}
                  <img
                    className='leaderboard-page__th-user-icon'
                    src={users}
                    alt=''
                  />{' '}
                  2,575
                </th>
                <th className='leaderboard-page__th-user'>
                  {' '}
                  <img
                    className='leaderboard-page__th-user-img-dolar'
                    src={dolar}
                    alt=''
                  />
                  $2,135.50
                </th>
              </tr>
            </thead>
            <thead>
              <tr className='leaderboard-page__table'>
                <th className='leaderboard-page__th leaderboard-page__th-last'>
                  <span className='leaderboard-page__text'>
                    {`Showing ${currentUsers.length + 1} of ${
                      people.length + 1
                    } operation`}
                    <span
                      onClick={addPeople}
                      className='leaderboard-page__arrow'>
                      View more
                    </span>
                  </span>
                </th>
                <th className='leaderboard-page__th'></th>
                <th className='leaderboard-page__th'></th>
                <th className='leaderboard-page__th'></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='leaderboard-page__width-share'>
        <LoaderInformation />
      </div>
    </section>
  )
}
export default LeaderboardTable
