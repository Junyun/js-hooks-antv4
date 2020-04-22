import {POST} from '@/utils/request';

export async function getList() {
  return POST('/test/getList');
}
export async function updateItem(params) {
  return POST('/test/updateItem', params);
}
export async function createItem(params) {
  return POST('/test/createItem', params);
}
export async function deleteItem(params) {
  return POST('/test/deleteItem', params);
}
