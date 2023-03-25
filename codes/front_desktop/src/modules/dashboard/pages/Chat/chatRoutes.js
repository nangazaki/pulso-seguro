export default [
  {
    path: '/chatroom/user/:id',
    name: 'chat',
    component: () => import('./views/ChatView.vue'),
    meta: { auth: true }
  },
]