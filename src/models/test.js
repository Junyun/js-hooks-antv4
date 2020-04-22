import { getList, updateItem, createItem, deleteItem } from '@/services/test';

const TestModel = {
  namespace: 'test',
  state: {
    currentList: [],
  },
  effects: {
    *getList(_, { call, put }) {
      
      const response = yield call(getList);
      yield put({
        type: 'save',
        payload: {
          currentList:response.data,
        }
      });
    },

    *updateItem({ payload }, { call, put }) {
      const response = yield call(updateItem, payload);
      yield put({
        type:'getList',
        payload: {}
      })
    },

    *deleteItem({ payload }, { call, put }) {
      const response = yield call(deleteItem, payload);
      yield put({
        type:'getList',
        payload: {}
      })
    },

    *createItem({ payload }, { call, put }) {
      const response = yield call(createItem, payload);
      yield put({
        type:'getList',
        payload: {}
      })
    },
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload}
    },
    // saveCurrentUser(state, action) {
    //   return { ...state, currentUser: action.payload || {} };
    // },

    // changeNotifyCount(
    //   state = {
    //     currentUser: {},
    //   },
    //   action,
    // ) {
    //   return {
    //     ...state,
    //     currentUser: {
    //       ...state.currentUser,
    //       notifyCount: action.payload.totalCount,
    //       unreadCount: action.payload.unreadCount,
    //     },
    //   };
    // },
  },
};
export default TestModel;
