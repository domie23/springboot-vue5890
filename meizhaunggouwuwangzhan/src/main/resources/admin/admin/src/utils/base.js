const base = {
    get() {
        return {
            url : "http://localhost:8080/meizhaunggouwuwangzhan/",
            name: "meizhaunggouwuwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/meizhaunggouwuwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "美妆购物网站"
        } 
    }
}
export default base
