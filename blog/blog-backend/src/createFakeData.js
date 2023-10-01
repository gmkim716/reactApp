import Post from './models/post';

//== 가짜 데이터를 생성 ==//
export default function createFakeData() {
  // 0, 1, 2, ... 39로 이루어진 배열을 생성하고 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe ipsa sed animi illo beatae fugiat incidunt accusantium perferendis. Nulla ipsam aliquam soluta sapiente corporis fugiat aut assumenda beatae accusamus!',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
