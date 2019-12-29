import {
  // fetchNewsList,
  // fetchJobsList,
  // fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";
export default {
  //비동기 호출은 actions에서 (api호출)
  //mutation(methods와 같은)에서 데이터를 state로 이동
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       // console.log(response.data);
  //       context.commit("SET_NEWS", response.data); //mutation에 제어권 넘김
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, //- ES6 Destructuring
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // FETCH_ASKS({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASKS", data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
 //promise
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       // api(서버) 에서 불러온 데이터 mutation 호출해서
  //       //store에 저장(state에 저장)
  //       commit("SET_USER", data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  //async await
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  //promise
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommentItem(id)
  //     .then(({ data }) => {
  //       commit("SET_ITEM", data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  async FETCH_ITEM({ commit }, id) {
    try {
      const data = await fetchCommentItem(id);
      console.log(data);
      commit('SET_ITEM', data.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //       .then(response => {
  //         console.log(4)
  //           commit('SET_LIST', response.data);
  //           return response; 
  //       })
  //       .catch(error => console.log(error));
  // },
  //async
  async FETCH_LIST({ commit }, pageName) {
    try {
      console.log(4);
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
