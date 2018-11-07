import { ajax } from 'utils'

/*百度音乐api*/
export const musicList = ajax.fetchJSONPByGet('http://tingapi.ting.baidu.com/v1/restserver/ting')