function toggleVisibility(){
    const hiddenItems = document.querySelector('.hidden');
    hiddenItems.array.forEach(item => {
        item.classLIst.toggle('hidden')
        
    });
}

window.addEventListener('scroll', function() {
    let targetText = document.getElementById('target-text');
    let who = this.document.getElementsByClassName('who');
    let term = this.document.getElementsByClassName('term');

    let search = this.document.querySelector('.search'); 

    let bounding = targetText.getBoundingClientRect();
    let searchHeight = search.getBoundingClientRect().height; 
    let whoHeight = who[0].getBoundingClientRect().height; 
  
    if (bounding.top <= 0) {
        who[0].classList.add('sticky');
        who[0].style.top = searchHeight + 20 + "px";

        term[0].classList.add('sticky');
        term[0].style.top = searchHeight + 30 + whoHeight + "px";
    } else {
        who[0].classList.remove('sticky');
        term[0].classList.remove('sticky');
    }
});

  