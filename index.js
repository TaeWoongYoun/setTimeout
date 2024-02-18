// setTimeout(function(){}, 1000)

// function 함수(){
//     console.log('안녕')
// }

// 1초마다 span태그 안에 있는 속성을 1씩 감소시켜 주세요
// 만약에 span태그 안에 있는 글자가 0이 된다면 alert박스를 hide로 삭제해주세요.


setInterval(span,1000);
function span(){
    document.getElementById('span').innerHTML -= 1 ;

    if(document.getElementById('span').innerHTML == 0){
        $('.alert').hide();
    }
}



// setInterval x초마다 이 코드를 실행해주세요
// setInterval(function(){실행할코드},ms)


//이렇게도 사용 가능
// setTimeout(함수, 1000)
// function 함수(){
//     console.log('안녕')
// }

// addEventListener(function(){})
// -> addEventListener(함수)
// function 함수(){
//     console.log('안녕')