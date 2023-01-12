/*
  Index97
    1. n
      상품의 릴리즈 버전 수
      파라미터 인덱스로 사용 1~N
    2. x
      팔린 수 
      파라미터 배열 값   
    
  표시 화면
    1. 판매자 My 페이지
    2. 상품 카탈로그 

  예) findMarketingIndex97([9, 9, 9, 12])
      -> n : 4, x : 9,9,9,12 
      -> 값 : 4
  
*/
function findMarketingIndex97(citations) {
    var answer = 0;
  
    citations.sort((a, b) => a - b);
    let total = citations.length;
  
    for(let i = 0 ; i < total  ; i++ ) {
  
      let v = citations[i]  > (total - i) ? (total - i) : citations[i]
      
      if( v > answer ) {
        answer = v;
      }
    }
  
    return answer;
  }
  
  console.log(findMarketingIndex97([9, 9, 9, 12])) ;