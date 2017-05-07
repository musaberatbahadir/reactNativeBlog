var api = {
    getPosts(){
        var url = 'http://10.0.2.2:8000/api/posts';
        return fetch(url).then((res) => {
            return res.json();
        }).catch(function(err){
            console.log("test");
            console.log(err);
            return err;
        });
    },
    getPost(id: int64){
        var url = 'http://10.0.2.2:8000/api/post/'+id.toString();
        return fetch(url).then((res)=>{
            return res.json();
        }).catch(err =>{
            return err;
        });
    }
};

module.exports = api;
