import mockdata from './data.json'
import Mock from 'mockjs'

let logindata=[
{
    user:'zs',
    pwd:'123'
}
]
Mock.mock(/\/api\/data/,'get',function(option){
    let data=mockdata
    return data
})

Mock.mock(/\/api\/login/,'get',function(option){
    // let login=logindata
    return logindata
})