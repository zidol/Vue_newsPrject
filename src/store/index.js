import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news : [],
        jobs : [],
        asks : [],
    },
    mutations : {
                //(state, data)
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        }
    },
    actions : {
        //비동기 호출은 actions에서 (api호출)
        //mutation(methods와 같은)에서 데이터를 state로 이동
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);//mutation에 제어권 넘김
                })
                .catch(error => {
                    console.log(error);
                    
                });
        },           //- ES6 Destructuring
        FETCH_JOBS({commit}) {
            fetchJobsList()
                .then(({data}) => {
                    commit('SET_JOBS', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },         
        FETCH_ASKS(context) {
            fetchAskList()
                .then(response => {
                    context.commit('SET_ASKS', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
  });
