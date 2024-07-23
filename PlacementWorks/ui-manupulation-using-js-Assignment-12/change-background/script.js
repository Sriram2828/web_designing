let colorarr = ['#0000FF','#FF0033','#F4D03F ','#666','#FF00CC'];
colname = document.getElementById('cname');
function colorChange(){
    color = document.body.style.background = colorarr[(Math.floor(Math.random() * colorarr.length))];

    if(color == '#0000FF'){
        colname.innerHTML = 'Background color: Blue';
    }else if(color == '#FF0033'){
        colname.innerHTML = 'Background color: Red';
    }else if(color == '#F4D03F '){
        colname.innerHTML = 'Background color: Yellow';
    }else if(color == '#666'){
        colname.innerHTML= 'Background color: Grey';
    }else if(color == '#FF00CC'){
        colname.innerHTML = 'Background color: Pink'
    }
}