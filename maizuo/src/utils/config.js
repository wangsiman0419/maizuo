import Vue from 'vue'
import vant from 'vant'
import 'vant/lib/index.css'
import Movie from '@/components/Movie.vue'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Search } from 'vant';
Vue.use(vant)
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.component('Movie',Movie)
Vue.use(Search);
Vue.filter("format",function(val){
    if(val.length>15){
      val=val.slice(0,15)+"..."
    }
    return val
  })
Vue.use(IndexBar).use(IndexAnchor);
export default Vue