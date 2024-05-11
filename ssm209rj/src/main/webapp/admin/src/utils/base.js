const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm209rj/",
            name: "ssm209rj",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm209rj/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序的汽车预约维修系统"
        } 
    }
}
export default base
