import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes : [
    {
      path: '/',
      redirect: '/news',
    },
    {
        //path : url 주소
      path : '/news',
      //component : url 주소로 갔을 때 포시될 컴포넌트(페이지)
      component: NewsView,
    },
    {
      path : '/ask',
      component: AskView,
    },
    {
      path : '/jobs',
      component: JobsView,
    }
  ],
})