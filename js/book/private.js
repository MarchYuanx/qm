//isbn title author 私有化


//立即执行函数
var Book = (function(){
    //闭包
    var numOfBooks = 0;

    return function(newIsbn,newTitle,newAuthor){
        //constructor

        console.log(newIsbn,newTitle,newAuthor,numOfBooks);
        var isbn,title,author;

        var checkIsbn = function(isbn){
            if(!isbn || typeof isbn !== 'string'){
                throw new Error('isbn 有误')
            }
        }

        numOfBooks++;
        this.getNumOfBooks = function() {
          return numOfBooks;
        }

        this.setTitle = function(newTitle){
            
            title = newTitle || 'No-Title';
            console.log(`创建了${numOfBooks}本书`);
        }

        this.getTitle = function(){
            return title;
        }     
        
        


        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
    }

})();


//静态方法

Book.convertToTitleCase = function(inputString){
    return inputString.toUpperCase();
}

Book.prototype = {
    display: function(){
        console.log(`这本书书名是${this.getTitle()},作者是${this.getAuthor()}`);
    }
}




var book = new Book('123','飞鸟集','泰戈尔'); 
var book2 = new Book('124','基督山伯爵 ','大仲马'); 

book.setTitle('test1');
book2.setTitle('test2');
console.log(book.getTitle());
console.log(book2.getTitle());
