import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedData: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 지정
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;

/* 좀 더 복잡한 스키마 예시 */
// const AuthorSchema = new Schema({
//   name: String,
//   email: String,
// });

// const BookSchema = new Schema({
//   title: String,
//   descriptions: String,
//   authors: [AuthorSchema],  // Author 스키마로 이루어진 여러 개의 객체가 들어있는 배열, 스키마 내부에 다른 스키마를 내장 시킬 수 있다
//   meta: {
//     likes: Number,
//   },
//   extra: Schema.Types.Mixed,
// });
