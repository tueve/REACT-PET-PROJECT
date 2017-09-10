export default {
    increase_page_get: () => ({type:'increase_page'}),
    emotionHandle: email => ({type:'emotion',email}),
    remove: email => ({type: 'remove', email})
}