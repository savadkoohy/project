document.addEventListener('alpine:init', () => {
    Alpine.data('usersData',function(){
        return{
            users:[],
            pageUsers:[],
            isLoading:false,
            showAddModal:false,
            pageCount:1,
            itemCount:4,
            currentPage:1,
            getUsers(){
                this.isLoading=true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                this.users=res.data 
                this.pagination()
                }).catch(error=>{
                    console.log(error.message);
                }).finally(()=>{
                    this.isLoading=false;
                })
            },
            pagination(){
                this.pageCount = Math.ceil(this.users.length / this.itemCount)
                let  start = (this.currentPage * this.itemCount) - this.itemCount
                let end = this.currentPage * this.itemCount
                this.pageUsers = this.users.slice(start,end)
            },

            nextpage(){
                this.currentPage++
                if(this.currentPage >this.pageCount){
                    this.currentPage =this.pageCount
                }
                this.pagination()
            },
            
            prevpage(){
                this.currentPage--
                if(this.currentPage <1){
                    this.currentPage =1
                }
                this.pagination()
            },
            handelChangeItemsCount(){
                this.itemCount = e.value
                if(this.itemCount <1)this.itemCount =1
                if(this.itemCount>this.users.length)this.itemCount = this.users.length
                this.pagination()
                console.log(e.value);
            }
        }
    })
})