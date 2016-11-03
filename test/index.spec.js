function doing(...args) {
    console.log('hi');
}




describe('test', function(){
    it('work', function(done){
        doing();
        done();
    })
})
