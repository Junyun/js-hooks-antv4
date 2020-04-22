import {request, POST} from '@/utils/request';

export async function fakeAccountLogin(params) {
  return POST('/login/account', params);
}
export async function getFakeCaptcha(mobile) {
  return request(`/login/captcha?mobile=${mobile}`);
}
