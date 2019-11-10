import { fetchNewsList, 
        fetchJobsList, 
        fetchAskList, 
        fetchUserInfo,
        fetchCommentItem} from '../api/index.js';
export default {
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
    FETCH_ASKS({commit}) {
        fetchAskList()
            .then(({data}) => {
                commit('SET_ASKS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}