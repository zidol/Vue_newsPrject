import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path: '/',
      redirect: '/news',
    },
    {
        //path : url 주소
      path : '/news',
      name : 'news',
      //component : url 주소로 갔을 때 포시될 컴포넌트(페이지)
      component: NewsView,
      beforeEnter: (to, from, next) =>{
        bus.$emit('start:spinner');
          //데이터 호출(dispatch)
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(5);
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch((error) =>{
            console.log(error);
          });
        // console.log('to : ' , to);
        // console.log('from : ' , from);
        // console.log('next : ' , next);
        // next();
      }
      // component: createListView('NewsView'),
    },
    {
      path : '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) =>{
        bus.$emit('start:spinner');
          //데이터 호출(dispatch)
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(5);
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) =>{
            console.log(error);
          });
      }
    },
    {
      path : '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView')
      beforeEnter: (to, from, next) =>{
        bus.$emit('start:spinner');
          //데이터 호출(dispatch)
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(5);
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) =>{
            console.log(error);
          });
      }
    },
    {
      path: '/user/:id',
      component : UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ],
})