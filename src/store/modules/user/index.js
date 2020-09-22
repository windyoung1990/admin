import Vue from 'vue'
import router from '../../../router'
import * as constant from './constants';
import {loginUrl} from '@/api/login'
import http from '@/utils/http';
const state = () => ({
    [constant.USER_INFO]: {}
});
const getters = {
    [constant.GET_USER]: (state) => {
        return state[constant.USER_INFO]
    }
};
const actions = {
    [constant.SAVE_USER]({state, commit}, params ) {
        return http.post(loginUrl, params).then(({data}) => {
            const {status, message, userInfo} = data;
            if (status === 200) {
                commit(constant.SAVE_USER, userInfo);
                console.log(userInfo, 'action')
                router.push({
                    path: '/'
                });
            } else {
                Vue.prototype.$message({
                    message: message || '请求失败',
                    type: 'error'
                });
            }
        })
        
    }
}
const mutations = {
    [constant.SAVE_USER](state, userInfo) {
        state[constant.USER_INFO] = userInfo;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}