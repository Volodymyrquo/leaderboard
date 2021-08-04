import React, { FC, useState, useContext } from 'react'
import Modal, { IProps } from '../../contactBook/modal'
import Close from '../assets/images/wallets/close.png'
import classNames from 'classnames'
import { Context } from '../../../../contexts/Routes/context'
import facebook from '../assets/images/contactBook/facebook.svg'
import instagram from '../assets/images/contactBook/instagram.svg'
import linkedin from '../assets/images/contactBook/in.svg'
import twitter from '../assets/images/contactBook/twitter.svg'
import pinterest from '../assets/images/contactBook/pinterest.svg'
import discord from '../assets/images/contactBook/discord.svg'
import youtube from '../assets/images/contactBook/youtube.svg'
import zoom from '../assets/images/contactBook/zoom.svg'
import tiktok from '../assets/images/contactBook/tiktok.svg'
import twinch from '../assets/images/contactBook/twinch.svg'

import telegram from '../assets/images/contactBook/telegram.svg'
import whatsapp from '../assets/images/contactBook/whatsapp.svg'
import messanger from '../assets/images/contactBook/messanger.svg'
import viber from '../assets/images/contactBook/viber.svg'
import signal from '../assets/images/contactBook/signal.svg'
import snapchat from '../assets/images/contactBook/snapchat.svg'
import meet from '../assets/images/contactBook/meet.svg'
import skype from '../assets/images/contactBook/skype.svg'
import line from '../assets/images/contactBook/line.svg'
import groupMe from '../assets/images/contactBook/group-me.svg'

import sumrachat from '../assets/images/contactBook/sumrachat.svg'

import sumrameet from '../assets/images/contactBook/sumrameet.svg'

import frame2 from '../assets/images/contactBook/frame2.svg'
import frame6 from '../assets/images/contactBook/frame6.svg'
import mark from '../assets/images/contactBook/mark.svg'

const icons = [
  {
    messenger: [
      sumrameet,
      sumrachat,
      telegram,
      whatsapp,
      messanger,
      viber,
      signal,
      snapchat,
      meet,
      skype,
      line,
      groupMe,
    ],
  },
  {
    social: [
      facebook,
      frame2,
      frame6,
      instagram,
      linkedin,
      twitter,
      pinterest,
      discord,
      youtube,
      zoom,
      tiktok,
      twinch,
    ],
  },
]

const ModalLeaderboard: FC<IProps> = ({ onClick }) => {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false)
  const { setSubPage } = useContext(Context)
  return (
    <Modal onClick={onClick}>
      <section className='cashbacks-modal'>
        <div className='cashbacks-modal__inner'>
          <div className='cashbacks-modal__block-header'>
            <h2 className='cashbacks-modal__title'>Share your Cashbacks</h2>
            <img
              className='cashbacks-modal__img-close'
              src={Close}
              alt='Close modal'
              onClick={() => {
                setSubPage('leaderboard')
              }}
            />
          </div>
          <h3 className='cashbacks-modal__subtitle'>
            {`Click to select a `}
            <strong className='cashbacks-modal__bolt-subtitle'>
              Comunication platform
            </strong>
            {` below`}
          </h3>
          <div className='cashbacks-modal__block-messenger'>
            <h3 className='cashbacks-modal__messenger-subtitle'>
              {`Share by `}
              <strong className='cashbacks-modal__bolt-subtitle'>
                Messenger
              </strong>
              <div className='cashbacks-modal__block-icon'>
                {icons[0].messenger.map((icon) => (
                  <div key={icon}>
                    <input
                      key={icon}
                      className='cashbacks-modal__input-checkbox'
                      id={icon}
                      type='checkbox'
                    />
                    <label
                      className='cashbacks-modal__td-checkbox'
                      htmlFor={icon}>
                      <img
                        className='cashbacks-modal__img-icon'
                        src={icon}
                        alt=''
                      />
                      <img
                        className={classNames('cashbacks-modal__img-mark', {
                          'cashbacks-modal__img-mark-visible': visible,
                        })}
                        src={mark}
                        alt=''
                      />
                    </label>
                  </div>
                ))}
              </div>
            </h3>
          </div>
          <div className='cashbacks-modal__subtitle'>or</div>
          <div className='cashbacks-modal__block-messenger'>
            <h3 className='cashbacks-modal__messenger-subtitle'>
              {`Share by `}
              <strong className='cashbacks-modal__bolt-subtitle'>
                Social media
              </strong>
            </h3>
            <div className='cashbacks-modal__block-icon'>
              {icons[1].social.map((icon) => (
                <div key={icon}>
                  <input
                    key={icon}
                    className='cashbacks-modal__input-checkbox'
                    id={icon}
                    type='checkbox'
                  />
                  <label
                    className='cashbacks-modal__td-checkbox'
                    htmlFor={icon}>
                    <img
                      className='cashbacks-modal__img-icon'
                      src={icon}
                      alt=''
                    />
                    <img
                      className={classNames('cashbacks-modal__img-mark', {
                        'cashbacks-modal__img-mark-visible': visible,
                      })}
                      src={mark}
                      alt=''
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className='cashbacks-modal__block-button'>
            <button
              onClick={() => {
                setSubPage('leaderboard')
              }}
              className='cashbacks-modal__button'
              type='button'>
              Continue
            </button>
          </div>
        </div>
      </section>
    </Modal>
  )
}

export default ModalLeaderboard
