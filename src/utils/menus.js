import {getRequest} from "./api";
/*整理后端数据component字段转化为对象
* 将整理后的data数据存储到vuex中的routes中方便其他vue组件调用*/
export const initMenu=(router,store)=>{
  if (store.state.routes.length > 0) {
    return ;
  }
  getRequest("/system/config/menu").then(data =>{
    if (data){
      let fmtRoutes = formatRoutes(data);
      router.addRoutes(fmtRoutes);
      store.commit('initRoutes',fmtRoutes)
    }
  })
}
export const formatRoutes=(routes)=>{
  let fmRoutes = [];
  routes.forEach(router =>{
    let {
      /*批量定义，类似于let path = router.path等*/
      path,
      component,
      name,
      meta,
      iconCls,
      children
    }=router;
    if(children && children instanceof Array){
      children = formatRoutes(children);
    }
    let fmRouter = {
      path:path,
      name:name,
      iconCls:iconCls,
      meta:meta,
      children:children,
      component(resolve){
        require(['../views/' + component + '.vue'],resolve);
      }
    }
    fmRoutes.push(fmRouter)
  })
  return fmRoutes;
}
