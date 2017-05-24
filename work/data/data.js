
var app=angular.module('myapp',["ui.router"],function($provide){
    $provide.factory('alldata',function(){
        return{
            fstdata:[
                {
                    id:1,
                    name:'个人中心',
                    nickname:'账户管理'
                },
                {
                    id:2,
                    name:'系统设置',
                    nickname:'权限管理'
                }
            ],
            secdata:[
                {
                    id:11,
                    parentid:1,
                    name:'个人信息',
                    page:'grxx.html'
                },
                {
                    id:12,
                    parentid:1,
                    name:'修改密码',
                    page:'xgmm.html'
                },
                {
                    id:21,
                    parentid:2,
                    name:'功能配置',
                    page:'gnpz.html'
                },
                {
                    id:22,
                    parentid:2,
                    name:'角色管理',
                    page:'jsgl.html'
                },
                {
                    id:23,
                    parentid:2,
                    name:'用户管理',
                    page:'yhgl.html'
                }
            ],
            thirdata:[
                {
                    ID:1,
                    parentid:23,
                    loginname:'tom1',
                    name:'tom1',
                    role:'admin',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:2,
                    parentid:23,
                    loginname:'tom2',
                    name:'tom2',
                    role:'admin2',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:3,
                    parentid:23,
                    loginname:'tom3',
                    name:'tom3',
                    role:'admin',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:4,
                    parentid:23,
                    loginname:'tom4',
                    name:'tom4',
                    role:'admin2',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:5,
                    parentid:23,
                    loginname:'tom5',
                    name:'tom5',
                    role:'admin',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:6,
                    parentid:23,
                    loginname:'tom6',
                    name:'tom6',
                    role:'admin2',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:7,
                    parentid:23,
                    loginname:'tom7',
                    name:'tom7',
                    role:'admin',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'启用',
                    creattime:'2014-07-27 16:56'
                },
                {
                    ID:8,
                    parentid:23,
                    loginname:'tom8',
                    name:'tom8',
                    role:'管理员',
                    telephone:'15098950322',
                    email:'837990335@qq.com',
                    state:'禁用',
                    creattime:'2014-07-27 16:56'
                }
            ],
            fourdata:[
                {
                    ID:1,
                    role:"admin",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:2,
                    role:"admin2",
                    state:"禁用",
                    orders:2,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:3,
                    role:"admin",
                    state:"禁用",
                    orders:5,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:4,
                    role:"admin2",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:5,
                    role:"admin",
                    state:"启用",
                    orders:2,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:6,
                    role:"admin2",
                    state:"禁用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:7,
                    role:"admin",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:8,
                    role:"admin2",
                    state:"启用",
                    orders:1,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:9,
                    role:"admin",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:10,
                    role:"admin",
                    state:"启用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                },
                {
                    ID:11,
                    role:"admin2",
                    state:"禁用",
                    orders:0,
                    creattime:'2014-07-27 16:35'
                }

            ]
        }
    })
})

