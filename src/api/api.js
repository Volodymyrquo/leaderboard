import * as axios from 'axios'

const instance = axios.create({
  baseURL: `http://ec2-52-43-1-93.us-west-2.compute.amazonaws.com:8091`,
  headers: {
    'user-id': '50000005-5005-5005-5005-500000000005',
  },
})

export const getLeaders = async () => {
  const { data } = await instance.get(`/v1/referrals/leaderboard`)
  return data
}
